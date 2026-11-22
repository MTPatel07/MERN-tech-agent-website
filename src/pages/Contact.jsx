import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {
  FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiArrowRight,
  FiCheckCircle, FiLinkedin, FiInstagram, FiGithub, FiTwitter
} from 'react-icons/fi';
import { COMPANY } from '../utils/constants';
import { FadeInUp, SectionHeader } from '../components/ui/AnimatedText';

const services = ['Website Development', 'AI Automation', 'Digital Solutions', 'Internship Inquiry', 'Other'];
const budgets = ['Under ₹50K', '₹50K – ₹1 Lakh', '₹1L – ₹5L', '₹5L+', 'Not Sure Yet'];

const inputClasses = 'w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:bg-slate-800 transition-all duration-200';
const labelClasses = 'block text-slate-300 text-sm font-medium mb-2';
const errorClasses = 'text-red-400 text-xs mt-1';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    reset();
    toast.success('Message sent! We will get back to you within 24 hours.', {
      duration: 5000,
      style: { background: '#1E293B', color: '#F8FAFC', border: '1px solid #334155' },
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Get In Touch
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-100 leading-tight mb-6">
              Let's Build Something <span className="gradient-text">Together</span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-slate-400 text-xl leading-relaxed">
              Tell us about your project and we'll get back to you within 24 hours with a free consultation.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10">
          {/* Left - Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="p-7 rounded-2xl bg-slate-800/50 border border-slate-700/50"
            >
              <h3 className="text-lg font-bold text-slate-100 mb-6">Contact Information</h3>
              <div className="space-y-5">
                {[
                  { icon: FiMail, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
                  { icon: FiPhone, label: 'Phone', value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
                  { icon: FiMapPin, label: 'Office', value: COMPANY.location, href: null },
                  { icon: FiClock, label: 'Hours', value: COMPANY.working_hours, href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-slate-200 text-sm hover:text-blue-400 transition-colors">{value}</a>
                      ) : (
                        <p className="text-slate-200 text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div className="pt-6 border-t border-slate-700/40 mt-6">
                <p className="text-slate-400 text-sm mb-4">Connect with us</p>
                <div className="flex gap-3">
                  {[
                    { icon: FiLinkedin, href: COMPANY.socials.linkedin },
                    { icon: FiInstagram, href: COMPANY.socials.instagram },
                    { icon: FiGithub, href: COMPANY.socials.github },
                    { icon: FiTwitter, href: COMPANY.socials.twitter },
                  ].map(({ icon: Icon, href }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-slate-700/50 border border-slate-600/50 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200"
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Promise card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <FiCheckCircle size={18} className="text-emerald-400" />
                <h4 className="text-slate-100 font-semibold">Our Promise</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                We respond to every inquiry within 24 hours on business days. Your first consultation is completely free, with no obligation or commitment required.
              </p>
              <div className="mt-4 space-y-2">
                {['Free project estimation', 'No commitment required', 'Response within 24 hours'].map(p => (
                  <div key={p} className="flex items-center gap-2 text-sm text-slate-300">
                    <FiCheckCircle size={12} className="text-emerald-400" />
                    {p}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden border border-slate-700/40 bg-slate-800/50 h-52 flex items-center justify-center"
            >
              <div className="text-center">
                <FiMapPin size={32} className="text-blue-400 mx-auto mb-3" />
                <p className="text-slate-300 font-medium">Hyderabad, Telangana</p>
                <p className="text-slate-500 text-sm">India — 500 001</p>
              </div>
            </motion.div>
          </div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="p-8 md:p-10 rounded-2xl bg-slate-800/50 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-slate-100 mb-2">Tell Us About Your Project</h3>
              <p className="text-slate-400 text-sm mb-8">Fill in the details below and we'll be in touch within 24 hours.</p>

              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                    <FiCheckCircle size={28} className="text-emerald-400" />
                  </div>
                  <h4 className="text-slate-100 font-bold text-xl mb-2">Message Sent!</h4>
                  <p className="text-slate-400">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClasses}>Your Name *</label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        type="text"
                        placeholder="Rahul Sharma"
                        className={inputClasses}
                      />
                      {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className={labelClasses}>Business Email *</label>
                      <input
                        {...register('email', {
                          required: 'Email is required',
                          pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: 'Enter a valid email' }
                        })}
                        type="email"
                        placeholder="rahul@company.com"
                        className={inputClasses}
                      />
                      {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClasses}>Phone Number</label>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="+91 98765 43210"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className={labelClasses}>Company Name</label>
                      <input
                        {...register('company')}
                        type="text"
                        placeholder="Your Company Pvt. Ltd."
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClasses}>Service Needed</label>
                      <select {...register('service')} className={`${inputClasses} cursor-pointer`}>
                        <option value="" className="bg-slate-800">Select a service</option>
                        {services.map(s => <option key={s} value={s} className="bg-slate-800">{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelClasses}>Estimated Budget</label>
                      <select {...register('budget')} className={`${inputClasses} cursor-pointer`}>
                        <option value="" className="bg-slate-800">Select budget range</option>
                        {budgets.map(b => <option key={b} value={b} className="bg-slate-800">{b}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClasses}>Tell Us About Your Project *</label>
                    <textarea
                      {...register('message', { required: 'Please describe your project' })}
                      rows={5}
                      placeholder="Describe your project goals, challenges, and what you're looking to achieve..."
                      className={`${inputClasses} resize-none`}
                    />
                    {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
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
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FiSend size={16} />
                      </>
                    )}
                  </motion.button>

                  <p className="text-slate-500 text-xs text-center">
                    By submitting this form you agree to our{' '}
                    <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>.
                    We never share your data.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
