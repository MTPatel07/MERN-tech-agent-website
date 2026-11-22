# ==============================================================================
# iam.tf
# IAM Roles and Policies for ECS using least-privilege permissions.
#
# TWO ROLES per service:
#   1. Execution Role: Used by the ECS AGENT to pull images & push logs.
#      (The AWS infrastructure role — acts before your container starts)
#   2. Task Role: Used by the running CONTAINER to call other AWS services.
#      (The application role — acts while your container is running)
# ==============================================================================

# ── Data Source: AWS-managed trust policy for ECS ─────────────────────────────
data "aws_iam_policy_document" "ecs_assume_role" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["ecs-tasks.amazonaws.com"]
    }
  }
}

# ==============================================================================
# ECS TASK EXECUTION ROLE
# This is the role the ECS agent (AWS infrastructure) uses to:
# - Pull the Docker image from GHCR/ECR
# - Push container logs to CloudWatch
# ==============================================================================

resource "aws_iam_role" "ecs_execution" {
  name               = "${var.project_name}-${var.environment}-ecs-execution-role"
  assume_role_policy = data.aws_iam_policy_document.ecs_assume_role.json
  description        = "Allows ECS tasks to pull images and write logs to CloudWatch"

  tags = {
    Name = "${var.project_name}-${var.environment}-ecs-execution-role"
  }
}

# Attach the AWS-managed policy that grants the execution role everything it needs
resource "aws_iam_role_policy_attachment" "ecs_execution_policy" {
  role       = aws_iam_role.ecs_execution.name
  # This managed policy grants: ECR pull, CloudWatch log creation, SecretsManager read
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

# Additional policy to allow pulling from GHCR via Secrets Manager
# (If you store your GHCR token in AWS Secrets Manager)
resource "aws_iam_policy" "ecs_execution_secrets" {
  name        = "${var.project_name}-${var.environment}-ecs-execution-secrets"
  description = "Allows ECS execution role to read registry credentials from Secrets Manager"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "AllowSecretsManagerRead"
        Effect = "Allow"
        Action = [
          "secretsmanager:GetSecretValue",
          "ssm:GetParameters",
          "kms:Decrypt"
        ]
        Resource = [
          "arn:aws:secretsmanager:${var.aws_region}:*:secret:${var.project_name}/*",
          "arn:aws:ssm:${var.aws_region}:*:parameter/${var.project_name}/*"
        ]
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "ecs_execution_secrets_attach" {
  role       = aws_iam_role.ecs_execution.name
  policy_arn = aws_iam_policy.ecs_execution_secrets.arn
}

# ==============================================================================
# ECS TASK ROLE (Frontend)
# This is the role the FRONTEND CONTAINER uses at runtime.
# Minimal permissions: only CloudWatch metrics.
# ==============================================================================

resource "aws_iam_role" "frontend_task" {
  name               = "${var.project_name}-${var.environment}-frontend-task-role"
  assume_role_policy = data.aws_iam_policy_document.ecs_assume_role.json
  description        = "Runtime role for the Frontend ECS container"

  tags = {
    Name = "${var.project_name}-${var.environment}-frontend-task-role"
  }
}

resource "aws_iam_policy" "frontend_task_policy" {
  name        = "${var.project_name}-${var.environment}-frontend-task-policy"
  description = "Least-privilege policy for the Frontend ECS task"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "AllowCloudWatchLogs"
        Effect = "Allow"
        Action = [
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]
        Resource = "arn:aws:logs:${var.aws_region}:*:log-group:/ecs/${var.project_name}/*"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "frontend_task_attach" {
  role       = aws_iam_role.frontend_task.name
  policy_arn = aws_iam_policy.frontend_task_policy.arn
}

# ==============================================================================
# ECS TASK ROLE (Backend)
# This is the role the BACKEND CONTAINER uses at runtime.
# Can be extended to allow S3 access, SES for emails, SNS, etc.
# ==============================================================================

resource "aws_iam_role" "backend_task" {
  name               = "${var.project_name}-${var.environment}-backend-task-role"
  assume_role_policy = data.aws_iam_policy_document.ecs_assume_role.json
  description        = "Runtime role for the Backend ECS container"

  tags = {
    Name = "${var.project_name}-${var.environment}-backend-task-role"
  }
}

resource "aws_iam_policy" "backend_task_policy" {
  name        = "${var.project_name}-${var.environment}-backend-task-policy"
  description = "Least-privilege policy for the Backend ECS task"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "AllowCloudWatchLogs"
        Effect = "Allow"
        Action = [
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]
        Resource = "arn:aws:logs:${var.aws_region}:*:log-group:/ecs/${var.project_name}/*"
      },
      # ── Extend as needed ──────────────────────────────────────────────────
      # Uncomment to allow S3 access (e.g., for file uploads):
      # {
      #   Sid    = "AllowS3Access"
      #   Effect = "Allow"
      #   Action = ["s3:GetObject", "s3:PutObject"]
      #   Resource = "arn:aws:s3:::${var.project_name}-uploads/*"
      # },
      # Uncomment to allow sending email via SES:
      # {
      #   Sid    = "AllowSES"
      #   Effect = "Allow"
      #   Action = ["ses:SendEmail", "ses:SendRawEmail"]
      #   Resource = "*"
      # }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "backend_task_attach" {
  role       = aws_iam_role.backend_task.name
  policy_arn = aws_iam_policy.backend_task_policy.arn
}
