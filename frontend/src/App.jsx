import './App.css'
import { useState } from 'react'
import {
  FaHome,
  FaCreditCard,
  FaExchangeAlt,
  FaEllipsisH,
  FaUserCircle
} from 'react-icons/fa'
import UPIFlow from './UPIFlow'
import ProfileDrawer from './ProfileDrawer'

const sections = [
  {
    title: 'POPULAR',
    items: [
      { icon: '📱', label: 'bills & recharges' },
      { icon: '💸', label: 'pay contacts' },
      { icon: '🏠', label: 'house rent' },
      { icon: '🚗', label: 'garage' }
    ]
  },
  {
    title: 'MONEY MATTERS',
    items: [
      { icon: '💰', label: 'cash' },
      { icon: '🏦', label: 'bank balance' },
      { icon: '💵', label: 'money' },
      { icon: '📊', label: 'CIBIL score' },
      { icon: '👛', label: 'Findi-Bankit wallet' }
    ]
  },
  {
    title: 'BILLS',
    items: [
      { icon: '💳', label: 'credit card' },
      { icon: '📱', label: 'bills & recharges' },
      { icon: '🏠', label: 'house rent' },
      { icon: '🎓', label: 'education fees' },
      { icon: '🚗', label: 'motor insurance' },
      { icon: '🕑', label: 'payment history' }
    ]
  },
  {
    title: 'PAYMENTS',
    items: [
      { icon: '📷', label: 'scan & pay' },
      { icon: '💸', label: 'pay contacts' }
    ]
  },
  {
    title: 'EXPLORE',
    items: [
      { icon: '🛍️', label: 'shop' },
      { icon: '🚗', label: 'garage' },
      { icon: '🎁', label: 'gift cards' },
      { icon: '✈️', label: 'travel' }
    ]
  },
  {
    title: 'BENEFITS',
    items: [
      { icon: '🎉', label: 'refer' },
      { icon: '🪙', label: 'coins' },
      { icon: '🎟️', label: 'vouchers' }
    ]
  },
  {
    title: 'OTHERS',
    items: [
      { icon: '🆘', label: 'support' },
      { icon: '🕒', label: 'payment history' },
      { icon: '⚙️', label: 'settings' }
    ]
  }
]

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <div className="mobile-container">
      <header className="app-header">
        <h1 className="app-title">Bankit</h1>
        <button
          className="profile-btn"
          onClick={() => setProfileOpen(true)}
          aria-label="profile"
        >
          <FaUserCircle size={28} />
        </button>
      </header>

      <div className="content">
        {currentPage === 'home' && (
          <>
            {/* Greeting */}
            <div className="greeting">
              <p>
                hello, <span className="username">Ashish</span>
              </p>
            </div>

            {/* Rewards carousel */}
            <div className="carousel">
              <div className="reward-card">UNCLAIMED REWARDS</div>
              <div className="reward-card">Daily Rewards</div>
              <div className="reward-card">Gift Cards</div>
            </div>

            {/* Services sections */}
            {sections.map((section) => (
              <section className="section" key={section.title}>
                <h3 className="section-title">{section.title}</h3>
                <div className="grid-icons">
                  {section.items.map((item) => (
                    <div className="icon-item" key={item.label}>
                      <div className="icon-circle">{item.icon}</div>
                      <span className="icon-label">{item.label}</span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </>
        )}

        {currentPage === 'upi' && <UPIFlow onClose={() => setCurrentPage('home')} />}
      </div>

      {/* Bottom navigation */}
      <nav className="bottom-nav">
        <a href="#" className="nav-item" onClick={() => setCurrentPage('home')}>
          <FaHome className="nav-icon" />
          <span>Home</span>
        </a>
        <a href="#" className="nav-item">
          <FaCreditCard className="nav-icon" />
          <span>Cards</span>
        </a>
        <a
          href="#"
          className="nav-item"
          onClick={() => setCurrentPage('upi')}
        >
          <div className="upi-btn">UPI</div>
        </a>
        <a href="#" className="nav-item">
          <FaExchangeAlt className="nav-icon" />
          <span>Transactions</span>
        </a>
        <a href="#" className="nav-item">
          <FaEllipsisH className="nav-icon" />
          <span>More</span>
        </a>
      </nav>

      {profileOpen && <ProfileDrawer onClose={() => setProfileOpen(false)} />}
    </div>
  )
}

export default App
