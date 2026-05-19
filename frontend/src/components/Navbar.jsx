function Navbar({ title = 'Dashboard', actions, onMenuClick }) {
  return (
    <header className="flex w-full flex-col gap-4 border-b border-slate-200 bg-white px-6 py-5 shadow-sm shadow-slate-900/5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <div className="flex items-center justify-between gap-4">
        {onMenuClick ? (
          <button
            type="button"
            onClick={onMenuClick}
            className="lg:hidden rounded-full border border-slate-200 bg-white p-2 text-slate-700 transition hover:bg-slate-100"
          >
            <span className="text-lg">☰</span>
          </button>
        ) : null}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-600">FitWear Admin</p>
          <h1 className="mt-2 text-2xl font-bold text-slate-900">{title}</h1>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">{actions}</div>
    </header>
  );
}

export default Navbar;
