function Sidebar({ menuItems = [], isOpen = false, onClose }) {
  return (
    <>
      <div className={`fixed inset-0 z-30 lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="absolute inset-0 bg-slate-900/40" onClick={onClose} />
        <aside className="relative z-40 h-full w-72 overflow-y-auto border-r border-slate-200 bg-slate-50 p-6 shadow-2xl">
          <div className="mb-8 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Navigation</p>
              <h2 className="mt-3 text-lg font-semibold text-slate-900">Panel Menu</h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Tutup
            </button>
          </div>
          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-3xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>
      </div>

      <aside className="hidden min-h-screen w-52 flex-col gap-2 border-r border-slate-200 bg-slate-50 p-6 lg:flex">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Navigation</p>
          <h2 className="mt-3 text-lg font-semibold text-slate-900">Panel Menu</h2>
        </div>
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="rounded-3xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
