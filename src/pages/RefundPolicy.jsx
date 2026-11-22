import { motion } from 'framer-motion';
import { FiRefreshCw } from 'react-icons/fi';
import { COMPANY } from '../utils/constants';

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-slate-100 mb-4 pb-3 border-b border-slate-700/50">{title}</h2>
    <div className="text-slate-400 leading-relaxed space-y-3">{children}</div>
  </div>
);

const RefundPolicy = () => {
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
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <FiRefreshCw size={18} className="text-emerald-400" />
            </div>
            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">Refund & Cancellation Policy</h1>
          <p className="text-slate-400">Last updated: June 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-16">

        {/* Highlight box */}
        <div className="mb-10 p-5 rounded-xl bg-blue-500/8 border border-blue-500/20">
          <p className="text-slate-300 leading-relaxed">
            At <strong>{COMPANY.name}</strong>, we are committed to delivering high-quality work and ensuring
            client satisfaction. Please read this policy carefully before engaging our services.
          </p>
        </div>

        <Section title="1. General Refund Philosophy">
          <p>
            We invest significant time, skill, and resources into every project. Our refund policy is designed
            to be fair to both parties. Because our work is custom and service-based, refunds are evaluated
            on a case-by-case basis depending on the project stage and circumstances.
          </p>
        </Section>

        <Section title="2. Advance / Deposit Payments">
          <p>
            All projects require an advance payment before work begins. This deposit:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Confirms your commitment to the project</li>
            <li>Covers initial planning, strategy, design research, and setup costs</li>
            <li><strong className="text-slate-300">Advance payments are non-refundable</strong> once work has commenced</li>
          </ul>
          <p className="mt-3">
            If you cancel within <strong className="text-slate-300">24 hours of placing the order</strong> and
            before any work has started, a full refund of the advance may be issued at our discretion.
          </p>
        </Section>

        <Section title="3. Mid-Project Cancellations">
          <p>
            If a project is cancelled after work has begun:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Payment is due for all work completed up to the cancellation date</li>
            <li>We will provide all completed deliverables, files, and assets upon receipt of payment</li>
            <li>Payments made for completed milestones are <strong className="text-slate-300">non-refundable</strong></li>
            <li>Any overpayment beyond work completed will be refunded within <strong className="text-slate-300">14 business days</strong></li>
          </ul>
        </Section>

        <Section title="4. Eligible Refund Scenarios">
          <p>Refunds or partial refunds may be considered in the following situations:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong className="text-slate-300">Project not started:</strong> If we are unable to begin your project within the agreed timeframe due to our own capacity issues</li>
            <li><strong className="text-slate-300">Major scope failure:</strong> If the delivered work significantly fails to match the agreed written scope despite revision attempts</li>
            <li><strong className="text-slate-300">Duplicate payment:</strong> If you were charged more than once for the same service</li>
          </ul>
        </Section>

        <Section title="5. Non-Refundable Items">
          <p>The following are strictly non-refundable:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Advance/deposit payments once work has commenced</li>
            <li>Completed milestones that have been approved by the client</li>
            <li>Third-party costs (domain registration, hosting, licenses, API subscriptions) paid on the client's behalf</li>
            <li>Rush or priority fees</li>
            <li>Services fully delivered and accepted</li>
            <li>Internship program fees once access has been granted</li>
          </ul>
        </Section>

        <Section title="6. Revision Policy">
          <p>
            We offer revision rounds as specified in each project proposal. Refund requests will not be
            considered if revision opportunities have not been utilized. We encourage clients to actively
            provide feedback during the project to ensure the final output meets expectations.
          </p>
        </Section>

        <Section title="7. How to Request a Refund">
          <p>To initiate a refund request:</p>
          <ol className="list-decimal list-inside space-y-2 mt-2">
            <li>Email us at <a href={`mailto:${COMPANY.email}`} className="text-blue-400 hover:underline">{COMPANY.email}</a> with subject line: <strong className="text-slate-300">"Refund Request – [Your Name/Project]"</strong></li>
            <li>Describe the reason for the request clearly</li>
            <li>We will respond within <strong className="text-slate-300">3–5 business days</strong></li>
            <li>If approved, refunds are processed within <strong className="text-slate-300">7–14 business days</strong> to the original payment method</li>
          </ol>
        </Section>

        <Section title="8. Dispute Resolution">
          <p>
            We are committed to resolving disputes amicably. If you are unhappy with our service at any stage,
            please contact us directly first. We will make every reasonable effort to address your concerns
            before any formal dispute process is initiated.
          </p>
          <p>
            Unresolved disputes shall be subject to the laws of India and jurisdiction of courts in
            Ahmedabad, Gujarat.
          </p>
        </Section>

        <Section title="9. Contact Us">
          <p>For refund requests or questions about this policy:</p>
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

export default RefundPolicy;
