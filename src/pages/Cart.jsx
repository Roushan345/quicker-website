import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../lib/CartContext'
import { supabase } from '../lib/supabase'

export default function Cart() {
  const { items, addItem, removeItem, total, clearCart } = useCart()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function handleCheckout(e) {
    e.preventDefault()
    setError('')

    if (!name.trim() || !phone.trim() || !address.trim()) {
      setError('Please fill in your name, phone and delivery address.')
      return
    }
    if (items.length === 0) {
      setError('Your cart is empty.')
      return
    }

    setSubmitting(true)

    const orderItems = items.map((i) => ({
      product_id: i.id,
      name: i.name,
      price: i.price,
      quantity: i.quantity,
    }))

    const shopId = items[0]?.shop_id || null

    const { error: insertError } = await supabase.from('orders').insert({
      shop_id: shopId,
      items: orderItems,
      total: total,
      status: 'pending',
      address: address,
      phone: phone,
    })

    setSubmitting(false)

    if (insertError) {
      setError('Something went wrong placing your order. Please try again.')
      return
    }

    clearCart()
    navigate('/order-confirmed')
  }

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="text-5xl mb-4">🛒</div>
        <h1 className="text-xl font-bold text-quicker-black mb-2">Your cart is empty</h1>
        <p className="text-sm text-gray-500 mb-6">Browse our stores and add items to get started.</p>
        <a href="/shop" className="bg-quicker-black text-quicker-yellow font-bold text-sm px-7 py-3 rounded-full inline-block">
          Start Shopping
        </a>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <h1 className="text-xl font-bold text-quicker-black mb-5">Your Cart</h1>
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border border-gray-100 rounded-xl p-3">
              <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center shrink-0">
                {item.image_url ? (
                  <img src={item.image_url} alt={item.name} className="max-h-full max-w-full object-contain" />
                ) : (
                  <span className="text-2xl opacity-30">🛒</span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-quicker-black truncate">{item.name}</div>
                <div className="text-xs text-gray-400">₹{item.price} × {item.quantity}</div>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-1 py-1">
                <button
                  onClick={() => addItem(item, -1)}
                  className="w-7 h-7 flex items-center justify-center font-bold text-quicker-black"
                >
                  −
                </button>
                <span className="text-sm font-bold text-quicker-black w-5 text-center">{item.quantity}</span>
                <button
                  onClick={() => addItem(item, 1)}
                  className="w-7 h-7 flex items-center justify-center font-bold text-quicker-black"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-gray-300 hover:text-red-400 text-lg shrink-0"
                aria-label={`Remove ${item.name}`}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="border border-gray-100 rounded-2xl p-5 sticky top-24">
          <h2 className="text-base font-bold text-quicker-black mb-4">Delivery Details</h2>
          <form onSubmit={handleCheckout} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-quicker-yellow"
            />
            <input
              type="tel"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-quicker-yellow"
            />
            <textarea
              placeholder="Delivery address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              className="border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-quicker-yellow resize-none"
            />

            <div className="border-t border-gray-100 pt-3 mt-1 flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-semibold text-quicker-black">₹{total}</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-500">Delivery Fee</span>
              <span className="font-semibold text-green-600">FREE</span>
            </div>

            {error && <div className="text-red-500 text-xs">{error}</div>}

            <button
              type="submit"
              disabled={submitting}
              className="bg-quicker-yellow text-quicker-black font-bold text-sm py-3 rounded-full disabled:opacity-60"
            >
              {submitting ? 'Placing order…' : `Place Order — ₹${total}`}
            </button>
            <p className="text-[11px] text-gray-400 text-center">Cash on Delivery or UPI on arrival</p>
          </form>
        </div>
      </div>
    </div>
  )
}
