const Badge = ({ children, variant = 'default', className = '', dot = false }) => {
  const variants = {
    default: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
    green: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    teal: 'bg-teal-500/10 text-teal-400 border border-teal-500/20',
    orange: 'bg-orange-500/10 text-orange-400 border border-orange-500/20',
    red: 'bg-red-500/10 text-red-400 border border-red-500/20',
    slate: 'bg-slate-700/50 text-slate-300 border border-slate-600/50',
    trust: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
      {children}
    </span>
  );
};

export default Badge;
