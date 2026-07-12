const benefits = [
  { emoji: '📈', title: 'More Orders', desc: 'Get orders from customers near you who want fast delivery from their trusted local shop.' },
  { emoji: '🆓', title: 'Free to Join', desc: 'No setup fees, no monthly charges. We only earn when you earn. Zero risk to get started.' },
  { emoji: '🚴', title: 'We Handle Delivery', desc: 'You focus on stocking and preparing orders. Our riders handle the last-mile delivery for you.' },
  { emoji: '📊', title: 'Simple Dashboard', desc: 'Manage all your orders, track earnings, and update your inventory from one easy dashboard.' },
]

export default function PartnerWithUs() {
  return (
    <div>
      <div className="bg-quicker-yellow px-4 py-16 text-center">
        <div className="text-5xl mb-4">⚡🏪</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-quicker-black mb-3">Grow Your Shop with Quicker</h1>
        <p className="text-sm text-gray-800 max-w-lg mx-auto mb-7">
          Reach more customers in Gaya — without any upfront cost. We bring orders to you, you focus on your products.
        </p>
        <a
          href="https://wa.me/918252275937?text=Hi!%20I%20want%20to%20partner%20my%20shop%20with%20Quicker."
          target="_blank"
          rel="noreferrer"
          className="bg-quicker-black text-quicker-yellow font-bold text-sm px-9 py-3.5 rounded-full inline-block"
        >
          Join as Shop Partner →
        </a>
      </div>

      <div className="bg-white px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-quicker-black text-center mb-10">Why Partner With Quicker?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-gray-50 rounded-2xl p-7">
                <div className="text-3xl mb-3">{b.emoji}</div>
                <h3 className="text-base font-bold text-quicker-black mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-quicker-black px-4 py-16 text-center">
        <h2 className="text-2xl font-extrabold text-quicker-yellow mb-2">Ready to grow your shop?</h2>
        <p className="text-sm text-gray-400 mb-7">Join hundreds of local shops delivering faster with Quicker</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="https://wa.me/918252275937?text=Hi!%20I%20want%20to%20partner%20my%20shop%20with%20Quicker."
            target="_blank"
            rel="noreferrer"
            className="bg-quicker-yellow text-quicker-black font-bold text-sm px-7 py-3 rounded-full"
          >
            Register Your Shop →
          </a>
          <a
            href="https://wa.me/918252275937"
            target="_blank"
            rel="noreferrer"
            className="border border-gray-600 text-white font-bold text-sm px-7 py-3 rounded-full"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  )
}
