function StatCard({ label, value, change, icon }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{label}</p>
          <p className="mt-3 text-3xl font-bold text-slate-900">{value}</p>
        </div>
        {icon && <div className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-red-500/10 text-red-600">{icon}</div>}
      </div>
      {change && (
        <p className="mt-4 text-sm text-slate-500">
          <span className="font-semibold text-slate-900">{change}</span> dari periode sebelumnya
        </p>
      )}
    </div>
  );
}

export default StatCard;
