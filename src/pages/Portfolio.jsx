import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiExternalLink, FiClock, FiFilter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { PROJECTS, CLIENTS } from '../utils/constants';
import { SectionHeader, FadeInUp } from '../components/ui/AnimatedText';
import CTASection from '../components/CTASection';

const categories = ['All', 'Web Development', 'AI Automation', 'Digital Solution', 'Web Development + AI'];

const colorMap = {
  blue: { badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20', metric: 'text-blue-400', border: 'border-blue-500/30', dot: 'bg-blue-500' },
  purple: { badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20', metric: 'text-purple-400', border: 'border-purple-500/30', dot: 'bg-purple-500' },
  green: { badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', metric: 'text-emerald-400', border: 'border-emerald-500/30', dot: 'bg-emerald-500' },
  orange: { badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20', metric: 'text-orange-400', border: 'border-orange-500/30', dot: 'bg-orange-500' },
};

const additionalProjects = [
  {
    id: 5,
    title: "Shiksha Online Learning Platform",
    client: "Shiksha EduGroup",
    category: "Web Development",
    description: "A comprehensive e-learning platform with live classes, recorded content, quiz engine, and progress tracking for 5,000+ students.",
    tech_stack: ["Next.js", "WebRTC", "Node.js", "PostgreSQL"],
    metrics: [{ label: "Students", value: "5000+" }, { label: "Courses", value: "200+" }, { label: "Satisfaction", value: "96%" }],
    color_tag: "blue",
    duration: "5 months",
  },
  {
    id: 6,
    title: "Lakshmi Property Portal",
    client: "Lakshmi Properties",
    category: "Digital Solution",
    description: "A real estate platform with virtual 3D tours, AI-powered property recommendations, and integrated lead management system.",
    tech_stack: ["React", "Three.js", "Node.js", "MongoDB"],
    metrics: [{ label: "Properties Listed", value: "2000+" }, { label: "Lead Quality", value: "+85%" }, { label: "Close Rate", value: "22%" }],
    color_tag: "teal",
    duration: "4 months",
  },
  {
    id: 7,
    title: "Chakra Dealer Management System",
    client: "Chakra AutoTech",
    category: "Web Development",
    description: "A comprehensive dealer management system with inventory tracking, sales pipeline, service scheduling and customer CRM.",
    tech_stack: ["React", "Express", "MySQL", "Redis"],
    metrics: [{ label: "Dealers Onboarded", value: "150+" }, { label: "Sales Efficiency", value: "+45%" }, { label: "Support Tickets", value: "-60%" }],
    color_tag: "orange",
    duration: "3 months",
  },
  {
    id: 8,
    title: "Artha Risk Assessment AI",
    client: "Artha FinTech",
    category: "AI Automation",
    description: "Machine learning model for real-time credit risk assessment that processes loan applications in under 30 seconds with 94% accuracy.",
    tech_stack: ["Python", "Scikit-learn", "FastAPI", "PostgreSQL"],
    metrics: [{ label: "Accuracy", value: "94%" }, { label: "Processing Time", value: "< 30s" }, { label: "False Positives", value: "-40%" }],
    color_tag: "purple",
    duration: "6 months",
  },
];

const allProjects = [...PROJECTS, ...additionalProjects];

const ProjectCard = ({ project }) => {
  const colors = colorMap[project.color_tag] || colorMap.blue;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group"
    >
      <div className={`h-full p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20`}>
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium border ${colors.badge}`}>
                {project.category}
              </span>
              <div className="flex items-center gap-1 text-xs text-slate-500">
                <FiClock size={10} />
                {project.duration}
              </div>
            </div>
            <h3 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors leading-snug">
              {project.title}
            </h3>
            <p className="text-xs text-slate-500 mt-1">{project.client}</p>
          </div>
          <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1 ${colors.dot}`} />
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 mb-5 p-3 rounded-xl bg-slate-900/50 border border-slate-700/30">
          {project.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className={`text-sm font-bold ${colors.metric}`}>{m.value}</p>
              <p className="text-xs text-slate-500 mt-0.5 leading-tight">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech_stack.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded text-xs text-slate-400 bg-slate-700/50 border border-slate-600/30 font-mono">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-700/30">
          <Link to="/contact" className={`flex items-center gap-1 text-sm font-medium ${colors.metric}`}>
            Discuss Similar Project <FiArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <FiExternalLink size={13} className="text-slate-600" />
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory || p.category.includes(activeCategory.split(' ')[0]));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 text-center relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none overflow-hidden">
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Our Portfolio
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-100 leading-tight mb-6">
              Work We Are <span className="gradient-text">Proud Of</span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-slate-400 text-xl leading-relaxed">
              Real projects. Real results. Here's what we've built for businesses across India.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Filter */}
      <section className="px-4 mb-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 text-slate-400 text-sm mr-2">
              <FiFilter size={14} />
              Filter:
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-slate-800 border border-slate-700 text-slate-300 hover:border-blue-500/40 hover:text-blue-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              No projects found in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 px-4 bg-slate-800/20 border-y border-slate-700/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Our Clients"
            heading="Businesses We've Worked With"
            subheading="A growing family of satisfied clients across India"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {CLIENTS.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/40 flex items-center gap-3"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0"
                  style={{ backgroundColor: `${client.logo_text_color}15`, color: client.logo_text_color, border: `1px solid ${client.logo_text_color}25` }}
                >
                  {client.initials}
                </div>
                <div>
                  <p className="text-slate-200 text-xs font-semibold leading-snug">{client.name}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{client.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </motion.div>
  );
};

export default Portfolio;
