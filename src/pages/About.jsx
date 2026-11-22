import { motion } from 'framer-motion';
import { FiCheck, FiAward, FiUsers, FiCode, FiHeart, FiTarget } from 'react-icons/fi';
import { ABOUT_VALUES, ACHIEVEMENTS, COMPANY } from '../utils/constants';
import { SectionHeader, FadeInUp } from '../components/ui/AnimatedText';
import CTASection from '../components/CTASection';

const team = [
  { name: 'Arjun Sharma', role: 'Founder & CEO', exp: '4+ years', domain: 'Full Stack & Strategy', initials: 'AS', color: '#3B82F6' },
  { name: 'Priya Nair', role: 'Lead Developer', exp: '3+ years', domain: 'React & Node.js', initials: 'PN', color: '#8B5CF6' },
  { name: 'Rahul Kapoor', role: 'UI/UX Designer', exp: '3+ years', domain: 'Design & Branding', initials: 'RK', color: '#10B981' },
  { name: 'Deepika Rao', role: 'Backend Engineer', exp: '2+ years', domain: 'Node.js & DevOps', initials: 'DR', color: '#F97316' },
  { name: 'Siddharth Jain', role: 'Frontend Dev', exp: '2+ years', domain: 'React & Next.js', initials: 'SJ', color: '#EC4899' },
];

const valueIcons = [FiCode, FiAward, FiHeart, FiTarget];

const milestones = [
  { year: '2024', event: 'Founded in Ahmedabad with a team of 3 passionate developers' },
  { year: '2024', event: 'Delivered our first 3 projects, built trust with early clients' },
  { year: '2025', event: 'Expanded to AI automation services, team grew to 5 members' },
  { year: '2025', event: 'Completed 8+ projects across e-commerce, healthcare, and SaaS' },
  { year: '2026', event: 'Achieving 100% client satisfaction, recognized by Startup India' },
];

const About = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto text-center">
          <FadeInUp>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              About Us
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-100 leading-tight mb-6">
              We're Not Just a Dev Agency.<br />
              <span className="gradient-text">We're Your Tech Partner.</span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-slate-400 text-xl leading-relaxed max-w-3xl mx-auto">
              We started as a small team of passionate developers who believed great technology should be accessible to every business, not just the ones with massive budgets.
              Today we are a growing digital studio based in Ahmedabad, trusted by 5+ clients across Gujarat and beyond.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeInUp>
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest mb-6">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6 leading-tight">
                2 Years of Building <span className="gradient-text">Digital Success Stories</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Nexus Labs was founded in 2024 in Ahmedabad by a passionate team with a simple belief: every business deserves access to world-class technology, regardless of its size.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                We started with local businesses in Gujarat and quickly built a reputation for delivering results that exceeded expectations. Word spread, and so did our team, our capabilities, and our client base.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Today, Nexus Labs is a 5+ member team serving clients across e-commerce, healthcare, SaaS, and education. Our mission remains unchanged — deliver technology that creates measurable business impact.
              </p>
            </div>
          </FadeInUp>

          {/* Milestone Timeline */}
          <FadeInUp delay={0.2}>
            <div className="space-y-4 max-h-[480px] overflow-y-auto pr-2 custom-scroll">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-4 relative">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-14 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 text-xs font-bold">{m.year}</span>
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-slate-700/50 mt-2" style={{ minHeight: '24px' }} />
                    )}
                  </div>
                  <div className="pb-4">
                    <p className="text-slate-300 text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-slate-800/20 border-y border-slate-700/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Our Direction" heading="Mission, Vision & Values" />
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-blue-500/5 border border-blue-500/20"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5">
                <FiTarget size={20} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed">
                To deliver technology solutions that create measurable business impact for our clients while nurturing the next generation of tech talent through real-world experience.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-purple-500/5 border border-purple-500/20"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5">
                <FiAward size={20} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed">
                To become the most trusted technology partner for growing businesses across South Asia, known for delivering results, not just code.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {ABOUT_VALUES.map((value, i) => {
              const Icon = valueIcons[i];
              const colors = ['text-blue-400 bg-blue-500/10 border-blue-500/20', 'text-purple-400 bg-purple-500/10 border-purple-500/20', 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20', 'text-orange-400 bg-orange-500/10 border-orange-500/20'];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-10 h-10 rounded-lg border flex items-center justify-center mb-4 ${colors[i]}`}>
                    <Icon size={18} />
                  </div>
                  <h4 className="text-slate-100 font-bold mb-2">{value.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Our Team" heading="The People Behind the Work" subheading="A diverse team of engineers, designers, and strategists passionate about technology" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-300 hover:-translate-y-1 text-center group"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4"
                  style={{ backgroundColor: `${member.color}20`, color: member.color, border: `1px solid ${member.color}30` }}
                >
                  {member.initials}
                </div>
                <h4 className="text-slate-100 font-bold text-sm mb-1">{member.name}</h4>
                <p className="text-blue-400 text-xs font-medium mb-1">{member.role}</p>
                <p className="text-slate-500 text-xs">{member.domain}</p>
                <div className="mt-3 px-3 py-1 rounded-full bg-slate-700/50 border border-slate-600/30 inline-block">
                  <span className="text-slate-400 text-xs">{member.exp}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 bg-slate-800/20 border-y border-slate-700/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Recognition" heading="Achievements & Certifications" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {ACHIEVEMENTS.map((ach, i) => (
              <motion.div
                key={ach}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-3 p-5 rounded-xl bg-slate-800/60 border border-slate-700/40 hover:border-emerald-500/20 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <FiCheck size={14} className="text-emerald-400" />
                </div>
                <span className="text-slate-200 text-sm font-medium">{ach}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </motion.div>
  );
};

export default About;
