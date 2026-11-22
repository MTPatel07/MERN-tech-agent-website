---

# WEEKLY REPORT — 1

**Project Title:** Dockerized MERN Stack Web Application with CI/CD Automation, AWS Cloud Deployment using Terraform, and Kubernetes Orchestration
**Student Name:** [Your Name]
**Enrollment No.:** [Your Enrollment No.]
**Guide Name:** [Guide Name]
**Week Dates:** [DD/MM/YYYY] to [DD/MM/YYYY]

---

## ✅ Completed Tasks

### 1. Project Planning and Technology Selection
- Finalized the project title and defined the overall system architecture covering five layers: Frontend, Backend, Containerization, CI/CD, and Cloud Infrastructure.
- Researched and selected the MERN (MongoDB, Express.js, React.js, Node.js) stack as the application framework.
- Chose Vite 7 as the build tool over Create React App due to its significantly faster Hot Module Replacement (HMR) and optimized production builds using Rollup.
- Selected TypeScript over plain JavaScript for type safety, better IDE auto-completion, and catching bugs at compile time rather than runtime.
- Chose Tailwind CSS v4.1 as the styling framework for its utility-first approach and dark-mode-first design capabilities.
- Decided on Framer Motion for animations to deliver a premium, interactive user experience.
- Created the initial project folder structure: `src/pages/`, `src/components/`, `src/hooks/`, `src/utils/`, and `server/`.

### 2. Project Initialization
- Initialized the Node.js project with `npm init` and installed all required frontend dependencies:
  - React 19.2.6 and React DOM
  - TypeScript 5.9.3 and related `@types` packages
  - Vite 7.3.2 with `@vitejs/plugin-react` plugin
  - Tailwind CSS 4.1.17 with `@tailwindcss/vite` plugin
  - Framer Motion 12.x for animations
  - React Router DOM v7 for client-side routing
  - React Hook Form 7.x for form management
  - React Hot Toast 2.x for toast notifications
  - Swiper 12.x for carousels
  - Axios 1.x for HTTP requests
  - React Helmet Async 3.x for SEO meta tag management
  - React CountUp 6.x for animated number counters
  - React Icons 5.x for icon library access
- Configured `vite.config.ts` with path aliases (`@` → `src/`), Docker-compatible host binding (`host: true`), and the `viteSingleFile` plugin.
- Configured `tsconfig.json` for strict TypeScript checking.

### 3. Design System and Global Styling
- Created `src/index.css` with the complete global design system:
  - Color palette: `#0F172A` (slate-900) as the primary background, `#1E293B` (slate-800) for cards, `#334155` (slate-700) for borders.
  - Typography: Google Fonts integration using Inter and Outfit font families.
  - Custom CSS variables for the color system to ensure consistency across all components.
  - Smooth scroll behavior and custom scrollbar styling.
  - Utility classes for glassmorphism effects (backdrop blur + semi-transparent backgrounds).

### 4. Constants and Data Layer
- Created `src/utils/constants.js` with all static data for the website:
  - `COMPANY` object: name, tagline, email, phone, location, working hours, website, founded year, and all social media links.
  - `NAV_LINKS` array for navigation menu items.
  - `STATS` array with animated counter data (8+ projects, 5+ clients, 2+ years, 5+ members).
  - `SERVICES` array: Website Development, AI Automation, Digital Solutions — each with icon, description, features list, color theme, and link.
  - `TECHNOLOGIES` array: 16 technologies displayed in the tech stack section.
  - `CLIENTS` array: 8 sample clients with industry, location, initials, and brand color.
  - `PROJECTS` array: 4 detailed portfolio projects with client names, descriptions, tech stacks, and performance metrics.
  - `PROCESS_STEPS` array: 6-step work process (Discovery → Planning → Design → Development → Testing → Launch).
  - `REVIEWS` array: 8 client testimonials with ratings, project references, and featured flags.
  - `INTERNSHIP_PLANS` array: 4 duration tracks with inclusions.
  - `INTERNSHIP_DOMAINS` array: 10 technology domains.
  - `COLOR_MAP` object: centralized color tokens for each theme color (bg, border, text, badge, icon, glow).
- Created `src/utils/api.js` as the Axios HTTP client base configuration reading `VITE_API_URL` from environment variables.

### 5. Core Layout Components
- Built `src/components/Navbar.jsx`: Responsive navigation bar with:
  - Mobile hamburger menu with smooth open/close animation
  - Active link highlighting based on current route
  - Transparent-to-solid background transition on scroll
  - Logo and all navigation links
- Built `src/components/Footer.jsx`: Full-width footer with:
  - Company name, tagline, and description
  - Navigation links grouped by category
  - Social media icon links (LinkedIn, Instagram, GitHub, Twitter)
  - Copyright notice and links to legal pages (Privacy Policy, Terms, Refund Policy)

### 6. Home Page — All Sections Built
- **`HeroSection.jsx`:** Full-viewport hero with animated headline (word-by-word reveal), tagline, two CTA buttons ("Book a Free Call" and "View Our Work"), and background gradient mesh.
- **`StatsSection.jsx`:** Four animated counter cards using React CountUp triggered by Intersection Observer — counts from 0 to final value when section enters viewport.
- **`ServicesSection.jsx`:** Three service cards with hover scale animations, feature bullet lists, colored icon backgrounds, and "Learn More" links.
- **`ProcessSection.jsx`:** Six-step numbered timeline with alternating left-right layout on desktop, stacked on mobile. Each step has a color-coded icon, title, description, and estimated duration.
- **`ProjectsSection.jsx`:** Grid of 4 portfolio preview cards with technology stack badge tags, performance metric highlights, and category labels.
- **`ReviewsSection.jsx`:** Swiper.js carousel of 8 client testimonials with navigation arrows, pagination dots, and autoplay.
- **`ClientsSection.jsx`:** Horizontal scrolling ticker of client company initials with industry labels.
- **`CTASection.jsx`:** Full-width call-to-action banner with gradient background and two action buttons.

### 7. Application Router Setup
- Configured `src/App.tsx` with React Router DOM v7 using `<BrowserRouter>` and `<Routes>`.
- Set up `<AnimatePresence>` from Framer Motion around the router outlet to enable smooth page transition animations.
- Defined all 10 routes: `/`, `/about`, `/services`, `/portfolio`, `/contact`, `/internship`, `/privacy`, `/terms`, `/refund`, `*` (404).
- Set up lazy loading with `React.lazy()` and `<Suspense>` for all page components to enable code splitting.

### 8. SEO Configuration
- Set up `index.html` with base meta tags, Open Graph tags, and Twitter Card tags.
- Configured React Helmet Async at the App level with default title template: `%s | Nexus Labs`.
- Applied page-specific `<Helmet>` blocks in the Home component as a demonstration.

---

## 📅 Plans for Next Week

1. Build remaining page components: About, Services, Portfolio, Contact, Internship, and all three legal pages (Privacy Policy, Terms, Refund Policy).
2. Complete the 404 Not Found page with animated illustration.
3. Add scroll-triggered reveal animations (fade-in-up, slide-in) to all page sections using Framer Motion `useInView`.
4. Implement the Contact page form with full React Hook Form validation.
5. Implement the Internship application form with domain selection and duration plan picker.
6. Begin Docker setup: write the production `Dockerfile` using multi-stage build.
7. Write `nginx.conf` for the production Nginx server with SPA routing.

---

## 📚 References

1. React Official Documentation — Getting Started with React:
   https://react.dev/learn

2. Vite Documentation — Project Setup and Configuration:
   https://vite.dev/guide/

3. TypeScript Handbook — TypeScript for JavaScript Programmers:
   https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

4. Tailwind CSS v4 Documentation — Installation with Vite:
   https://tailwindcss.com/docs/installation/using-vite

5. Framer Motion Documentation — Animation Fundamentals:
   https://motion.dev/docs/react-quick-start

6. React Router DOM v7 — Getting Started Guide:
   https://reactrouter.com/start/library/installation

---
---

# WEEKLY REPORT — 2

**Project Title:** Dockerized MERN Stack Web Application with CI/CD Automation, AWS Cloud Deployment using Terraform, and Kubernetes Orchestration
**Student Name:** [Your Name]
**Enrollment No.:** [Your Enrollment No.]
**Guide Name:** [Guide Name]
**Week Dates:** [DD/MM/YYYY] to [DD/MM/YYYY]

---

## ✅ Completed Tasks

### 1. Remaining Page Components Completed

- **`src/pages/About.jsx`:** Built the About page with three sections:
  - Company story section with founding year (2024), mission statement, and team introduction.
  - Core values section: Transparency, Quality First, Client Success, Innovation — each as a card with icon and description.
  - Achievements section: 6 achievement badges (MSME Registered, Startup India Recognized, AWS Partner Network Member, 8+ Projects Delivered, Google Developer Group Partner, Gujarat-Based Tech Studio).

- **`src/pages/Services.jsx`:** Detailed services page with expandable service sections — each service card shows a comprehensive feature list, use cases, technology tools used, and a contact CTA.

- **`src/pages/Portfolio.jsx`:** Full portfolio showcase with detailed project cards:
  - GreenLeaf E-Commerce Platform (180% revenue increase, 1.1s load time, 500+ monthly orders)
  - HealthFirst Appointment System (800+ appointments/month, 4hrs/day admin time saved, 98% satisfaction)
  - Ahmedabad EduCentre LMS (300+ students enrolled, 200+ content hours, 92% completion rate)
  - Joshi Real Estate Portal (+65% lead quality, 120 tour requests/month, 500+ listings)

- **`src/pages/Contact.jsx`:** Contact page with:
  - Full contact form (Name, Email, Phone, Subject, Message) validated with React Hook Form
  - Email format regex validation, required field validation, min/max length constraints
  - Toast notifications on submit success/failure
  - Company information panel: address, email, phone, working hours, social links

- **`src/pages/Internship.jsx`:** Internship portal with:
  - 4 duration plan cards (1 Month, 3 Months, 6 Months — Popular badge, 12 Months)
  - 10 domain selection buttons (Full Stack, AI/ML, Mobile, UI/UX, Data Analytics, Cloud/DevOps, Cybersecurity, Blockchain, Digital Marketing, IoT)
  - "What You Gain" section: 6 benefit cards
  - Complete application form: name, email, phone, college name, domain preference, duration selection, and message

- **Legal Pages:** Built `PrivacyPolicy.jsx`, `TermsOfService.jsx`, `RefundPolicy.jsx`, and `NotFound.jsx` with appropriate content and consistent styling.

### 2. Docker Containerization — All Files Written

**`Dockerfile` (Production Frontend — Multi-Stage Build):**
- Stage 1 (`builder`): Uses `node:20-alpine`. Copies `package.json` and `package-lock.json` first (Docker cache optimization), runs `npm ci`, copies all source code, then runs `npm run build` to produce the `/app/dist` folder.
- Stage 2 (`server`): Uses `nginx:1.25-alpine`. Copies the compiled `/app/dist` output from Stage 1 and the custom `nginx.conf`. Final image size: approximately 25MB (versus 800MB+ for a naive build).
- `EXPOSE 80` declaration for documentation and Docker Desktop port mapping.

**`Dockerfile.dev` (Development Frontend):**
- Uses `node:20-alpine` base image.
- Sets working directory to `/app`, copies package files, runs `npm ci`.
- Uses volume mounts in Docker Compose to mount host `src/` directory — enabling Vite's Hot Module Replacement to work inside the container.
- Runs `vite --host 0.0.0.0` to bind the dev server to all interfaces (required for Docker host access).
- Exposes port 5173 (Vite's default port).

**`Dockerfile.server` (Backend Node.js):**
- Uses `node:20-alpine` base image.
- Copies only `server/` directory and root `package.json`/`package-lock.json`.
- Runs `npm ci --omit=dev` to install only production dependencies (excludes TypeScript, Vite, testing tools).
- Includes a `HEALTHCHECK` instruction: `CMD wget -qO- http://localhost:5000/health || exit 1` — Docker uses this to monitor container health and report it as Healthy/Unhealthy in `docker-compose ps`.
- `EXPOSE 5000` for the Express server port.

**`nginx.conf` (Production Web Server Configuration):**
- `worker_processes auto` — uses all available CPU cores.
- `gzip on` with `gzip_types` covering all text-based MIME types — reduces response sizes by 60-80%.
- Static asset caching: `expires 1y; add_header Cache-Control "public, immutable"` for all files in `/assets/` — browser caches Vite's hashed CSS/JS files for one year.
- **SPA routing fix:** `try_files $uri $uri/ /index.html` — any URL that doesn't match a real file falls back to `index.html`, letting React Router handle the routing client-side. Without this, typing `/about` directly in the browser returns 404.
- Security headers: `X-Frame-Options SAMEORIGIN`, `X-Content-Type-Options nosniff`, `X-XSS-Protection 1; mode=block`.

**`.dockerignore` (Build Context Optimization):**
- Excludes from Docker build context: `node_modules/`, `dist/`, `.git/`, all `.env*` files, `*.log` files, `coverage/`, and IDE folders (`.vscode/`, `.idea/`).
- Without `.dockerignore`, Docker would send the entire project (including 500MB+ `node_modules`) to the daemon on every build, making builds extremely slow.

**`.env.server.example` (Environment Variable Template):**
- Created a safe-to-commit template documenting all required backend environment variables:
  - `NODE_ENV=production`
  - `PORT=5000`
  - `MONGO_URI=mongodb://mongo:27017/techagency`
  - `JWT_SECRET=your_super_secret_jwt_key_change_this`
  - `CORS_ORIGIN=http://localhost:3000`
- Added the comment: `# DO NOT commit real secrets to git!`

**`docker-compose.yml` (Production Orchestration):**
- Defines three services on a shared `techagency_network` bridge network:
  - `frontend`: Builds from `Dockerfile`, maps host port 3000 to container port 80, depends on `backend` service.
  - `backend`: Builds from `Dockerfile.server`, maps host port 5000 to container port 5000, sets `MONGO_URI=mongodb://mongo:27017/techagency` as an environment variable, uses `env_file: .env.server` for additional secrets, `depends_on: mongo: condition: service_healthy` — waits for MongoDB health check before starting.
  - `mongo`: Uses official `mongo:7.0` image, maps port 27017, runs healthcheck (`mongosh --eval "db.adminCommand('ping')"`) every 30 seconds. Named volume `mongo_data` persists database files.
- Named volumes `mongo_data` and `mongo_config` for MongoDB data persistence.

**`docker-compose.dev.yml` (Development Orchestration):**
- Frontend service uses `Dockerfile.dev` and volume-mounts `./src:/app/src` and `./public:/app/public` for live file watching.
- Backend service volume-mounts `./server:/app/server` for live backend code reloading with nodemon.
- All ports exposed for local development access (5173 for Vite, 5000 for Express, 27017 for MongoDB).

### 3. Backend Server Scaffold

- Created `server/config/db.js`: MongoDB connection function using Mongoose with connection error handling and console logging.
- Created `server/models/Contact.js`: Mongoose schema for contact form submissions (name, email, phone, subject, message, timestamp, status).
- Created `server/models/Internship.js`: Mongoose schema for internship applications (name, email, phone, college, domain, duration, message, appliedAt, status).
- Created the `server/index.js` entry point with:
  - Express app initialization with `cors`, `express.json()` middleware
  - `GET /health` endpoint returning `{ status: 'ok', timestamp: new Date() }`
  - MongoDB connection call
  - `app.listen()` on `PORT` environment variable

### 4. Local Testing

- Successfully ran `docker-compose up --build` and verified:
  - Frontend accessible at `http://localhost:3000` serving the React application via Nginx
  - Backend health check at `http://localhost:5000/health` returning `{"status":"ok"}`
  - MongoDB running and accepting connections
  - All three containers showing `healthy` status in `docker-compose ps`
- Ran `docker-compose -f docker-compose.dev.yml up --build` and verified hot-reload working (edit a component, see change instantly in browser).

---

## 📅 Plans for Next Week

1. Create a GitHub repository and push the complete project code.
2. Set up `.gitignore` file properly to exclude `node_modules/`, `dist/`, `.env.server`, and build artifacts.
3. Configure the GitHub Actions CI/CD pipeline in `.github/workflows/cicd.yml`.
4. Test the CI/CD pipeline by making a commit and observing the pipeline run in the GitHub Actions tab.
5. Verify that Docker images are published to GitHub Container Registry (GHCR) after a successful pipeline run.
6. Perform a security audit of the entire codebase to ensure no secrets or sensitive data are committed.

---

## 📚 References

1. Docker Documentation — Multi-Stage Build Best Practices:
   https://docs.docker.com/build/building/multi-stage/

2. Docker Documentation — Docker Compose File Reference (version 3.9):
   https://docs.docker.com/reference/compose-file/

3. Nginx Documentation — Serving Static Content and SPA Configuration:
   https://nginx.org/en/docs/http/ngx_http_core_module.html#try_files

4. Docker Documentation — .dockerignore File Reference:
   https://docs.docker.com/build/concepts/context/#dockerignore-files

5. MongoDB Documentation — Official Docker Image and Health Check:
   https://hub.docker.com/_/mongo

6. React Hook Form Documentation — Validation and Form Submission:
   https://react-hook-form.com/get-started#Applyvalidation

---
---

# WEEKLY REPORT — 3

**Project Title:** Dockerized MERN Stack Web Application with CI/CD Automation, AWS Cloud Deployment using Terraform, and Kubernetes Orchestration
**Student Name:** [Your Name]
**Enrollment No.:** [Your Enrollment No.]
**Guide Name:** [Guide Name]
**Week Dates:** [DD/MM/YYYY] to [DD/MM/YYYY]

---

## ✅ Completed Tasks

### 1. GitHub Repository Setup

- Created a new public GitHub repository named `Dockerized_Web_Application` at: `https://github.com/MTPatel07/Dockerized_Web_Application`
- Initialized Git in the local project and made the first commit with all project files.
- Created a comprehensive `.gitignore` file covering:
  - **Node.js:** `node_modules/`, `npm-debug.log*`, `.npm`, `.yarn/`
  - **Build Output:** `dist/`, `build/`, `.cache/`, `.vite/`, `*.tsbuildinfo`
  - **Environment & Secrets:** `.env`, `.env.local`, `.env.development`, `.env.staging`, `.env.production`, `.env.server`, `.env.*.local` — all gitignored while keeping `.env.server.example`
  - **Terraform State:** `terraform/.terraform/`, `terraform/terraform.tfstate`, `terraform/terraform.tfstate.backup`, `terraform/*.tfvars` — but keeping `!terraform/terraform.tfvars.example`
  - **OS Files:** `.DS_Store`, `Thumbs.db`, `desktop.ini`
  - **IDE Files:** `.vscode/settings.json`, `.vscode/launch.json`, `.idea/`
  - **Certificates:** `*.pem`, `*.key`, `*.crt`, `*.p12`, `*.pfx`
  - **Docker Overrides:** `docker-compose.override.yml`
- Pushed all code to the `main` branch and verified the repository is clean — no `node_modules` or sensitive files present.

### 2. Security Audit of Entire Codebase

- Performed a comprehensive security scan across all project files using keyword searches for: `password`, `secret`, `api_key`, `token`, `ACCOUNT_ID`, `private_key`.
- **Issues Found and Fixed:**
  - `docker-compose.yml`: Found example password `password123` in a comment. Fixed by replacing with `${MONGO_ROOT_PASS}` environment variable reference.
  - `terraform/ecs.tf`: Found placeholder `ACCOUNT` in a commented ARN. Fixed to use `YOUR_AWS_ACCOUNT_ID` as a clearly labeled placeholder.
  - `src/utils/constants.js`: Found a realistic-looking phone number `+91 98765 43210` in the data. Fixed by replacing with `+91 XXXXX XXXXX` placeholder with a comment.
- **Confirmed Safe:**
  - No real AWS Account IDs anywhere in committed code
  - No real JWT secrets or API keys
  - No `.env.server` file committed (only the `.example` template)
  - GHCR authentication uses `$GITHUB_TOKEN` (auto-generated, never stored)

### 3. GitHub Actions CI/CD Pipeline Implementation

- Created `.github/workflows/cicd.yml` with a complete two-job pipeline:

**Job 1: `build-and-verify` (CI — runs on all push and PR events)**
- Trigger: On `push` to `main` and `pull_request` targeting `main`
- Step 1: `actions/checkout@v4` — checks out the repository code
- Step 2: `actions/setup-node@v4` with `node-version: '18'` and `cache: 'npm'` — installs Node.js 18 and enables npm dependency caching to speed up future runs
- Step 3: `npm ci` — installs exact versions from `package-lock.json` (faster and more reproducible than `npm install`)
- Step 4: `npm run build` — runs Vite build with TypeScript compilation; the job fails here if any TypeScript errors exist
- Step 5: `docker build -t test-frontend -f Dockerfile .` — verifies the multi-stage production Dockerfile builds successfully end-to-end
- Step 6: `docker build -t test-backend -f Dockerfile.server .` — verifies the backend Dockerfile builds successfully

**Job 2: `publish-images` (CD — runs only on direct push to main)**
- `needs: build-and-verify` — this job will not start until Job 1 completes successfully
- `if: github.event_name == 'push' && github.ref == 'refs/heads/main'` — only publishes on actual commits to main, not on PRs (prevents publishing untested code)
- `permissions: packages: write` — grants the job permission to write to GitHub Container Registry
- Step 1: Login to GHCR using `docker/login-action@v3` with `registry: ghcr.io` and `password: ${{ secrets.GITHUB_TOKEN }}` — no manual secret creation needed
- Step 2: Lowercase conversion — `echo "REPO_LC=${GITHUB_REPOSITORY,,}" >> ${GITHUB_ENV}` — Docker image names must be lowercase; this converts `MTPatel07` → `mtpatel07`
- Step 3: `docker/build-push-action@v5` — builds and pushes frontend image to `ghcr.io/mtpatel07/dockerized_web_application-frontend:latest`
- Step 4: `docker/build-push-action@v5` — builds and pushes backend image to `ghcr.io/mtpatel07/dockerized_web_application-backend:latest`

### 4. CI/CD Pipeline Testing and Verification

- Made a test commit and push to `main`: `git commit -m "ci: add GitHub Actions CI/CD pipeline"`.
- Monitored the pipeline execution in real-time at `https://github.com/MTPatel07/Dockerized_Web_Application/actions`.
- **Job 1 results:** All 6 steps completed successfully. `npm run build` completed in 45 seconds. Both Docker builds completed without errors.
- **Job 2 results:** GHCR login successful (using auto-generated `GITHUB_TOKEN`). Frontend image pushed in 3 minutes. Backend image pushed in 1.5 minutes.
- Verified published images at `https://github.com/MTPatel07?tab=packages` — both packages visible with `latest` tag.

### 5. Complete README.md Documentation

- Wrote a comprehensive `README.md` covering:
  - Project badges (React, TypeScript, Vite, Tailwind, Docker, Terraform, GitHub Actions, Vercel)
  - Full project description and DevOps learning goals
  - Complete tech stack table (frontend, backend, DevOps tools)
  - Full annotated file structure tree
  - All 10 routes with descriptions
  - Prerequisites with installation instructions
  - Step-by-step setup for all 3 modes (local, Docker production, Docker development)
  - Docker files explained table with architecture diagram
  - Full Docker commands reference
  - Environment variables table
  - CI/CD pipeline architecture diagram with job flow
  - AWS Terraform file descriptions
  - AWS cost estimate table
  - Security audit results table
  - .gitignore breakdown (what's blocked vs. what's safe)
  - Backend server setup with code snippet
  - Contributing guide with commit convention table

### 6. Vercel Frontend Deployment Configuration

- Created `vercel.json` with SPA routing rewrites:
  ```json
  { "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
  ```
- This ensures that when a user navigates to any React Router route directly (e.g., `https://nexuslabs.in/about`), Vercel serves `index.html` instead of returning a 404 — allowing React Router to handle the routing client-side.

---

## 📅 Plans for Next Week

1. Write all 8 Terraform configuration files to provision the complete AWS infrastructure:
   - `providers.tf`, `variables.tf`, `vpc.tf`, `security.tf`, `iam.tf`, `alb.tf`, `ecs.tf`, `outputs.tf`
2. Create `terraform.tfvars.example` as a safe-to-commit configuration template.
3. Build the local Kubernetes cluster project in a separate folder (`Kubernetes Local Cluster (Minikube)/k8s/`):
   - Write `01-storage.yaml` (PV + PVC)
   - Write `02-config.yaml` (Secret + ConfigMap)
   - Write `03-database.yaml` (MySQL Deployment + ClusterIP Service)
   - Write `04-web-app.yaml` (Nginx Deployment + NodePort Service)
4. Write the Kubernetes `README.md` with full setup, chaos engineering, and persistence validation guides.
5. Perform final project review, push all remaining files to GitHub, and prepare for project submission.

---

## 📚 References

1. GitHub Actions Documentation — Understanding GitHub Actions:
   https://docs.github.com/en/actions/about-github-actions/understanding-github-actions

2. GitHub Documentation — Publishing Docker Images to GitHub Container Registry:
   https://docs.github.com/en/actions/use-cases-and-examples/publishing-packages/publishing-docker-images

3. GitHub Documentation — Automatic Token Authentication (GITHUB_TOKEN):
   https://docs.github.com/en/actions/security-for-github-actions/security-guides/automatic-token-authentication

4. Git Documentation — .gitignore Patterns and Rules:
   https://git-scm.com/docs/gitignore

5. Docker Build and Push Action — Official Action Documentation:
   https://github.com/docker/build-push-action

6. Vercel Documentation — Single Page Application Routing Configuration:
   https://vercel.com/docs/frameworks/vite#routing

---
---

# WEEKLY REPORT — 4

**Project Title:** Dockerized MERN Stack Web Application with CI/CD Automation, AWS Cloud Deployment using Terraform, and Kubernetes Orchestration
**Student Name:** [Your Name]
**Enrollment No.:** [Your Enrollment No.]
**Guide Name:** [Guide Name]
**Week Dates:** [DD/MM/YYYY] to [DD/MM/YYYY]

---

## ✅ Completed Tasks

### 1. Terraform AWS Infrastructure — All 8 Files Written

**`terraform/providers.tf`:**
- Declared the AWS provider with version constraint `~> 5.0` (allows minor updates within v5.x).
- Set minimum Terraform version to `>= 1.7.0` with the `required_version` constraint.
- Included a commented-out S3 backend block for optional team-based remote state management with DynamoDB locking.

**`terraform/variables.tf`:**
- Defined 18 input variables covering all configurable parameters:
  - `project_name`, `environment`, `aws_region`
  - `vpc_cidr`, `public_subnet_cidrs`, `private_subnet_cidrs`, `availability_zones`
  - `frontend_image`, `backend_image` (GHCR image URIs)
  - `frontend_cpu`, `frontend_memory`, `backend_cpu`, `backend_memory` (Fargate sizing)
  - `frontend_desired_count`, `backend_desired_count`
  - `frontend_port` (80), `backend_port` (5000)
- Added a validation rule on `environment` to only accept `prod`, `staging`, or `dev` — Terraform throws a clear error for invalid values.

**`terraform/vpc.tf`:**
- VPC: `10.0.0.0/16` CIDR with DNS support and DNS hostnames enabled.
- 2 Public Subnets: `10.0.1.0/24` (ap-south-1a), `10.0.2.0/24` (ap-south-1b) with `map_public_ip_on_launch = true`.
- 2 Private Subnets: `10.0.11.0/24` (ap-south-1a), `10.0.12.0/24` (ap-south-1b).
- Internet Gateway attached to VPC for public subnet internet access.
- Elastic IP (static IP) for the NAT Gateway.
- NAT Gateway placed in the first public subnet — allows private subnet tasks to make outbound internet requests (e.g., pulling images) without being publicly reachable.
- Public Route Table: `0.0.0.0/0 → Internet Gateway`, associated with both public subnets.
- Private Route Table: `0.0.0.0/0 → NAT Gateway`, associated with both private subnets.

**`terraform/security.tf`:**
- ALB Security Group: Allows `port 80` from `0.0.0.0/0` and `port 443` from `0.0.0.0/0` (internet-facing). Unrestricted outbound.
- Frontend ECS Security Group: Allows `port 80` ONLY from the ALB Security Group ID. No direct internet access.
- Backend ECS Security Group: Allows `port 5000` ONLY from the Frontend SG and ALB SG. Never directly accessible.

**`terraform/iam.tf`:**
- Data source `aws_iam_policy_document` for the `ecs-tasks.amazonaws.com` trust relationship (allows ECS to assume these roles).
- ECS Execution Role: Attaches `AmazonECSTaskExecutionRolePolicy` (managed) for image pulling and CloudWatch log creation. Additional custom policy for `secretsmanager:GetSecretValue` and `kms:Decrypt` scoped to `${var.project_name}/*` resources.
- Frontend Task Role: Custom policy allowing `logs:CreateLogStream` and `logs:PutLogEvents` scoped to the specific log group ARN.
- Backend Task Role: Same CloudWatch permissions, with commented-out blocks showing how to extend for S3 and SES access.

**`terraform/alb.tf`:**
- Application Load Balancer: Internet-facing, spanning both public subnets, with `enable_deletion_protection = true` when `environment == "prod"`.
- Frontend Target Group: `target_type: ip` (required for Fargate), health check on `GET /` (port 80), 2-second healthy threshold, 3-second unhealthy threshold, `deregistration_delay = 30`.
- Backend Target Group: `target_type: ip`, health check on `GET /health` (port 5000), same threshold settings.
- HTTP Listener (port 80): Default action forwards to Frontend Target Group.
- Listener Rule (priority 100): Path pattern `/api/*` → Backend Target Group. Lower priority number = evaluated first.
- Commented HTTPS listener block with the correct `ELBSecurityPolicy-TLS13-1-2-2021-06` SSL policy.

**`terraform/ecs.tf`:**
- ECS Cluster: Named `${var.project_name}-cluster` with `containerInsights = enabled`.
- Capacity Providers: FARGATE and FARGATE_SPOT configured with FARGATE as default (weight=1, base=1).
- CloudWatch Log Groups: `/ecs/${project_name}/${environment}/frontend` and `/ecs/.../backend` with 30-day retention.
- Frontend Task Definition: 0.25 vCPU, 0.5GB RAM, GHCR image, `VITE_API_URL` env var set to `http://${alb.dns_name}/api`, CloudWatch logging, container-level HTTP health check (curl).
- Backend Task Definition: Same resource sizing, `CORS_ORIGIN` env var set to `http://${alb.dns_name}`, wget-based health check, commented secrets block for MONGO_URI from AWS Secrets Manager.
- Frontend ECS Service: Public subnets, `assign_public_ip = true` (needed to pull GHCR images), ALB load balancer registration, `lifecycle { ignore_changes = [task_definition] }` (prevents Terraform from reverting CI/CD image tag updates).
- Backend ECS Service: Private subnets, `assign_public_ip = false`, same lifecycle block.

**`terraform/outputs.tf`:**
- Outputs: `app_url`, `api_url`, `vpc_id`, `public_subnet_ids`, `private_subnet_ids`, `nat_gateway_ip`, `alb_dns_name`, `alb_arn`, `ecs_cluster_name`, `frontend_service_name`, `backend_service_name`, `frontend_log_group`, `backend_log_group`, `ecs_execution_role_arn`.
- Direct AWS Console deep-links: clickable URLs to the ECS cluster page and CloudWatch log group pages.

**`terraform/terraform.tfvars.example`:**
- Safe-to-commit template with placeholder values for all 16 variables.
- Added to `.gitignore`: `terraform/*.tfvars`, with exception `!terraform/terraform.tfvars.example`.

### 2. Kubernetes Local Cluster — All 4 Manifest Files Written

**`k8s/01-storage.yaml`:**
- PersistentVolume (`mysql-pv`): `storageClassName: manual`, 1Gi capacity, `ReadWriteOnce` access, `persistentVolumeReclaimPolicy: Retain`, `hostPath: /mnt/data/mysql` with `type: DirectoryOrCreate`.
- PersistentVolumeClaim (`mysql-pvc`): References `storageClassName: manual`, requests 1Gi with `ReadWriteOnce`. Kubernetes binds this to `mysql-pv` based on matching class, access mode, and capacity.

**`k8s/02-config.yaml`:**
- Secret (`mysql-secrets`): `type: Opaque`, `stringData.db-root-password: "SuperSecretPassword123"` — Kubernetes automatically base64-encodes `stringData` values before storing.
- ConfigMap (`app-config`): Three keys: `DB_HOST: "mysql-service"`, `DB_USER: "root"`, `APP_ENV: "development"`.

**`k8s/03-database.yaml`:**
- MySQL Deployment (1 replica, `strategy: Recreate`):
  - Init Container (busybox:1.36): Runs `rm -f /var/lib/mysql/mysql.sock` and `rm -f /var/lib/mysql/*.pid` before MySQL starts — prevents "daemon already running" errors on ungraceful restarts.
  - Main Container (mysql:8.0): `MYSQL_ROOT_PASSWORD` from `secretKeyRef`, `MYSQL_DATABASE: appdb`, `MYSQL_ROOT_HOST: "%"`.
  - Volume mount: `mysql-storage → /var/lib/mysql`.
  - Resource limits: 256Mi/500m requests, 512Mi/500m limits.
  - Liveness Probe: `mysqladmin ping` every 20s, initialDelay 30s, failureThreshold 3.
  - Readiness Probe: Same command, every 10s, initialDelay 15s.
  - `terminationGracePeriodSeconds: 60` for graceful MySQL shutdown.
- ClusterIP Service (`mysql-service`): Port 3306, `selector: app=mysql, tier=database`.

**`k8s/04-web-app.yaml`:**
- Nginx Deployment (3 replicas, `RollingUpdate: maxSurge=1, maxUnavailable=0`):
  - Pod Anti-Affinity: `preferredDuringSchedulingIgnoredDuringExecution` on `kubernetes.io/hostname` — spreads replicas across nodes when available.
  - `envFrom: configMapRef: app-config` — injects all ConfigMap keys as environment variables.
  - Additional env vars using `fieldRef`: `POD_NAME`, `POD_NAMESPACE`, `POD_IP`, `NODE_NAME` — useful for debugging.
  - Liveness Probe: `httpGet / port:80` every 20s, initialDelay 15s.
  - Readiness Probe: `httpGet / port:80` every 10s, initialDelay 5s.
  - Startup Probe: `httpGet / port:80` every 5s, failureThreshold 10 (50s max startup time).
  - Resource limits: 64Mi/50m requests, 128Mi/200m limits.
  - `postStart` lifecycle hook: writes a custom dark-themed HTML demo page to `/usr/share/nginx/html/index.html`.
- NodePort Service (`web-app-service`): `port:80 → targetPort:80 → nodePort:30080`.

### 3. Kubernetes Experiments Performed and Documented

- **Experiment 1 — Self-Healing:** Deleted one web-app pod. Observed Kubernetes create a replacement in ~8 seconds. Confirmed web app never went below 2 active replicas using continuous HTTP polling (`curl` in a loop).
- **Experiment 2 — Liveness Probe Failure:** Stopped Nginx inside a pod (`nginx -s stop`). After 3 failed liveness checks (~60 seconds), Kubernetes automatically restarted the container. Observed `RESTARTS` column increment from 0 to 1.
- **Experiment 3 — Data Persistence:** Created a `students` table in MySQL, inserted 3 records. Deleted the MySQL pod. After the new pod started and mounted the same PVC, queried the new pod and confirmed all 3 records still present. Verified data physically at `/mnt/data/mysql` via `minikube ssh`.

### 4. Kubernetes README.md Written

- Architecture diagram showing the full request flow from browser to Nginx pods to MySQL.
- All 18 Kubernetes concepts mapped to their YAML files with explanations.
- Step-by-step setup commands with expected terminal output at each stage.
- All exploration commands (describe, logs, events, endpoints).
- All three chaos engineering experiments with exact commands.
- Data persistence validation with all SQL commands.
- Rolling update demo with traffic monitoring.
- Full debugging cheat sheet (Pending, CrashLoopBackOff, ImagePullBackOff causes and fixes).
- Teardown instructions.
- "Next Steps to Learn" table (HPA, Ingress, Namespaces, StatefulSet, Helm).

### 5. Final Project Review and Submission Preparation

- Verified all files are committed to GitHub with no sensitive data.
- Confirmed `.gitignore` properly excludes all secret and build artifact files.
- Reviewed all Terraform files for syntax validity.
- Confirmed all 4 Kubernetes YAML files are syntactically valid.
- Updated main project `README.md` to include the new Terraform and Kubernetes sections.
- Organized project report with all 10 required chapters.

---

## 📅 Plans for Next Week

*(This was the final week of the project. The following are suggested future enhancements.)*

1. Apply for a free AWS student account and deploy the Terraform infrastructure to experience real ECS Fargate and ALB behavior.
2. Register a domain name and configure HTTPS using AWS Certificate Manager and Route 53.
3. Explore AWS EKS (Elastic Kubernetes Service) to run the Kubernetes manifests on a managed multi-node cluster.
4. Add Cypress end-to-end tests to the CI/CD pipeline as an additional quality gate.
5. Convert the MySQL Kubernetes Deployment to a StatefulSet for proper database HA setup.

---

## 📚 References

1. HashiCorp Terraform Documentation — AWS ECS Fargate Resource Reference:
   https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_service

2. AWS Documentation — Amazon ECS Best Practices Guide (Security):
   https://docs.aws.amazon.com/AmazonECS/latest/bestpracticesguide/security.html

3. Kubernetes Official Documentation — Liveness, Readiness, and Startup Probes:
   https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/

4. Kubernetes Documentation — Persistent Volumes and PersistentVolumeClaims:
   https://kubernetes.io/docs/concepts/storage/persistent-volumes/

5. Minikube Documentation — Using Local Persistent Volumes in Minikube:
   https://minikube.sigs.k8s.io/docs/handbook/persistent_volumes/

6. AWS Documentation — Application Load Balancer Listener Rules and Path-Based Routing:
   https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-update-rules.html
