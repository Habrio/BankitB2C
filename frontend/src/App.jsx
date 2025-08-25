import './App.css'

// Home screen based on the provided fintech app mockups.
// The layout emulates a mobile device by constraining the
// width and fixing the bottom navigation bar while keeping
// the main content scrollable.

function App() {
  return (
    <div className="mobile-container">
      <div className="content">
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

        {/* Money Matters section */}
        <section className="section">
          <h3 className="section-title">MONEY MATTERS</h3>
          <div className="money-items">
            <div className="money-card">
              <span>CRED cash</span>
              <span className="amount">₹45,000</span>
            </div>
            <div className="money-card">
              <span>INDB xx 8358</span>
              <span className="amount">check</span>
            </div>
          </div>
        </section>

        {/* Upcoming Bills section */}
        <section className="section">
          <h3 className="section-title">UPCOMING BILLS</h3>
          <div className="bill-card">
            <div className="bill-info">
              <span className="bill-title">RBL Bank</span>
              <span className="bill-detail">XXXX 2299</span>
            </div>
            <button className="pay-btn">Pay ₹17,001</button>
          </div>
        </section>

        {/* Explore Section */}
        <section className="section">
          <h3 className="section-title">EXPLORE CRED</h3>
          <div className="grid-icons">
            <div className="icon-item">
              <div className="icon-circle">📱</div>
              <span className="icon-label">bills & recharges</span>
            </div>
            <div className="icon-item">
              <div className="icon-circle">💸</div>
              <span className="icon-label">pay contacts</span>
            </div>
            <div className="icon-item">
              <div className="icon-circle">🛍️</div>
              <span className="icon-label">shop</span>
            </div>
            <div className="icon-item">
              <div className="icon-circle">📊</div>
              <span className="icon-label">CIBIL score</span>
            </div>
            <div className="icon-item">
              <div className="icon-circle">💰</div>
              <span className="icon-label">cash</span>
            </div>
            <div className="icon-item">
              <div className="icon-circle">🎓</div>
              <span className="icon-label">education fees</span>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom navigation */}
      <nav className="bottom-nav">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#" className="nav-item">
          Cards
        </a>
        <a href="#" className="nav-item">
          UPI
        </a>
        <a href="#" className="nav-item">
          Rewards
        </a>
        <a href="#" className="nav-item">
          More
        </a>
      </nav>
    </div>
  )
}

export default App
