import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlay, FiCheckCircle, FiStar, FiCpu, FiCode, FiTerminal } from 'react-icons/fi';

const codeLines = [
  { line: '// Nexus Labs - Building the Future', color: '#6B7280' },
  { line: 'const project = {', color: '#F8FAFC' },
  { line: '  client: "GreenLeaf Organics",', color: '#94A3B8' },
  { line: '  type: "E-Commerce Platform",', color: '#94A3B8' },
  { line: '  stack: ["React", "Node.js", "MongoDB"],', color: '#60A5FA' },
  { line: '  revenue: "+180% Growth", ✓', color: '#10B981' },
  { line: '  status: "Live & Scaling 🚀"', color: '#3B82F6' },
  { line: '};', color: '#F8FAFC' },
  { line: '', color: '' },
  { line: 'await deploy(project);', color: '#8B5CF6' },
  { line: '// ✅ Success! Client is thrilled.', color: '#10B981' },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Trusted Technology Partner — Since 2024
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-slate-100">We Build </span>
                <span className="gradient-text">Digital Solutions</span>
                <br />
                <span className="text-slate-100">That Drive </span>
                <span className="gradient-text">Real Growth</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            >
              From stunning websites to intelligent AI automation — we help businesses scale faster, smarter, and stronger in the digital world.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold text-base shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  Start Your Project
                  <FiArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-600 text-slate-200 font-semibold text-base hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
                >
                  <FiPlay size={16} />
                  View Our Work
                </Link>
              </motion.div>
            </motion.div>

            {/* Floating Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { text: '8+ Projects', icon: <FiCheckCircle size={14} />, color: 'blue' },
                { text: '5+ Happy Clients', icon: <FiStar size={14} />, color: 'yellow' },
                { text: 'AI Powered', icon: <FiCpu size={14} />, color: 'purple' },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/60 text-sm text-slate-300"
                >
                  <span className="text-blue-400">{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Code Editor Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Floating stat cards */}
            <motion.div
              className="absolute -top-6 -left-8 z-10 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700/60 shadow-xl animate-float hidden md:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <FiCheckCircle size={14} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Projects Delivered</p>
                  <p className="text-lg font-bold text-white">8+</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-6 z-10 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700/60 shadow-xl animate-float-delayed hidden md:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <FiStar size={14} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Client Rating</p>
                  <p className="text-lg font-bold text-white">4.9 / 5.0</p>
                </div>
              </div>
            </motion.div>

            {/* Code Editor */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-900 shadow-2xl shadow-black/40">
              {/* Editor Header */}
              <div className="flex items-center gap-3 px-5 py-4 bg-slate-800/80 border-b border-slate-700/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex items-center gap-2 flex-1 justify-center">
                  <FiTerminal size={12} className="text-slate-400" />
                  <span className="text-slate-400 text-xs font-mono">project.config.js — Nexus Labs</span>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm leading-7 min-h-[320px]">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.08, duration: 0.3 }}
                    className="flex"
                  >
                    <span className="text-slate-600 w-6 text-right mr-6 select-none text-xs pt-0.5">{i + 1}</span>
                    <span style={{ color: line.color }}>{line.line}</span>
                    {i === codeLines.length - 1 && (
                      <span className="cursor-blink inline-block w-0.5 h-4 bg-blue-400 ml-0.5 mt-1" />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Bottom status bar */}
              <div className="flex items-center justify-between px-5 py-2.5 bg-blue-600/20 border-t border-blue-500/20">
                <div className="flex items-center gap-2 text-xs text-blue-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Build successful
                </div>
                <div className="flex items-center gap-4 text-xs text-blue-300/60">
                  <span>TypeScript</span>
                  <span>UTF-8</span>
                  <span>LF</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-1.5">
            <motion.div
              className="w-1.5 h-1.5 bg-blue-400 rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
