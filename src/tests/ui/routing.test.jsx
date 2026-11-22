/**
 * ============================================================
 * Navigation & Routing Tests (Vitest + Testing Library)
 * Tests: Each page component renders without crashing
 *
 * NOTE: We render individual page components (not <App>) because
 * App already contains <BrowserRouter> internally. We wrap each
 * page in <MemoryRouter> to satisfy react-router-dom's Link/useNavigate.
 * Run: npm test
 * ============================================================
 */

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// ── Page imports ─────────────────────────────────────────────
import Home from '../../pages/Home';
import Services from '../../pages/Services';
import Portfolio from '../../pages/Portfolio';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Internship from '../../pages/Internship';
import NotFound from '../../pages/NotFound';
import PrivacyPolicy from '../../pages/PrivacyPolicy';
import TermsOfService from '../../pages/TermsOfService';
import Navbar from '../../components/Navbar';

// ── Wrapper ─────────────────────────────────────────────────
const wrap = (Component) =>
  render(
    <HelmetProvider>
      <MemoryRouter>
        <Component />
      </MemoryRouter>
    </HelmetProvider>
  );

// ── TC: UI-01 to UI-09 — Each page renders without crashing ──
describe('Routing — Individual Page Components Render', () => {
  test('TC: UI-01 — Home page renders without crashing', () => {
    const { container } = wrap(Home);
    expect(container).toBeTruthy();
    expect(container.firstChild).not.toBeNull();
  });

  test('TC: UI-02 — Services page renders without crashing', () => {
    const { container } = wrap(Services);
    expect(container).toBeTruthy();
    expect(container.firstChild).not.toBeNull();
  });

  test('TC: UI-03 — Portfolio page renders without crashing', () => {
    const { container } = wrap(Portfolio);
    expect(container).toBeTruthy();
    expect(container.firstChild).not.toBeNull();
  });

  test('TC: UI-04 — About page renders without crashing', () => {
    const { container } = wrap(About);
    expect(container).toBeTruthy();
    expect(container.firstChild).not.toBeNull();
  });

  test('TC: UI-05 — Contact page renders with "Get In Touch" heading', () => {
    wrap(Contact);
    expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument();
  });

  test('TC: UI-06 — Internship page renders without crashing', () => {
    const { container } = wrap(Internship);
    expect(container).toBeTruthy();
    expect(container.firstChild).not.toBeNull();
  });

  test('TC: UI-07 — NotFound (404) page renders without crashing', () => {
    const { container } = wrap(NotFound);
    expect(container).toBeTruthy();
    expect(container.firstChild).not.toBeNull();
  });

  test('TC: UI-08 — Privacy Policy page renders without crashing', () => {
    const { container } = wrap(PrivacyPolicy);
    expect(container).toBeTruthy();
    expect(container.firstChild).not.toBeNull();
  });

  test('TC: UI-09 — Terms of Service page renders without crashing', () => {
    const { container } = wrap(TermsOfService);
    expect(container).toBeTruthy();
    expect(container.firstChild).not.toBeNull();
  });
});

// ── TC: UI-10 — Navbar Renders ───────────────────────────────
describe('Navbar — Renders on Page', () => {
  test('TC: UI-10 — Navbar component renders without crashing', () => {
    const { container } = render(
      <HelmetProvider>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </HelmetProvider>
    );
    expect(container).toBeTruthy();
    expect(container.firstChild).not.toBeNull();
  });
});
