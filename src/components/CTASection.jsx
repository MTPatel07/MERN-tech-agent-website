import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCalendar, FiCheckCircle } from 'react-icons/fi';

const trustSignals = [
  'No commitment required',
  'Response within 24 hours',
  'Free project estimation',
];

const CTASection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden text-center px-8 py-16 md:py-20"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Let's Work Together
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-slate-100 leading-tight mb-5"
            >
              Ready to Build Something{' '}
              <span className="gradient-text">Great Together?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-slate-400 text-lg mb-10 max-w-xl mx-auto"
            >
              Let's talk about your project. First consultation is always free.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold text-base shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  Start a Project
                  <FiArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-xl border border-slate-600 text-slate-200 font-semibold text-base hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
                >
                  <FiCalendar size={16} />
                  Schedule a Call
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              {trustSignals.map((signal) => (
                <div key={signal} className="flex items-center gap-2 text-sm text-slate-400">
                  <FiCheckCircle size={14} className="text-emerald-400" />
                  {signal}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
