import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, glow = false, style = {}, onClick }) => {
  return (
    <motion.div
      className={`bg-slate-800/60 border border-slate-700/50 rounded-xl backdrop-blur-sm ${hover ? 'card-hover cursor-pointer' : ''} ${glow ? 'glow-blue' : ''} ${className}`}
      style={style}
      onClick={onClick}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
