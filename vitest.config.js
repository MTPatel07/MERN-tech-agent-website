// ============================================================
// Vitest Configuration — Nexus Labs Frontend Tests
// ============================================================
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    // Use jsdom for browser-like DOM environment
    environment: 'jsdom',

    // Global test setup — imports @testing-library/jest-dom matchers
    setupFiles: ['./src/tests/setup.js'],

    // Global flag so you don't have to import describe/test/expect in every file
    globals: true,

    // Test file patterns
    include: ['src/tests/ui/**/*.test.{js,jsx,ts,tsx}'],

    // Code coverage configuration
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/pages/**', 'src/components/**'],
      exclude: ['src/tests/**', 'src/main.tsx'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
