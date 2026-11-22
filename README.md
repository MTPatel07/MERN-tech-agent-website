### Website Development, AI Automation & Digital Solutions

[![React](https://img.shields.io/badge/React-19.2.6-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Terraform](https://img.shields.io/badge/Terraform-AWS-7B42BC?style=for-the-badge&logo=terraform&logoColor=white)](https://www.terraform.io/)
[![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/features/actions)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**A modern, fully animated, production-grade tech agency website built with the MERN stack.**
Containerized with Docker · CI/CD via GitHub Actions · AWS-ready via Terraform
Based in Ahmedabad, Gujarat 🇮🇳

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Complete Project Structure](#-complete-project-structure)
- [Pages & Routes](#-pages--routes)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Development (Without Docker)](#1-local-development-without-docker)
  - [Docker — Production Mode](#2-docker--production-mode)
  - [Docker — Development Mode (Hot Reload)](#3-docker--development-mode-hot-reload)
- [Docker Files Explained](#-docker-files-explained)
- [Docker Commands Reference](#-docker-commands-reference)
- [Environment Variables](#-environment-variables)
- [CI/CD Pipeline — GitHub Actions](#-cicd-pipeline--github-actions)
- [AWS Deployment — Terraform](#-aws-deployment--terraform)
  - [Architecture Overview](#architecture-overview)
  - [Terraform Files Explained](#terraform-files-explained)
  - [How to Deploy to AWS](#how-to-deploy-to-aws)
  - [AWS Cost Estimate](#aws-cost-estimate)
- [Deployment Options](#-deployment-options)
  - [Vercel (Frontend Only)](#vercel-frontend-only)
  - [Docker on VPS](#docker-on-vps)
  - [AWS ECS Fargate via Terraform](#aws-ecs-fargate-via-terraform)
- [Security & .gitignore](#-security--gitignore)
- [Backend Server Setup](#-backend-server-setup)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**Nexus Labs** is a production-grade, full-stack tech agency website showcasing services in website development, AI automation, and digital product design.

Beyond the website itself, this repository is a **complete DevOps learning project** that demonstrates:
- ✅ **Containerization** with Docker and multi-stage builds
- ✅ **CI/CD automation** with GitHub Actions → GitHub Container Registry (GHCR)
- ✅ **Cloud infrastructure as code** with Terraform on AWS ECS Fargate
- ✅ **Security best practices** with layered security groups, IAM least-privilege, and gitignored secrets

---

## ✨ Features

| Feature | Details |
|---|---|
| ⚡ Blazing Fast | Vite-powered build with code splitting & tree-shaking |
| 🎨 Dark-Mode First | Polished UI with custom color system (`#0F172A` base) |
| 🎭 Animated | Page transitions & scroll animations via Framer Motion |
| 📱 Fully Responsive | Mobile, tablet, and desktop optimized |
| 🔍 SEO Ready | Meta tags, Open Graph, Twitter Cards |
| 📦 Dockerized | Run the entire stack with a single `docker-compose up` |
| 🔄 CI/CD Pipeline | Auto build & publish Docker images via GitHub Actions |
| ☁️ AWS Ready | Deploy to ECS Fargate with Terraform in one command |
| 🛡️ Type Safe | Full TypeScript support |
| 🔐 Security Hardened | No secrets in code, layered firewalls, least-privilege IAM |

---

## 🛠 Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| React | 19.2.6 | UI Framework |
| TypeScript | 5.9.3 | Type Safety |
| Vite | 7.3.2 | Build Tool & Dev Server |
| Tailwind CSS | 4.1.17 | Utility-First Styling |
| Framer Motion | 12.x | Animations & Page Transitions |
| React Router DOM | 7.x | Client-Side Routing |
| React Hook Form | 7.x | Form Management |
| React Hot Toast | 2.x | Toast Notifications |
| Swiper | 12.x | Touch Sliders |
| Axios | 1.x | HTTP Client |
| EmailJS | 4.x | Contact Form Email Service |
| React Helmet Async | 3.x | Dynamic SEO Meta Tags |
| React CountUp | 6.x | Animated Number Counters |

### Backend (Expandable)
| Technology | Purpose |
|---|---|
| Node.js + Express | REST API Server |
| MongoDB | NoSQL Database |
| Mongoose | MongoDB ODM |

### DevOps & Infrastructure
| Tool | Version | Purpose |
|---|---|---|
| Docker | Latest | Containerization |
| Docker Compose | v3.9 | Multi-container Orchestration |
| Nginx | 1.25 Alpine | Production Static File Server |
| GitHub Actions | — | CI/CD Automation |
| Terraform | ≥ 1.7.0 | Infrastructure as Code |
| AWS ECS Fargate | — | Serverless Container Hosting |
| AWS ALB | — | Load Balancing & Path Routing |
| AWS VPC | — | Network Isolation |
| AWS IAM | — | Identity & Access Management |
| AWS CloudWatch | — | Container Log Management |
| Vercel | — | Frontend Hosting |

---

## 📁 Complete Project Structure

```
mern-tech-agency-website/
│
├── 📄 index.html                    # App entry point (SEO meta, OG tags, fonts)
├── 📄 vite.config.ts                # Vite config (aliases, Docker host binding)
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 vercel.json                   # Vercel SPA routing rewrites
├── 📄 package.json                  # Frontend dependencies
├── 📄 .gitignore                    # Git exclusions (secrets, build output, state)
│
├── 🐳 Dockerfile                    # Production: React build → Nginx (multi-stage)
├── 🐳 Dockerfile.dev                # Development: Vite hot-reload server
├── 🐳 Dockerfile.server             # Backend: Node.js/Express server
├── 🐳 docker-compose.yml            # Production: Frontend + Backend + MongoDB
├── 🐳 docker-compose.dev.yml        # Development: Hot-reload + volume mounts
├── 📄 nginx.conf                    # Nginx: SPA routing, gzip, caching, security headers
├── 📄 .dockerignore                 # Docker build context exclusions
├── 📄 .env.server.example           # Backend env variable template (safe to commit)
│
├── 📁 .github/
│   └── 📁 workflows/
│       └── 📄 cicd.yml              # GitHub Actions CI/CD pipeline
│
├── 📁 terraform/                    # AWS Infrastructure as Code
│   ├── 📄 providers.tf              # AWS provider v5.x, version constraints
│   ├── 📄 variables.tf              # All parameterized configuration
│   ├── 📄 vpc.tf                    # VPC, Subnets, IGW, NAT Gateway, Route Tables
│   ├── 📄 security.tf               # Security Groups (layered firewall rules)
│   ├── 📄 iam.tf                    # ECS Execution + Task Roles (least-privilege)
│   ├── 📄 alb.tf                    # ALB, Target Groups, Listeners, /api/* routing
│   ├── 📄 ecs.tf                    # ECS Cluster, Task Definitions, Fargate Services
│   ├── 📄 outputs.tf                # ALB URL, console deep-links, resource IDs
│   └── 📄 terraform.tfvars.example  # Configuration template (safe to commit)
│
├── 📁 public/                       # Static assets (favicon, images)
│
├── 📁 src/
│   ├── 📄 main.tsx                  # React app entry point
│   ├── 📄 App.tsx                   # Router setup + page transitions
│   ├── 📄 index.css                 # Global styles & design tokens
│   │
│   ├── 📁 pages/                    # Route-level page components
│   │   ├── Home.jsx                 # Hero, Stats, Services, Projects, Reviews
│   │   ├── About.jsx                # Team, Story, Values
│   │   ├── Services.jsx             # Detailed service offerings
│   │   ├── Portfolio.jsx            # Project showcase gallery
│   │   ├── Contact.jsx             # Contact form + company info
│   │   ├── Internship.jsx           # Internship program + application form
│   │   ├── PrivacyPolicy.jsx        # Legal privacy policy
│   │   ├── TermsOfService.jsx       # Terms & conditions
│   │   ├── RefundPolicy.jsx         # Refund policy
│   │   └── NotFound.jsx             # Custom 404 page
│   │
│   ├── 📁 components/               # Reusable UI components
│   │   ├── Navbar.jsx               # Responsive navigation
│   │   ├── Footer.jsx               # Site footer with links
│   │   ├── HeroSection.jsx          # Homepage hero with CTA
│   │   ├── ServicesSection.jsx      # Service cards
│   │   ├── ProjectsSection.jsx      # Portfolio preview
│   │   ├── TechStack.jsx            # Tech stack display
│   │   ├── StatsSection.jsx         # Animated counters
│   │   ├── ProcessSection.jsx       # Work process timeline
│   │   ├── ReviewsSection.jsx       # Client testimonials
│   │   ├── ClientsSection.jsx       # Client logos
│   │   ├── InternshipSection.jsx    # Internship preview
│   │   ├── CTASection.jsx           # Call-to-action banner
│   │   └── ui/                      # Atomic UI elements (AnimatedText, etc.)
│   │
│   ├── 📁 hooks/                    # Custom React hooks
│   └── 📁 utils/
│       ├── constants.js             # Company info, nav links, project data
│       └── api.js                   # Axios API client (reads VITE_API_URL)
│
└── 📁 server/                       # Backend API scaffold (expandable)
    ├── 📁 config/                   # DB configuration, env setup
    └── 📁 models/                   # Mongoose data models
```

---

## 🗺 Pages & Routes

| Route | Page | Key Sections |
|---|---|---|
| `/` | Home | Hero, Services, Stats, Process Steps, Projects, Reviews, CTA |
| `/about` | About | Company story, Team, Values, Achievements |
| `/services` | Services | Detailed service offerings with features |
| `/portfolio` | Portfolio | Project showcase with metrics |
| `/contact` | Contact | Contact form, info, social links, map |
| `/internship` | Internship | Plans, Domains, Benefits, Application form |
| `/privacy` | Privacy Policy | Full legal privacy policy |
| `/terms` | Terms of Service | Terms & conditions |
| `/refund` | Refund Policy | Refund policy details |
| `*` | 404 Not Found | Custom animated not found page |

---

## 🚀 Getting Started

### Prerequisites

| Tool | Version | Install |
|---|---|---|
| Node.js | ≥ 18.x | [nodejs.org](https://nodejs.org/) |
| npm | ≥ 9.x | Included with Node.js |
| Docker Desktop *(optional)* | Latest | [docker.com](https://www.docker.com/get-docker) |
| Git | Latest | [git-scm.com](https://git-scm.com/) |
| Terraform *(for AWS deploy)* | ≥ 1.7.0 | [developer.hashicorp.com](https://developer.hashicorp.com/terraform/install) |
| AWS CLI *(for AWS deploy)* | Latest | [aws.amazon.com/cli](https://aws.amazon.com/cli/) |

---

### 1. Local Development (Without Docker)

```bash
# Clone the repository
git clone https://github.com/MTPatel07/Dockerized_Web_Application.git
cd Dockerized_Web_Application

# Install dependencies
npm install

# Start the Vite dev server
npm run dev
```

Open **http://localhost:5173** in your browser.

```bash
npm run build      # Build for production → /dist folder
npm run preview    # Preview the production build locally
```

---

### 2. Docker — Production Mode

Builds optimized images and serves the React app via Nginx.

```bash
# Build images and start all 3 containers (Frontend + Backend + MongoDB)
docker-compose up --build

# Run in background (detached mode)
docker-compose up --build -d
```

| Service | URL |
|---|---|
| 🌐 Frontend | http://localhost:3000 |
| 🔌 Backend API | http://localhost:5000 |
| 🗄️ MongoDB | mongodb://localhost:27017 |

---

### 3. Docker — Development Mode (Hot Reload)

Live code updates without rebuilding — ideal for active development.

```bash
docker-compose -f docker-compose.dev.yml up --build
```

Open **http://localhost:5173** — changes to `src/` files reflect instantly.

---

## 🐳 Docker Files Explained

| File | Stage | Description |
|---|---|---|
| `Dockerfile` | Production | **Multi-stage:** Stage 1 — `node:20-alpine` installs deps & runs `npm run build`. Stage 2 — `nginx:1.25-alpine` serves the `/dist` output. Final image is ~25MB. |
| `Dockerfile.dev` | Development | Single-stage `node:20-alpine` that runs `vite --host 0.0.0.0` for hot-reload access from Docker host. |
| `Dockerfile.server` | Backend | `node:20-alpine` with `npm ci --omit=dev` (production deps only). Includes a `HEALTHCHECK` using `wget`. |
| `docker-compose.yml` | Production | Orchestrates all 3 services. Frontend depends on Backend. Backend waits for MongoDB health check. Named volumes persist MongoDB data. |
| `docker-compose.dev.yml` | Development | Volume-mounts source code into containers for hot-reload. Uses `Dockerfile.dev` for frontend. |
| `nginx.conf` | Frontend Serve | Configures Nginx with: SPA routing (`try_files $uri /index.html`), gzip compression, 1-year asset caching, security headers (X-Frame-Options, NOSNIFF, XSS). |
| `.dockerignore` | Build Optimization | Excludes `node_modules/`, `dist/`, `.env*`, `.git/`, logs, and test files from the Docker build context to keep images small and prevent secret leaks. |
| `.env.server.example` | Documentation | Safe-to-commit template showing all required backend env variables with placeholder values. Copy to `.env.server` and fill in real values (gitignored). |

### Docker Container Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                    docker-compose.yml                        │
│                                                              │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐ │
│  │    Frontend      │  │    Backend       │  │   MongoDB   │ │
│  │  nginx:alpine    │  │  node:20-alpine  │  │  mongo:7.0  │ │
│  │  Serves /dist    │  │  Express API     │  │             │ │
│  │  Port: 3000:80   │  │  Port: 5000:5000 │  │ Port: 27017 │ │
│  └─────────────────┘  └─────────────────┘  └─────────────┘ │
│           │                    │                   │         │
│           └────────────────────┴───────────────────┘         │
│                       techagency_network                     │
│                                                              │
│  Volumes: mongo_data (persistent DB), mongo_config           │
└──────────────────────────────────────────────────────────────┘
```

---

## 🔧 Docker Commands Reference

```bash
# ── Start & Stop ─────────────────────────────────────────────
docker-compose up --build              # Start production (rebuild images)
docker-compose up --build -d           # Start in background
docker-compose down                    # Stop all containers
docker-compose down -v                 # Stop + delete MongoDB data volumes ⚠️

# ── Development ──────────────────────────────────────────────
docker-compose -f docker-compose.dev.yml up --build

# ── Monitoring ───────────────────────────────────────────────
docker-compose ps                      # Check container status
docker-compose logs -f                 # Stream all logs
docker-compose logs -f frontend        # Stream frontend logs only
docker-compose logs -f backend         # Stream backend logs only
docker-compose logs -f mongo           # Stream MongoDB logs only

# ── Debugging ────────────────────────────────────────────────
docker-compose exec frontend sh        # Shell into frontend container
docker-compose exec backend sh         # Shell into backend container
docker-compose exec mongo mongosh      # Open MongoDB shell

# ── Maintenance ──────────────────────────────────────────────
docker-compose build --no-cache frontend   # Force rebuild (no cache)
docker system prune                        # Remove all unused Docker data
docker system prune -a --volumes           # Deep clean (removes volumes too) ⚠️
```

---

## 🔐 Environment Variables

Copy the example and fill in real values:

```bash
cp .env.server.example .env.server
```

| Variable | Default | Required | Description |
|---|---|---|---|
| `NODE_ENV` | `production` | ✅ | App environment (`production` / `development`) |
| `PORT` | `5000` | ✅ | Backend server port |
| `MONGO_URI` | `mongodb://mongo:27017/techagency` | ✅ | MongoDB connection string |
| `JWT_SECRET` | *(none)* | ✅ | JWT signing secret — use a long random string |
| `CORS_ORIGIN` | `http://localhost:3000` | ✅ | Allowed frontend origin for CORS |
| `VITE_API_URL` | `http://localhost:5000/api` | ✅ (frontend) | Backend API URL for Axios client |

> ⚠️ **Never commit `.env.server` to Git.** It is listed in `.gitignore`. Only the `.env.server.example` template (with placeholder values) is committed.

---

## 🔄 CI/CD Pipeline — GitHub Actions

The pipeline is defined in [`.github/workflows/cicd.yml`](.github/workflows/cicd.yml) and runs automatically on every push or pull request to `main`.

### Pipeline Architecture

```
Push to main / Pull Request
          │
          ▼
┌─────────────────────────────────┐
│  Job 1: build-and-verify        │   Runs on every push AND pull request
│  ─────────────────────────────  │
│  1. Checkout code               │
│  2. Setup Node.js 18 (cached)   │
│  3. npm ci (exact versions)     │
│  4. npm run build (Vite + TS)   │
│  5. docker build -f Dockerfile  │   Tests frontend Docker build
│  6. docker build -f Dockerfile. │   Tests backend Docker build
│     server                      │
└──────────────┬──────────────────┘
               │ Only if all steps pass
               ▼
┌─────────────────────────────────┐
│  Job 2: publish-images          │   Runs ONLY on direct push to main
│  ─────────────────────────────  │
│  1. Checkout code               │
│  2. Login to GHCR               │   Uses $GITHUB_TOKEN (auto-generated)
│  3. Convert repo name to        │   Docker requires lowercase
│     lowercase                   │
│  4. Build & Push frontend →     │   ghcr.io/mtpatel07/...-frontend:latest
│     GHCR                        │
│  5. Build & Push backend →      │   ghcr.io/mtpatel07/...-backend:latest
│     GHCR                        │
└─────────────────────────────────┘
```

### Key Concepts

| Concept | Explanation |
|---|---|
| `npm ci` | Uses `package-lock.json` for exact, reproducible installs — faster than `npm install` in CI |
| `${{ secrets.GITHUB_TOKEN }}` | Auto-generated by GitHub on every run — no manual secret setup needed for GHCR |
| `needs: build-and-verify` | `publish-images` job will NOT run if the build job fails — broken code is never published |
| `REPO_LC` env variable | Converts `MTPatel07` → `mtpatel07` because Docker image names must be lowercase |

### Published Image URLs (after first successful run)

```
ghcr.io/mtpatel07/dockerized_web_application-frontend:latest
ghcr.io/mtpatel07/dockerized_web_application-backend:latest
```

View your published packages at:
`https://github.com/MTPatel07?tab=packages`

---

## ☁️ AWS Deployment — Terraform

The `terraform/` folder contains complete Infrastructure as Code (IaC) to deploy the entire application on AWS using serverless ECS Fargate containers.

### Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                     AWS ap-south-1 (Mumbai)                         │
│                                                                     │
│  ┌──────────────────────── VPC: 10.0.0.0/16 ─────────────────────┐ │
│  │                                                                │ │
│  │  ┌─── PUBLIC SUBNETS (10.0.1.0/24, 10.0.2.0/24) ──────────┐  │ │
│  │  │                                                          │  │ │
│  │  │   Internet → [ALB :80] → /* → Frontend ECS Tasks        │  │ │
│  │  │                       → /api/* → Backend ECS Tasks      │  │ │
│  │  │   [NAT Gateway] → Private Subnets (outbound only)       │  │ │
│  │  └──────────────────────────────────────────────────────────┘  │ │
│  │                                                                │ │
│  │  ┌─── PRIVATE SUBNETS (10.0.11.0/24, 10.0.12.0/24) ───────┐  │ │
│  │  │   Backend ECS Tasks (no public IP, outbound via NAT)    │  │ │
│  │  └──────────────────────────────────────────────────────────┘  │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  CloudWatch Logs: /ecs/nexus-labs/prod/frontend                     │
│                   /ecs/nexus-labs/prod/backend                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Security Group Firewall Rules

```
Internet (0.0.0.0/0)  :80
         ↓
  [ALB Security Group]             Allows :80 & :443 from 0.0.0.0/0
         ↓
  [Frontend ECS SG]                Allows :80 ONLY from ALB SG
         ↓
  [Backend ECS SG]                 Allows :5000 ONLY from Frontend SG + ALB SG
```

### Terraform Files Explained

| File | What It Creates |
|---|---|
| `providers.tf` | AWS provider `~> 5.0`, Terraform `>= 1.7.0` version lock. Optional S3 backend for team state storage. |
| `variables.tf` | All configuration in one place: region (`ap-south-1`), CIDR blocks, image URLs, CPU/memory, ports. Includes validation (env must be prod/staging/dev). |
| `vpc.tf` | Custom VPC (`10.0.0.0/16`), 2 public subnets, 2 private subnets across 2 AZs, Internet Gateway, Elastic IP, NAT Gateway, and route tables for each tier. |
| `security.tf` | 3 security groups: ALB (open to internet on :80/:443), Frontend ECS (only from ALB), Backend ECS (only from Frontend SG + ALB for /api/* routing). |
| `iam.tf` | ECS Execution Role (pulls images, writes logs), Frontend Task Role (CloudWatch only), Backend Task Role (CloudWatch + extensible for S3/SES). Uses `AmazonECSTaskExecutionRolePolicy` managed policy. |
| `alb.tf` | Internet-facing ALB across both public subnets. Frontend target group (health: `GET /`, port 80). Backend target group (health: `GET /health`, port 5000). HTTP listener on :80 with `/api/*` path-based routing rule at priority 100. |
| `ecs.tf` | ECS Cluster `nexus-labs-cluster` with Container Insights. CloudWatch log groups (30-day retention). Frontend task definition (0.25 vCPU, 0.5GB, public subnets, GHCR image). Backend task definition (private subnets, no public IP). Both services with rolling deployment (100% min healthy). |
| `outputs.tf` | Prints `app_url`, `api_url`, VPC IDs, subnet IDs, NAT IP, ALB ARN, ECS service names, CloudWatch log group names, and direct AWS Console deep-links. |
| `terraform.tfvars.example` | Safe-to-commit template. Copy to `terraform.tfvars` (gitignored) and fill values. |

### IAM Role Separation

| Role | Used By | Permissions |
|---|---|---|
| `ecs-execution-role` | AWS ECS Agent (infrastructure) | Pull image from GHCR/ECR, push logs to CloudWatch, read from Secrets Manager |
| `frontend-task-role` | Frontend container at runtime | Write to CloudWatch logs |
| `backend-task-role` | Backend container at runtime | Write to CloudWatch logs *(extend for S3, SES, SNS as needed)* |

### How to Deploy to AWS

```bash
# Step 1: Configure AWS credentials
aws configure
# Enter: Access Key ID, Secret Access Key, Region (ap-south-1), Output (json)

# Step 2: Navigate to terraform folder
cd terraform/

# Step 3: Copy and configure your variables
cp terraform.tfvars.example terraform.tfvars
# Edit terraform.tfvars with your image URLs, region, etc.

# Step 4: Initialize Terraform (downloads AWS provider ~200MB)
terraform init

# Step 5: Preview what will be created (NO changes made)
terraform plan

# Step 6: Deploy everything (~10 minutes)
terraform apply

# After apply, you will see:
# app_url = "http://nexus-labs-prod-alb-XXXXXXXX.ap-south-1.elb.amazonaws.com"
# api_url = "http://nexus-labs-prod-alb-XXXXXXXX.ap-south-1.elb.amazonaws.com/api"

# Step 7: Destroy when no longer needed (avoid AWS charges)
terraform destroy
```

### Triggering ECS Redeployment from CI/CD

Add this to `.github/workflows/cicd.yml` after the `publish-images` job to auto-redeploy:

```yaml
- name: Redeploy ECS Services
  run: |
    aws ecs update-service --cluster nexus-labs-cluster \
      --service nexus-labs-prod-frontend-svc --force-new-deployment
    aws ecs update-service --cluster nexus-labs-cluster \
      --service nexus-labs-prod-backend-svc --force-new-deployment
  env:
    AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
    AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    AWS_DEFAULT_REGION: ap-south-1
```

### AWS Cost Estimate (ap-south-1 Mumbai)

| Resource | Monthly Cost (approx.) |
|---|---|
| ECS Fargate — 2x (0.25 vCPU, 0.5GB) | ~$5–10 |
| Application Load Balancer | ~$16 |
| NAT Gateway | ~$32 ⚠️ biggest cost |
| CloudWatch Logs | ~$0.50 |
| Data Transfer | ~$1–5 |
| **Total Estimate** | **~$55–65/month** |

> 💡 **Cost tip:** Remove the NAT Gateway and run backend in public subnets (`assign_public_ip = true`) for dev/staging to save ~$32/month.

---

## 🚢 Deployment Options

### Vercel (Frontend Only)

Pre-configured via `vercel.json`:
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

1. Push code to GitHub
2. Import at [vercel.com](https://vercel.com/)
3. Framework preset: **Vite**
4. Click Deploy ✅

### Docker on VPS

Self-host on DigitalOcean, AWS EC2, Hetzner, etc.:

```bash
ssh user@your-server-ip
curl -fsSL https://get.docker.com | sh
git clone https://github.com/MTPatel07/Dockerized_Web_Application.git
cd Dockerized_Web_Application
cp .env.server.example .env.server
nano .env.server          # Fill in real values
docker-compose up --build -d
# App live at http://your-server-ip:3000
```

### AWS ECS Fargate via Terraform

See the [How to Deploy to AWS](#how-to-deploy-to-aws) section above.

---

## 🔒 Security & .gitignore

### What Is Gitignored

The [`.gitignore`](.gitignore) file prevents the following from ever being committed:

| Pattern | Reason |
|---|---|
| `node_modules/` | Auto-installed, huge (100MB+), not needed in repo |
| `dist/` / `build/` | Build output, auto-generated |
| `.env` / `.env.server` / `.env.*.local` | Real secrets (API keys, DB passwords, JWT secrets) |
| `terraform/*.tfvars` | May contain AWS regions, account details, image tags |
| `terraform/terraform.tfstate*` | Contains ALL deployed resource details — extremely sensitive |
| `terraform/.terraform/` | Downloaded provider binaries (~200MB) |
| `terraform/crash.log` | May contain sensitive debug info |
| `*.pem` / `*.key` / `*.crt` | SSL certificates and private keys |
| `docker-compose.override.yml` | Machine-specific Docker overrides |
| `.vscode/settings.json` | Personal IDE settings |

### What Is Safe to Commit

| File | Why It's Safe |
|---|---|
| `.env.server.example` | Contains only placeholder values, no real secrets |
| `terraform.tfvars.example` | Contains only placeholder values |
| `terraform/providers.tf` | Contains no secrets, only version constraints |
| All `*.tf` files | Variables use `var.*` references, no hardcoded secrets |
| `docker-compose.yml` | No real passwords — uses `${MONGO_ROOT_PASS}` env reference |
| `.github/workflows/cicd.yml` | Uses `${{ secrets.GITHUB_TOKEN }}` — never a real token |

### Security Audit Results

A full security scan was performed on this project:

| Check | Result |
|---|---|
| Hardcoded API keys in source | ✅ None found |
| Real AWS Account ID in code | ✅ None found |
| Real passwords in committed files | ✅ None found (example only) |
| JWT secrets in code | ✅ None — uses env variable |
| GHCR token in code | ✅ None — uses `$GITHUB_TOKEN` |
| `.env` files committed | ✅ Gitignored |
| Terraform state committed | ✅ Gitignored |
| `node_modules` committed | ✅ Gitignored |

---

## 🔌 Backend Server Setup

The `server/` folder contains the scaffold (models, config). To activate the backend container, create `server/index.js`:

```js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app  = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/techagency';

app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json());

// ✅ Required: Health check for Docker & ALB health checks
app.get('/health', (req, res) => res.json({ status: 'ok', timestamp: new Date() }));

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
```

> The `/health` endpoint is **required** for both the Docker `HEALTHCHECK` and the AWS ALB health check to work correctly.

---

## 🤝 Contributing

1. **Fork** this repository
2. **Create** a feature branch: `git checkout -b feature/your-feature`
3. **Commit** with convention: `git commit -m 'feat: add some feature'`
4. **Push**: `git push origin feature/your-feature`
5. **Open** a Pull Request → CI pipeline runs automatically

### Commit Convention

| Prefix | Use For |
|---|---|
| `feat:` | New features |
| `fix:` | Bug fixes |
| `docs:` | Documentation |
| `style:` | Formatting only |
| `refactor:` | Code restructuring |
| `ci:` | CI/CD pipeline changes |
| `infra:` | Terraform/infrastructure changes |
| `chore:` | Dependencies, build config |

---

## 📄 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

---

<div align="center">

**Built with ❤️ by the Nexus Labs Team**
📍 Ahmedabad, Gujarat, India

⭐ If this project helped you, please give it a star!

</div>
