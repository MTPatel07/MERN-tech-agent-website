/**
 * ============================================================
 * MongoDB Schema Validation Tests — Contact & Internship Models
 * Tests all Mongoose field rules: required, maxlength, enum, etc.
 * Run: cd server && npm test
 * ============================================================
 */

import mongoose from 'mongoose';
import Contact from '../../server/models/Contact.js';
import Internship from '../../server/models/Internship.js';

// ── Helpers ────────────────────────────────────────────────
const validContact = {
  name: 'Rahul Sharma',
  email: 'rahul@company.com',
  message: 'I need a professional website for my business.',
};

const validInternship = {
  name: 'Priya Patel',
  email: 'priya@college.edu',
  phone: '9876543210',
  college: 'NIT Surat',
  course: 'B.Tech CSE',
  year: '3rd Year',
  domain: 'web-development',
  duration: '3-months',
  why_join: 'I want to gain real-world experience in web development and contribute to impactful projects.',
};

// ── Contact Schema Tests ────────────────────────────────────
describe('Contact Schema Validation', () => {

  test('TC: API-10 — valid contact passes validation', async () => {
    const contact = new Contact(validContact);
    const err = contact.validateSync();
    expect(err).toBeUndefined();
  });

  test('TC: API-11 — missing name throws required error', async () => {
    const contact = new Contact({ ...validContact, name: undefined });
    const err = contact.validateSync();
    expect(err.errors['name'].message).toBe('Name is required');
  });

  test('TC: API-12 — missing email throws required error', async () => {
    const contact = new Contact({ ...validContact, email: undefined });
    const err = contact.validateSync();
    expect(err.errors['email'].message).toBe('Email is required');
  });

  test('TC: API-13 — invalid email format throws error', async () => {
    const contact = new Contact({ ...validContact, email: 'notanemail' });
    const err = contact.validateSync();
    expect(err.errors['email']).toBeDefined();
    expect(err.errors['email'].message).toContain('valid email');
  });

  test('TC: API-14 — name exceeding 100 chars throws error', async () => {
    const contact = new Contact({ ...validContact, name: 'A'.repeat(101) });
    const err = contact.validateSync();
    expect(err.errors['name'].message).toContain('100 characters');
  });

  test('TC: API-15 — message shorter than 10 chars throws error', async () => {
    const contact = new Contact({ ...validContact, message: 'Short' });
    const err = contact.validateSync();
    expect(err.errors['message']).toBeDefined();
  });

  test('TC: API-16 — message longer than 2000 chars throws error', async () => {
    const contact = new Contact({ ...validContact, message: 'A'.repeat(2001) });
    const err = contact.validateSync();
    expect(err.errors['message'].message).toContain('2000 characters');
  });

  test('TC: API-17 — invalid service enum throws error', async () => {
    const contact = new Contact({ ...validContact, service: 'invalid-service' });
    const err = contact.validateSync();
    expect(err.errors['service']).toBeDefined();
  });

  test('TC: API-18 — invalid budget enum throws error', async () => {
    const contact = new Contact({ ...validContact, budget: 'very-expensive' });
    const err = contact.validateSync();
    expect(err.errors['budget']).toBeDefined();
  });

  test('TC: schema — default status is "new"', () => {
    const contact = new Contact(validContact);
    expect(contact.status).toBe('new');
  });

  test('TC: schema — createdAt defaults to current date', () => {
    const contact = new Contact(validContact);
    expect(contact.createdAt).toBeDefined();
    expect(contact.createdAt).toBeInstanceOf(Date);
  });
});

// ── Internship Schema Tests ─────────────────────────────────
describe('Internship Schema Validation', () => {

  test('TC: API-19 — valid internship passes validation', () => {
    const app = new Internship(validInternship);
    const err = app.validateSync();
    expect(err).toBeUndefined();
  });

  test('TC: API-20 — missing college throws required error', () => {
    const app = new Internship({ ...validInternship, college: undefined });
    const err = app.validateSync();
    expect(err.errors['college'].message).toBe('College/University is required');
  });

  test('TC: API-21 — missing course throws required error', () => {
    const app = new Internship({ ...validInternship, course: undefined });
    const err = app.validateSync();
    expect(err.errors['course'].message).toBe('Course is required');
  });

  test('TC: API-22 — invalid year enum throws error', () => {
    const app = new Internship({ ...validInternship, year: '5th Year' });
    const err = app.validateSync();
    expect(err.errors['year']).toBeDefined();
  });

  test('TC: API-23 — invalid domain enum throws error', () => {
    const app = new Internship({ ...validInternship, domain: 'gaming' });
    const err = app.validateSync();
    expect(err.errors['domain']).toBeDefined();
  });

  test('TC: API-24 — invalid duration enum throws error', () => {
    const app = new Internship({ ...validInternship, duration: '2-months' });
    const err = app.validateSync();
    expect(err.errors['duration']).toBeDefined();
  });

  test('TC: API-25 — why_join shorter than 50 chars throws error', () => {
    const app = new Internship({ ...validInternship, why_join: 'I want to learn.' });
    const err = app.validateSync();
    expect(err.errors['why_join']).toBeDefined();
  });

  test('TC: API-26 — why_join longer than 1000 chars throws error', () => {
    const app = new Internship({ ...validInternship, why_join: 'A'.repeat(1001) });
    const err = app.validateSync();
    expect(err.errors['why_join'].message).toContain('1000 characters');
  });

  test('TC: schema — default status is "pending"', () => {
    const app = new Internship(validInternship);
    expect(app.status).toBe('pending');
  });
});
