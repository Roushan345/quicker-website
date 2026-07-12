import { Link } from 'react-router-dom'

const customerSteps = [
  { step: 'STEP 1', emoji: '🛒', title: 'Browse & Order', desc: 'Open thequicker.in, search for groceries and daily essentials, add to cart and place your order in seconds.' },
  { step: 'STEP 2', emoji: '⚡', title: 'We Pick It Up', desc: 'Your order goes to a nearby partner shop instantly. The shopkeeper prepares it and our rider picks it up fast.' },
  { step: 'STEP 3', emoji: '🚪', title: 'Delivered to You', desc: 'Your order arrives at your doorstep in minutes. Track it live from your account anytime.' },
]

const shopSteps = [
  { emoji: '📲', title: 'Receive Orders Instantly', desc: 'New customer orders appear in your partner dashboard the moment they\u2019re placed.' },
  { emoji: '📦', title: 'Prepare the Order', desc: 'Pack the items quickly. Our rider will arrive at your shop within minutes for pickup.' },
  { emoji: '🛵', title: 'Rider Picks Up', desc: 'Hand off the packed order to the Quicker rider. Delivery is completely handled by us.' },
  { emoji: '💰', title: 'Get Paid Weekly', desc: 'Earnings are settled every week directly to your UPI or bank account. Simple and reliable.' },
]

export default function HowItWorks() {
  return (
    <div>
      <div className="bg-quicker-black px-4 py-16 text-center">
        <div className="text-5xl mb-4">⚡</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-quicker-yellow mb-3">How Quicker Works</h1>
        <p className="text-sm text-gray-400 max-w-md mx-auto">From Store to Door in Minutes — here's exactly how we make it happen.</p>
      </div>

      <div className="bg-white px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-quicker-yellow text-quicker-black text-xs font-bold uppercase tracking-wide px-3.5 py-1.5 rounded-full mb-4">For Customers</span>
            <h2 className="text-2xl font-extrabold text-quicker-black">Order in 3 Simple Steps</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {customerSteps.map((s) => (
              <div key={s.step}>
                <div className="w-[72px] h-[72px] bg-quicker-yellow rounded-full flex items-center justify-center text-3xl mx-auto mb-5">{s.emoji}</div>
                <div className="text-xs font-bold text-quicker-yellow tracking-wide mb-2 bg-quicker-black inline-block px-2 py-0.5 rounded">{s.step}</div>
                <h3 className="text-base font-bold text-quicker-black mb-2.5">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/shop" className="bg-quicker-yellow text-quicker-black font-bold text-sm px-9 py-3.5 rounded-full">🛒 Start Ordering Now</Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-quicker-black text-quicker-yellow text-xs font-bold uppercase tracking-wide px-3.5 py-1.5 rounded-full mb-4">For Shop Partners</span>
            <h2 className="text-2xl font-extrabold text-quicker-black">How You Earn With Quicker</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {shopSteps.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-7 flex gap-5 items-start">
                <div className="w-12 h-12 bg-quicker-yellow rounded-full flex items-center justify-center text-xl shrink-0">{s.emoji}</div>
                <div>
                  <h3 className="text-base font-bold text-quicker-black mb-1.5">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/partner-with-us" className="bg-quicker-black text-quicker-yellow font-bold text-sm px-9 py-3.5 rounded-full">🏪 Become a Shop Partner</Link>
          </div>
        </div>
      </div>

      <div className="bg-quicker-black px-4 py-16 text-center">
        <h2 className="text-2xl font-extrabold text-quicker-yellow mb-3">Ready to experience Quicker?</h2>
        <p className="text-sm text-gray-400 mb-7">Join thousands of happy customers in Gaya getting groceries delivered fast.</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link to="/shop" className="bg-quicker-yellow text-quicker-black font-bold text-sm px-7 py-3 rounded-full">🛒 Order Now</Link>
          <Link to="/partner-with-us" className="border border-gray-600 text-white font-bold text-sm px-7 py-3 rounded-full">🏪 Partner With Us</Link>
        </div>
      </div>
    </div>
  )
}
