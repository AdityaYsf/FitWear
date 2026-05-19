function Card({ title, subtitle, children, footer, className = '' }) {
  return (
    <article className={`overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-5 flex flex-col gap-2">
          {title && <h2 className="text-xl font-semibold text-slate-900">{title}</h2>}
          {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
        </div>
      )}
      <div className="space-y-5">{children}</div>
      {footer && <div className="mt-6 border-t border-slate-200 pt-4 text-sm text-slate-500">{footer}</div>}
    </article>
  );
}

export default Card;
