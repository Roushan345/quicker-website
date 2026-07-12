import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './lib/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Stores from './pages/Stores'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import HowItWorks from './pages/HowItWorks'
import FAQs from './pages/FAQs'
import PartnerWithUs from './pages/PartnerWithUs'
import OnboardingGuide from './pages/OnboardingGuide'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import OrderConfirmed from './pages/OrderConfirmed'

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/partner-with-us" element={<PartnerWithUs />} />
            <Route path="/onboarding-guide" element={<OnboardingGuide />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/order-confirmed" element={<OrderConfirmed />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
