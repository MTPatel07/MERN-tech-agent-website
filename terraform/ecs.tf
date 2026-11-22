# ==============================================================================
# ecs.tf
# ECS Cluster, CloudWatch Log Groups, Task Definitions, and Fargate Services
# for both Frontend and Backend containers.
#
# COMPONENT RELATIONSHIPS:
#   ECS Cluster
#     └── Frontend Service (Public Subnets)
#     │     └── Task Definition → Frontend Container → ALB Frontend TG
#     └── Backend Service (Private Subnets)
#           └── Task Definition → Backend Container → ALB Backend TG
# ==============================================================================

# ── ECS Cluster ───────────────────────────────────────────────────────────────

resource "aws_ecs_cluster" "main" {
  name = "${var.project_name}-cluster"

  # Enable Container Insights for enhanced monitoring in CloudWatch
  setting {
    name  = "containerInsights"
    value = "enabled"
  }

  tags = {
    Name = "${var.project_name}-cluster"
  }
}

# Cluster capacity provider — Fargate (serverless, no EC2 to manage)
resource "aws_ecs_cluster_capacity_providers" "main" {
  cluster_name = aws_ecs_cluster.main.name

  capacity_providers = ["FARGATE", "FARGATE_SPOT"]

  # Use standard FARGATE as default; switch to FARGATE_SPOT for 70% cost savings
  # (Note: FARGATE_SPOT can be interrupted, not suitable for production stateful tasks)
  default_capacity_provider_strategy {
    capacity_provider = "FARGATE"
    weight            = 1
    base              = 1
  }
}

# ── CloudWatch Log Groups ─────────────────────────────────────────────────────
# Container logs (stdout/stderr) are streamed here automatically.
# Viewable in the AWS Console → CloudWatch → Log Groups

resource "aws_cloudwatch_log_group" "frontend" {
  name              = "/ecs/${var.project_name}/${var.environment}/frontend"
  retention_in_days = 30 # Keep logs for 30 days

  tags = {
    Name    = "${var.project_name}-frontend-logs"
    Service = "Frontend"
  }
}

resource "aws_cloudwatch_log_group" "backend" {
  name              = "/ecs/${var.project_name}/${var.environment}/backend"
  retention_in_days = 30

  tags = {
    Name    = "${var.project_name}-backend-logs"
    Service = "Backend"
  }
}

# ==============================================================================
# FRONTEND: Task Definition & ECS Service
# ==============================================================================

resource "aws_ecs_task_definition" "frontend" {
  family                   = "${var.project_name}-${var.environment}-frontend"
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc" # Required for Fargate
  cpu                      = var.frontend_cpu    # 256 = 0.25 vCPU
  memory                   = var.frontend_memory  # 512 = 0.5 GB

  # The execution role (for pulling images & pushing logs)
  execution_role_arn = aws_iam_role.ecs_execution.arn
  # The task role (for what the container can do at runtime)
  task_role_arn      = aws_iam_role.frontend_task.arn

  # ── Container Definition ─────────────────────────────────────────────────
  container_definitions = jsonencode([
    {
      name      = "frontend"
      image     = var.frontend_image  # e.g., ghcr.io/mtpatel07/dockerized_web_application-frontend:latest
      essential = true                # If this container stops, the task stops

      # ── Port Mappings ───────────────────────────────────────────────────
      portMappings = [
        {
          containerPort = var.frontend_port  # 80 (Nginx)
          hostPort      = var.frontend_port
          protocol      = "tcp"
        }
      ]

      # ── Environment Variables ────────────────────────────────────────────
      environment = [
        {
          name  = "NODE_ENV"
          value = var.environment
        },
        {
          name  = "VITE_API_URL"
          value = "http://${aws_lb.main.dns_name}/api"
        }
      ]

      # ── Logging: Stream stdout/stderr to CloudWatch ──────────────────────
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          "awslogs-group"         = aws_cloudwatch_log_group.frontend.name
          "awslogs-region"        = var.aws_region
          "awslogs-stream-prefix" = "frontend"
        }
      }

      # ── Health Check (container-level, in addition to ALB health check) ──
      healthCheck = {
        command     = ["CMD-SHELL", "curl -f http://localhost/ || exit 1"]
        interval    = 30
        timeout     = 5
        retries     = 3
        startPeriod = 60  # Grace period for container startup
      }
    }
  ])

  tags = {
    Name    = "${var.project_name}-${var.environment}-frontend-td"
    Service = "Frontend"
  }
}

# ── Frontend ECS Service ──────────────────────────────────────────────────────
# Manages the lifecycle of Frontend tasks: ensures the desired count is always
# running, replaces unhealthy tasks, and registers tasks with the ALB.

resource "aws_ecs_service" "frontend" {
  name            = "${var.project_name}-${var.environment}-frontend-svc"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.frontend.arn
  desired_count   = var.frontend_desired_count
  launch_type     = "FARGATE"

  # ── Deployment Configuration ─────────────────────────────────────────────
  # Rolling update: always keep 100% healthy tasks running during deploys
  deployment_minimum_healthy_percent = 100
  deployment_maximum_percent         = 200

  # ── Networking: Frontend tasks run in PUBLIC subnets ─────────────────────
  # (They need a public IP to pull images from GHCR if not using ECR)
  network_configuration {
    subnets          = aws_subnet.public[*].id
    security_groups  = [aws_security_group.frontend_ecs.id]
    assign_public_ip = true  # Required to pull images from GHCR
  }

  # ── ALB Registration ─────────────────────────────────────────────────────
  load_balancer {
    target_group_arn = aws_lb_target_group.frontend.arn
    container_name   = "frontend"
    container_port   = var.frontend_port
  }

  # Wait for the ALB listener and IAM roles to be ready before creating the service
  depends_on = [
    aws_lb_listener.http,
    aws_iam_role_policy_attachment.ecs_execution_policy,
  ]

  tags = {
    Name    = "${var.project_name}-${var.environment}-frontend-svc"
    Service = "Frontend"
  }

  lifecycle {
    # Prevent Terraform from reverting manual image tag updates (from CI/CD deploys)
    ignore_changes = [task_definition]
  }
}

# ==============================================================================
# BACKEND: Task Definition & ECS Service
# ==============================================================================

resource "aws_ecs_task_definition" "backend" {
  family                   = "${var.project_name}-${var.environment}-backend"
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = var.backend_cpu    # 256 = 0.25 vCPU
  memory                   = var.backend_memory  # 512 = 0.5 GB

  execution_role_arn = aws_iam_role.ecs_execution.arn
  task_role_arn      = aws_iam_role.backend_task.arn

  # ── Container Definition ─────────────────────────────────────────────────
  container_definitions = jsonencode([
    {
      name      = "backend"
      image     = var.backend_image  # e.g., ghcr.io/mtpatel07/dockerized_web_application-backend:latest
      essential = true

      portMappings = [
        {
          containerPort = var.backend_port  # 5000 (Express)
          hostPort      = var.backend_port
          protocol      = "tcp"
        }
      ]

      # ── Environment Variables ────────────────────────────────────────────
      environment = [
        {
          name  = "NODE_ENV"
          value = var.environment
        },
        {
          name  = "PORT"
          value = tostring(var.backend_port)
        },
        {
          name  = "CORS_ORIGIN"
          value = "http://${aws_lb.main.dns_name}"
        }
        # ── Add database connection strings here ─────────────────────────
        # For production, use AWS Secrets Manager and the 'secrets' block
        # instead of 'environment' (prevents plain-text exposure in AWS Console):
        #
        # secrets = [
        #   {
        #     name      = "MONGO_URI"
        #     valueFrom = "arn:aws:secretsmanager:${var.aws_region}:YOUR_AWS_ACCOUNT_ID:secret:${var.project_name}/mongo-uri"
        #   }
        # ]
      ]

      # ── Logging ─────────────────────────────────────────────────────────
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          "awslogs-group"         = aws_cloudwatch_log_group.backend.name
          "awslogs-region"        = var.aws_region
          "awslogs-stream-prefix" = "backend"
        }
      }

      # ── Container Health Check ───────────────────────────────────────────
      healthCheck = {
        command     = ["CMD-SHELL", "wget -qO- http://localhost:${var.backend_port}/health || exit 1"]
        interval    = 30
        timeout     = 5
        retries     = 3
        startPeriod = 60
      }
    }
  ])

  tags = {
    Name    = "${var.project_name}-${var.environment}-backend-td"
    Service = "Backend"
  }
}

# ── Backend ECS Service ───────────────────────────────────────────────────────
# Backend tasks run in PRIVATE subnets — not directly reachable from internet.
# They communicate with the outside world ONLY via the NAT Gateway.

resource "aws_ecs_service" "backend" {
  name            = "${var.project_name}-${var.environment}-backend-svc"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.backend.arn
  desired_count   = var.backend_desired_count
  launch_type     = "FARGATE"

  deployment_minimum_healthy_percent = 100
  deployment_maximum_percent         = 200

  # ── Networking: Backend tasks run in PRIVATE subnets ─────────────────────
  network_configuration {
    subnets          = aws_subnet.private[*].id
    security_groups  = [aws_security_group.backend_ecs.id]
    assign_public_ip = false  # No public IP — traffic flows via NAT Gateway
  }

  # ── ALB Registration ─────────────────────────────────────────────────────
  load_balancer {
    target_group_arn = aws_lb_target_group.backend.arn
    container_name   = "backend"
    container_port   = var.backend_port
  }

  depends_on = [
    aws_lb_listener_rule.api_routing,
    aws_iam_role_policy_attachment.ecs_execution_policy,
  ]

  tags = {
    Name    = "${var.project_name}-${var.environment}-backend-svc"
    Service = "Backend"
  }

  lifecycle {
    ignore_changes = [task_definition]
  }
}
