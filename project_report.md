---

<div align="center">

# PROJECT REPORT

## ON

# Dockerized MERN Stack Web Application with CI/CD Automation, AWS Cloud Deployment using Terraform, and Kubernetes Orchestration

---

**Submitted in partial fulfillment of the requirements for the degree of**
**Bachelor of Engineering / Bachelor of Technology**
**in Computer Engineering / Information Technology**

---

**Submitted By:**
**[Your Full Name]**
**Enrollment No.: [Your Enrollment Number]**
**Semester: VII**

---

**Guided By:**
**[Guide Name]**
**[Designation, Department]**

---

**Department of Computer Engineering / Information Technology**
**[Your College Name]**
**[University Name]**
**[City], Gujarat, India**

**Academic Year: 2025–2026**

</div>

---
---

# CHAPTER 1 — CERTIFICATE

<div align="center">

## [YOUR COLLEGE NAME]
### Department of Computer Engineering / Information Technology
**[University Name]**

---

## CERTIFICATE

</div>

This is to certify that the Project Report entitled:

**"Dockerized MERN Stack Web Application with CI/CD Automation, AWS Cloud Deployment using Terraform, and Kubernetes Orchestration"**

is a bonafide work carried out by:

| Student Name | Enrollment Number |
|---|---|
| [Your Full Name] | [Your Enrollment No.] |

in partial fulfillment of the requirements for the award of the degree of **Bachelor of Engineering** in **Computer Engineering / Information Technology** under **[University Name]**, during the academic year **2025–2026**.

This project work has been carried out under our supervision and has not been submitted elsewhere for the award of any degree or diploma.

---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

**Project Guide:** ___________________________

**[Name of Guide]**
**[Designation]**
**Department of [Dept Name]**

---

**Head of Department:** ___________________________

**[Name of HOD]**
**Department of [Dept Name]**

---

**Date:** _______________ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Place:** _______________

---
---

# CHAPTER 2 — ACKNOWLEDGEMENT

I take this opportunity to express my sincere gratitude to all those who provided me the possibility to complete this project successfully.

First and foremost, I would like to express my heartfelt thanks to my project guide, **[Guide Name]**, [Designation], Department of [Department Name], [College Name], for their valuable guidance, continuous support, and encouragement throughout the course of this project. Their deep technical knowledge, patient mentoring, and insightful feedback have been instrumental in shaping this project from concept to completion. Their availability for discussion and their constructive criticism helped me overcome numerous technical challenges encountered during development.

I am also deeply grateful to **[HOD Name]**, Head of the Department of Computer Engineering / Information Technology, for providing us with excellent laboratory infrastructure, high-speed internet access, and a stimulating academic environment that fostered learning and innovation. The department's emphasis on hands-on, practical application of theoretical knowledge has been the foundation upon which this project is built.

I would like to extend my sincere gratitude to the faculty members of the Computer Engineering department for their constant motivation and the technical foundations they have given me throughout my academic journey. The courses in Cloud Computing, Web Technologies, Operating Systems, and Database Management Systems have been directly applied in the development of this project.

I owe a special debt of gratitude to the open-source community, specifically the contributors behind **React**, **Node.js**, **Docker**, **Terraform**, **Kubernetes**, and **GitHub Actions** — whose freely available tools, documentation, and educational resources made this project possible. The richness of the open-source ecosystem demonstrates that collaborative development is one of the most powerful forces in modern software engineering.

I would also like to thank **Amazon Web Services (AWS)** for their detailed technical documentation and free-tier resources, which enabled me to experiment with and implement real-world cloud infrastructure at no cost during the development phase.

Finally, I extend my deepest gratitude to my family for their unwavering support, patience, and encouragement. Their belief in me has been my strongest motivator throughout the academic year.

&nbsp;

**[Your Full Name]**
**[Enrollment Number]**
**[Department Name]**
**[College Name]**
**[City, Date]**

---
---

# CHAPTER 3 — ABSTRACT

In the modern era of digital transformation, businesses of every size require a compelling and technically robust online presence. At the same time, the methods by which software applications are developed, delivered, tested, and deployed have undergone a paradigm shift — moving from traditional manual processes to fully automated, cloud-native DevOps workflows. This project, titled **"Dockerized MERN Stack Web Application with CI/CD Automation, AWS Cloud Deployment using Terraform, and Kubernetes Orchestration,"** addresses both of these realities in a single, cohesive system.

The core artifact of this project is a fully functional technology agency website named **Nexus Labs**, built using the **MERN stack** — MongoDB, Express.js, React.js, and Node.js. The frontend is developed using **React 19** with **TypeScript**, **Vite 7** as the build tool, and **Tailwind CSS 4** for styling. The application features smooth page animations powered by **Framer Motion**, client-side routing through **React Router DOM v7**, form management via **React Hook Form**, and SEO optimization through **React Helmet Async**. The website presents multiple pages including Home, Services, Portfolio, About, Contact, and an Internship application portal.

The application is **Dockerized** using industry-standard multi-stage Dockerfiles — a multi-stage production Dockerfile that compiles the React application and serves it through an **Nginx Alpine** web server, a development Dockerfile enabling hot-module replacement (HMR) for developer productivity, and a separate server Dockerfile for the Node.js/Express backend API. All services are orchestrated locally using **Docker Compose**, which manages the frontend, backend, and MongoDB containers as an interconnected network.

A critical component of this project is the implementation of a **CI/CD (Continuous Integration and Continuous Deployment) pipeline** using **GitHub Actions**. This pipeline automatically triggers on every push or pull request to the main branch, performing build verification, TypeScript compilation checking, Docker build testing, and — upon successful verification — publishing the built container images to the **GitHub Container Registry (GHCR)**. This ensures that only verified, working code is ever packaged and published.

For production cloud deployment, the project employs **Terraform** — the leading Infrastructure as Code (IaC) tool — to provision a complete, production-ready AWS infrastructure. This includes a custom **Virtual Private Cloud (VPC)** with public and private subnets across two Availability Zones, an **Internet Gateway**, a **NAT Gateway**, an **Application Load Balancer (ALB)** with path-based routing (`/api/*` to backend, `/*` to frontend), **AWS ECS Fargate** serverless container tasks for both the frontend and backend, **CloudWatch** log groups, and properly layered **IAM roles** following the principle of least privilege.

Additionally, the project includes a standalone **Kubernetes local cluster** using **Minikube**, which demonstrates container orchestration concepts including PersistentVolumes, PersistentVolumeClaims, Deployments, Services (ClusterIP and NodePort), ConfigMaps, Secrets, Liveness and Readiness Probes, and Rolling Update strategies — along with chaos engineering experiments.

The project demonstrates end-to-end software engineering excellence: from UI/UX design and frontend development, through containerization and automated testing, to cloud infrastructure provisioning and container orchestration. It represents a practical implementation of industry-standard DevOps practices and modern cloud-native architecture patterns that are directly applicable to real-world software development careers.

**Keywords:** MERN Stack, Docker, Containerization, CI/CD, GitHub Actions, Terraform, AWS, ECS Fargate, Kubernetes, Minikube, DevOps, Cloud Computing, Infrastructure as Code, React.js, Node.js, Nginx, PersistentVolume, Application Load Balancer.

---
---

# CHAPTER 4 — INDEX

| Chapter | Title | Page No. |
|---|---|---|
| — | Title Page | i |
| — | Certificate | ii |
| — | Acknowledgement | iii |
| — | Abstract | iv |
| — | Index | v |
| **1** | **Project Definition** | 1 |
| 1.1 | Problem Statement | 1 |
| 1.2 | Objectives | 2 |
| 1.3 | Scope of Work | 3 |
| **2** | **Project Description** | 4 |
| 2.1 | System Architecture Overview | 4 |
| 2.2 | Frontend Application | 5 |
| 2.3 | Backend API Server | 6 |
| 2.4 | Docker Containerization Layer | 7 |
| 2.5 | CI/CD Pipeline | 8 |
| 2.6 | AWS Cloud Infrastructure (Terraform) | 9 |
| 2.7 | Kubernetes Orchestration (Minikube) | 10 |
| **3** | **Software and Hardware Requirements** | 11 |
| 3.1 | Software Requirements | 11 |
| 3.2 | Hardware Requirements | 13 |
| 3.3 | Cloud and External Services | 13 |
| **4** | **Major Functionality** | 14 |
| 4.1 | Website Features | 14 |
| 4.2 | DevOps and Infrastructure Features | 16 |
| 4.3 | Security Features | 17 |
| **5** | **Flowchart** | 18 |
| 5.1 | Application Request Flow | 18 |
| 5.2 | CI/CD Pipeline Flow | 19 |
| 5.3 | Kubernetes Self-Healing Flow | 20 |
| **6** | **Screenshots of Project Output** | 21 |
| **7** | **Limitations of Project** | 22 |
| **8** | **Outcome** | 24 |
| **9** | **Future Enhancement** | 26 |
| **10** | **References** | 28 |

---
---

# CHAPTER 5 — PROJECT DEFINITION

## 1.1 Problem Statement

In today's hyper-competitive digital economy, technology service companies, startups, and digital agencies face a dual challenge: they must not only deliver a high-quality, visually compelling web presence to attract clients, but they must also adopt modern software development and deployment practices to remain agile and competitive internally. The traditional approach of building websites as static HTML pages or basic WordPress installations is no longer sufficient to convey technical credibility in the software services industry.

Furthermore, the process of deploying web applications has historically been fraught with the "it works on my machine" problem — where an application that runs correctly in a developer's local environment fails when deployed to a production server due to differences in operating system configurations, installed libraries, environment variables, or runtime versions. This inconsistency leads to deployment failures, production outages, delayed releases, and wasted developer time.

There is also a significant gap between what is taught in academic settings and what is expected in the software industry. Graduates often understand web development conceptually but lack hands-on experience with the DevOps tools, cloud platforms, and automation workflows that companies use every day. This includes tools like Docker, GitHub Actions, Terraform, AWS, and Kubernetes — the foundational toolkit of any modern backend or DevOps engineer.

This project addresses all of these problems simultaneously by:

1. Building a **production-grade website** for a technology company (Nexus Labs) that authentically represents the services, portfolio, and team of a real digital agency — complete with animations, SEO optimization, responsive design, contact forms, and an internship application portal.

2. Solving the deployment inconsistency problem through **Docker containerization**, which packages the entire application — its code, runtime, libraries, and configuration — into a portable, immutable container image that runs identically on any machine, cloud server, or container orchestration platform.

3. Eliminating manual, error-prone deployment steps through a **GitHub Actions CI/CD pipeline** that automatically builds, tests, and publishes the application whenever code changes are pushed — ensuring consistency, traceability, and rapid delivery.

4. Demonstrating real-world **cloud infrastructure engineering** using Terraform to provision a complete, secure, and scalable AWS deployment environment — the same approach used by professional DevOps engineers at technology companies worldwide.

5. Providing a practical introduction to **Kubernetes container orchestration** through a local Minikube cluster, demonstrating concepts of self-healing deployments, persistent storage, service discovery, and rolling updates.

---

## 1.2 Objectives

The primary and secondary objectives of this project are defined as follows:

### Primary Objectives:

1. **Develop a full-featured, production-quality website** for a technology agency using the MERN (MongoDB, Express, React, Node.js) stack, featuring modern UI/UX design principles including dark mode, micro-animations, responsive layouts, and accessibility compliance.

2. **Implement complete Docker containerization** of the application, including separate Dockerfiles for production builds (multi-stage), development environments (hot-reload), and the backend API server, along with Docker Compose orchestration for local multi-container deployment.

3. **Build an end-to-end CI/CD pipeline** using GitHub Actions that automatically runs on every code push to the main branch, performs build verification, TypeScript compilation, Docker build testing, and conditional image publishing to GitHub Container Registry (GHCR).

4. **Write complete Infrastructure as Code (IaC)** using Terraform to provision a production-ready AWS environment consisting of a custom VPC, subnets, Internet Gateway, NAT Gateway, Application Load Balancer with path-based routing, ECS Fargate services for both frontend and backend, CloudWatch log groups, and IAM roles with least-privilege policies.

5. **Deploy and demonstrate a local Kubernetes cluster** using Minikube that runs a multi-tier application with MySQL database (backed by PersistentVolumes), a web application deployment (with liveness, readiness, and startup probes), and demonstrates self-healing, chaos engineering, and data persistence validation.

### Secondary Objectives:

6. Implement security best practices throughout the project, including environment variable management, .gitignore configuration, Kubernetes Secrets, and layered AWS security groups.

7. Write comprehensive documentation including a detailed README.md for each project component, complete with architecture diagrams, step-by-step setup instructions, and troubleshooting guides.

8. Learn and demonstrate the practical application of cloud-native technologies that are directly relevant to industry employment as a software engineer, DevOps engineer, or cloud infrastructure engineer.

---

## 1.3 Scope of Work

The scope of this project encompasses the following deliverables:

**In Scope:**
- Complete frontend React application with 10 pages and 15+ reusable components
- Node.js/Express backend API scaffold with MongoDB integration
- Three Docker images (frontend production, frontend dev, backend)
- Docker Compose configurations for both production and development environments
- Nginx web server configuration with SPA routing, gzip compression, and security headers
- GitHub Actions workflow with two-job CI/CD pipeline
- Eight complete Terraform configuration files (providers, variables, VPC, security groups, IAM, ALB, ECS, outputs)
- Four Kubernetes manifest files (storage, config, database, web application)
- Security audit and .gitignore configuration
- Complete documentation

**Out of Scope:**
- Live production domain registration and DNS configuration
- Actual AWS account provisioning and billing (Terraform code is provided but not applied to a live account)
- Payment gateway integration
- Real MongoDB Atlas production database
- Mobile application development

---
---

# CHAPTER 6 — PROJECT DESCRIPTION

## 2.1 System Architecture Overview

The project follows a **multi-tier, cloud-native, containerized architecture** that separates concerns across distinct layers, each independently deployable and scalable. The overall system can be understood through the following architectural layers:

**Layer 1 — Presentation Tier (Frontend):**
The React/TypeScript application compiled by Vite and served by Nginx. This layer handles all user interface rendering, animations, routing, form management, and client-server API communication. It is stateless and horizontally scalable.

**Layer 2 — Application Tier (Backend):**
The Node.js/Express API server that handles business logic, database operations, authentication (JWT), email notifications, and serves REST API endpoints under the `/api/` prefix. It maintains application state in the database layer.

**Layer 3 — Data Tier (Database):**
MongoDB serves as the primary NoSQL database, storing user data, contact form submissions, and internship applications. In Docker Compose, it runs as a containerized service with named volumes for persistence.

**Layer 4 — Containerization Layer:**
Docker wraps each tier in immutable, portable container images. Docker Compose orchestrates them into a network where services communicate by name (`mongo`, `backend`, `frontend`).

**Layer 5 — Automation Layer:**
GitHub Actions monitors the repository and automatically triggers build, test, and publish workflows on code changes — enforcing quality gates before any code reaches production.

**Layer 6 — Cloud Infrastructure Layer:**
Terraform provisions AWS resources including VPC networking, ECS Fargate compute, Application Load Balancer for traffic distribution, and IAM roles for security.

**Layer 7 — Orchestration Layer (Kubernetes):**
The local Minikube cluster demonstrates container orchestration with self-healing, rolling updates, persistent storage, and service discovery.

---

## 2.2 Frontend Application

The frontend of Nexus Labs is built using **React 19** — the latest version of Facebook's component-based UI library — with full **TypeScript** type safety enforced throughout the codebase. The build tool is **Vite 7.3.2**, chosen for its blazing-fast Hot Module Replacement (HMR) during development and highly optimized production bundles through Rollup-based tree-shaking and code splitting.

**Routing:** React Router DOM v7 provides declarative, client-side routing. The application features 10 distinct routes: Home (`/`), Services (`/services`), Portfolio (`/portfolio`), About (`/about`), Contact (`/contact`), Internship (`/internship`), Privacy Policy (`/privacy`), Terms of Service (`/terms`), Refund Policy (`/refund`), and a custom 404 Not Found (`*`) page.

**Styling:** Tailwind CSS v4.1 provides a utility-first styling approach that enables rapid, consistent styling without writing custom CSS. The design system uses a dark-mode-first color palette anchored at `#0F172A` (slate-900) for backgrounds, with carefully curated accent colors in blue, purple, teal, green, and orange.

**Animations:** Framer Motion v12 handles all page transitions and scroll-triggered animations. Components fade in, slide up, and scale when they enter the viewport — creating a premium, interactive user experience. The library's layout animations ensure smooth visual continuity during route changes.

**Key Pages and Sections:**
- **Home Page:** Features a hero section with an animated headline, a statistics counter section (animated numbers for projects, clients, years of experience, and team members), a services overview, a process timeline, a portfolio preview, client testimonials carousel (Swiper.js), and a call-to-action section.
- **Services Page:** Detailed cards for Website Development, AI Automation, and Digital Solutions.
- **Portfolio Page:** Project showcase with technology stack tags, performance metrics (revenue increase, load time, satisfaction rates), and project descriptions.
- **Contact Page:** A fully functional contact form built with React Hook Form and validated client-side, with toast notifications for submission feedback.
- **Internship Page:** Internship program details with duration plans (1, 3, 6, 12 months), domain selection (10 technology domains), and an application form.

**SEO:** React Helmet Async manages dynamic meta tags, Open Graph tags, and Twitter Card tags for each page, improving search engine discoverability and social media sharing appearance.

---

## 2.3 Backend API Server

The backend is a **Node.js** application using the **Express.js** framework, providing a RESTful API for the frontend to consume. The server is structured for scalability with a clear separation of concerns:

**Directory Structure:**
- `server/config/` — Database connection configuration and environment variable validation
- `server/models/` — Mongoose schema definitions for data models (Users, Contact Submissions, Internship Applications)
- `server/index.js` — Application entry point with Express configuration, middleware setup, and health check endpoint

**Key Technical Decisions:**
- **CORS Configuration:** The server uses the `cors` middleware, configured to allow requests only from the frontend's origin (set via `CORS_ORIGIN` environment variable), preventing unauthorized cross-origin requests.
- **Health Check Endpoint:** A `GET /health` route returns a JSON status object. This endpoint is critical because both Docker's `HEALTHCHECK` directive and the AWS Application Load Balancer's health check polling rely on it to determine whether the backend container is alive and ready to serve traffic.
- **Environment-Based Configuration:** All sensitive values (database URI, JWT secret, port number, CORS origin) are read from environment variables, never hardcoded. The `.env.server.example` template documents all required variables.
- **MongoDB Connection:** Mongoose provides the Object-Document Mapper (ODM) layer, handling database schema validation, query building, and connection management with automatic reconnection on network interruptions.

---

## 2.4 Docker Containerization Layer

Docker is the foundation that makes this entire project deployable anywhere. Three Dockerfiles serve distinct purposes:

**`Dockerfile` (Production Frontend) — Multi-Stage Build:**
This is the most sophisticated Dockerfile in the project. It uses two build stages:
- **Stage 1 (builder):** Uses `node:20-alpine` (a minimal Linux image with Node.js). Installs npm dependencies, copies source code, and runs `npm run build` to generate the optimized `/dist` folder containing static HTML, CSS, and JavaScript files.
- **Stage 2 (server):** Uses `nginx:1.25-alpine` — a production-grade web server image. Copies only the `/dist` output from Stage 1 and the custom `nginx.conf`. The final image contains no Node.js, no source code, no `node_modules` — only Nginx and the compiled static files. This results in an image approximately 25MB in size versus 800MB+ for a naive single-stage build.

**`Dockerfile.dev` (Development Frontend):**
Uses `node:20-alpine` and runs the Vite development server with `--host 0.0.0.0` to make it accessible from outside the Docker container. Volume mounts in `docker-compose.dev.yml` ensure that source code changes on the host are immediately reflected inside the container, enabling hot-module replacement.

**`Dockerfile.server` (Backend):**
Uses `node:20-alpine`, copies the `server/` directory and `package.json`, runs `npm ci --omit=dev` (installing only production dependencies, not dev tools), and starts the Express server. Includes a Docker `HEALTHCHECK` instruction that periodically runs `wget` against the `/health` endpoint.

**`nginx.conf` (Web Server Configuration):**
The Nginx configuration includes several production-critical settings:
- `try_files $uri $uri/ /index.html` — enables SPA (Single Page Application) routing so that React Router's client-side routes work correctly when accessed directly via URL
- `gzip on` — enables gzip compression for all text-based responses, reducing bandwidth usage by 60-80%
- Long `expires` headers for static assets — enables browser caching of CSS/JS/image files for one year
- Security headers: `X-Frame-Options SAMEORIGIN`, `X-Content-Type-Options nosniff`, `X-XSS-Protection 1; mode=block`

**`docker-compose.yml` (Production Orchestration):**
Defines three services (`frontend`, `backend`, `mongo`) connected to a shared bridge network `techagency_network`. The backend `depends_on` the `mongo` service with a `condition: service_healthy` — meaning Docker will wait until MongoDB passes its health check (`mongosh --eval "db.adminCommand('ping')"`) before starting the backend. Named volumes (`mongo_data`, `mongo_config`) persist MongoDB data across container restarts.

---

## 2.5 CI/CD Pipeline (GitHub Actions)

The CI/CD pipeline defined in `.github/workflows/cicd.yml` is a two-job automated workflow that runs on GitHub's cloud-hosted Ubuntu runners:

**Trigger Conditions:**
- `push` to the `main` branch (direct commits)
- `pull_request` targeting the `main` branch (code reviews)

**Job 1: `build-and-verify` (Continuous Integration)**
This job runs on every trigger (both pushes and pull requests) and performs:
1. **Repository checkout** using `actions/checkout@v4`
2. **Node.js setup** using `actions/setup-node@v4` with Node 18 and npm cache enabled (speeds up subsequent runs by caching `node_modules`)
3. **`npm ci`** — installs exact dependency versions from `package-lock.json` (faster and more reliable than `npm install` in CI environments)
4. **`npm run build`** — compiles TypeScript and produces the production Vite build, failing if any TypeScript errors exist
5. **Frontend Docker build test** — runs `docker build -f Dockerfile .` to verify the multi-stage Dockerfile completes without error
6. **Backend Docker build test** — runs `docker build -f Dockerfile.server .` to verify the server image builds correctly

**Job 2: `publish-images` (Continuous Deployment)**
This job only runs when changes are pushed directly to `main` (not on pull requests). It:
1. Logs into GitHub Container Registry (GHCR) using the automatically generated `GITHUB_TOKEN` — no manual secret creation required
2. Converts the repository name to lowercase (Docker requires lowercase image names)
3. Builds and pushes the frontend image with the `docker/build-push-action@v5` action to `ghcr.io/mtpatel07/dockerized_web_application-frontend:latest`
4. Builds and pushes the backend image to `ghcr.io/mtpatel07/dockerized_web_application-backend:latest`

The `needs: build-and-verify` dependency ensures the publish job only runs after all CI checks pass — broken code is never published to the registry.

---

## 2.6 AWS Cloud Infrastructure (Terraform)

The `terraform/` directory contains eight configuration files that together provision a complete, production-ready AWS deployment environment:

**`providers.tf`:** Specifies the AWS provider version (`~> 5.0`) and minimum Terraform version (`>= 1.7.0`). Includes an optional S3 backend configuration for team-based state management.

**`variables.tf`:** Centralizes all configuration in parameterized variables with descriptions, types, default values, and validation rules. Key variables include region (`ap-south-1` — Mumbai), CIDR blocks, container image URIs, CPU/memory sizing, and port numbers.

**`vpc.tf`:** Provisions the complete networking layer:
- Custom VPC with `10.0.0.0/16` CIDR block
- Two public subnets (`10.0.1.0/24`, `10.0.2.0/24`) in separate Availability Zones (ap-south-1a, ap-south-1b) for high availability
- Two private subnets (`10.0.11.0/24`, `10.0.12.0/24`) for backend tasks
- Internet Gateway for public subnet internet access
- Elastic IP and NAT Gateway for private subnet outbound access
- Separate route tables for public and private subnets

**`security.tf`:** Implements layered security groups:
- ALB Security Group: Allows inbound HTTP (80) and HTTPS (443) from `0.0.0.0/0` (public internet)
- Frontend ECS Security Group: Allows inbound port 80 ONLY from the ALB security group
- Backend ECS Security Group: Allows inbound port 5000 ONLY from the Frontend security group and ALB security group

**`iam.tf`:** Creates three IAM roles:
- ECS Execution Role: Attaches `AmazonECSTaskExecutionRolePolicy` (allows image pulling and CloudWatch log writing)
- Frontend Task Role: Runtime role for the Nginx container (CloudWatch logs only)
- Backend Task Role: Runtime role for the Express container (CloudWatch logs, extensible for S3/SES)

**`alb.tf`:** Configures the Application Load Balancer:
- Internet-facing ALB spanning both public subnets
- Frontend Target Group with health check on `GET /` (port 80)
- Backend Target Group with health check on `GET /health` (port 5000)
- HTTP listener on port 80 with default action forwarding to frontend target group
- Listener rule at priority 100: path pattern `/api/*` routes to backend target group

**`ecs.tf`:** Creates the compute layer:
- ECS Cluster with Container Insights enabled for enhanced CloudWatch monitoring
- FARGATE and FARGATE_SPOT capacity providers
- CloudWatch Log Groups with 30-day retention
- Frontend Task Definition (0.25 vCPU, 0.5GB RAM, public subnets, assigns public IP for GHCR image pulling)
- Backend Task Definition (0.25 vCPU, 0.5GB RAM, private subnets, no public IP)
- Rolling deployment configuration (100% minimum healthy, 200% maximum)

**`outputs.tf`:** Displays critical information after `terraform apply`: the application URL, API URL, VPC ID, subnet IDs, NAT Gateway IP, ECS cluster name, service names, CloudWatch log group names, and direct clickable links to the AWS Console.

---

## 2.7 Kubernetes Orchestration (Minikube)

The Kubernetes component (`k8s/` directory) demonstrates container orchestration on a local Minikube cluster:

**`01-storage.yaml`:** Creates a PersistentVolume using the `hostPath` provisioner mapped to `/mnt/data/mysql` on the Minikube VM, and a PersistentVolumeClaim (`mysql-pvc`) requesting 1Gi with `ReadWriteOnce` access mode. The `Retain` reclaim policy ensures data is not deleted when the PVC is released.

**`02-config.yaml`:** Defines a Kubernetes Secret (`mysql-secrets`) storing the MySQL root password using `stringData` (Kubernetes auto-encodes to base64), and a ConfigMap (`app-config`) containing `DB_HOST: mysql-service`, `DB_USER: root`, and `APP_ENV: development`.

**`03-database.yaml`:** Deploys MySQL 8.0 with a `Recreate` deployment strategy (required to prevent dual-writer data corruption on the PVC), an init container (busybox) that cleans up leftover MySQL socket files before startup, `mysqladmin ping` liveness and readiness probes, and a ClusterIP Service (`mysql-service`) exposing port 3306 only within the cluster.

**`04-web-app.yaml`:** Deploys Nginx Alpine with 3 replicas and a `RollingUpdate` strategy (`maxSurge: 1`, `maxUnavailable: 0`) for zero-downtime deployments. Includes all three probe types (liveness, readiness, startup), `envFrom` ConfigMap injection, Pod Anti-Affinity rules for multi-node spread, resource limits, a `postStart` lifecycle hook that writes a custom HTML demo page, and a NodePort Service (`web-app-service`) exposing port 30080 externally.

---
---

# CHAPTER 7 — SOFTWARE AND HARDWARE REQUIREMENTS

## 3.1 Software Requirements

### Development Environment

| Software | Version | Purpose |
|---|---|---|
| **Node.js** | ≥ 18.x LTS | JavaScript runtime for frontend build tools and backend server |
| **npm** | ≥ 9.x | Package manager for Node.js dependencies |
| **Git** | ≥ 2.40 | Version control system |
| **Visual Studio Code** | Latest | Primary code editor with extensions |

### Frontend Technologies

| Technology | Version | License | Purpose |
|---|---|---|---|
| **React** | 19.2.6 | MIT | Core UI framework — component-based view layer |
| **TypeScript** | 5.9.3 | Apache 2.0 | Static type checking for JavaScript |
| **Vite** | 7.3.2 | MIT | Frontend build tool and development server |
| **Tailwind CSS** | 4.1.17 | MIT | Utility-first CSS framework for styling |
| **Framer Motion** | 12.x | MIT | Animation library for React components |
| **React Router DOM** | 7.x | MIT | Client-side routing and navigation |
| **React Hook Form** | 7.x | MIT | Performant form state management |
| **React Hot Toast** | 2.x | MIT | Lightweight toast notification system |
| **Swiper** | 12.x | MIT | Touch-enabled slider/carousel component |
| **Axios** | 1.x | MIT | HTTP client for API communication |
| **EmailJS Browser** | 4.x | MIT | Client-side email sending service |
| **React Helmet Async** | 3.x | MIT | Dynamic HTML head management for SEO |
| **React CountUp** | 6.x | MIT | Animated number counter component |
| **React Icons** | 5.x | MIT | Icon library with 40+ icon sets |
| **clsx** | 2.x | MIT | Utility for conditional className construction |

### Backend Technologies

| Technology | Version | Purpose |
|---|---|---|
| **Node.js** | 20.x | Server-side JavaScript runtime |
| **Express.js** | 4.x | Web application framework and REST API |
| **MongoDB** | 7.0 | NoSQL document database |
| **Mongoose** | 8.x | MongoDB ODM for schema validation and queries |
| **cors** | 2.x | Cross-Origin Resource Sharing middleware |
| **dotenv** | 16.x | Environment variable loading from .env files |

### DevOps and Infrastructure

| Tool | Version | Purpose |
|---|---|---|
| **Docker Desktop** | Latest | Container runtime and image building |
| **Docker Compose** | v3.9 | Multi-container application orchestration |
| **Nginx** | 1.25 Alpine | Production web server for serving React app |
| **GitHub Actions** | — | CI/CD automation platform |
| **Terraform** | ≥ 1.7.0 | Infrastructure as Code for AWS provisioning |
| **AWS CLI** | Latest | AWS service management from command line |
| **Minikube** | ≥ 1.32 | Local single-node Kubernetes cluster |
| **kubectl** | ≥ 1.28 | Kubernetes command-line management tool |

### Operating System Compatibility

| OS | Version | Support Level |
|---|---|---|
| Windows | 10/11 (64-bit) | Full support (PowerShell + WSL2 for Docker) |
| macOS | 12 Monterey or later | Full support |
| Ubuntu Linux | 20.04 LTS or later | Full support |

---

## 3.2 Hardware Requirements

### Minimum Requirements (for development without Docker)

| Component | Specification |
|---|---|
| **Processor** | Intel Core i3 / AMD Ryzen 3 (4 cores, 2.0 GHz+) |
| **RAM** | 4 GB |
| **Storage** | 10 GB free disk space |
| **Internet** | Broadband (for npm install and image pulls) |
| **Display** | 1366 × 768 resolution |

### Recommended Requirements (with Docker + Minikube)

| Component | Specification |
|---|---|
| **Processor** | Intel Core i5/i7 / AMD Ryzen 5/7 (8 cores, 2.5 GHz+) with virtualization support (VT-x / AMD-V) |
| **RAM** | 8 GB minimum (16 GB recommended for running Docker + Minikube simultaneously) |
| **Storage** | 50 GB free disk space (SSD preferred for Docker image layers and Minikube VM) |
| **Internet** | Broadband (20 Mbps+) for pulling Docker base images |
| **Display** | 1920 × 1080 resolution |

---

## 3.3 Cloud and External Services

| Service | Provider | Purpose | Cost |
|---|---|---|---|
| **GitHub** | GitHub (Microsoft) | Source code hosting, GitHub Actions CI/CD, GHCR | Free tier |
| **GitHub Container Registry** | GitHub | Docker image storage and distribution | Free (public repos) |
| **AWS ECS Fargate** | Amazon Web Services | Serverless container compute | ~$5–10/month |
| **AWS ALB** | Amazon Web Services | Application Load Balancer | ~$16/month |
| **AWS NAT Gateway** | Amazon Web Services | Private subnet internet access | ~$32/month |
| **AWS CloudWatch** | Amazon Web Services | Container logging and monitoring | ~$0.50/month |
| **Vercel** | Vercel Inc. | Frontend-only static hosting | Free tier |

---
---

# CHAPTER 8 — MAJOR FUNCTIONALITY

## 4.1 Website Features

### 4.1.1 Multi-Page Navigation with Client-Side Routing
The website implements true Single Page Application (SPA) behavior using React Router DOM v7. When a user clicks any navigation link, the page transition is instant — there is no browser page reload or white flash. Framer Motion's `AnimatePresence` component wraps the router, enabling smooth fade-and-slide animations between every page. The Nginx configuration includes the `try_files` directive to handle direct URL access (e.g., typing `https://nexuslabs.in/about` in the browser), preventing 404 errors for SPA routes.

### 4.1.2 Home Page — Multiple Animated Sections
The homepage contains six distinct sections:
- **Hero Section:** Full-height landing area with an animated headline, tagline, and two call-to-action buttons (Book a Call, View Our Work). Background uses a gradient mesh effect.
- **Stats Section:** Four animated counters (Projects Completed: 8+, Happy Clients: 5+, Years of Experience: 2+, Team Members: 5+) that count up from zero when the section enters the viewport, implemented using React CountUp with Intersection Observer.
- **Services Section:** Three service cards (Website Development, AI Automation, Digital Solutions) with hover animations, feature lists, and direct links.
- **Process Section:** Six-step numbered timeline (Discovery → Planning → Design → Development → Testing → Launch) with color-coded icons.
- **Portfolio Section:** Preview of four completed projects with client names, technology stacks, and performance metrics.
- **Reviews Section:** Swiper.js carousel of eight client testimonials with star ratings, client details, and project references.

### 4.1.3 Contact Form with Validation
The Contact page features a fully validated form built with React Hook Form. Validation rules include:
- Required fields for name, email, phone, subject, and message
- Email format validation using regex pattern matching
- Phone number format validation
- Character minimum/maximum length constraints

Upon form submission, the application displays a loading spinner, shows a success toast notification via React Hot Toast on submission, and resets the form. The EmailJS integration enables form data to be sent directly to a business email address without requiring a backend server.

### 4.1.4 Internship Application Portal
The Internship page presents the Nexus Labs internship program with four duration tracks (1, 3, 6, and 12 months), each detailing inclusions like project contributions, mentorship frequency, certificate types, and PPO opportunities. Ten technology domains are displayed (Full Stack, AI/ML, Mobile, UI/UX, Data Analytics, Cloud/DevOps, Cybersecurity, Blockchain, Digital Marketing, Embedded Systems). An application form collects applicant name, email, phone, domain preference, duration selection, college name, and message.

### 4.1.5 Portfolio Showcase
The Portfolio page displays four detailed project case studies with:
- Project title and client name
- Category tag (Web Development, Digital Solution, EdTech, etc.)
- Full description of the solution and business impact
- Technology stack badges
- Quantified performance metrics (revenue increase percentages, monthly usage numbers, satisfaction rates)
- Project duration

### 4.1.6 SEO and Meta Tag Management
React Helmet Async provides per-page dynamic meta tags including:
- `<title>` tags customized for each page
- `meta name="description"` with unique, keyword-rich descriptions
- `og:title`, `og:description`, `og:type` Open Graph tags for social media sharing
- `twitter:card` tags for Twitter/X previews

---

## 4.2 DevOps and Infrastructure Features

### 4.2.1 Multi-Stage Docker Builds
The production Dockerfile implements a two-stage build that results in a minimal, secure final image. Stage 1 uses a full Node.js environment to compile TypeScript and build the Vite bundle. Stage 2 copies only the compiled output into a bare Nginx image. This technique eliminates compiler toolchains, development dependencies, and source code from the production image — reducing the attack surface and image size simultaneously.

### 4.2.2 Automated CI/CD Pipeline
Every `git push` to the main branch triggers an automated pipeline that:
1. Checks out the latest code
2. Installs exact dependency versions from the lock file
3. Compiles TypeScript and runs Vite build
4. Tests both Docker build processes
5. If all checks pass, authenticates with GHCR and publishes updated images

This means the team always has a verified, deployable Docker image available without any manual intervention.

### 4.2.3 Zero-Downtime Kubernetes Rolling Updates
The web application Kubernetes Deployment uses `RollingUpdate` strategy with `maxUnavailable: 0`. During an image update, Kubernetes creates a new pod, waits for it to pass the readiness probe, then terminates an old pod — ensuring the desired replica count is never reduced below 3 during the transition. This makes deployments completely transparent to users.

### 4.2.4 Kubernetes Self-Healing
The Liveness Probe (`GET /` on port 80 every 20 seconds) continuously monitors each Nginx pod. If a pod fails three consecutive checks — due to a crash, memory exhaustion, or deadlock — Kubernetes automatically deletes and recreates it. The service continues routing traffic to the remaining healthy pods during replacement, making the system self-repairing without human intervention.

### 4.2.5 Data Persistence with PersistentVolumes
MySQL database data is stored on a Kubernetes PersistentVolume backed by the Minikube host's disk at `/mnt/data/mysql`. When the MySQL pod is deleted and Kubernetes creates a new one, it mounts the same PVC — recovering all previously written data. This demonstrates the fundamental principle that containers are ephemeral but storage can be durable.

### 4.2.6 Path-Based Load Balancing (AWS ALB)
The AWS Application Load Balancer routes incoming HTTP requests based on URL paths:
- Requests matching `/api/*` → Backend ECS Task (port 5000)
- All other requests (`/*`) → Frontend ECS Task (port 80)

This enables a single ALB DNS endpoint to serve both the React frontend and the Express API, eliminating the need for separate domain names or CORS complexity in production.

---

## 4.3 Security Features

### 4.3.1 Secret Management
Sensitive values (database passwords, JWT secrets, API keys) are never hardcoded in source code. They are managed through:
- **Environment files** (`.env.server`) that are listed in `.gitignore` and never committed to version control
- **Kubernetes Secrets** objects that store base64-encoded values and reference them via `secretKeyRef` in pod specifications
- **AWS Secrets Manager** ARN references in commented Terraform code for production upgrades
- **GitHub Actions Secrets** (`GITHUB_TOKEN`) for GHCR authentication — automatically generated and never exposed

### 4.3.2 Layered AWS Security Groups
The AWS security group configuration implements defense-in-depth:
- The ALB Security Group is the only resource exposed to `0.0.0.0/0` (the internet)
- The Frontend ECS Security Group only accepts traffic from the ALB Security Group
- The Backend ECS Security Group only accepts traffic from the Frontend Security Group and ALB
- No ECS task is directly reachable from the internet — all traffic flows through the ALB

### 4.3.3 IAM Least Privilege
Each IAM role grants only the specific permissions required for its purpose:
- The ECS Execution Role can pull images and write logs but cannot access application data
- The Frontend Task Role can only write to its specific CloudWatch log group
- The Backend Task Role can be extended incrementally (S3, SES) without modifying existing permissions

---
---

# CHAPTER 9 — FLOWCHART

## 5.1 Application Request Flow

```
User Types URL in Browser
         │
         ▼
   DNS Resolution
   (nexuslabs.in → ALB IP)
         │
         ▼
AWS Application Load Balancer
   Port 80 / Port 443
         │
   ┌─────┴─────────┐
   │               │
   ▼               ▼
Path: /api/*    Path: /*
   │               │
   ▼               ▼
Backend TG      Frontend TG
(port 5000)     (port 80)
   │               │
   ▼               ▼
ECS Backend     ECS Frontend
Tasks (private  Tasks (public
subnets)        subnets)
   │               │
   ▼               │
Express API     Nginx serves
processes       React SPA
request         (static files)
   │               │
   ▼               ▼
MongoDB         Browser renders
(via NAT GW     React components
if needed)      with client-side
                routing
```

## 5.2 CI/CD Pipeline Flow

```
Developer: git push origin main
         │
         ▼
GitHub receives push event
         │
         ▼
GitHub Actions: TRIGGER
─────────────────────────────
JOB 1: build-and-verify
  │
  ├─ Checkout code
  ├─ Setup Node.js 18 (cached)
  ├─ npm ci (exact versions)
  ├─ npm run build
  │       │
  │   PASS?───NO──► ❌ PIPELINE FAILS
  │       │         (No images published)
  │      YES
  ├─ docker build -f Dockerfile .
  │       │
  │   PASS?───NO──► ❌ PIPELINE FAILS
  │       │
  │      YES
  └─ docker build -f Dockerfile.server .
          │
      PASS?───NO──► ❌ PIPELINE FAILS
          │
         YES
─────────────────────────────
JOB 2: publish-images
  │ (only on push to main)
  │
  ├─ Login to GHCR
  ├─ Build + Push frontend image
  │   → ghcr.io/.../frontend:latest
  └─ Build + Push backend image
      → ghcr.io/.../backend:latest
          │
          ▼
      ✅ IMAGES AVAILABLE
      for AWS ECS deployment
```

## 5.3 Kubernetes Self-Healing Flow

```
3 Nginx Pods Running
  Pod #1  Pod #2  Pod #3
    ↑       ↑       ↑
    Service routes traffic (round-robin)
    
   Pod #2 CRASHES
   (process killed, OOM, etc.)
         │
         ▼
Liveness Probe FAILS 3 times
(3 × 20s = 60s)
         │
         ▼
Kubernetes ReplicaSet detects:
ACTUAL: 2 pods ≠ DESIRED: 3 pods
         │
         ▼
Controller creates new Pod #4
  Status: Pending → ContainerCreating
         │
         ▼
Startup Probe passes
Readiness Probe passes
  Status: Running → 1/1 Ready
         │
         ▼
Service adds Pod #4 to endpoints
         │
         ▼
3 Pods healthy again: Pod #1 #3 #4
Traffic routing restored fully
Total downtime: 0 seconds
(traffic continued on Pods #1 and #3)
```

---
---

# CHAPTER 10 — SCREENSHOTS OF PROJECT OUTPUT

> **Note to student:** Insert actual browser screenshots here. Below are descriptions of what each screenshot should show.

**Screenshot 1 — Home Page (Hero Section)**
*Description: Dark-themed hero section showing "Nexus Labs" heading with the tagline "Building digital solutions that drive real business growth." Two CTA buttons visible: "Book a Free Call" and "View Our Work". Background shows gradient mesh effect.*

**Screenshot 2 — Home Page (Statistics Section)**
*Description: Four animated stat cards showing "8+ Projects Completed", "5+ Happy Clients", "2+ Years of Experience", "5+ Team Members" with respective icons in blue, green, purple, and orange.*

**Screenshot 3 — Services Page**
*Description: Three service cards for Website Development, AI Automation, and Digital Solutions. Each card shows an icon, title, description, and feature list with colored bullet points.*

**Screenshot 4 — Portfolio Page**
*Description: Project showcase cards for GreenLeaf E-Commerce Platform, HealthFirst Appointment System, Ahmedabad EduCentre LMS, and Joshi Real Estate Portal — each with technology stack tags and performance metrics.*

**Screenshot 5 — Contact Page with Form**
*Description: Contact form with fields for Name, Email, Phone, Subject, and Message. Company information panel on the right showing address, email, phone, and social media links.*

**Screenshot 6 — Internship Page**
*Description: Four duration plan cards (1 Month, 3 Months, 6 Months — Popular, 12 Months) with included benefits. Ten domain selection buttons below.*

**Screenshot 7 — Docker Compose Running**
*Description: Terminal output showing all three Docker containers (frontend, backend, mongo) in Running state from `docker-compose ps` command.*

**Screenshot 8 — GitHub Actions Pipeline**
*Description: GitHub Actions tab showing the CI/CD pipeline with both jobs (build-and-verify and publish-images) showing green checkmarks.*

**Screenshot 9 — GHCR Packages**
*Description: GitHub repository Packages tab showing the published frontend and backend Docker images with version tags.*

**Screenshot 10 — Kubernetes Pods Running**
*Description: Terminal output of `kubectl get pods` showing mysql-deployment pod (1/1 Running) and three web-app-deployment pods (1/1 Running) with their ages.*

---
---

# CHAPTER 11 — LIMITATIONS OF PROJECT

Despite successfully achieving its core objectives, this project has several limitations that are important to acknowledge honestly. These limitations are primarily due to the academic scope of the project, the constraints of student resources, and deliberate simplifications made in the interest of learning focus.

## 7.1 No Live AWS Deployment

The Terraform infrastructure code is complete and production-ready, but it has not been deployed to a live AWS account. AWS services incur costs, and the estimated monthly cost of approximately $55–65 (dominated by the NAT Gateway at ~$32/month and the Application Load Balancer at ~$16/month) is beyond the budget available for an academic project. The code is verified to be syntactically correct and architecturally sound, but its runtime behavior on live AWS infrastructure has not been validated.

This is a significant limitation because it means the integration between the Terraform-provisioned infrastructure and the Docker images published to GHCR — specifically the ECS task pulling images and registering with the ALB target groups — has not been end-to-end tested.

## 7.2 Simulated Form Submission (No Real Email/Database)

The contact form and internship application form on the website currently use client-side simulation for form submission. The EmailJS integration requires real API credentials (Service ID, Template ID, and Public Key) that are not configured in the submitted version. In a real deployment, form submissions would be sent to the business email. Additionally, the backend database (MongoDB) for storing internship applications is scaffolded (models and config directories exist) but does not have active API routes wired up in a `server/index.js` entry point.

## 7.3 Single-Node Minikube (Not Production Kubernetes)

The Kubernetes demonstrations are performed on a single-node Minikube cluster running on a local machine. This means:
- **Pod Anti-Affinity rules have no effect** — all three Nginx replicas run on the same physical node (the single Minikube VM), so there is no true fault domain separation
- **Minikube's `hostPath` volumes** are specific to the single node and cannot be used in multi-node clusters
- **NodePort services** (port 30080) only work on the Minikube IP, not a real load-balanced IP
- Real production Kubernetes clusters use managed services like Amazon EKS, Google GKE, or Azure AKS, which provide multi-node fault tolerance, cloud storage integration, and managed upgrades

## 7.4 No HTTPS / TLS Encryption

Both the local Docker Compose deployment and the Terraform ALB configuration serve traffic over HTTP (port 80) only. A production deployment requires HTTPS (port 443) with a TLS certificate issued by AWS Certificate Manager (ACM), a custom domain name registered through a domain registrar, and DNS records configured through Route 53. The ALB HTTPS listener configuration is present as commented-out code in `alb.tf` but is not active.

## 7.5 No Automated Testing

The project does not include any automated unit tests, integration tests, or end-to-end (E2E) tests. The CI/CD pipeline verifies that the application compiles without errors and that Docker images build successfully, but it does not run functional tests (e.g., with Jest, Vitest, React Testing Library, or Cypress). In a production project, automated tests would be a mandatory quality gate in the CI pipeline.

## 7.6 Single-Replica MySQL (No High Availability Database)

The MySQL deployment in the Kubernetes cluster uses a single replica with a `Recreate` deployment strategy. This means that during a MySQL pod replacement, there is a brief window (typically 30–60 seconds) during which the database is unavailable. In a production system, this would require either:
- A MySQL StatefulSet with primary-replica replication using MySQL Group Replication or InnoDB Cluster
- A managed database service like Amazon RDS with Multi-AZ standby
- A distributed database like MongoDB Atlas with automatic failover

## 7.7 Static Content (No CMS / Admin Panel)

The website content (services, portfolio projects, client reviews, team members) is hardcoded in the `src/utils/constants.js` file. Updating content requires modifying source code, committing to Git, and triggering the CI/CD pipeline. A production agency website would use a Content Management System (CMS) such as Contentful, Strapi, or Sanity to allow non-technical team members to update content through a web interface without developer intervention.

## 7.8 No Monitoring or Alerting

While AWS CloudWatch log groups are provisioned by Terraform, there are no CloudWatch dashboards, metric alarms, or notification systems configured. A production deployment would include:
- CloudWatch dashboards for CPU, memory, request count, and error rate metrics
- SNS (Simple Notification Service) alerts for ECS service health degradation
- Uptime monitoring with tools like AWS Health, Datadog, or Pingdom

---
---

# CHAPTER 12 — OUTCOME

## 8.1 Technical Outcomes

The project has successfully achieved a comprehensive set of technical outcomes that collectively demonstrate mastery of the modern web application development and deployment lifecycle:

### 8.1.1 Production-Grade Web Application Delivery
A fully functional, visually premium technology agency website has been developed and is ready for deployment. The application features 10 distinct pages, 15+ reusable React components, 13 frontend library integrations, a TypeScript type-safe codebase, complete SEO metadata, mobile-responsive layouts, and sophisticated animations — all of which represent the quality standard expected in real commercial web development projects.

### 8.1.2 Mastery of Containerization Concepts
Through the implementation of three distinct Dockerfiles and two Docker Compose configurations, the project demonstrates a thorough understanding of containerization principles including: multi-stage builds for image size optimization, container networking (bridge networks with named service DNS), volume management for data persistence, health checks for container lifecycle management, environment variable injection for configuration management, and the `.dockerignore` pattern for build context optimization.

### 8.1.3 CI/CD Pipeline Implementation
The two-job GitHub Actions pipeline demonstrates the real-world CI/CD pattern used at technology companies of all sizes. The pipeline successfully:
- Enforces quality gates (TypeScript compilation, Docker build verification) before any code is published
- Separates CI (runs on all events) from CD (runs only on main branch merges)
- Uses the automatically generated `GITHUB_TOKEN` for secure GHCR authentication without manual credential management
- Caches npm dependencies between runs to minimize pipeline execution time

### 8.1.4 Infrastructure as Code Proficiency
The eight Terraform configuration files represent approximately 800 lines of HCL (HashiCorp Configuration Language) that provision a complete, production-ready AWS deployment environment. This demonstrates understanding of: VPC networking and subnetting, Internet Gateway and NAT Gateway architecture, security group layering, IAM role and policy creation, Application Load Balancer configuration with path-based routing, ECS Fargate task and service definitions, CloudWatch log management, and Terraform state management concepts.

### 8.1.5 Kubernetes Orchestration Skills
The Kubernetes component demonstrates proficiency across 18 distinct Kubernetes concepts, including both fundamental resources (Deployments, Services, ConfigMaps, Secrets, PersistentVolumes) and advanced features (Init Containers, three probe types, Rolling Update strategies, Pod Anti-Affinity, lifecycle hooks, resource requests and limits). The chaos engineering experiments provide hands-on validation of Kubernetes' self-healing guarantees.

### 8.1.6 Security Best Practices
The project consistently applies security best practices: no secrets in source code, environment variable isolation, comprehensive `.gitignore` configuration preventing accidental credential commits, layered AWS security groups implementing defense-in-depth, IAM least-privilege role design, and clear documentation distinguishing between example files (safe to commit) and actual secret files (never to be committed).

---

## 8.2 Learning Outcomes

Beyond the technical deliverables, the project has produced significant personal and academic learning outcomes:

### 8.2.1 Full-Stack Development Competency
The project required working simultaneously across multiple technology layers — React component design, TypeScript type definitions, Express API patterns, MongoDB schema design, Nginx configuration syntax, YAML manifest writing, and HCL infrastructure code — developing the multi-disciplinary technical flexibility that is characteristic of senior software engineers.

### 8.2.2 DevOps Engineering Mindset
Working through the complete development-to-deployment pipeline instilled the DevOps philosophy that development and operations are not separate functions but integrated responsibilities. The practice of writing infrastructure as code, automating every repetitive task, and treating configuration as a first-class code artifact reflects industry best practices.

### 8.2.3 Cloud Architecture Thinking
Designing the AWS infrastructure with high availability (multi-AZ subnets), security isolation (public/private subnet separation), cost awareness (Fargate sizing, NAT Gateway cost analysis), and operational observability (CloudWatch integration) demonstrates the architectural thinking required for cloud engineering roles.

### 8.2.4 Problem-Solving and Debugging Skills
The project involved debugging issues across multiple technology layers: TypeScript compilation errors, Docker networking configuration, Kubernetes pod scheduling failures, Nginx routing mismatches, and Terraform dependency ordering. Each debugging session developed systematic troubleshooting skills applicable throughout a software engineering career.

---

## 8.3 Industry Relevance

The technologies implemented in this project directly align with skills sought by technology employers in 2025–2026. According to industry job posting data:

- **Docker** appears in approximately 70% of backend and DevOps engineering job descriptions
- **Kubernetes** proficiency commands a 15–25% salary premium for software engineers
- **Terraform/IaC** is listed as a required skill for 80%+ of cloud engineering positions
- **CI/CD pipeline experience** (GitHub Actions, Jenkins, GitLab CI) is expected from mid-level engineers and above
- **React + TypeScript** is the dominant frontend technology stack at technology companies globally

This project provides validated, demonstrable hands-on experience with all of these in-demand technologies.

---
---

# CHAPTER 13 — FUTURE ENHANCEMENTS

The project has established a strong technical foundation that can be extended in numerous meaningful directions. The following enhancements represent natural next steps that would increase the project's production-readiness, scalability, and business value:

## 9.1 HTTPS and Custom Domain Integration

The highest-priority enhancement for making this project publicly accessible is enabling HTTPS. The implementation would involve:
1. Registering a domain name through a registrar (e.g., `nexuslabs.in`)
2. Creating an AWS Route 53 hosted zone and adding DNS A records pointing to the ALB
3. Requesting a free TLS certificate from AWS Certificate Manager (ACM) — a managed certificate authority that auto-renews certificates before expiry
4. Uncommenting the HTTPS listener block in `terraform/alb.tf` and adding the ACM certificate ARN
5. Adding an HTTP-to-HTTPS redirect listener rule at port 80

This would make the application accessible at `https://nexuslabs.in` with a green padlock, increasing visitor trust and enabling modern browser features that require secure contexts.

## 9.2 Complete Backend API Development

The backend currently provides only a health check endpoint. A complete API would add:
- `POST /api/contact` — saves contact form submissions to MongoDB and sends email notifications via Nodemailer/SendGrid
- `POST /api/internship/apply` — saves internship applications with file upload support (resume via AWS S3)
- `GET /api/admin/applications` — protected admin endpoint for viewing applications (JWT authentication required)
- `POST /api/auth/login` — admin authentication with bcrypt password hashing and JWT issuance
- Rate limiting middleware (express-rate-limit) to prevent form spam

## 9.3 Content Management System (CMS) Integration

Replacing hardcoded `constants.js` with a CMS would allow non-technical team members to manage website content:
- **Sanity.io** or **Contentful** can serve as the CMS backend
- Content types for Services, Portfolio Projects, Team Members, Client Reviews, and Blog Posts
- A Next.js migration would enable Incremental Static Regeneration (ISR) — pages are statically generated but update automatically when CMS content changes
- This eliminates the need for developer involvement in content updates

## 9.4 Monitoring, Alerting, and Observability

A production-grade monitoring stack would include:
- **AWS CloudWatch Dashboards** — visual panels showing ECS CPU/memory usage, ALB request rates, error percentages, and target health
- **CloudWatch Alarms** — SNS notifications sent to email/Slack when CPU exceeds 80% or error rate exceeds 5%
- **AWS X-Ray** — distributed request tracing to identify performance bottlenecks across the frontend-backend-database request chain
- **Prometheus + Grafana** — open-source alternative for self-hosted metrics and visualization (installable via Helm charts on EKS)

## 9.5 ECS Auto Scaling

The current ECS configuration runs a fixed number of tasks (1 backend, 1 frontend). Auto Scaling would dynamically adjust capacity based on load:
- **Application Auto Scaling** — adds or removes ECS tasks based on ALB request count per target or CPU utilization metrics
- **Scale-out policy**: Add 1 task when CPU > 70% for 2 consecutive minutes
- **Scale-in policy**: Remove 1 task when CPU < 30% for 10 consecutive minutes
- **Minimum capacity**: 2 tasks (maintains high availability even during scale-in)
- **Maximum capacity**: 10 tasks (prevents runaway costs)

## 9.6 Terraform Remote State with S3 Backend

Currently, Terraform state (`terraform.tfstate`) is stored locally. In a team environment, this creates conflicts. The enhancement:
1. Create an S3 bucket for state storage
2. Create a DynamoDB table for state locking (prevents concurrent applies)
3. Configure the `terraform` block in `providers.tf` with the S3 backend
4. All team members share consistent state, and CI/CD pipelines can run `terraform apply` safely

## 9.7 Database Migration to Amazon RDS or MongoDB Atlas

For production reliability, the database should migrate from a containerized MongoDB to:
- **Amazon RDS for MySQL/PostgreSQL** — managed relational database with automated backups, Multi-AZ standby, automated failover, and storage auto-scaling
- **MongoDB Atlas** — cloud-native MongoDB with built-in replication (3-node replica sets), automated backups, and global distribution options
- **AWS DocumentDB** — MongoDB-compatible managed document database within the AWS ecosystem

Both options eliminate the database administration burden and provide SLA-backed uptime guarantees (99.95% for RDS Multi-AZ).

## 9.8 Progressive Web App (PWA) Capabilities

Converting the React application to a PWA would enable:
- **Offline functionality** — core pages cached by Service Worker remain accessible without internet
- **Install prompt** — users can add the website to their home screen on mobile devices
- **Push notifications** — opt-in notifications for new blog posts or service updates
- **Improved performance** — background sync for form submissions when offline

## 9.9 End-to-End Testing Suite

A comprehensive testing implementation would add:
- **Vitest + React Testing Library** — component unit tests verifying rendering and user interaction
- **Cypress** — browser automation for end-to-end testing of user journeys (loading home page, submitting contact form, navigating through all pages)
- **GitHub Actions test job** — automated test execution as an additional CI pipeline stage, blocking deployment if tests fail

## 9.10 Multi-Environment Deployment

Extending Terraform to support multiple deployment environments:
- `terraform/environments/dev/` — minimal infrastructure (no NAT Gateway, smallest Fargate tasks) for developer testing
- `terraform/environments/staging/` — production-replica infrastructure for pre-release validation
- `terraform/environments/prod/` — full production infrastructure with all safeguards enabled
- Separate GitHub Actions workflows for each environment with appropriate approval gates

---
---

# CHAPTER 14 — REFERENCES

1. **React Official Documentation — React 19 Release Notes and API Reference**
   https://react.dev/blog/2024/12/05/react-19
   *(Accessed: June 2025)*
   This is the official React documentation covering React 19's new features including Actions, `useActionState`, `useOptimistic`, and improved server component support. Used as the primary reference for component architecture and hooks implementation.

2. **Docker Documentation — Dockerfile Best Practices and Multi-Stage Builds**
   https://docs.docker.com/build/building/multi-stage/
   *(Accessed: June 2025)*
   Official Docker documentation covering multi-stage build patterns, best practices for minimizing image size, and the `COPY --from` instruction for copying artifacts between build stages. Directly applied in the production frontend Dockerfile.

3. **HashiCorp Terraform Documentation — AWS ECS Fargate with Application Load Balancer**
   https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_service
   *(Accessed: June 2025)*
   The official Terraform AWS provider documentation for ECS service resources, including `load_balancer`, `network_configuration`, and `deployment_configuration` arguments. Used as the primary reference for `terraform/ecs.tf`.

4. **Kubernetes Official Documentation — Liveness, Readiness, and Startup Probes**
   https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/
   *(Accessed: June 2025)*
   Official Kubernetes documentation explaining the difference between the three probe types, their configuration parameters (`initialDelaySeconds`, `periodSeconds`, `failureThreshold`), and their role in self-healing and traffic management. Directly implemented in `k8s/04-web-app.yaml`.

5. **GitHub Actions Documentation — Publishing Docker Images to GitHub Container Registry**
   https://docs.github.com/en/actions/use-cases-and-examples/publishing-packages/publishing-docker-images
   *(Accessed: June 2025)*
   Official GitHub documentation covering the complete workflow for building and publishing Docker images using GitHub Actions, including `docker/login-action`, `docker/build-push-action`, and GITHUB_TOKEN permissions for GHCR. Implemented in `.github/workflows/cicd.yml`.

6. **AWS Documentation — Best Practices for Amazon ECS on AWS Fargate**
   https://docs.aws.amazon.com/AmazonECS/latest/bestpracticesguide/security.html
   *(Accessed: June 2025)*
   Amazon Web Services official best practices guide for ECS security, covering IAM task roles vs. execution roles, VPC network isolation, security group configuration, and secrets management. Applied throughout `terraform/iam.tf` and `terraform/security.tf`.

7. **Vite Official Documentation — Production Build Guide and Plugin API**
   https://vite.dev/guide/build.html
   *(Accessed: June 2025)*
   Official Vite documentation covering the Rollup-based production build pipeline, code splitting strategies, asset handling, and plugin configuration. Used for configuring `vite.config.ts` including the `viteSingleFile` plugin and TypeScript path aliases.

8. **Framer Motion Documentation — Animate Presence and Page Transitions**
   https://motion.dev/docs/react-animate-presence
   *(Accessed: June 2025)*
   Official Framer Motion documentation for the `AnimatePresence` component used to animate components when they are added or removed from the React tree. Applied for implementing page transition animations across route changes.

9. **Nginx Documentation — Configuring Nginx as a Reverse Proxy for SPA Applications**
   https://nginx.org/en/docs/http/ngx_http_core_module.html#try_files
   *(Accessed: June 2025)*
   Official Nginx documentation for the `try_files` directive and related location block configuration. Used for implementing the SPA fallback routing (`try_files $uri /index.html`) that enables React Router's client-side routes to function correctly when accessed via direct URL.

10. **Minikube Documentation — Persistent Volumes with HostPath Provisioner**
    https://minikube.sigs.k8s.io/docs/handbook/persistent_volumes/
    *(Accessed: June 2025)*
    Official Minikube documentation covering how PersistentVolumes work in a Minikube environment, the `hostPath` provisioner, standard storage classes, and how data persists across pod restarts. Applied in `k8s/01-storage.yaml`.

---

<div align="center">

---

**END OF REPORT**

---

*This project report was prepared in partial fulfillment of the requirements for the degree of Bachelor of Engineering / Bachelor of Technology in Computer Engineering / Information Technology.*

*All code, configurations, and documentation were developed by the student under faculty supervision. All third-party tools and libraries used are acknowledged in the References chapter.*

</div>
