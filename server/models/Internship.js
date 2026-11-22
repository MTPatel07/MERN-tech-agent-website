const mongoose = require('mongoose');

const InternshipSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  college: {
    type: String,
    required: [true, 'College/University is required'],
    trim: true,
  },
  course: {
    type: String,
    required: [true, 'Course is required'],
    trim: true,
  },
  year: {
    type: String,
    required: [true, 'Current year is required'],
    enum: ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Final Year', 'Graduate'],
  },
  domain: {
    type: String,
    required: [true, 'Domain is required'],
    enum: [
      'web-development', 'ai-ml', 'ui-ux', 'mobile-app',
      'data-analytics', 'digital-marketing', 'blockchain',
      'cloud-computing', 'cybersecurity', 'embedded-iot',
    ],
  },
  duration: {
    type: String,
    required: [true, 'Internship duration is required'],
    enum: ['1-month', '3-months', '6-months', '12-months'],
  },
  skills: {
    type: String,
    trim: true,
  },
  linkedin: {
    type: String,
    trim: true,
  },
  github: {
    type: String,
    trim: true,
  },
  why_join: {
    type: String,
    required: [true, 'Please tell us why you want to join'],
    minlength: [50, 'Please write at least 50 characters'],
    maxlength: [1000, 'Cannot exceed 1000 characters'],
  },
  status: {
    type: String,
    enum: ['pending', 'reviewing', 'accepted', 'rejected'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Internship', InternshipSchema);
