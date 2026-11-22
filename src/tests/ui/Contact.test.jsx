/**
 * ============================================================
 * Contact Form — UI Component Tests (Vitest + Testing Library)
 * Tests: validation messages, submit flow, state changes
 * Run: npm test
 * ============================================================
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import ContactPage from '../../pages/Contact';

// ── Wrapper to provide routing and toast context ────────────
const renderContact = () =>
  render(
    <HelmetProvider>
      <MemoryRouter>
        <Toaster />
        <ContactPage />
      </MemoryRouter>
    </HelmetProvider>
  );

// ── TC: UI-05 — Contact page renders ────────────────────────
describe('Contact Page — Rendering', () => {
  test('TC: UI-05 — Contact form is visible on page load', () => {
    renderContact();
    // Use heading role to target the <h3> specifically — the page also has
    // a <p> and a <label> containing the same phrase, causing getByText to
    // throw "multiple elements found".
    expect(screen.getByRole('heading', { name: /Tell Us About Your Project/i })).toBeInTheDocument();
  });

  test('TC: UI-12 — All required field inputs are present', () => {
    renderContact();
    expect(screen.getByPlaceholderText(/Rahul Sharma/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/rahul@company.com/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Describe your project/i)).toBeInTheDocument();
  });

  test('TC: UI-21 — Service dropdown is present', () => {
    renderContact();
    expect(screen.getByText(/Select a service/i)).toBeInTheDocument();
  });

  test('TC: UI-22 — Budget dropdown is present', () => {
    renderContact();
    expect(screen.getByText(/Select budget range/i)).toBeInTheDocument();
  });
});

// ── TC: UI-12 to UI-16 — Form Validation ────────────────────
describe('Contact Form — Validation Messages', () => {
  test('TC: UI-12 — Submitting empty form shows all required errors', async () => {
    renderContact();
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));
    await waitFor(() => {
      expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Please describe your project/i)).toBeInTheDocument();
    });
  });

  test('TC: UI-13 — Name field required error', async () => {
    renderContact();
    await userEvent.type(screen.getByPlaceholderText(/rahul@company.com/i), 'test@test.com');
    await userEvent.type(screen.getByPlaceholderText(/Describe your project/i), 'This is a long enough message for testing.');
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));
    await waitFor(() => {
      expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
    });
  });

  test('TC: UI-14 — Email field required error', async () => {
    renderContact();
    await userEvent.type(screen.getByPlaceholderText(/Rahul Sharma/i), 'Test User');
    await userEvent.type(screen.getByPlaceholderText(/Describe your project/i), 'This is a long enough message for testing.');
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));
    await waitFor(() => {
      expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    });
  });

  test('TC: UI-15 — Invalid email format shows error', async () => {
    renderContact();
    // 'invalid@nodomain' has an @ so jsdom does NOT sanitise it to empty,
    // but it has no .tld so it fails react-hook-form pattern /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
    await userEvent.type(screen.getByPlaceholderText(/Rahul Sharma/i), 'Test User');
    await userEvent.type(screen.getByPlaceholderText(/rahul@company.com/i), 'invalid@nodomain');
    await userEvent.type(screen.getByPlaceholderText(/Describe your project/i), 'Long enough message here for testing purposes.');
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));
    await waitFor(() => {
      expect(screen.getByText(/Enter a valid email/i)).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  test('TC: UI-16 — Message field required error', async () => {
    renderContact();
    await userEvent.type(screen.getByPlaceholderText(/Rahul Sharma/i), 'Test User');
    await userEvent.type(screen.getByPlaceholderText(/rahul@company.com/i), 'test@test.com');
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));
    await waitFor(() => {
      expect(screen.getByText(/Please describe your project/i)).toBeInTheDocument();
    });
  });
});

// ── TC: UI-17 to UI-20 — Submit Flow ────────────────────────
describe('Contact Form — Submission Flow', () => {
  test('TC: UI-20 — Submit button is disabled and shows "Sending..." while submitting', async () => {
    renderContact();
    await userEvent.type(screen.getByPlaceholderText(/Rahul Sharma/i), 'Test User');
    await userEvent.type(screen.getByPlaceholderText(/rahul@company.com/i), 'test@test.com');
    await userEvent.type(screen.getByPlaceholderText(/Describe your project/i), 'This is a test message long enough.');
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));
    await waitFor(() => {
      expect(screen.getByText(/Sending.../i)).toBeInTheDocument();
    });
  });

  test('TC: UI-18 — Success message renders after submit', async () => {
    // Use userEvent.setup() (v14 API) — fires real keyboard events that
    // react-hook-form's uncontrolled input listeners pick up correctly.
    const user = userEvent.setup({ delay: null });
    renderContact();
    await user.type(screen.getByPlaceholderText(/Rahul Sharma/i), 'Test User');
    await user.type(screen.getByPlaceholderText(/rahul@company.com/i), 'test@example.com');
    await user.type(screen.getByPlaceholderText(/Describe your project/i), 'This is a full project description that is long enough.');
    await user.click(screen.getByRole('button', { name: /Send Message/i }));
    // Form has a 1500ms simulated API delay — 5s timeout safely covers it
    await waitFor(
      () => {
        expect(screen.getByText(/Message Sent!/i)).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });
});
