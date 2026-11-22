# ==============================================================================
# vpc.tf
# Networking module: Custom VPC, Public/Private Subnets, IGW, NAT Gateway,
# and all Route Tables for traffic routing.
#
# DATA FLOW:
#   Internet → Internet Gateway → Public Subnets → ALB/NAT Gateway
#   NAT Gateway → Private Subnets → Backend ECS Tasks (outbound only)
# ==============================================================================

# ── VPC ───────────────────────────────────────────────────────────────────────

resource "aws_vpc" "main" {
  cidr_block           = var.vpc_cidr
  enable_dns_support   = true  # Required for ECS service discovery
  enable_dns_hostnames = true  # Required for ECS service discovery

  tags = {
    Name = "${var.project_name}-${var.environment}-vpc"
  }
}

# ── Public Subnets (2x — one per AZ) ─────────────────────────────────────────
# Houses: ALB, NAT Gateway

resource "aws_subnet" "public" {
  count = length(var.public_subnet_cidrs)

  vpc_id                  = aws_vpc.main.id
  cidr_block              = var.public_subnet_cidrs[count.index]
  availability_zone       = var.availability_zones[count.index]
  # Instances launched here get a public IP (needed for ALB)
  map_public_ip_on_launch = true

  tags = {
    Name = "${var.project_name}-${var.environment}-public-subnet-${count.index + 1}"
    Tier = "Public"
  }
}

# ── Private Subnets (2x — one per AZ) ────────────────────────────────────────
# Houses: Backend ECS Fargate Tasks (no direct internet access)

resource "aws_subnet" "private" {
  count = length(var.private_subnet_cidrs)

  vpc_id            = aws_vpc.main.id
  cidr_block        = var.private_subnet_cidrs[count.index]
  availability_zone = var.availability_zones[count.index]
  # No public IP — traffic flows out ONLY via NAT Gateway

  tags = {
    Name = "${var.project_name}-${var.environment}-private-subnet-${count.index + 1}"
    Tier = "Private"
  }
}

# ── Internet Gateway ──────────────────────────────────────────────────────────
# Allows traffic between the VPC public subnets and the internet.

resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "${var.project_name}-${var.environment}-igw"
  }
}

# ── Elastic IP for NAT Gateway ────────────────────────────────────────────────
# A static public IP address assigned to the NAT Gateway.

resource "aws_eip" "nat" {
  domain = "vpc"

  # EIP depends on the IGW being attached first
  depends_on = [aws_internet_gateway.main]

  tags = {
    Name = "${var.project_name}-${var.environment}-nat-eip"
  }
}

# ── NAT Gateway (in first Public Subnet) ─────────────────────────────────────
# Allows backend tasks in private subnets to make OUTBOUND internet requests
# (e.g., pulling npm packages, calling external APIs) without being reachable
# from the internet directly.

resource "aws_nat_gateway" "main" {
  allocation_id = aws_eip.nat.id
  subnet_id     = aws_subnet.public[0].id # Placed in the first public subnet

  depends_on = [aws_internet_gateway.main]

  tags = {
    Name = "${var.project_name}-${var.environment}-nat-gw"
  }
}

# ── Route Table: Public ────────────────────────────────────────────────────────
# Directs ALL outbound public subnet traffic through the Internet Gateway.

resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main.id
  }

  tags = {
    Name = "${var.project_name}-${var.environment}-public-rt"
  }
}

# Associate both public subnets with the public route table
resource "aws_route_table_association" "public" {
  count = length(aws_subnet.public)

  subnet_id      = aws_subnet.public[count.index].id
  route_table_id = aws_route_table.public.id
}

# ── Route Table: Private ───────────────────────────────────────────────────────
# Directs ALL outbound private subnet traffic through the NAT Gateway.
# This means backend tasks CAN reach the internet, but the internet CANNOT
# reach them directly.

resource "aws_route_table" "private" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.main.id
  }

  tags = {
    Name = "${var.project_name}-${var.environment}-private-rt"
  }
}

# Associate both private subnets with the private route table
resource "aws_route_table_association" "private" {
  count = length(aws_subnet.private)

  subnet_id      = aws_subnet.private[count.index].id
  route_table_id = aws_route_table.private.id
}
