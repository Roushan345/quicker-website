const faqs = [
  { q: '⚡ Which areas in Gaya do you deliver to?', a: 'We currently deliver across Gaya city. Enter your address at checkout to confirm availability in your area. We are expanding rapidly!' },
  { q: '⏱️ How fast is the delivery?', a: 'Most orders are delivered within 30–60 minutes depending on your location and order size. We always aim to be faster!' },
  { q: '🛒 What is the minimum order amount?', a: 'There is no minimum order — order as little or as much as you need!' },
  { q: '📦 How do I track my order?', a: 'After placing your order, you\u2019ll get updates by phone. Live order tracking in your account is coming soon.' },
  { q: '💳 What payment methods do you accept?', a: 'We accept Cash on Delivery and UPI payments. More payment options coming soon!' },
  { q: '❌ Can I cancel my order?', a: 'You can cancel within 2 minutes of placing the order. After that, contact us on WhatsApp at 8252275937 and we\u2019ll do our best to help.' },
  { q: '🔄 What if an item is out of stock?', a: 'We\u2019ll notify you immediately and either suggest a replacement or refund that item automatically.' },
]

export default function FAQs() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-extrabold text-quicker-black mb-1">Frequently Asked Questions</h1>
      <p className="text-sm text-gray-500 mb-10">Everything you need to know about Quicker.</p>

      <div className="flex flex-col">
        {faqs.map((f, i) => (
          <div key={f.q} className={`py-6 ${i !== faqs.length - 1 ? 'border-b border-gray-100' : ''}`}>
            <h3 className="text-base font-bold text-quicker-black mb-2">{f.q}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>

      <div className="bg-quicker-yellow rounded-2xl p-8 text-center mt-10">
        <h3 className="text-lg font-bold text-quicker-black mb-2">Still have questions?</h3>
        <p className="text-sm text-gray-800 mb-5">We're just a WhatsApp message away!</p>
        <a
          href="https://wa.me/918252275937?text=Hi%20Quicker!%20I%20have%20a%20question."
          target="_blank"
          rel="noreferrer"
          className="bg-quicker-black text-quicker-yellow font-bold text-sm px-8 py-3.5 rounded-full inline-block"
        >
          💬 WhatsApp Us
        </a>
      </div>
    </div>
  )
}
