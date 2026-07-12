import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-quicker-black pt-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
        <div className="col-span-2 md:col-span-1">
          <div className="text-quicker-yellow font-extrabold text-xl mb-3">⚡ Quicker</div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Gaya's local delivery app — order from your trusted neighbourhood
            shops. Fresh groceries, vegetables, dairy and more delivered fast.
          </p>
          <p className="text-gray-400 text-xs mb-2">📍 Magadh Food and Beverage, Near Tekuna Faram, Gaya–Dobhi Road, Gaya, Bihar 824231</p>
          <p className="text-gray-400 text-xs mb-2">📞 +91 8252275937</p>
          <p className="text-gray-400 text-xs">✉️ hello@thequicker.in</p>
        </div>

        <div>
          <div className="text-white text-xs font-bold uppercase tracking-wide mb-4">Quick Links</div>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-quicker-yellow">Home</Link>
            <Link to="/shop" className="hover:text-quicker-yellow">Shop</Link>
            <Link to="/stores" className="hover:text-quicker-yellow">Stores</Link>
            <Link to="/about-us" className="hover:text-quicker-yellow">About Us</Link>
            <Link to="/contact" className="hover:text-quicker-yellow">Contact</Link>
          </div>
        </div>

        <div>
          <div className="text-white text-xs font-bold uppercase tracking-wide mb-4">For Customers</div>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <Link to="/how-it-works" className="hover:text-quicker-yellow">How It Works</Link>
            <Link to="/orders" className="hover:text-quicker-yellow">Track Order</Link>
            <Link to="/faqs" className="hover:text-quicker-yellow">FAQs</Link>
            <Link to="/shop" className="hover:text-quicker-yellow">Offers</Link>
          </div>
        </div>

        <div>
          <div className="text-white text-xs font-bold uppercase tracking-wide mb-4">For Shops</div>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <Link to="/partner-with-us" className="hover:text-quicker-yellow">Partner With Us</Link>
            <Link to="/onboarding-guide" className="hover:text-quicker-yellow">Onboarding Guide</Link>
            <a
              href="https://wa.me/918252275937?text=Hi%20Quicker!"
              target="_blank"
              rel="noreferrer"
              className="hover:text-quicker-yellow"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
        <span className="text-gray-500 text-xs">© 2026 Quicker. Made with ❤️ in Gaya, Bihar.</span>
        <a
          href="https://wa.me/918252275937"
          target="_blank"
          rel="noreferrer"
          className="w-8 h-8 bg-[#2a2a2a] rounded-full flex items-center justify-center text-sm"
        >
          💬
        </a>
      </div>
    </footer>
  )
}
