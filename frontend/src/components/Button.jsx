function Button({ children, variant = 'primary', onClick, type = 'button', className = '' }) {
  const baseClasses = 'inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/40 focus-visible:ring-offset-2';
  const variants = {
    primary: 'bg-red-500 text-white shadow-lg shadow-red-500/20 hover:bg-red-600 hover:scale-105',
    secondary: 'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 hover:scale-105',
    ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 hover:scale-105',
  };

  return (
    <button type={type} onClick={onClick} className={`${baseClasses} ${variants[variant] ?? variants.primary} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
