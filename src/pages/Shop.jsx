import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useCart } from '../lib/CartContext'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const shopId = searchParams.get('shop')
  const categoryParam = searchParams.get('category')

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'All')
  const [shopName, setShopName] = useState(null)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const { addItem, items } = useCart()

  useEffect(() => {
    async function load() {
      setLoading(true)
      let query = supabase.from('products').select('*').eq('in_stock', true)
      if (shopId) query = query.eq('shop_id', shopId)

      const { data, error } = await query
      if (!error && data) {
        setProducts(data)
        const uniqueCats = [...new Set(data.map((p) => p.category).filter(Boolean))]
        setCategories(uniqueCats)
      }

      if (shopId) {
        const { data: shop } = await supabase.from('shops').select('name').eq('id', shopId).single()
        if (shop) setShopName(shop.name)
      } else {
        setShopName(null)
      }
      setLoading(false)
    }
    load()
  }, [shopId])

  useEffect(() => {
    setActiveCategory(categoryParam || 'All')
  }, [categoryParam])

  function selectCategory(cat) {
    setActiveCategory(cat)
    const params = new URLSearchParams(searchParams)
    if (cat === 'All') params.delete('category')
    else params.set('category', cat)
    setSearchParams(params)
  }

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory
    const matchesSearch = p.name?.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  function getQtyInCart(productId) {
    const item = items.find((i) => i.id === productId)
    return item ? item.quantity : 0
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Sidebar categories */}
      <aside className="md:w-56 shrink-0">
        <h2 className="text-lg font-bold text-quicker-black mb-4">
          {shopName ? shopName : 'All Products'}
        </h2>
        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
          <button
            onClick={() => selectCategory('All')}
            className={`text-sm text-left px-4 py-2 rounded-full md:rounded-lg whitespace-nowrap font-medium transition-colors ${
              activeCategory === 'All'
                ? 'bg-quicker-yellow text-quicker-black'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => selectCategory(cat)}
              className={`text-sm text-left px-4 py-2 rounded-full md:rounded-lg whitespace-nowrap font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-quicker-yellow text-quicker-black'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </aside>

      {/* Products grid */}
      <div className="flex-1">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full border border-gray-200 rounded-full px-5 py-2.5 text-sm mb-6 outline-none focus:border-quicker-yellow"
        />

        {loading ? (
          <div className="text-gray-400 text-sm py-12 text-center">Loading products…</div>
        ) : filtered.length === 0 ? (
          <div className="text-gray-400 text-sm py-12 text-center">
            No products found{shopName ? ` for ${shopName}` : ''}.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((product) => {
              const qty = getQtyInCart(product.id)
              return (
                <div
                  key={product.id}
                  className="border border-gray-100 rounded-2xl overflow-hidden bg-white hover:shadow-md transition-shadow"
                >
                  <div className="w-full h-32 bg-gray-50 flex items-center justify-center">
                    {product.image_url ? (
                      <img src={product.image_url} alt={product.name} className="max-h-full max-w-full object-contain" />
                    ) : (
                      <span className="text-4xl opacity-30">🛒</span>
                    )}
                  </div>
                  <div className="p-3.5">
                    <div className="text-sm font-medium text-quicker-black mb-1 line-clamp-2 min-h-[2.5em]">
                      {product.name}
                    </div>
                    {product.unit && (
                      <div className="text-[11px] text-gray-400 mb-1">{product.unit}</div>
                    )}
                    <div className="text-base font-bold text-quicker-black mb-3">₹{product.price}</div>

                    {qty === 0 ? (
                      <button
                        onClick={() => addItem(product)}
                        className="w-full bg-quicker-black text-quicker-yellow text-xs font-bold py-2 rounded-lg"
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <div className="flex items-center justify-between bg-quicker-yellow rounded-lg px-1 py-1">
                        <button
                          onClick={() => addItem(product, -1)}
                          className="w-7 h-7 flex items-center justify-center font-bold text-quicker-black"
                        >
                          −
                        </button>
                        <span className="text-sm font-bold text-quicker-black">{qty}</span>
                        <button
                          onClick={() => addItem(product)}
                          className="w-7 h-7 flex items-center justify-center font-bold text-quicker-black"
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
