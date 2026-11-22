# ============================================================
# Stage 1: Build — Node.js (React + Vite + TypeScript)
# ============================================================
FROM node:20-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy dependency files first (leverages Docker layer caching)
# If package.json hasn't changed, this layer is reused
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the production bundle (outputs to /app/dist)
RUN npm run build

# ============================================================
# Stage 2: Serve — Nginx (lightweight, production-ready)
# ============================================================
FROM nginx:1.25-alpine

# Remove default nginx page
RUN rm -rf /usr/share/nginx/html/*

# Copy the built React app from stage 1
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config (handles React Router SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start nginx in foreground (required for Docker)
CMD ["nginx", "-g", "daemon off;"]
