// ============================================================
// Nexus Labs — Backend API Server (Express + MongoDB)
// ============================================================
import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ────────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);

// ── Health Check ──────────────────────────────────────────────
// This endpoint is used by:
//   - Docker HEALTHCHECK directive in Dockerfile.server
//   - AWS ALB target group health polling
//   - Kubernetes liveness/readiness probes (if deployed to K8s)
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "nexuslabs-backend",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

// ── Root Route ────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Nexus Labs API Server is running.",
    version: "1.0.0",
    docs: "/health",
  });
});

// ── API Routes (placeholder — extend as needed) ───────────────
// app.use('/api/contact', contactRoutes);
// app.use('/api/internship', internshipRoutes);

// ── 404 Handler ───────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// ── Global Error Handler ──────────────────────────────────────
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal server error" });
});

// ── Start Server ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Nexus Labs API running on port ${PORT}`);
  console.log(`   Environment : ${process.env.NODE_ENV || "development"}`);
  console.log(`   Health check: http://localhost:${PORT}/health`);
});
