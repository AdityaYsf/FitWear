import { useState } from "react";
import { Button, Card, Navbar, Sidebar, StatCard } from "../../components";

function AdminDashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const menuItems = [
    { label: "Ringkasan", href: "/admin" },
    { label: "Produk", href: "/admin/products" },
    { label: "Pesanan", href: "/admin/orders" },
    { label: "Pengguna", href: "/admin/users" },
    { label: "Laporan", href: "/admin/reports" },
  ];

  const stats = [
    { label: "Penjualan Hari Ini", value: "Rp 24,8JT", change: "+18%", icon: "💰" },
    { label: "Pesanan Baru", value: "128", change: "+12%", icon: "📦" },
    { label: "Produk Aktif", value: "542", change: "+4%", icon: "🛍️" },
    { label: "Pelanggan", value: "8,412", change: "+6%", icon: "👥" },
  ];

  const orders = [
    { id: "FW-1024", customer: "Sari", status: "Dikirim", total: "Rp 775.000" },
    { id: "FW-1023", customer: "Andi", status: "Diproses", total: "Rp 1.200.000" },
    { id: "FW-1022", customer: "Rina", status: "Selesai", total: "Rp 620.000" },
  ];

  const products = [
    { name: "Sneaker Flux", sold: "321", stock: "64" },
    { name: "Legging Pro", sold: "218", stock: "120" },
    { name: "Hoodie Core", sold: "184", stock: "40" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="lg:flex lg:min-h-screen">
        <Sidebar menuItems={menuItems} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="flex-1">
          <Navbar
            title="Admin Dashboard"
            onMenuClick={() => setSidebarOpen(true)}
            actions={[
              <Button key="export" variant="secondary">
                Export CSV
              </Button>,
              <Button key="new">Tambah Produk</Button>,
            ]}
          />

          <main className="mx-auto w-full max-w-7xl min-h-screen space-y-6 p-6 lg:p-8">
            <div className="grid gap-6">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => (
                  <StatCard
                    key={stat.label}
                    label={stat.label}
                    value={stat.value}
                    change={stat.change}
                    icon={stat.icon}
                  />
                ))}
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.8fr_1fr]">
                <section className="space-y-6">
                  <Card title="Ringkasan Penjualan" subtitle="Performa terbaru pasar FitWear" className="max-w-full">
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="rounded-3xl bg-slate-50 p-5">
                        <p className="text-sm text-slate-500">Total pendapatan</p>
                        <p className="mt-3 text-3xl font-semibold text-slate-900">Rp 1,2M</p>
                      </div>
                      <div className="rounded-3xl bg-slate-50 p-5">
                        <p className="text-sm text-slate-500">Konversi</p>
                        <p className="mt-3 text-3xl font-semibold text-slate-900">8.4%</p>
                      </div>
                      <div className="rounded-3xl bg-slate-50 p-5">
                        <p className="text-sm text-slate-500">Rata-rata nilai pesanan</p>
                        <p className="mt-3 text-3xl font-semibold text-slate-900">Rp 420.000</p>
                      </div>
                    </div>
                  </Card>

                  <Card title="Pesanan Terbaru" subtitle="Pesanan yang paling baru masuk" className="min-h-72">
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div key={order.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <p className="text-sm font-semibold text-slate-900">{order.id}</p>
                              <p className="text-sm text-slate-500">{order.customer}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
                                {order.status}
                              </span>
                              <p className="text-sm text-slate-500">{order.total}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </section>

                <section className="space-y-6">
                  <Card title="Top Produk" subtitle="Produk terlaris minggu ini" className="space-y-4">
                    <div className="grid gap-3">
                      {products.map((product) => (
                        <div key={product.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <p className="font-semibold text-slate-900">{product.name}</p>
                              <p className="text-sm text-slate-500">Terjual {product.sold} unit</p>
                            </div>
                            <p className="text-sm text-slate-500">Stok {product.stock}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card title="Aksi Cepat" subtitle="Fungsi umum untuk admin">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <Button className="w-full">Tinjau Produk</Button>
                      <Button variant="secondary" className="w-full">Atur Diskon</Button>
                      <Button variant="ghost" className="w-full">Kelola Pengguna</Button>
                      <Button variant="secondary" className="w-full">Lihat Laporan</Button>
                    </div>
                  </Card>

                  <Card title="Performa Sistem" subtitle="Kondisi inventaris dan dukungan">
                    <div className="space-y-4 text-sm text-slate-600">
                      <p>Stok level untuk 12 produk teratas dalam batas normal.</p>
                      <p>Respon dukungan pelanggan rata-rata 2 jam 14 menit.</p>
                      <p>Server dan pemrosesan pesanan berjalan stabil.</p>
                    </div>
                  </Card>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardPage;
