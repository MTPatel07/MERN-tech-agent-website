# ==============================================================================
# outputs.tf
# Prints important values after 'terraform apply' completes.
# These values are essential for accessing and configuring your deployed app.
# ==============================================================================

# ── MOST IMPORTANT: The URL to visit your live app ────────────────────────────
output "app_url" {
  description = "The public URL of your deployed application. Open this in your browser."
  value       = "http://${aws_lb.main.dns_name}"
}

output "api_url" {
  description = "The public URL for your backend API (via ALB path-based routing)."
  value       = "http://${aws_lb.main.dns_name}/api"
}

# ── Networking ────────────────────────────────────────────────────────────────

output "vpc_id" {
  description = "The ID of the custom VPC."
  value       = aws_vpc.main.id
}

output "public_subnet_ids" {
  description = "IDs of the public subnets (houses ALB and NAT Gateway)."
  value       = aws_subnet.public[*].id
}

output "private_subnet_ids" {
  description = "IDs of the private subnets (houses Backend ECS tasks)."
  value       = aws_subnet.private[*].id
}

output "nat_gateway_ip" {
  description = "The Elastic IP of the NAT Gateway (your backend's outbound public IP)."
  value       = aws_eip.nat.public_ip
}

# ── Load Balancer ─────────────────────────────────────────────────────────────

output "alb_dns_name" {
  description = "The DNS name of the Application Load Balancer (raw, without http://)."
  value       = aws_lb.main.dns_name
}

output "alb_arn" {
  description = "The ARN of the ALB (useful for setting up HTTPS certificates)."
  value       = aws_lb.main.arn
}

# ── ECS ───────────────────────────────────────────────────────────────────────

output "ecs_cluster_name" {
  description = "The name of the ECS cluster."
  value       = aws_ecs_cluster.main.name
}

output "frontend_service_name" {
  description = "The name of the Frontend ECS Service."
  value       = aws_ecs_service.frontend.name
}

output "backend_service_name" {
  description = "The name of the Backend ECS Service."
  value       = aws_ecs_service.backend.name
}

# ── CloudWatch Logging ────────────────────────────────────────────────────────

output "frontend_log_group" {
  description = "CloudWatch Log Group for Frontend container logs."
  value       = aws_cloudwatch_log_group.frontend.name
}

output "backend_log_group" {
  description = "CloudWatch Log Group for Backend container logs."
  value       = aws_cloudwatch_log_group.backend.name
}

# ── IAM ───────────────────────────────────────────────────────────────────────

output "ecs_execution_role_arn" {
  description = "ARN of the ECS Task Execution Role."
  value       = aws_iam_role.ecs_execution.arn
}

# ── Useful AWS Console Deep-Links (printed after apply) ───────────────────────

output "aws_console_ecs_link" {
  description = "Direct link to the ECS Cluster in the AWS Console."
  value       = "https://${var.aws_region}.console.aws.amazon.com/ecs/v2/clusters/${aws_ecs_cluster.main.name}/services"
}

output "aws_console_logs_frontend" {
  description = "Direct link to Frontend logs in CloudWatch."
  value       = "https://${var.aws_region}.console.aws.amazon.com/cloudwatch/home#logsV2:log-groups/log-group/${replace(aws_cloudwatch_log_group.frontend.name, "/", "$252F")}"
}

output "aws_console_logs_backend" {
  description = "Direct link to Backend logs in CloudWatch."
  value       = "https://${var.aws_region}.console.aws.amazon.com/cloudwatch/home#logsV2:log-groups/log-group/${replace(aws_cloudwatch_log_group.backend.name, "/", "$252F")}"
}
