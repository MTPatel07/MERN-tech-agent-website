# ==============================================================================
# providers.tf
# Configures the Terraform version constraints and the AWS provider.
# ==============================================================================

terraform {
  required_version = ">= 1.7.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # ── Remote State Backend (Recommended for Teams) ──────────────────────────
  # Uncomment and configure this block to store Terraform state remotely in S3.
  # This prevents state file conflicts when working in a team.
  #
  # backend "s3" {
  #   bucket         = "nexus-labs-terraform-state"
  #   key            = "prod/terraform.tfstate"
  #   region         = "ap-south-1"
  #   encrypt        = true
  #   dynamodb_table = "nexus-labs-terraform-locks"
  # }
}

# ── AWS Provider ──────────────────────────────────────────────────────────────
provider "aws" {
  region = var.aws_region

  # Apply default tags to every AWS resource created by this configuration.
  # This is a best practice for cost allocation and resource management.
  default_tags {
    tags = {
      Project     = var.project_name
      Environment = var.environment
      ManagedBy   = "Terraform"
      Repository  = "github.com/MTPatel07/Dockerized_Web_Application"
    }
  }
}
