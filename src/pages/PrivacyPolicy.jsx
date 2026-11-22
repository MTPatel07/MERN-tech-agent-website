import { motion } from 'framer-motion';
import { FiShield } from 'react-icons/fi';
import { COMPANY } from '../utils/constants';

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-slate-100 mb-4 pb-3 border-b border-slate-700/50">{title}</h2>
    <div className="text-slate-400 leading-relaxed space-y-3">{children}</div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero */}
      <div className="bg-slate-900/60 border-b border-slate-700/40 pt-28 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <FiShield size={18} className="text-blue-400" />
            </div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">Privacy Policy</h1>
          <p className="text-slate-400">Last updated: June 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-16">

        <Section title="1. Introduction">
          <p>
            Welcome to <strong className="text-slate-300">{COMPANY.name}</strong> ("we", "our", "us"). We are a
            technology services company based in Ahmedabad, Gujarat, India. We are committed to protecting
            your personal information and your right to privacy.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
            you visit our website or use our services. Please read this policy carefully.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We may collect information about you in a variety of ways, including:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong className="text-slate-300">Personal Data:</strong> Name, email address, phone number, and company name that you voluntarily provide when contacting us or filling out forms.</li>
            <li><strong className="text-slate-300">Usage Data:</strong> Information automatically collected when you visit our site, such as your IP address, browser type, pages visited, and time spent on pages.</li>
            <li><strong className="text-slate-300">Communications:</strong> Messages, requirements, and other content you share with us via email or contact forms.</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Respond to your inquiries and provide our services</li>
            <li>Send you project updates, proposals, and relevant communications</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
            <li>Send newsletters or marketing communications (only with your consent)</li>
          </ul>
        </Section>

        <Section title="4. Sharing Your Information">
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable information to third parties.
            We may share information with trusted third-party service providers (such as email platforms or
            analytics tools) who assist us in operating our website, provided they agree to keep your
            information confidential.
          </p>
        </Section>

        <Section title="5. Cookies">
          <p>
            Our website may use cookies to enhance your browsing experience. Cookies are small files stored
            on your device. You can choose to disable cookies through your browser settings, but some features
            of our website may not function properly as a result.
          </p>
        </Section>

        <Section title="6. Data Security">
          <p>
            We implement appropriate technical and organizational security measures to protect your personal
            information against unauthorized access, alteration, disclosure, or destruction. However, no
            internet transmission is 100% secure, and we cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="7. Your Rights">
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for marketing communications at any time</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please contact us at{' '}
            <a href={`mailto:${COMPANY.email}`} className="text-blue-400 hover:underline">{COMPANY.email}</a>.
          </p>
        </Section>

        <Section title="8. Third-Party Links">
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy
            practices of those sites and encourage you to review their privacy policies.
          </p>
        </Section>

        <Section title="9. Children's Privacy">
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect
            personal information from minors. If you believe a child has provided us with personal data,
            please contact us immediately.
          </p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any significant changes
            by updating the "Last updated" date at the top of this page. Continued use of our website after
            changes constitutes your acceptance of the updated policy.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <div className="mt-4 p-5 rounded-xl bg-slate-800/60 border border-slate-700/50 space-y-1">
            <p className="text-slate-200 font-semibold">{COMPANY.name}</p>
            <p>{COMPANY.location}</p>
            <p>
              Email:{' '}
              <a href={`mailto:${COMPANY.email}`} className="text-blue-400 hover:underline">{COMPANY.email}</a>
            </p>
            <p>Phone: {COMPANY.phone}</p>
          </div>
        </Section>

      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
