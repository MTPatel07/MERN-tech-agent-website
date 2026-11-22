import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  icon,
  iconPosition = 'right',
  disabled = false,
  type = 'button',
  ...props
}) => {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 cursor-pointer';

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  };

  const variants = {
    primary: 'bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:from-blue-600 hover:to-blue-400 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40',
    secondary: 'bg-transparent border border-slate-600 text-slate-200 hover:border-blue-500 hover:text-blue-400',
    outline: 'bg-transparent border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400',
    ghost: 'bg-transparent text-slate-300 hover:text-white hover:bg-slate-700/50',
    danger: 'bg-red-600 text-white hover:bg-red-500',
    success: 'bg-emerald-600 text-white hover:bg-emerald-500',
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </>
  );

  if (to) {
    return (
      <motion.div whileHover={{ scale: disabled ? 1 : 1.02 }} whileTap={{ scale: disabled ? 1 : 0.98 }}>
        <Link to={to} className={classes} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
