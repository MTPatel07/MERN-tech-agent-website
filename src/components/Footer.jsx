import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiLinkedin, FiInstagram, FiGithub, FiTwitter,
  FiMail, FiPhone, FiMapPin, FiArrowRight
} from 'react-icons/fi';
import { COMPANY } from '../utils/constants';

const footerLinks = {
  Services: [
    { label: 'Website Development', to: '/services#web' },
    { label: 'AI Automation', to: '/services#ai' },
    { label: 'Digital Solutions', to: '/services#digital' },
    { label: 'Mobile Apps', to: '/services#digital' },
    { label: 'UI/UX Design', to: '/services#digital' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Work', to: '/portfolio' },
    { label: 'Our Team', to: '/about#team' },
    { label: 'Careers', to: '/internship' },
    { label: 'Contact', to: '/contact' },
  ],
  Programs: [
    { label: 'Internship Program', to: '/internship' },
    { label: '1 Month Track', to: '/internship' },
    { label: '3 Months Track', to: '/internship' },
    { label: '6 Months Track', to: '/internship' },
    { label: '12 Months Track', to: '/internship' },
  ],
};

const socials = [
  { icon: FiLinkedin, href: COMPANY.socials.linkedin, label: 'LinkedIn' },
  { icon: FiInstagram, href: COMPANY.socials.instagram, label: 'Instagram' },
  { icon: FiGithub, href: COMPANY.socials.github, label: 'GitHub' },
  { icon: FiTwitter, href: COMPANY.socials.twitter, label: 'Twitter' },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900/80 border-t border-slate-700/40">
      {/* Newsletter strip */}
      <div className="border-b border-slate-700/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-slate-100 font-bold text-lg mb-1">Stay Updated</h3>
              <p className="text-slate-400 text-sm">Tech insights and project updates, delivered monthly.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors flex items-center gap-2">
                Subscribe
                <FiArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span className="text-white font-bold text-sm">NL</span>
              </div>
              <span className="text-xl font-bold gradient-text">{COMPANY.name}</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              {COMPANY.tagline}
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 text-sm transition-colors">
                <FiMail size={14} className="text-blue-400 flex-shrink-0" />
                {COMPANY.email}
              </a>
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 text-sm transition-colors">
                <FiPhone size={14} className="text-blue-400 flex-shrink-0" />
                {COMPANY.phone}
              </a>
              <div className="flex items-start gap-2.5 text-slate-400 text-sm">
                <FiMapPin size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                {COMPANY.location}
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="col-span-1">
              <h4 className="text-slate-100 font-semibold text-sm mb-5">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Working hours */}
          <div className="col-span-1">
            <h4 className="text-slate-100 font-semibold text-sm mb-5">Working Hours</h4>
            <div className="space-y-3">
              <div>
                <p className="text-slate-300 text-sm font-medium">Mon – Fri</p>
                <p className="text-slate-500 text-xs mt-0.5">9:00 AM – 6:00 PM IST</p>
              </div>
              <div>
                <p className="text-slate-300 text-sm font-medium">Saturday</p>
                <p className="text-slate-500 text-xs mt-0.5">10:00 AM – 2:00 PM IST</p>
              </div>
              <div>
                <p className="text-slate-300 text-sm font-medium">Sunday</p>
                <p className="text-slate-500 text-xs mt-0.5">Closed</p>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-xs font-medium">We're Online Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-700/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 {COMPANY.name}. All rights reserved. Built with ❤️ in Ahmedabad, India.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Terms of Service</Link>
            <Link to="/refund" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
