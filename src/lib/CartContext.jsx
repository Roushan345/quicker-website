import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('quicker_cart')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('quicker_cart', JSON.stringify(items))
  }, [items])

  function addItem(product, delta = 1) {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        const newQty = existing.quantity + delta
        if (newQty <= 0) {
          return prev.filter((i) => i.id !== product.id)
        }
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: newQty } : i
        )
      }
      if (delta <= 0) return prev
      return [...prev, { ...product, quantity: delta }]
    })
  }

  function removeItem(productId) {
    setItems((prev) => prev.filter((i) => i.id !== productId))
  }

  function updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      removeItem(productId)
      return
    }
    setItems((prev) =>
      prev.map((i) => (i.id === productId ? { ...i, quantity } : i))
    )
  }

  function clearCart() {
    setItems([])
  }

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  const count = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, total, count }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
