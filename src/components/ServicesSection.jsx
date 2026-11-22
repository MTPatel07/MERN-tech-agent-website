import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCode, FiCpu, FiTrendingUp, FiCheck, FiArrowRight } from 'react-icons/fi';
import { SERVICES } from '../utils/constants';
import { SectionHeader, FadeInUp } from './ui/AnimatedText';

const iconMap = { FiCode, FiCpu, FiTrendingUp };

const colorStyles = {
  blue: {
    icon: 'text-blue-400',
    iconBg: 'bg-blue-500/10 border border-blue-500/20',
    check: 'text-blue-400',
    arrow: 'text-blue-400',
    hoverBorder: 'hover:border-blue-500/40',
    glow: 'hover:shadow-blue-500/10',
    badge: 'bg-blue-500/10 text-blue-400',
  },
  purple: {
    icon: 'text-purple-400',
    iconBg: 'bg-purple-500/10 border border-purple-500/20',
    check: 'text-purple-400',
    arrow: 'text-purple-400',
    hoverBorder: 'hover:border-purple-500/40',
    glow: 'hover:shadow-purple-500/10',
    badge: 'bg-purple-500/10 text-purple-400',
  },
  teal: {
    icon: 'text-teal-400',
    iconBg: 'bg-teal-500/10 border border-teal-500/20',
    check: 'text-teal-400',
    arrow: 'text-teal-400',
    hoverBorder: 'hover:border-teal-500/40',
    glow: 'hover:shadow-teal-500/10',
    badge: 'bg-teal-500/10 text-teal-400',
  },
};

const ServiceCard = ({ service, index }) => {
  const Icon = iconMap[service.icon] || FiCode;
  const colors = colorStyles[service.color] || colorStyles.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Link to={service.link} className="block h-full group">
        <div className={`h-full p-7 rounded-2xl bg-slate-800/50 border border-slate-700/50 ${colors.hoverBorder} hover:shadow-xl ${colors.glow} transition-all duration-300 hover:-translate-y-1`}>
          {/* Icon */}
          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.iconBg} mb-6`}>
            <Icon size={26} className={colors.icon} />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-white transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {service.short_desc}
          </p>

          {/* Features */}
          <ul className="space-y-2.5 mb-6">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2.5 text-sm text-slate-300">
                <FiCheck size={14} className={`flex-shrink-0 ${colors.check}`} />
                {feature}
              </li>
            ))}
          </ul>

          {/* Link */}
          <div className={`flex items-center gap-2 text-sm font-semibold ${colors.arrow} mt-auto`}>
            Learn More
            <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="What We Do"
          heading="Solutions Built for Your Business Growth"
          subheading="We craft powerful digital experiences tailored to your goals"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <FadeInUp delay={0.4} className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-slate-600 text-slate-200 font-medium hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
          >
            Explore All Services
            <FiArrowRight size={16} />
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
};

export default ServicesSection;
