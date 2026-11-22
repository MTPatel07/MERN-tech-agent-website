import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCalendar, FiArrowRight, FiCheck, FiUsers } from 'react-icons/fi';

const durations = [
  { label: '1 Month', desc: 'Quick Skill Sprint' },
  { label: '3 Months', desc: 'Foundation Track' },
  { label: '6 Months', desc: 'Professional Track' },
  { label: '12 Months', desc: 'Expert Track' },
];

const benefits = [
  'Work on live production projects',
  'Mentorship from senior developers',
  'Completion certificate',
  'LinkedIn recommendation',
  'Portfolio building support',
  'PPO opportunity for top performers',
];

const InternshipSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-blue-500/20 bg-slate-800/40"
          style={{ boxShadow: '0 0 80px rgba(59, 130, 246, 0.08)' }}
        >
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          </div>

          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest">
                    <FiUsers size={12} />
                    Join Our Team
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 leading-tight mb-5">
                  Internship Program for{' '}
                  <span className="gradient-text">Passionate Students</span>
                </h2>

                <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">
                  Work on real client projects, learn from experienced developers, and build a portfolio that actually gets you hired.
                </p>

                {/* Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                        <FiCheck size={10} className="text-emerald-400" />
                      </div>
                      {benefit}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to="/internship"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
                    >
                      Apply for Internship
                      <FiArrowRight size={16} />
                    </Link>
                  </motion.div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-medium text-emerald-400">10+ Domains Available</span>
                  </div>
                </div>
              </div>

              {/* Right - Duration cards */}
              <div>
                <p className="text-slate-300 font-semibold mb-5">Choose Your Duration</p>
                <div className="grid grid-cols-2 gap-4">
                  {durations.map((d, i) => (
                    <motion.div
                      key={d.label}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="p-5 rounded-xl bg-slate-900/60 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 group cursor-default"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                          <FiCalendar size={14} className="text-blue-400" />
                        </div>
                      </div>
                      <p className="text-slate-100 font-bold text-lg">{d.label}</p>
                      <p className="text-slate-400 text-xs mt-1">{d.desc}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-6 p-5 rounded-xl bg-slate-900/60 border border-slate-700/40">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-xl font-bold text-blue-400">200+</p>
                      <p className="text-slate-500 text-xs mt-0.5">Interns Trained</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-emerald-400">85%</p>
                      <p className="text-slate-500 text-xs mt-0.5">Placement Rate</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-purple-400">10+</p>
                      <p className="text-slate-500 text-xs mt-0.5">Domains</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InternshipSection;
