import { motion } from 'framer-motion';
import { SectionHeader } from './ui/AnimatedText';
import { CLIENTS } from '../utils/constants';

const ClientCard = ({ client, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group relative"
    >
      <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 cursor-default">
        {/* Logo/Initials */}
        <div className="flex items-center gap-4 mb-4">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0"
            style={{
              backgroundColor: `${client.logo_text_color}15`,
              border: `1px solid ${client.logo_text_color}30`,
              color: client.logo_text_color,
            }}
          >
            {client.initials}
          </div>
          <div>
            <p className="text-slate-100 font-semibold text-sm leading-snug">{client.name}</p>
            <p className="text-xs text-slate-500 mt-0.5">{client.location}</p>
          </div>
        </div>

        {/* Industry */}
        <span
          className="inline-block px-3 py-1 rounded-full text-xs font-medium"
          style={{
            backgroundColor: `${client.logo_text_color}10`,
            color: client.logo_text_color,
            border: `1px solid ${client.logo_text_color}20`,
          }}
        >
          {client.industry}
        </span>
      </div>
    </motion.div>
  );
};

const ClientsSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Trusted By"
          heading="Companies That Trust Our Work"
          subheading="We have had the privilege of working with amazing businesses across India"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {CLIENTS.map((client, i) => (
            <ClientCard key={client.name} client={client} index={i} />
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12"
        >
          {[
            { label: 'Industries Served', value: '15+' },
            { label: 'Cities Across India', value: '20+' },
            { label: 'Repeat Clients', value: '78%' },
            { label: 'Avg. Project Rating', value: '4.9 ★' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-2xl font-bold text-blue-400">{item.value}</p>
              <p className="text-slate-400 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
