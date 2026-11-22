# ==============================================================================
# security.tf
# Firewall rules (Security Groups) following the principle of least privilege.
# Each tier only accepts traffic from its direct upstream component.
#
# TRAFFIC FLOW:
#   Internet (0.0.0.0/0) → [Port 80] → ALB SG
#   ALB SG               → [Port 80] → Frontend ECS SG
#   Frontend ECS SG      → [Port 5000] → Backend ECS SG
# ==============================================================================

# ── 1. ALB Security Group ─────────────────────────────────────────────────────
# The internet-facing entry point. Accepts HTTP traffic from anywhere.

resource "aws_security_group" "alb" {
  name        = "${var.project_name}-${var.environment}-alb-sg"
  description = "Controls inbound/outbound traffic for the Application Load Balancer"
  vpc_id      = aws_vpc.main.id

  # ── Inbound: Allow HTTP from the entire internet ──────────────────────────
  ingress {
    description = "HTTP from anywhere"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # ── Inbound: Allow HTTPS (for future SSL certificate setup) ───────────────
  ingress {
    description = "HTTPS from anywhere"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # ── Outbound: Allow all traffic (ALB forwards requests to ECS tasks) ──────
  egress {
    description = "Allow all outbound traffic to ECS tasks"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.project_name}-${var.environment}-alb-sg"
    Tier = "LoadBalancer"
  }
}

# ── 2. Frontend ECS Security Group ────────────────────────────────────────────
# Only accepts traffic from the ALB. This ensures no one can hit the
# frontend container directly — all traffic must flow through the ALB.

resource "aws_security_group" "frontend_ecs" {
  name        = "${var.project_name}-${var.environment}-frontend-ecs-sg"
  description = "Controls traffic for the Frontend ECS Fargate tasks"
  vpc_id      = aws_vpc.main.id

  # ── Inbound: Allow port 80 ONLY from the ALB Security Group ──────────────
  ingress {
    description     = "HTTP from ALB only"
    from_port       = var.frontend_port
    to_port         = var.frontend_port
    protocol        = "tcp"
    security_groups = [aws_security_group.alb.id]
  }

  # ── Outbound: Allow all (tasks need to pull images, call backend, etc.) ───
  egress {
    description = "Allow all outbound traffic"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.project_name}-${var.environment}-frontend-ecs-sg"
    Tier = "Frontend"
  }
}

# ── 3. Backend ECS Security Group ─────────────────────────────────────────────
# Only accepts traffic on port 5000 from the Frontend ECS Security Group.
# The backend is NEVER directly reachable from the internet.

resource "aws_security_group" "backend_ecs" {
  name        = "${var.project_name}-${var.environment}-backend-ecs-sg"
  description = "Controls traffic for the Backend ECS Fargate tasks"
  vpc_id      = aws_vpc.main.id

  # ── Inbound: Allow port 5000 ONLY from the Frontend ECS tasks ────────────
  ingress {
    description     = "API traffic from Frontend ECS tasks only"
    from_port       = var.backend_port
    to_port         = var.backend_port
    protocol        = "tcp"
    security_groups = [aws_security_group.frontend_ecs.id]
  }

  # ── Inbound: Also allow traffic from ALB for /api/* path-based routing ────
  ingress {
    description     = "API traffic from ALB (for /api/* path rules)"
    from_port       = var.backend_port
    to_port         = var.backend_port
    protocol        = "tcp"
    security_groups = [aws_security_group.alb.id]
  }

  # ── Outbound: Allow all (backend needs to reach MongoDB, external APIs, etc.)
  egress {
    description = "Allow all outbound traffic"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.project_name}-${var.environment}-backend-ecs-sg"
    Tier = "Backend"
  }
}
