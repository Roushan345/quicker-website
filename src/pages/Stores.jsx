import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Stores() {
  const [shops, setShops] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase.from('shops').select('*')
      if (!error && data) setShops(data)
      setLoading(false)
    }
    load()
  }, [])

  return (
    <div>
      <div className="bg-quicker-yellow px-4 py-12 text-center">
        <span className="inline-block bg-quicker-black text-quicker-yellow text-xs font-semibold uppercase tracking-wide px-3.5 py-1 rounded-full mb-3.5">
          📍 Gaya, Bihar
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-quicker-black mb-2">All Partner Stores</h1>
        <p className="text-sm text-gray-800 max-w-md mx-auto">
          Order from your trusted local shops in Gaya — fresh products delivered to your door in minutes.
        </p>
      </div>

      <div className="bg-white px-4 py-14">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="text-gray-400 text-sm py-8 text-center">Loading stores…</div>
          ) : shops.length === 0 ? (
            <div className="text-gray-400 text-sm py-8 text-center">No stores yet — check back soon.</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {shops.map((shop) => (
                <Link
                  key={shop.id}
                  to={`/shop?shop=${shop.id}`}
                  className="rounded-[20px] overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="w-full h-36 flex items-center justify-center text-6xl bg-yellow-50">
                    {shop.emoji || '🏪'}
                  </div>
                  <div className="px-4 py-4">
                    <div className="text-base font-bold text-quicker-black mb-1">{shop.name}</div>
                    <div className="text-xs text-gray-500 mb-2">{shop.category}</div>
                    <span className="inline-block bg-quicker-yellow text-quicker-black text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-3">
                      {shop.is_open ? `⚡ ${shop.delivery_time || 'Fast Delivery'}` : '😴 Closed'}
                    </span>
                    <div className="bg-quicker-black text-quicker-yellow text-xs font-bold py-2 rounded-lg text-center">
                      Shop Now →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-quicker-yellow px-4 py-12 text-center">
        <h2 className="text-xl md:text-2xl font-extrabold text-quicker-black mb-2">
          Want your shop listed here?
        </h2>
        <p className="text-sm text-gray-800 mb-6">
          Join Quicker as a partner store and start getting orders today — free!
        </p>
        <Link to="/partner-with-us" className="bg-quicker-black text-quicker-yellow font-bold text-sm px-8 py-3.5 rounded-full">
          🏪 Partner With Us
        </Link>
      </div>
    </div>
  )
}
