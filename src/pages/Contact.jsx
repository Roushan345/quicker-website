import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-extrabold text-quicker-black mb-1">Get in Touch</h1>
      <p className="text-sm text-gray-500 mb-10">
        Questions, feedback, or need help with an order? We're here for you.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        <a
          href="https://wa.me/918252275937"
          target="_blank"
          rel="noreferrer"
          className="border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow"
        >
          <div className="text-2xl mb-2">💬</div>
          <div className="text-sm font-bold text-quicker-black mb-0.5">WhatsApp</div>
          <div className="text-xs text-gray-500">+91 8252275937</div>
        </a>
        <a
          href="mailto:hello@thequicker.in"
          className="border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow"
        >
          <div className="text-2xl mb-2">✉️</div>
          <div className="text-sm font-bold text-quicker-black mb-0.5">Email</div>
          <div className="text-xs text-gray-500">hello@thequicker.in</div>
        </a>
      </div>

      {sent ? (
        <div className="bg-quicker-yellow rounded-2xl p-7 text-center">
          <div className="text-3xl mb-2">✅</div>
          <p className="text-sm font-semibold text-quicker-black">
            Thanks! We'll get back to you soon. For faster help, message us on WhatsApp.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            required
            placeholder="Your name"
            className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-quicker-yellow"
          />
          <input
            type="email"
            required
            placeholder="Your email"
            className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-quicker-yellow"
          />
          <textarea
            required
            rows={4}
            placeholder="How can we help?"
            className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-quicker-yellow resize-none"
          />
          <button
            type="submit"
            className="bg-quicker-yellow text-quicker-black font-bold text-sm py-3 rounded-full"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  )
}
