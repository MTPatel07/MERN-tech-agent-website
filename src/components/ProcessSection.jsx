import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiClipboard, FiLayout, FiCode, FiShield, FiZap, FiArrowRight, FiPlus, FiMinus } from 'react-icons/fi';
import { SectionHeader } from './ui/AnimatedText';

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Brief',
    short: 'Understanding your vision',
    description: 'We start with a focused conversation — no tech jargon, just clear thinking. We listen to your goals, challenges, and what success looks like for your business. This shapes everything that follows.',
    deliverables: ['Project scope document', 'Goal alignment', 'Timeline estimate'],
    icon: FiMessageCircle,
    color: '#3B82F6',
  },
  {
    number: '02',
    title: 'Strategy & Architecture',
    short: 'Planning with precision',
    description: 'Our team maps out the complete technical approach — stack selection, system architecture, and a detailed project roadmap. You receive a clear proposal before a single line of code is written.',
    deliverables: ['Technical blueprint', 'Technology selection', 'Detailed project roadmap'],
    icon: FiClipboard,
    color: '#8B5CF6',
  },
  {
    number: '03',
    title: 'Design & Prototype',
    short: 'From concept to vision',
    description: 'We create high-fidelity designs and interactive prototypes. You see and interact with exactly what you\'re getting before development begins. Every layout decision is intentional and purposeful.',
    deliverables: ['Wireframes & mockups', 'Interactive prototype', 'Design system'],
    icon: FiLayout,
    color: '#14B8A6',
  },
  {
    number: '04',
    title: 'Development & Build',
    short: 'Crafting the solution',
    description: 'Clean code, modern frameworks, and engineering excellence. We build in sprints with regular demos so you always see progress. Open communication, no surprises.',
    deliverables: ['Fully functional product', 'Weekly demos', 'Clean codebase'],
    icon: FiCode,
    color: '#F97316',
  },
  {
    number: '05',
    title: 'Testing & Quality',
    short: 'Built to last',
    description: 'Rigorous QA across browsers, devices, and edge cases. Performance optimization, security checks, and accessibility audits. We don\'t launch until we\'re proud of every detail.',
    deliverables: ['QA test report', 'Performance audit', 'Cross-browser testing'],
    icon: FiShield,
    color: '#10B981',
  },
  {
    number: '06',
    title: 'Launch & Growth',
    short: 'The beginning, not the end',
    description: 'Zero-downtime deployment and post-launch monitoring. We stick around to ensure everything runs smoothly and help you grow. Your success after launch matters as much as the launch itself.',
    deliverables: ['Live deployment', '30-day support', 'Growth roadmap'],
    icon: FiZap,
    color: '#3B82F6',
  },
];

const ProcessStep = ({ step, index, isOpen, onToggle }) => {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border-t border-slate-700/50 last:border-b last:border-slate-700/50"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-6 py-7 text-left group transition-all duration-300 hover:pl-2"
      >
        {/* Step number */}
        <span
          className="text-[13px] font-mono font-bold tracking-widest flex-shrink-0 w-8"
          style={{ color: isOpen ? step.color : '#475569' }}
        >
          {step.number}
        </span>

        {/* Step title */}
        <div className="flex-1 min-w-0">
          <h3
            className="text-lg md:text-xl font-bold transition-colors duration-300"
            style={{ color: isOpen ? '#F8FAFC' : '#94A3B8' }}
          >
            {step.title}
          </h3>
          {!isOpen && (
            <p className="text-slate-600 text-sm mt-0.5 transition-all duration-300">{step.short}</p>
          )}
        </div>

        {/* Icon + toggle */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hidden sm:flex"
            style={{
              backgroundColor: isOpen ? `${step.color}20` : 'transparent',
              border: `1px solid ${isOpen ? step.color + '40' : 'transparent'}`,
            }}
          >
            <Icon size={18} style={{ color: isOpen ? step.color : '#475569' }} />
          </div>
          <div
            className="w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300"
            style={{
              borderColor: isOpen ? step.color : '#334155',
              backgroundColor: isOpen ? `${step.color}15` : 'transparent',
            }}
          >
            {isOpen
              ? <FiMinus size={12} style={{ color: step.color }} />
              : <FiPlus size={12} className="text-slate-500" />
            }
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-14 pr-4">
              <p className="text-slate-400 text-base leading-relaxed mb-6 max-w-2xl">
                {step.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {step.deliverables.map((d) => (
                  <span
                    key={d}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: `${step.color}10`,
                      color: step.color,
                      border: `1px solid ${step.color}25`,
                    }}
                  >
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: step.color }} />
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProcessSection = () => {
  const [openStep, setOpenStep] = useState(0);

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left sticky heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest mb-6">
                How We Work
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 leading-tight mb-6">
                From first call to{' '}
                <span className="gradient-text">final launch</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                A transparent, structured process built around your goals — so you always know what's happening, why it's happening, and what comes next.
              </p>

              {/* Mini stats */}
              <div className="space-y-4">
                {[
                  { label: 'Average project duration', value: '4–8 weeks' },
                  { label: 'Client communication', value: 'Daily updates' },
                  { label: 'Post-launch support', value: '30 days free' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-slate-700/40">
                    <span className="text-slate-500 text-sm">{item.label}</span>
                    <span className="text-slate-200 text-sm font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
              >
                Start Your Project
                <FiArrowRight size={16} />
              </motion.a>
            </motion.div>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-8">
            <div>
              {processSteps.map((step, i) => (
                <ProcessStep
                  key={step.number}
                  step={step}
                  index={i}
                  isOpen={openStep === i}
                  onToggle={() => setOpenStep(openStep === i ? -1 : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
