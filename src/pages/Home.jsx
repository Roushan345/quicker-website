import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

const CATEGORIES = [
  { name: 'Vegetables & Fruits', emoji: '🥬' },
  { name: 'Dairy & Milk', emoji: '🥛' },
  { name: 'Kirana & Grocery', emoji: '🍚' },
  { name: 'Bakery & Snacks', emoji: '🍪' },
  { name: 'Cold Drinks & Juices', emoji: '🥤' },
  { name: 'Medicine & Health', emoji: '💊' },
  { name: 'Cleaning Essentials', emoji: '🧹' },
]

export default function Home() {
  const [shops, setShops] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadShops() {
      const { data, error } = await supabase.from('shops').select('*').limit(8)
      if (!error && data) setShops(data)
      setLoading(false)
    }
    loadShops()
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="bg-quicker-yellow px-4 py-12 md:py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-12">
          <div className="flex-1 min-w-[280px]">
            <div className="inline-flex items-center gap-2 bg-quicker-black text-quicker-yellow text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 bg-green-500 rounded-full inline-block" />
              Now live in Gaya, Bihar
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-quicker-black leading-[1.1] mb-4">
              Anything<br /><span className="text-white">Anywhere</span><br />Anytime
            </h1>
            <p className="text-base text-gray-800 leading-relaxed mb-8 max-w-md">
              Order from your trusted local kirana, sabzi wala or dairy — and
              get it delivered fresh to your door in minutes.
            </p>
            <div className="flex gap-3 flex-wrap mb-9">
              <Link to="/shop" className="bg-quicker-black text-quicker-yellow font-bold text-sm px-7 py-3.5 rounded-full">
                Order Now ⚡
              </Link>
              <Link to="/stores" className="bg-white text-quicker-black font-semibold text-sm px-7 py-3.5 rounded-full border-2 border-quicker-black">
                Browse Stores 🏪
              </Link>
            </div>
            <div className="flex gap-7 flex-wrap">
              <div>
                <div className="text-xl font-extrabold text-quicker-black">20 min</div>
                <div className="text-xs text-gray-700 mt-0.5">Avg. Delivery</div>
              </div>
              <div className="w-px bg-gray-400" />
              <div>
                <div className="text-xl font-extrabold text-quicker-black">50+</div>
                <div className="text-xs text-gray-700 mt-0.5">Local Stores</div>
              </div>
              <div className="w-px bg-gray-400" />
              <div>
                <div className="text-xl font-extrabold text-quicker-black">₹0</div>
                <div className="text-xs text-gray-700 mt-0.5">Delivery Fee*</div>
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-[260px] flex flex-col gap-3.5">
            <div className="bg-white rounded-2xl px-4 py-3.5 flex items-center gap-3 shadow-lg">
              <span className="text-2xl">🛵</span>
              <div>
                <div className="text-sm font-semibold text-quicker-black">Order on the way!</div>
                <div className="text-[11px] text-gray-500">Ramu Kirana → Your door · 12 min</div>
              </div>
            </div>
            <div className="bg-quicker-black rounded-2xl p-5 flex items-center gap-4">
              <span className="text-4xl shrink-0">🥦</span>
              <div>
                <div className="text-white font-semibold text-sm mb-1">Fresh Vegetables</div>
                <div className="text-gray-400 text-xs leading-relaxed">Direct from your trusted sabzi wala — no cold storage, no compromise</div>
                <span className="inline-block bg-quicker-yellow text-quicker-black text-[10px] font-bold px-2 py-0.5 rounded-full mt-1.5">🌿 Farm Fresh</span>
              </div>
            </div>
            <div className="bg-quicker-black rounded-2xl p-5 flex items-center gap-4">
              <span className="text-4xl shrink-0">🛒</span>
              <div>
                <div className="text-white font-semibold text-sm mb-1">Kirana & Daily Needs</div>
                <div className="text-gray-400 text-xs leading-relaxed">Atta, dal, oil, snacks — everything from your neighbourhood store</div>
                <span className="inline-block bg-quicker-yellow text-quicker-black text-[10px] font-bold px-2 py-0.5 rounded-full mt-1.5">⚡ Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stores + Categories */}
      <section className="bg-white px-4 py-14">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end flex-wrap gap-3 mb-8">
            <div>
              <span className="inline-block bg-quicker-yellow text-quicker-black text-xs font-semibold uppercase tracking-wide px-3.5 py-1 rounded-full mb-2.5">
                📍 Gaya, Bihar
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-quicker-black">Shop from Local Stores Near You</h2>
            </div>
            <Link to="/stores" className="text-sm font-semibold text-quicker-yellow bg-quicker-black px-4.5 py-2 rounded-full">
              See All →
            </Link>
          </div>

          <div className="text-lg font-bold text-quicker-black mb-5">🏪 Partner Stores</div>

          {loading ? (
            <div className="text-gray-400 text-sm py-8 text-center">Loading stores…</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
              {shops.map((shop) => (
                <Link
                  key={shop.id}
                  to={`/shop?shop=${shop.id}`}
                  className="rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-lg transition-shadow"
                >
                  <div className="w-full h-28 flex items-center justify-center text-5xl bg-yellow-50">
                    {shop.emoji || '🏪'}
                  </div>
                  <div className="px-3 py-3.5">
                    <div className="text-sm font-semibold text-quicker-black mb-0.5">{shop.name}</div>
                    <div className="text-[11px] text-gray-500">{shop.category}</div>
                    <span className="inline-block bg-quicker-yellow text-quicker-black text-[10px] font-bold px-2 py-0.5 rounded-full mt-1.5">
                      ⚡ {shop.delivery_time || 'Fast Delivery'}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <hr className="border-gray-100 mb-8" />

          <div className="text-lg font-bold text-quicker-black mb-5">🗂️ Shop by Category</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.name}
                to={`/shop?category=${encodeURIComponent(cat.name)}`}
                className="rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-28 flex items-center justify-center text-5xl bg-yellow-50">
                  {cat.emoji}
                </div>
                <div className="px-3 py-3.5">
                  <div className="text-sm font-semibold text-quicker-black">{cat.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Shop owner CTA */}
      <section className="bg-quicker-yellow px-4 py-14 text-center">
        <span className="inline-block bg-quicker-black text-quicker-yellow text-xs font-semibold uppercase tracking-wide px-3.5 py-1 rounded-full mb-3.5">
          Our Partners
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-quicker-black mb-2">
          Shops You Already Know &amp; Trust
        </h2>
        <p className="text-sm text-gray-800 mb-8">
          Order from your favourite local stores in Gaya — now delivered to your door
        </p>
        <div className="bg-quicker-black rounded-2xl px-8 py-6 inline-flex items-center gap-4 flex-wrap justify-center">
          <span className="text-white text-sm font-medium">🏪 Are you a shop owner in Gaya?</span>
          <Link to="/partner-with-us" className="bg-quicker-yellow text-quicker-black text-sm font-bold px-6 py-2.5 rounded-full">
            Partner With Us
          </Link>
        </div>
      </section>
    </div>
  )
}
