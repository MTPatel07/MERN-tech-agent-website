// ============================================================
// Playwright Configuration — Nexus Labs E2E Tests
// Run: npx playwright test
// ============================================================
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Test directory
  testDir: './src/tests/e2e',

  // Run tests in parallel
  fullyParallel: true,

  // Fail CI on test.only accidentally committed
  forbidOnly: !!process.env.CI,

  // Retry failed tests once in CI
  retries: process.env.CI ? 1 : 0,

  // Single worker in CI to avoid resource contention
  workers: process.env.CI ? 1 : undefined,

  // Reporter: HTML report for review
  reporter: [['html', { outputFolder: 'playwright-report' }], ['list']],

  use: {
    // Base URL for all navigation calls
    baseURL: process.env.E2E_BASE_URL || 'http://localhost:5173',

    // Collect traces on first failure retry
    trace: 'on-first-retry',

    // Screenshot on failure
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],

  // Start the dev server before running E2E tests
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 30000,
  },
});
