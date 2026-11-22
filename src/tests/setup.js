/**
 * ============================================================
 * Vitest Global Test Setup
 * - Imports @testing-library/jest-dom custom matchers
 * - Polyfills browser APIs not available in jsdom:
 *     IntersectionObserver (framer-motion, react-intersection-observer)
 *     ResizeObserver       (framer-motion)
 *     window.matchMedia    (responsive hooks)
 *     window.scrollTo      (ScrollToTop component)
 * ============================================================
 */
import '@testing-library/jest-dom';

// ── IntersectionObserver polyfill ─────────────────────────
globalThis.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};

// ── ResizeObserver polyfill ───────────────────────────────
globalThis.ResizeObserver = class ResizeObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};

// ── window.matchMedia polyfill ────────────────────────────
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

// ── window.scrollTo polyfill ──────────────────────────────
window.scrollTo = () => {};

