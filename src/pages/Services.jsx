import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiCode, FiCpu, FiTrendingUp, FiZap } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { SectionHeader, FadeInUp } from '../components/ui/AnimatedText';
import CTASection from '../components/CTASection';
import TechStack from '../components/TechStack';

const services = [
  {
    id: 'web',
    icon: FiCode,
    title: 'Website Development',
    tagline: 'Your Website Should Work as Hard as You Do',
    description: 'We build fast, beautiful, and conversion-optimized websites that represent your brand perfectly and turn visitors into customers.',
    color: 'blue',
    colorHex: '#3B82F6',
    sub_services: [
      'Business Websites',
      'E-Commerce Platforms',
      'Web Applications',
      'Landing Pages',
      'CMS Development (WordPress, Strapi)',
      'Progressive Web Apps',
    ],
    process: ['Discovery & Planning', 'UI/UX Design', 'Development', 'Testing & QA', 'Launch & Support'],
    deliverables: ['Fully responsive design', 'SEO optimized structure', 'Performance optimized', '30-day free support'],
    timeline: '4–8 weeks',
    starting: '₹25,000',
  },
  {
    id: 'ai',
    icon: FiCpu,
    title: 'AI Automation',
    tagline: 'Work Smarter. Let AI Handle the Repetitive.',
    description: 'We build custom AI solutions that automate your workflows, reduce operational costs, and give you intelligent insights to make better business decisions.',
    color: 'purple',
    colorHex: '#8B5CF6',
    sub_services: [
      'AI Chatbots and Virtual Assistants',
      'Business Process Automation',
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Custom ML Model Development',
    ],
    process: ['Data Audit', 'Model Selection', 'Training & Fine-tuning', 'Integration', 'Monitoring'],
    deliverables: ['Trained AI model', 'API integration', 'Dashboard & reports', '60-day monitoring support'],
    timeline: '6–12 weeks',
    starting: '₹50,000',
  },
  {
    id: 'digital',
    icon: FiTrendingUp,
    title: 'Digital Solutions',
    tagline: 'Full Digital Transformation for Modern Businesses',
    description: 'From strategy to execution, we help businesses modernize their operations and build scalable digital infrastructure.',
    color: 'teal',
    colorHex: '#14B8A6',
    sub_services: [
      'Mobile App Development',
      'Cloud Migration and Setup',
      'API Development and Integration',
      'Database Architecture',
      'UI/UX Design and Research',
      'Tech Consulting and Audit',
    ],
    process: ['Tech Audit', 'Architecture Design', 'Phased Implementation', 'Migration', 'Training & Handoff'],
    deliverables: ['Technical documentation', 'Deployed infrastructure', 'Team training sessions', '90-day support'],
    timeline: '8–16 weeks',
    starting: '₹1,00,000',
  },
];

const colorStyles = {
  blue: {
    icon: 'text-blue-400',
    iconBg: 'bg-blue-500/10 border-blue-500/20',
    check: 'text-blue-400',
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    border: 'border-blue-500/30',
    glow: 'rgba(59,130,246,0.08)',
    accent: 'text-blue-400',
  },
  purple: {
    icon: 'text-purple-400',
    iconBg: 'bg-purple-500/10 border-purple-500/20',
    check: 'text-purple-400',
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    border: 'border-purple-500/30',
    glow: 'rgba(139,92,246,0.08)',
    accent: 'text-purple-400',
  },
  teal: {
    icon: 'text-teal-400',
    iconBg: 'bg-teal-500/10 border-teal-500/20',
    check: 'text-teal-400',
    badge: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    border: 'border-teal-500/30',
    glow: 'rgba(20,184,166,0.08)',
    accent: 'text-teal-400',
  },
};

const ServiceDetailCard = ({ service, index }) => {
  const colors = colorStyles[service.color];
  const Icon = service.icon;

  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className={`relative rounded-3xl overflow-hidden border ${colors.border} bg-slate-800/40 mb-8`}
      style={{ boxShadow: `0 0 60px ${service.color === 'blue' ? 'rgba(59,130,246,0.06)' : service.color === 'purple' ? 'rgba(139,92,246,0.06)' : 'rgba(20,184,166,0.06)'}` }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${service.colorHex}40, transparent)` }} />

      <div className="p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl border ${colors.iconBg} mb-6`}>
              <Icon size={28} className={colors.icon} />
            </div>
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${colors.badge}`}>
              {service.tagline}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">{service.title}</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">{service.description}</p>

            {/* Sub-services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {service.sub_services.map((sub) => (
                <div key={sub} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <FiCheck size={14} className={`flex-shrink-0 ${colors.check}`} />
                  {sub}
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-300"
            >
              Get a Quote
              <FiArrowRight size={16} />
            </Link>
          </div>

          {/* Right */}
          <div className="space-y-5">
            {/* Timeline & Starting price */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-700/40">
                <p className="text-slate-500 text-xs mb-1 uppercase tracking-wider">Timeline</p>
                <p className={`text-xl font-bold ${colors.accent}`}>{service.timeline}</p>
              </div>
              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-700/40">
                <p className="text-slate-500 text-xs mb-1 uppercase tracking-wider">Starting From</p>
                <p className={`text-xl font-bold ${colors.accent}`}>{service.starting}</p>
              </div>
            </div>

            {/* Process */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-700/40">
              <p className="text-slate-300 font-semibold text-sm mb-4">Our Process</p>
              <div className="space-y-3">
                {service.process.map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border ${colors.iconBg} ${colors.accent} flex-shrink-0`}>
                      {i + 1}
                    </div>
                    <span className="text-slate-300 text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-700/40">
              <p className="text-slate-300 font-semibold text-sm mb-4">What You Get</p>
              <div className="space-y-2.5">
                {service.deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <FiCheck size={13} className={`flex-shrink-0 ${colors.check}`} />
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 text-center relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Our Services
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-slate-100 leading-tight mb-6"
          >
            What We <span className="gradient-text">Build & Deliver</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-xl leading-relaxed max-w-2xl mx-auto"
          >
            From complex web applications to intelligent AI systems — we build digital solutions that actually move the needle for your business.
          </motion.p>

          {/* Jump links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-600 text-slate-300 text-sm font-medium hover:border-blue-500/50 hover:text-blue-400 transition-all duration-200"
              >
                <s.icon size={14} />
                {s.title}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {services.map((service, i) => (
            <ServiceDetailCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      <TechStack />
      <CTASection />
    </motion.div>
  );
};

export default Services;
