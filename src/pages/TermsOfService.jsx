import { motion } from 'framer-motion';
import { FiFileText } from 'react-icons/fi';
import { COMPANY } from '../utils/constants';

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-slate-100 mb-4 pb-3 border-b border-slate-700/50">{title}</h2>
    <div className="text-slate-400 leading-relaxed space-y-3">{children}</div>
  </div>
);

const TermsOfService = () => {
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
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
              <FiFileText size={18} className="text-purple-400" />
            </div>
            <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">Terms of Service</h1>
          <p className="text-slate-400">Last updated: June 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-16">

        <Section title="1. Agreement to Terms">
          <p>
            By accessing or using the services of <strong className="text-slate-300">{COMPANY.name}</strong>,
            you agree to be bound by these Terms of Service. If you disagree with any part of these terms,
            you may not access our services.
          </p>
          <p>
            These Terms apply to all clients, visitors, and others who access or use our website development,
            AI automation, and digital solution services.
          </p>
        </Section>

        <Section title="2. Our Services">
          <p>
            {COMPANY.name} provides the following services (collectively, "Services"):
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Custom website design and development</li>
            <li>Web application development (MERN stack)</li>
            <li>AI automation systems and chatbots</li>
            <li>UI/UX design and prototyping</li>
            <li>Digital consultation and strategy</li>
            <li>Technology internship programs</li>
          </ul>
        </Section>

        <Section title="3. Project Engagements">
          <p>
            All projects begin with a signed agreement or approved proposal that outlines scope, timeline,
            deliverables, and payment terms. Work does not commence until an initial payment is received.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>The client is responsible for providing timely feedback, content, and access required for project completion.</li>
            <li>Delays caused by the client may affect the agreed timeline.</li>
            <li>Additional requirements beyond the agreed scope may result in revised pricing.</li>
            <li>Project files and source code are transferred to the client upon full payment.</li>
          </ul>
        </Section>

        <Section title="4. Payment Terms">
          <p>
            Payment schedules are defined in individual project agreements. General terms:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>An advance payment (typically 50%) is required before project commencement.</li>
            <li>Remaining balance is due before final delivery or handover.</li>
            <li>Payments are non-refundable once the corresponding milestone of work has been completed.</li>
            <li>Late payments may result in work being paused until dues are cleared.</li>
          </ul>
        </Section>

        <Section title="5. Intellectual Property">
          <p>
            Upon full payment, the client receives full ownership of all custom code, designs, and content
            created specifically for their project. {COMPANY.name} retains the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Display the project in our portfolio (unless the client requests otherwise in writing)</li>
            <li>Retain ownership of any proprietary tools, frameworks, or code libraries developed independently</li>
          </ul>
        </Section>

        <Section title="6. Client Responsibilities">
          <p>The client agrees to:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Provide accurate information and requirements</li>
            <li>Review and approve work within the agreed review periods</li>
            <li>Not use our services for any illegal, harmful, or unethical purposes</li>
            <li>Ensure all content/materials provided do not infringe third-party intellectual property</li>
          </ul>
        </Section>

        <Section title="7. Limitation of Liability">
          <p>
            {COMPANY.name} shall not be liable for any indirect, incidental, special, or consequential
            damages resulting from the use of our services, including but not limited to loss of revenue,
            data, or business opportunities. Our total liability shall not exceed the amount paid by the
            client for the specific service in question.
          </p>
        </Section>

        <Section title="8. Warranties & Disclaimer">
          <p>
            We warrant that work will be completed with professional care and skill. However, we make no
            guarantee of specific business outcomes, rankings, or results. Our websites and applications
            are delivered "as-is" at the agreed specification. Hosting, domain, and third-party service
            stability are outside our control.
          </p>
        </Section>

        <Section title="9. Confidentiality">
          <p>
            Both parties agree to keep confidential any proprietary information shared during the project
            engagement. We will not disclose your business information, data, or strategies to any third
            party without your written consent.
          </p>
        </Section>

        <Section title="10. Termination">
          <p>
            Either party may terminate an engagement with written notice. In the event of termination:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>The client pays for all work completed up to the termination date</li>
            <li>Completed deliverables will be provided upon receipt of payment</li>
            <li>Advance payments for uncompleted milestones may be partially refunded at our discretion</li>
          </ul>
        </Section>

        <Section title="11. Governing Law">
          <p>
            These Terms shall be governed by the laws of India. Any disputes shall be subject to the
            exclusive jurisdiction of courts in Ahmedabad, Gujarat, India.
          </p>
        </Section>

        <Section title="12. Changes to Terms">
          <p>
            We reserve the right to modify these Terms at any time. Updated terms will be posted on this
            page with a revised date. Continued use of our services after changes constitutes acceptance.
          </p>
        </Section>

        <Section title="13. Contact Us">
          <p>For questions about these Terms of Service, contact us at:</p>
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

export default TermsOfService;
