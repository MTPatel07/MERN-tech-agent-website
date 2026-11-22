import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiSmile, FiAward, FiUsers } from 'react-icons/fi';
import { STATS } from '../utils/constants';

const iconMap = {
  FiCheckCircle: FiCheckCircle,
  FiSmile: FiSmile,
  FiAward: FiAward,
  FiUsers: FiUsers,
};

const colorMap = {
  blue: { icon: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  green: { icon: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  purple: { icon: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
  orange: { icon: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
};

const StatCard = ({ stat, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const Icon = iconMap[stat.icon] || FiCheckCircle;
  const colors = colorMap[stat.color] || colorMap.blue;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-6 md:p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/70 transition-all duration-300 group overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(59,130,246,0.05), transparent 70%)' }} />

      <div className="relative">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} mb-5`}>
          <Icon size={22} className={colors.icon} />
        </div>

        <div className="flex items-baseline gap-1 mb-2">
          {inView ? (
            <CountUp
              start={0}
              end={stat.number}
              duration={2.5}
              delay={0.2}
              className="text-4xl md:text-5xl font-bold text-white tabular-nums"
            />
          ) : (
            <span className="text-4xl md:text-5xl font-bold text-white">0</span>
          )}
          <span className="text-2xl md:text-3xl font-bold text-blue-400">{stat.suffix}</span>
        </div>

        <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
      </div>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
