import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../lib/CartContext'

export default function Navbar() {
  const { count } = useCart()
  const [open, setOpen] = useState(false)

  const navLink = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-quicker-black bg-quicker-yellow px-4 py-2 rounded-full' : 'text-gray-300 hover:text-white px-4 py-2'
    }`

  return (
    <header className="bg-quicker-black sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-1 shrink-0">
          <span className="bg-quicker-yellow text-quicker-black font-extrabold text-xl px-2 py-1 rounded">
            ⚡
          </span>
          <span className="text-white font-extrabold text-xl">quicker</span>
        </Link>

        <div className="hidden md:flex items-center flex-1 max-w-md bg-white rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 outline-none text-sm bg-transparent"
          />
          <span>🔍</span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/cart"
            className="relative flex items-center gap-2 text-white text-sm font-medium"
          >
            🛒 <span className="hidden sm:inline">My Cart</span>
            {count > 0 && (
              <span className="absolute -top-2 -right-3 bg-quicker-yellow text-quicker-black text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      <nav className={`${open ? 'flex' : 'hidden'} md:flex border-t border-white/10 px-4 py-2 gap-1 flex-col md:flex-row md:items-center md:justify-between`}>
        <div className="flex flex-col md:flex-row gap-1">
          <NavLink to="/" end className={navLink}>Home</NavLink>
          <NavLink to="/shop" className={navLink}>Shop</NavLink>
          <NavLink to="/stores" className={navLink}>Stores</NavLink>
          <NavLink to="/how-it-works" className={navLink}>How it Works</NavLink>
          <NavLink to="/about-us" className={navLink}>About Us</NavLink>
        </div>
        <NavLink
          to="/contact"
          className="bg-quicker-yellow text-quicker-black text-sm font-bold px-4 py-2 rounded-full text-center mt-1 md:mt-0"
        >
          Contact Us
        </NavLink>
      </nav>
    </header>
  )
}
