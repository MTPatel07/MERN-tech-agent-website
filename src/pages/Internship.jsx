import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {
  FiCode, FiCpu, FiSmartphone, FiLayout, FiBarChart2, FiCloud,
  FiShield, FiLink, FiTrendingUp, FiWifi, FiCheck, FiStar, FiArrowRight,
  FiBriefcase, FiUsers, FiAward, FiFolder, FiTarget, FiSend, FiCheckCircle
} from 'react-icons/fi';
import { INTERNSHIP_PLANS, INTERNSHIP_DOMAINS, WHAT_YOU_GAIN } from '../utils/constants';
import { SectionHeader, FadeInUp } from '../components/ui/AnimatedText';
import CTASection from '../components/CTASection';

const domainIconMap = {
  FiCode, FiCpu, FiSmartphone, FiLayout, FiBarChart2, FiCloud,
  FiShield, FiLink, FiTrendingUp, FiWifi,
};

const gainIconMap = {
  FiBriefcase, FiUsers, FiAward, FiFolder, FiTarget, FiStar,
};

const colorMap = {
  blue: { badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20', icon: 'text-blue-400', iconBg: 'bg-blue-500/10 border-blue-500/20', check: 'text-blue-400', glow: 'border-blue-500/30', header: 'from-blue-600/20 to-transparent' },
  purple: { badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20', icon: 'text-purple-400', iconBg: 'bg-purple-500/10 border-purple-500/20', check: 'text-purple-400', glow: 'border-purple-500/30', header: 'from-purple-600/20 to-transparent' },
  teal: { badge: 'bg-teal-500/10 text-teal-400 border-teal-500/20', icon: 'text-teal-400', iconBg: 'bg-teal-500/10 border-teal-500/20', check: 'text-teal-400', glow: 'border-teal-500/30', header: 'from-teal-600/20 to-transparent' },
  orange: { badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20', icon: 'text-orange-400', iconBg: 'bg-orange-500/10 border-orange-500/20', check: 'text-orange-400', glow: 'border-orange-500/30', header: 'from-orange-600/20 to-transparent' },
};

const years = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Final Year', 'Graduate'];
const durations = ['1 Month', '3 Months', '6 Months', '12 Months'];
const domains = [
  'Full Stack Web Development', 'Artificial Intelligence & ML', 'Mobile App Development',
  'UI/UX Design', 'Data Analytics', 'Cloud Computing & DevOps',
  'Cybersecurity', 'Blockchain Development', 'Digital Marketing Tech', 'Embedded Systems & IoT',
];

const testimonials = [
  { name: 'Ananya Reddy', college: 'JNTU Hyderabad', domain: 'Full Stack Development', duration: '6 Months', text: 'Working on real projects from day one was incredible. I built features for actual clients and got a strong LinkedIn recommendation. Landed a job at a product startup 2 weeks after finishing!', role: 'Now: Frontend Dev at Razorpay', rating: 5 },
  { name: 'Mohammed Faisal', college: 'Osmania University', domain: 'AI/ML', duration: '3 Months', text: 'The mentorship quality here is unmatched. My mentor had 8 years of experience and guided me through real ML pipelines. My GitHub profile went from empty to impressive in 3 months.', role: 'Now: ML Intern at Microsoft', rating: 5 },
  { name: 'Pooja Iyer', college: 'Bits Pilani Hyderabad', domain: 'UI/UX Design', duration: '6 Months', text: 'I came in knowing Figma basics and left having designed 3 complete products for real clients. The portfolio I built here directly helped me get my dream job.', role: 'Now: Product Designer at Swiggy', rating: 5 },
];

const inputCls = 'w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-all duration-200';
const labelCls = 'block text-slate-300 text-sm font-medium mb-2';
const errCls = 'text-red-400 text-xs mt-1';

const Internship = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    reset();
    toast.success('Application submitted! We will contact you within 48 hours.', {
      duration: 6000,
      style: { background: '#1E293B', color: '#F8FAFC', border: '1px solid #334155' },
    });
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/6 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto relative">
          <FadeInUp>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Real Experience. Real Skills. Real Certificate.
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-100 leading-tight mb-6">
              Launch Your Tech Career<br />
              <span className="gradient-text">With Us</span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Join our internship program and work on actual client projects alongside experienced professionals. Not dummy projects. Not fake work. <strong className="text-slate-300">Real impact.</strong>
            </p>
          </FadeInUp>
          <FadeInUp delay={0.3}>
            <div className="flex flex-wrap justify-center gap-5">
              {[
                { label: '200+ Interns', color: 'text-blue-400' },
                { label: '85% Placed', color: 'text-emerald-400' },
                { label: '10+ Domains', color: 'text-purple-400' },
                { label: '4 Duration Options', color: 'text-orange-400' },
              ].map(s => (
                <div key={s.label} className={`text-sm font-semibold ${s.color}`}>{s.label}</div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Duration Plans */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Internship Plans" heading="Choose Your Internship Duration" subheading="From quick skill sprints to full expert tracks — find what fits your goals" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INTERNSHIP_PLANS.map((plan, i) => {
              const colors = colorMap[plan.color];
              return (
                <motion.div
                  key={plan.duration}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative rounded-2xl border ${plan.is_popular ? colors.glow : 'border-slate-700/50'} bg-slate-800/50 overflow-hidden hover:-translate-y-1 transition-all duration-300`}
                >
                  {plan.is_popular && (
                    <div className="absolute top-0 left-0 right-0 py-1.5 text-center bg-gradient-to-r from-teal-600/80 to-teal-500/80 text-white text-xs font-bold">
                      ⭐ MOST POPULAR
                    </div>
                  )}
                  <div className={`pt-${plan.is_popular ? '10' : '7'} px-6 pb-6`} style={{ paddingTop: plan.is_popular ? '2.5rem' : '1.75rem' }}>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-3 ${colors.badge}`}>
                      {plan.label}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-1">{plan.duration}</h3>
                    <p className="text-slate-400 text-xs mb-5 leading-relaxed">{plan.ideal_for}</p>
                    <ul className="space-y-2.5">
                      {plan.includes.map(item => (
                        <li key={item} className="flex items-start gap-2 text-xs text-slate-300">
                          <FiCheck size={12} className={`flex-shrink-0 mt-0.5 ${colors.check}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#apply"
                      className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-600 text-slate-300 text-sm font-medium hover:border-blue-500/40 hover:text-blue-400 transition-all duration-200"
                    >
                      Apply Now <FiArrowRight size={13} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Domains */}
      <section className="py-20 px-4 bg-slate-800/20 border-y border-slate-700/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Domains" heading="10+ Domains to Choose From" subheading="Pick your passion area and start building real expertise" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {INTERNSHIP_DOMAINS.map((domain, i) => {
              const Icon = domainIconMap[domain.icon] || FiCode;
              return (
                <motion.div
                  key={domain.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="p-5 rounded-xl bg-slate-800/60 border border-slate-700/40 hover:border-blue-500/30 hover:bg-slate-700/50 transition-all duration-300 text-center group cursor-default hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-3">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <p className="text-slate-300 text-xs font-medium leading-snug group-hover:text-white transition-colors">
                    {domain.name}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You Gain */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Benefits" heading="What You Actually Gain" subheading="More than just a certificate — a launchpad for your career" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_YOU_GAIN.map((item, i) => {
              const Icon = gainIconMap[item.icon] || FiBriefcase;
              const colors = ['text-blue-400 bg-blue-500/10 border-blue-500/20', 'text-purple-400 bg-purple-500/10 border-purple-500/20', 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20', 'text-orange-400 bg-orange-500/10 border-orange-500/20', 'text-teal-400 bg-teal-500/10 border-teal-500/20', 'text-pink-400 bg-pink-500/10 border-pink-500/20'];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-300 hover:-translate-y-1 flex gap-5"
                >
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${colors[i % colors.length]}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-bold mb-1.5">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Intern Testimonials */}
      <section className="py-20 px-4 bg-slate-800/20 border-y border-slate-700/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Intern Stories" heading="What Our Interns Say" subheading="Hear directly from students who built their careers with us" />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-7 rounded-2xl bg-slate-800/60 border border-slate-700/50 hover:border-slate-600/70 transition-all duration-300"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <FiStar key={j} size={13} className="text-amber-400" style={{ fill: '#FBBF24' }} />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="pt-4 border-t border-slate-700/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm flex-shrink-0">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-slate-100 font-semibold text-sm">{t.name}</p>
                      <p className="text-slate-500 text-xs">{t.college}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-0.5 rounded-md text-xs bg-blue-500/10 text-blue-400 border border-blue-500/15">{t.domain}</span>
                    <span className="px-2 py-0.5 rounded-md text-xs bg-purple-500/10 text-purple-400 border border-purple-500/15">{t.duration}</span>
                  </div>
                  <p className="text-emerald-400 text-xs mt-2 font-medium">✓ {t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            tag="Apply Now"
            heading="Apply for Internship"
            subheading="Fill in the form and our team will reach out within 48 hours"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10 rounded-2xl bg-slate-800/50 border border-slate-700/50"
          >
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                  <FiCheckCircle size={28} className="text-emerald-400" />
                </div>
                <h4 className="text-slate-100 font-bold text-xl mb-2">Application Submitted!</h4>
                <p className="text-slate-400">Our team will contact you within 48 hours. Keep an eye on your email!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Full Name *</label>
                    <input {...register('name', { required: 'Name is required' })} type="text" placeholder="Priya Sharma" className={inputCls} />
                    {errors.name && <p className={errCls}>{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className={labelCls}>Email Address *</label>
                    <input {...register('email', { required: 'Email is required', pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: 'Valid email required' } })} type="email" placeholder="priya@email.com" className={inputCls} />
                    {errors.email && <p className={errCls}>{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Phone Number *</label>
                    <input {...register('phone', { required: 'Phone is required' })} type="tel" placeholder="+91 98765 43210" className={inputCls} />
                    {errors.phone && <p className={errCls}>{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className={labelCls}>College / University *</label>
                    <input {...register('college', { required: 'College is required' })} type="text" placeholder="JNTU Hyderabad" className={inputCls} />
                    {errors.college && <p className={errCls}>{errors.college.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Course *</label>
                    <input {...register('course', { required: 'Course is required' })} type="text" placeholder="B.Tech CSE" className={inputCls} />
                    {errors.course && <p className={errCls}>{errors.course.message}</p>}
                  </div>
                  <div>
                    <label className={labelCls}>Current Year *</label>
                    <select {...register('year', { required: 'Year is required' })} className={`${inputCls} cursor-pointer`}>
                      <option value="" className="bg-slate-800">Select year</option>
                      {years.map(y => <option key={y} value={y} className="bg-slate-800">{y}</option>)}
                    </select>
                    {errors.year && <p className={errCls}>{errors.year.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Preferred Domain *</label>
                    <select {...register('domain', { required: 'Domain is required' })} className={`${inputCls} cursor-pointer`}>
                      <option value="" className="bg-slate-800">Select domain</option>
                      {domains.map(d => <option key={d} value={d} className="bg-slate-800">{d}</option>)}
                    </select>
                    {errors.domain && <p className={errCls}>{errors.domain.message}</p>}
                  </div>
                  <div>
                    <label className={labelCls}>Preferred Duration *</label>
                    <select {...register('duration', { required: 'Duration is required' })} className={`${inputCls} cursor-pointer`}>
                      <option value="" className="bg-slate-800">Select duration</option>
                      {durations.map(d => <option key={d} value={d} className="bg-slate-800">{d}</option>)}
                    </select>
                    {errors.duration && <p className={errCls}>{errors.duration.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>LinkedIn Profile (optional)</label>
                    <input {...register('linkedin')} type="url" placeholder="https://linkedin.com/in/username" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>GitHub Profile (optional)</label>
                    <input {...register('github')} type="url" placeholder="https://github.com/username" className={inputCls} />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Why do you want to join? * <span className="text-slate-500 font-normal">(50-200 words)</span></label>
                  <textarea
                    {...register('why_join', {
                      required: 'Please tell us why you want to join',
                      minLength: { value: 50, message: 'Write at least 50 characters' },
                    })}
                    rows={5}
                    placeholder="Tell us about your goals, what you hope to learn, and why Nexus Labs is the right place for you..."
                    className={`${inputCls} resize-none`}
                  />
                  {errors.why_join && <p className={errCls}>{errors.why_join.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold text-base shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <FiSend size={16} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </motion.div>
  );
};

export default Internship;
