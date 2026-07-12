import { Link } from 'react-router-dom'

export default function OrderConfirmed() {
  return (
    <div className="max-w-lg mx-auto px-4 py-24 text-center">
      <div className="text-6xl mb-5">✅</div>
      <h1 className="text-2xl font-bold text-quicker-black mb-2">Order Placed!</h1>
      <p className="text-sm text-gray-500 mb-8">
        Thanks for ordering with Quicker. We'll have it at your door soon —
        our shop partner has been notified.
      </p>
      <div className="flex gap-3 justify-center flex-wrap">
        <Link to="/shop" className="bg-quicker-black text-quicker-yellow font-bold text-sm px-7 py-3 rounded-full">
          Order More
        </Link>
        <a
          href="https://wa.me/918252275937"
          target="_blank"
          rel="noreferrer"
          className="border-2 border-quicker-black text-quicker-black font-bold text-sm px-7 py-3 rounded-full"
        >
          💬 Need Help?
        </a>
      </div>
    </div>
  )
}
