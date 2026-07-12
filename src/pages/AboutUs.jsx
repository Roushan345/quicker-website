export default function AboutUs() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold text-quicker-black mb-5">About Quicker</h1>
      <p className="text-base text-gray-600 leading-relaxed mb-5">
        Quicker started with one simple idea: the kirana shop down the street
        shouldn't be slower than a warehouse three cities away. We connect
        Gaya's trusted local shops — the ones you already know — with fast,
        reliable doorstep delivery.
      </p>
      <p className="text-base text-gray-600 leading-relaxed mb-5">
        Every order on Quicker supports a real shopkeeper in your
        neighbourhood, not a faceless warehouse. From fresh vegetables to
        daily essentials and medicines, we're building the fastest way to
        shop local in Gaya, Bihar.
      </p>
      <div className="grid grid-cols-3 gap-4 mt-10">
        <div className="text-center">
          <div className="text-2xl font-extrabold text-quicker-black">20 min</div>
          <div className="text-xs text-gray-500 mt-1">Avg. Delivery</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-extrabold text-quicker-black">50+</div>
          <div className="text-xs text-gray-500 mt-1">Local Stores</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-extrabold text-quicker-black">₹0</div>
          <div className="text-xs text-gray-500 mt-1">Delivery Fee*</div>
        </div>
      </div>
    </div>
  )
}
