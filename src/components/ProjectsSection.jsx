import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiClock, FiExternalLink } from 'react-icons/fi';
import { PROJECTS } from '../utils/constants';
import { SectionHeader } from './ui/AnimatedText';

const colorMap = {
  blue: {
    badge: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    metric: 'text-blue-400',
    border: 'border-blue-500/30',
    tag: 'bg-blue-500/10 text-blue-300',
    dot: 'bg-blue-500',
  },
  purple: {
    badge: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
    metric: 'text-purple-400',
    border: 'border-purple-500/30',
    tag: 'bg-purple-500/10 text-purple-300',
    dot: 'bg-purple-500',
  },
  green: {
    badge: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    metric: 'text-emerald-400',
    border: 'border-emerald-500/30',
    tag: 'bg-emerald-500/10 text-emerald-300',
    dot: 'bg-emerald-500',
  },
  orange: {
    badge: 'bg-orange-500/10 text-orange-400 border border-orange-500/20',
    metric: 'text-orange-400',
    border: 'border-orange-500/30',
    tag: 'bg-orange-500/10 text-orange-300',
    dot: 'bg-orange-500',
  },
};

const ProjectCard = ({ project, index }) => {
  const colors = colorMap[project.color_tag] || colorMap.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className={`h-full p-7 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:${colors.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30`}>
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${colors.badge}`}>
                {project.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <FiClock size={11} />
                {project.duration}
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors leading-snug">
              {project.title}
            </h3>
            <p className="text-sm text-slate-500 mt-1">{project.client}</p>
          </div>
          <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1.5 ${colors.dot}`} />
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-slate-900/50 border border-slate-700/30">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className={`text-lg font-bold ${colors.metric}`}>{metric.value}</p>
              <p className="text-xs text-slate-500 mt-0.5 leading-snug">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech_stack.map((tech) => (
            <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-700/50 text-slate-300 text-xs font-mono border border-slate-600/30">
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-700/30">
          <Link
            to="/portfolio"
            className={`flex items-center gap-1.5 text-sm font-medium ${colors.metric} hover:opacity-80 transition-opacity`}
          >
            View Case Study
            <FiArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <FiExternalLink size={14} className="text-slate-600 group-hover:text-slate-400 transition-colors" />
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            tag="Recent Work"
            heading="Projects We Are Proud Of"
            subheading="Real solutions delivered for real businesses"
            centered={false}
            className="mb-0"
          />
          <Link
            to="/portfolio"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-600 text-slate-300 text-sm font-medium hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 flex-shrink-0"
          >
            View All Projects
            <FiArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
