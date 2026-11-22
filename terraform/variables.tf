# ==============================================================================
# variables.tf
# Centralized, parameterized configuration. Change values here to customize
# the entire deployment without touching any other file.
# ==============================================================================

# ── General ───────────────────────────────────────────────────────────────────

variable "project_name" {
  description = "The name of the project. Used for naming and tagging all resources."
  type        = string
  default     = "nexus-labs"
}

variable "environment" {
  description = "The deployment environment (e.g., prod, staging, dev)."
  type        = string
  default     = "prod"

  validation {
    condition     = contains(["prod", "staging", "dev"], var.environment)
    error_message = "Environment must be one of: prod, staging, dev."
  }
}

variable "aws_region" {
  description = "The AWS region to deploy all resources into."
  type        = string
  default     = "ap-south-1" # Mumbai — closest to Ahmedabad/Hyderabad, India
}

# ── Networking ────────────────────────────────────────────────────────────────

variable "vpc_cidr" {
  description = "The CIDR block for the custom VPC."
  type        = string
  default     = "10.0.0.0/16"
}

variable "public_subnet_cidrs" {
  description = "A list of CIDR blocks for the 2 public subnets (one per AZ)."
  type        = list(string)
  default     = ["10.0.1.0/24", "10.0.2.0/24"]
}

variable "private_subnet_cidrs" {
  description = "A list of CIDR blocks for the 2 private subnets (one per AZ)."
  type        = list(string)
  default     = ["10.0.11.0/24", "10.0.12.0/24"]
}

variable "availability_zones" {
  description = "Two AZs in the chosen region for high availability."
  type        = list(string)
  default     = ["ap-south-1a", "ap-south-1b"]
}

# ── Container Images ──────────────────────────────────────────────────────────
# These image tags are published by your GitHub Actions CI/CD pipeline (cicd.yml)
# to the GitHub Container Registry (GHCR).

variable "frontend_image" {
  description = "Full Docker image URI for the frontend container (from GHCR or ECR)."
  type        = string
  # This matches the tag built by your cicd.yml workflow:
  # ghcr.io/mtpatel07/dockerized_web_application-frontend:latest
  default     = "ghcr.io/mtpatel07/dockerized_web_application-frontend:latest"
}

variable "backend_image" {
  description = "Full Docker image URI for the backend container (from GHCR or ECR)."
  type        = string
  default     = "ghcr.io/mtpatel07/dockerized_web_application-backend:latest"
}

# ── ECS Compute ───────────────────────────────────────────────────────────────

variable "frontend_cpu" {
  description = "CPU units for the frontend Fargate task (256 = 0.25 vCPU)."
  type        = number
  default     = 256
}

variable "frontend_memory" {
  description = "Memory (MB) for the frontend Fargate task (512 = 0.5 GB)."
  type        = number
  default     = 512
}

variable "backend_cpu" {
  description = "CPU units for the backend Fargate task (256 = 0.25 vCPU)."
  type        = number
  default     = 256
}

variable "backend_memory" {
  description = "Memory (MB) for the backend Fargate task (512 = 0.5 GB)."
  type        = number
  default     = 512
}

variable "frontend_desired_count" {
  description = "Number of frontend Fargate tasks to run."
  type        = number
  default     = 1
}

variable "backend_desired_count" {
  description = "Number of backend Fargate tasks to run."
  type        = number
  default     = 1
}

# ── Application Ports ─────────────────────────────────────────────────────────

variable "frontend_port" {
  description = "The port the frontend Nginx container listens on."
  type        = number
  default     = 80
}

variable "backend_port" {
  description = "The port the backend Express server listens on."
  type        = number
  default     = 5000
}
