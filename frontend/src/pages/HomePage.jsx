import '../App.css'

function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="mx-auto flex max-w-7xl items-center justify-between p-6 sm:px-8 lg:px-12 animate-fade-up">
        <div>
          <span className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-slate-900/10 animate-fade-up animate-stagger-1">
            FitWear
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          <a href="#produk" className="transition hover:text-slate-900">Produk</a>
          <a href="#kategori" className="transition hover:text-slate-900">Kategori</a>
          <a href="#fitur" className="transition hover:text-slate-900">Fitur</a>
          <a href="#tentang" className="transition hover:text-slate-900">Tentang</a>
        </nav>
        <a
          href="#produk"
          className="inline-flex h-12 items-center justify-center rounded-full bg-red-500 px-6 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition transition-transform duration-200 ease-out hover:scale-105 hover:bg-red-600"
        >
          Mulai Belanja
        </a>
      </header>

      <section className="overflow-hidden bg-white py-14 sm:py-20 animate-fade-up">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 animate-float animate-fade-up animate-stagger-2">
              Fashion modern untuk semua gaya
            </div>
            <div className="space-y-6">
              <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Marketplace FitWear: belanja baju dan sepatu<br className="hidden sm:block" /> dengan gaya dan kemudahan maksimal.
              </h1>
              <p className="max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                Temukan outfit premium, sneaker streetwear, dan koleksi fashion terbaru dengan pengalaman belanja mobile-first yang cepat dan nyaman.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#produk"
                className="inline-flex h-12 items-center justify-center rounded-full bg-red-500 px-6 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition transition-transform duration-200 ease-out hover:scale-105 hover:bg-red-600"
              >
                Mulai Belanja Sekarang
              </a>
              <a
                href="#kategori"
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition transition-transform duration-200 ease-out hover:scale-105 hover:border-slate-300 hover:bg-slate-50"
              >
                Jelajahi Kategori
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-slate-100 p-5">
                <p className="text-lg font-semibold text-slate-900">Ribuan Produk</p>
                <p className="mt-2 text-sm text-slate-500">Baju, sepatu, dan aksesoris trendi.</p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-5">
                <p className="text-lg font-semibold text-slate-900">Pengiriman Cepat</p>
                <p className="mt-2 text-sm text-slate-500">Kirim kilat ke seluruh Indonesia.</p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-5">
                <p className="text-lg font-semibold text-slate-900">Support 24/7</p>
                <p className="mt-2 text-sm text-slate-500">Bantuan belanja kapan saja.</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up animate-stagger-3">
            <div className="overflow-hidden rounded-4xl bg-slate-900 shadow-2xl shadow-slate-900/20 animate-zoom-in">
              <img
                src="https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1200&q=80"
                alt="Koleksi fashion"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto mb-6 flex max-w-md items-center justify-between rounded-3xl bg-white/90 p-4 shadow-lg shadow-slate-900/10 backdrop-blur">
              <div>
                <p className="text-sm font-semibold text-slate-900">Pilihan outfit terbaik</p>
                <p className="text-xs text-slate-500">Baju kasual, olahraga, dan streetwear.</p>
              </div>
              <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">Promo Hari Ini</span>
            </div>
          </div>
        </div>
      </section>

      <section id="kategori" className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">Kategori</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Temukan koleksi yang sesuai dengan gaya kamu</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="overflow-hidden rounded-[1.75rem] bg-white shadow-lg shadow-slate-900/5 animate-fade-up animate-stagger-1">
              <img
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80"
                alt="Sneakers"
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">Sepatu Sneakers</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">Koleksi sneakers casual, premium, dan wearable streetwear untuk aktivitas sehari-hari.</p>
              </div>
            </article>
            <article className="overflow-hidden rounded-[1.75rem] bg-white shadow-lg shadow-slate-900/5 animate-fade-up animate-stagger-2">
              <img
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
                alt="Fashion wanita"
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">Baju Trendy</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">Dress, t-shirt, dan outerwear terbaru dengan desain stylish untuk tampilan sehari-hari.</p>
              </div>
            </article>
            <article className="overflow-hidden rounded-[1.75rem] bg-white shadow-lg shadow-slate-900/5 animate-fade-up animate-stagger-3">
              <img
                src="https://images.unsplash.com/photo-1475180098323-ad95c1f65f3f?auto=format&fit=crop&w=900&q=80"
                alt="Pakaian olahraga"
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">Activewear</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">Pilihan busana olahraga yang ringan, nyaman, dan cocok untuk aktivitas aktif.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="produk" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">Produk Unggulan</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Inspirasi outfit hari ini</h2>
            </div>
            <a
              href="#produk"
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition transition-transform duration-200 ease-out hover:scale-105 hover:border-slate-300 hover:bg-slate-50"
            >
              Lihat Semua Produk
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="overflow-hidden rounded-4xl bg-white shadow-xl shadow-slate-900/5 animate-fade-up animate-stagger-1">
              <img
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
                alt="Outfit premium"
                className="h-72 w-full object-cover"
              />
              <div className="space-y-4 p-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">New arrival</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">Setelan Kasual</h3>
                </div>
                <p className="text-sm leading-6 text-slate-500">Material lembut dan detail modern yang cocok untuk hangout atau santai di akhir pekan.</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-900">Rp299.000</span>
                  <button className="inline-flex h-11 items-center justify-center rounded-full bg-red-500 px-5 text-sm font-semibold text-white transition transition-transform duration-200 ease-out hover:scale-105 hover:bg-red-600">
                    Beli Sekarang
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-4xl bg-white shadow-xl shadow-slate-900/5 animate-fade-up animate-stagger-2">
              <img
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80"
                alt="Sneaker premium"
                className="h-72 w-full object-cover"
              />
              <div className="space-y-4 p-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">Best seller</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">Sneakers Street</h3>
                </div>
                <p className="text-sm leading-6 text-slate-500">Desain rapih dan nyaman, sempurna untuk gaya sehari-hari dengan sentuhan modern.</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-900">Rp429.000</span>
                  <button className="inline-flex h-11 items-center justify-center rounded-full bg-red-500 px-5 text-sm font-semibold text-white transition transition-transform duration-200 ease-out hover:scale-105 hover:bg-red-600">
                    Beli Sekarang
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-4xl bg-white shadow-xl shadow-slate-900/5 animate-fade-up animate-stagger-3">
              <img
                src="https://images.unsplash.com/photo-1475180098323-ad95c1f65f3f?auto=format&fit=crop&w=900&q=80"
                alt="Outfit aktif"
                className="h-72 w-full object-cover"
              />
              <div className="space-y-4 p-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">Favorit</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">Activewear Set</h3>
                </div>
                <p className="text-sm leading-6 text-slate-500">Bahan breathable yang mendukung setiap gerakan saat berolahraga atau jalan kota.</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-900">Rp359.000</span>
                  <button className="inline-flex h-11 items-center justify-center rounded-full bg-red-500 px-5 text-sm font-semibold text-white transition transition-transform duration-200 ease-out hover:scale-105 hover:bg-red-600">
                    Beli Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fitur" className="bg-slate-900 py-16 sm:py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[1.75rem] bg-slate-800/95 p-8 shadow-2xl shadow-slate-950/20 animate-fade-up animate-stagger-1">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-400">Belanja mudah</p>
              <h3 className="mt-4 text-xl font-bold text-white">Checkout cepat</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">Proses belanja yang simpel dan desain checkout yang mudah dipahami di layar mobile.</p>
            </div>
            <div className="rounded-[1.75rem] bg-slate-800/95 p-8 shadow-2xl shadow-slate-950/20 animate-fade-up animate-stagger-2">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-400">Custom filter</p>
              <h3 className="mt-4 text-xl font-bold text-white">Cari cepat</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">Filter berdasarkan ukuran, warna, dan kategori agar produknya langsung cocok dengan preferensi kamu.</p>
            </div>
            <div className="rounded-[1.75rem] bg-slate-800/95 p-8 shadow-2xl shadow-slate-950/20 animate-fade-up animate-stagger-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-400">Dukungan</p>
              <h3 className="mt-4 text-xl font-bold text-white">Customer service</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">Tim support siap membantu pesan, pengiriman, dan return kapan saja.</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="tentang" className="border-t border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:px-8 lg:px-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">FitWear</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">Marketplace fashion yang mengutamakan kualitas, kenyamanan, dan pengalaman mobile-first untuk semua pengguna.</p>
          </div>
          <p className="text-sm text-slate-500">© 2026 FitWear. Semua hak cipta dilindungi.</p>
        </div>
      </footer>
    </main>
  )
}

export default HomePage
