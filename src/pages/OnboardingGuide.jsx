const steps = [
  { n: 1, title: 'Register Your Shop 📝', desc: 'Tell us your shop name, address, category and contact details. Takes less than 5 minutes!' },
  { n: 2, title: 'Get Verified ✅', desc: 'Our team will review your application and activate your account within 24 hours. You\u2019ll receive a WhatsApp confirmation message once you\u2019re live.' },
  { n: 3, title: 'Receive Orders 📲', desc: 'Once live, orders from nearby customers will appear in your partner dashboard instantly. Accept and start preparing them quickly to keep customers happy.' },
  { n: 4, title: 'Hand Off to Rider 🛵', desc: 'When the order is packed and ready, a Quicker rider will arrive at your shop for pickup. Keep orders neatly packed and labelled for fast handoff.' },
  { n: 5, title: 'Get Paid 💰', desc: 'Payments are settled weekly directly to your UPI or bank account. Track all your orders and earnings anytime.' },
]

export default function OnboardingGuide() {
  return (
    <div>
      <div className="bg-quicker-black px-4 py-16 text-center">
        <div className="text-5xl mb-4">⚡</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-quicker-yellow mb-3">Welcome to Quicker</h1>
        <p className="text-sm text-gray-400 max-w-md mx-auto">
          Your complete guide to getting started as a Quicker Shop Partner. Follow these 5 simple steps.
        </p>
      </div>

      <div className="bg-white px-4 py-16">
        <div className="max-w-2xl mx-auto flex flex-col gap-9">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-6 items-start">
              <div className="min-w-[52px] h-[52px] bg-quicker-yellow rounded-full flex items-center justify-center text-xl font-extrabold text-quicker-black shrink-0">
                {s.n}
              </div>
              <div>
                <h3 className="text-lg font-bold text-quicker-black mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-quicker-yellow px-4 py-14 text-center">
        <h2 className="text-2xl font-extrabold text-quicker-black mb-2">Ready to get started?</h2>
        <p className="text-sm text-gray-800 mb-6">Join Quicker today and start getting more orders tomorrow.</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="https://wa.me/918252275937?text=Hi!%20I%20want%20to%20register%20my%20shop%20with%20Quicker."
            target="_blank"
            rel="noreferrer"
            className="bg-quicker-black text-quicker-yellow font-bold text-sm px-7 py-3 rounded-full"
          >
            Register Now →
          </a>
          <a
            href="https://wa.me/918252275937?text=Hi!%20I%20need%20help%20with%20onboarding%20to%20Quicker."
            target="_blank"
            rel="noreferrer"
            className="border-2 border-quicker-black text-quicker-black font-bold text-sm px-7 py-3 rounded-full"
          >
            💬 Need Help?
          </a>
        </div>
      </div>
    </div>
  )
}
