# ==============================================================================
# alb.tf
# Application Load Balancer, Target Groups, Listeners, and Listener Rules.
#
# DATA FLOW:
#   User Browser
#     → ALB DNS (public internet)
#       → Listener (Port 80)
#         → Rule 1: Path "/api/*" → Backend Target Group → Backend ECS Tasks
#         → Default: All other traffic → Frontend Target Group → Frontend ECS Tasks
# ==============================================================================

# ── Application Load Balancer ─────────────────────────────────────────────────

resource "aws_lb" "main" {
  name               = "${var.project_name}-${var.environment}-alb"
  internal           = false        # Internet-facing (not internal)
  load_balancer_type = "application"

  # ALB spans BOTH public subnets for multi-AZ high availability
  subnets            = aws_subnet.public[*].id
  security_groups    = [aws_security_group.alb.id]

  # Enable deletion protection in production to prevent accidental teardown
  enable_deletion_protection = var.environment == "prod" ? true : false

  # ── Access Logs (recommended for production auditing) ─────────────────────
  # Uncomment to enable access logs to S3:
  # access_logs {
  #   bucket  = aws_s3_bucket.alb_logs.id
  #   prefix  = "${var.project_name}-alb"
  #   enabled = true
  # }

  tags = {
    Name = "${var.project_name}-${var.environment}-alb"
  }
}

# ── Target Group: Frontend ────────────────────────────────────────────────────
# The ALB forwards default traffic here. Fargate tasks register themselves
# automatically when the ECS Service starts.

resource "aws_lb_target_group" "frontend" {
  name        = "${var.project_name}-${var.environment}-fe-tg"
  port        = var.frontend_port
  protocol    = "HTTP"
  vpc_id      = aws_vpc.main.id
  target_type = "ip" # REQUIRED for Fargate (not "instance")

  # ── Health Check ─────────────────────────────────────────────────────────
  # The ALB pings this path to confirm the task is alive before sending traffic.
  health_check {
    enabled             = true
    path                = "/"           # Nginx serves index.html at root
    protocol            = "HTTP"
    port                = "traffic-port"
    healthy_threshold   = 2             # 2 consecutive successes = healthy
    unhealthy_threshold = 3             # 3 consecutive failures = unhealthy
    timeout             = 5             # Seconds to wait for a response
    interval            = 30            # Seconds between health checks
    matcher             = "200-299"     # HTTP 2xx = success
  }

  # Graceful shutdown: allow in-flight requests to complete before deregistering
  deregistration_delay = 30

  tags = {
    Name = "${var.project_name}-${var.environment}-frontend-tg"
    Tier = "Frontend"
  }
}

# ── Target Group: Backend ─────────────────────────────────────────────────────
# ALB forwards /api/* traffic here.

resource "aws_lb_target_group" "backend" {
  name        = "${var.project_name}-${var.environment}-be-tg"
  port        = var.backend_port
  protocol    = "HTTP"
  vpc_id      = aws_vpc.main.id
  target_type = "ip" # REQUIRED for Fargate

  # ── Health Check ─────────────────────────────────────────────────────────
  # Matches the /health endpoint in your Express server (server/index.js)
  health_check {
    enabled             = true
    path                = "/health"     # Your Express GET /health endpoint
    protocol            = "HTTP"
    port                = "traffic-port"
    healthy_threshold   = 2
    unhealthy_threshold = 3
    timeout             = 5
    interval            = 30
    matcher             = "200-299"
  }

  deregistration_delay = 30

  tags = {
    Name = "${var.project_name}-${var.environment}-backend-tg"
    Tier = "Backend"
  }
}

# ── HTTP Listener (Port 80) ───────────────────────────────────────────────────
# The main listener on port 80. Default action sends traffic to the frontend.
# Specific path rules (defined below) override this default.

resource "aws_lb_listener" "http" {
  load_balancer_arn = aws_lb.main.arn
  port              = "80"
  protocol          = "HTTP"

  # ── Default Action: Forward all unmatched traffic to the Frontend ─────────
  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.frontend.arn
  }

  tags = {
    Name = "${var.project_name}-${var.environment}-http-listener"
  }
}

# ── Listener Rule: /api/* → Backend ──────────────────────────────────────────
# Any request starting with /api/ is routed to the backend target group.
# This rule takes PRIORITY over the default action (priority = 100 is checked first).
# Example: http://your-alb-dns.com/api/users → Backend ECS Task

resource "aws_lb_listener_rule" "api_routing" {
  listener_arn = aws_lb_listener.http.arn
  priority     = 100 # Lower number = higher priority (evaluated before default)

  # ── Condition: Match any path starting with /api/ ────────────────────────
  condition {
    path_pattern {
      values = ["/api/*"]
    }
  }

  # ── Action: Route to the Backend Target Group ────────────────────────────
  action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.backend.arn
  }

  tags = {
    Name = "${var.project_name}-${var.environment}-api-routing-rule"
  }
}

# ── (Optional) HTTPS Listener ─────────────────────────────────────────────────
# Uncomment this block after you've issued an ACM certificate for your domain.
#
# resource "aws_lb_listener" "https" {
#   load_balancer_arn = aws_lb.main.arn
#   port              = "443"
#   protocol          = "HTTPS"
#   ssl_policy        = "ELBSecurityPolicy-TLS13-1-2-2021-06" # Latest TLS 1.3 policy
#   certificate_arn   = "arn:aws:acm:ap-south-1:YOUR_ACCOUNT_ID:certificate/YOUR_CERT_ID"
#
#   default_action {
#     type             = "forward"
#     target_group_arn = aws_lb_target_group.frontend.arn
#   }
# }
