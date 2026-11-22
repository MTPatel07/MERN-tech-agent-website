/**
 * ============================================================
 * API Tests — Nexus Labs Backend (Supertest + Jest)
 * Tests: /health, /, 404 handler, CORS
 * Run: cd server && npm test
 * ============================================================
 */

import request from 'supertest';
import app from '../../server/app.js'; // Export app separately from server start

describe('GET /health — Health Check Endpoint', () => {
  test('TC: API-01 — returns 200 OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
  });

  test('TC: API-01 — response has status "ok"', async () => {
    const res = await request(app).get('/health');
    expect(res.body.status).toBe('ok');
  });

  test('TC: API-01 — response has correct service name', async () => {
    const res = await request(app).get('/health');
    expect(res.body.service).toBe('nexuslabs-backend');
  });

  test('TC: API-02 — response includes a valid ISO timestamp', async () => {
    const res = await request(app).get('/health');
    expect(res.body.timestamp).toBeDefined();
    expect(() => new Date(res.body.timestamp)).not.toThrow();
    expect(new Date(res.body.timestamp).toISOString()).toBe(res.body.timestamp);
  });

  test('TC: API-03 — response includes environment field', async () => {
    const res = await request(app).get('/health');
    expect(res.body.environment).toBeDefined();
    expect(typeof res.body.environment).toBe('string');
  });
});

describe('GET / — Root Route', () => {
  test('TC: API-04 — returns 200 and message field', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBeDefined();
  });

  test('TC: API-05 — returns correct version', async () => {
    const res = await request(app).get('/');
    expect(res.body.version).toBe('1.0.0');
  });
});

describe('404 Handler — Unknown Routes', () => {
  test('TC: API-06 — GET unknown route returns 404', async () => {
    const res = await request(app).get('/api/unknown-endpoint');
    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe('Route not found');
  });

  test('TC: API-07 — POST unknown route returns 404', async () => {
    const res = await request(app).post('/api/xyz');
    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe('Route not found');
  });
});

describe('CORS Validation', () => {
  test('TC: API-08 — allows configured origin', async () => {
    const res = await request(app)
      .get('/health')
      .set('Origin', 'http://localhost:5173');
    expect(res.headers['access-control-allow-origin']).toBe('http://localhost:5173');
  });

  test('TC: API-09 — does not reflect unknown origin', async () => {
    const res = await request(app)
      .get('/health')
      .set('Origin', 'http://evil-site.com');
    expect(res.headers['access-control-allow-origin']).not.toBe('http://evil-site.com');
  });
});
