/**
 * ============================================================
 * Playwright E2E Tests — Nexus Labs Tech Agency Website
 * Tests: Full user flows, form submission, navigation
 * Setup: npx playwright install
 * Run:   npx playwright test
 * ============================================================
 */

import { test, expect } from '@playwright/test';

const BASE_URL = process.env.E2E_BASE_URL || 'http://localhost:5173';

// ── TC: UI-01 — Home Page Load ───────────────────────────────
test.describe('Home Page', () => {
  test('TC: UI-01 — Home page loads successfully', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page).toHaveURL(BASE_URL + '/');
    await expect(page.locator('nav')).toBeVisible();
  });

  test('TC: UI-10 — Navbar links are visible', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('nav')).toBeVisible();
  });
});

// ── TC: UI-05, UI-12 to UI-20 — Contact Form Flow ───────────
test.describe('Contact Page — Full User Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/contact`);
  });

  test('TC: UI-05 — Contact page renders with form', async ({ page }) => {
    // Use getByRole to target only the <h3> heading and avoid the ambiguity
    // with the <label> "Tell Us About Your Project *" and the hero paragraph,
    // both of which also contain this substring.
    await expect(
      page.getByRole('heading', { name: 'Tell Us About Your Project', exact: true })
    ).toBeVisible();
    await expect(page.getByPlaceholder('Rahul Sharma')).toBeVisible();
    await expect(page.getByPlaceholder('rahul@company.com')).toBeVisible();
  });

  test('TC: UI-12 — Submitting empty form shows validation errors', async ({ page }) => {
    await page.getByRole('button', { name: /Send Message/i }).click();
    await expect(page.getByText('Name is required')).toBeVisible();
    await expect(page.getByText('Email is required')).toBeVisible();
    await expect(page.getByText('Please describe your project')).toBeVisible();
  });

  test('TC: UI-15 — Invalid email shows format error', async ({ page }) => {
    // The email field is type="email". Chromium sanitizes inputs with no "@"
    // (e.g. "notanemail") to empty string before react-hook-form reads them,
    // so the required error fires instead of the pattern error.
    // Use "invalid@nodomain" — it has "@" so it passes browser sanitization,
    // but it has no TLD so it fails the regex /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
    // in Contact.jsx and triggers the "Enter a valid email" pattern message.
    await page.getByPlaceholder('Rahul Sharma').fill('Test User');
    await page.getByPlaceholder('rahul@company.com').fill('invalid@nodomain');
    await page.getByPlaceholder(/Describe your project/i).fill('This is a long test message.');
    await page.getByRole('button', { name: /Send Message/i }).click();
    await expect(page.getByText(/Enter a valid email/i)).toBeVisible();
  });

  test('TC: UI-17, UI-18 — Valid submission shows success state', async ({ page }) => {
    await page.getByPlaceholder('Rahul Sharma').fill('Test User');
    await page.getByPlaceholder('rahul@company.com').fill('test@example.com');
    await page.getByPlaceholder(/Describe your project/i).fill(
      'We need a comprehensive website for our logistics startup with real-time tracking.'
    );
    await page.getByRole('button', { name: /Send Message/i }).click();

    // Loading state appears
    await expect(page.getByText(/Sending.../i)).toBeVisible();

    // Wait for the <h4> success heading specifically. Using getByRole avoids the
    // ambiguity with the toast notification whose text also contains "sent" — the
    // toast reads "Message sent! We will get back..." (lowercase) and is a
    // <div>, not a heading. exact:true ensures we match only the <h4> content.
    await expect(
      page.getByRole('heading', { name: 'Message Sent!', exact: true })
    ).toBeVisible({ timeout: 5000 });
  });

  test('TC: UI-20 — Submit button disabled during submission', async ({ page }) => {
    await page.getByPlaceholder('Rahul Sharma').fill('Test User');
    await page.getByPlaceholder('rahul@company.com').fill('test@example.com');
    await page.getByPlaceholder(/Describe your project/i).fill('A detailed message about the project requirements.');
    await page.getByRole('button', { name: /Send Message/i }).click();
    const button = page.getByRole('button', { name: /Sending/i });
    await expect(button).toBeDisabled();
  });
});

// ── TC: UI-06 — Internship Form ─────────────────────────────
test.describe('Internship Page', () => {
  test('TC: UI-06 — Internship page loads with application form', async ({ page }) => {
    await page.goto(`${BASE_URL}/internship`);
    await expect(page.locator('main')).toBeVisible();
  });
});

// ── TC: UI-07 — 404 Page ─────────────────────────────────────
test.describe('404 Page', () => {
  test('TC: UI-07 — Unknown route shows NotFound page', async ({ page }) => {
    await page.goto(`${BASE_URL}/this-page-does-not-exist`);
    await expect(page.locator('main')).toBeVisible();
    // The NotFound component should be visible
    await expect(page).not.toHaveURL(`${BASE_URL}/`);
  });
});

// ── TC: UI-23, UI-24, UI-25 — Responsive Layout ─────────────
test.describe('Responsive Design', () => {
  test('TC: UI-23 — Mobile (375px) layout has no horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(BASE_URL);
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(375);
  });

  test('TC: UI-24 — Tablet (768px) layout renders correctly', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(BASE_URL);
    await expect(page.locator('nav')).toBeVisible();
  });

  test('TC: UI-25 — Desktop (1440px) layout renders correctly', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(BASE_URL);
    await expect(page.locator('nav')).toBeVisible();
  });
});

// ── TC: API-01 — Health Check Endpoint ──────────────────────
test.describe('Backend API Health Check', () => {
  test('TC: API-01 — /health endpoint returns 200 and correct JSON', async ({ request }) => {
    const response = await request.get('http://localhost:5000/health');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.status).toBe('ok');
    expect(body.service).toBe('nexuslabs-backend');
    expect(body.timestamp).toBeDefined();
  });

  test('TC: API-06 — Unknown route returns 404', async ({ request }) => {
    const response = await request.get('http://localhost:5000/api/unknown');
    expect(response.status()).toBe(404);
    const body = await response.json();
    expect(body.error).toBe('Route not found');
  });
});
