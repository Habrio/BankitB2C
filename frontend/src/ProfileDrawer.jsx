function ProfileDrawer ({ onClose }) {
  return (
    <div className="profile-overlay" onClick={onClose}>
      <div className="profile-drawer" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <div className="profile-header">
          <div className="avatar">A</div>
          <div>
            <h2>Ashish Dabas</h2>
            <p className="membership">member since Jul, 2022</p>
          </div>
        </div>
        <div className="profile-section">
          <h4>PAYMENTS & BANK ACCOUNTS</h4>
          <ul>
            <li>UPI settings</li>
            <li>token management</li>
            <li>instant refund account setup</li>
          </ul>
        </div>
        <div className="profile-section">
          <h4>ACCOUNT SETTINGS</h4>
          <ul>
            <li>manage account</li>
            <li>manage addresses</li>
          </ul>
        </div>
        <div className="profile-section">
          <h4>ABOUT</h4>
          <ul>
            <li>terms and conditions</li>
            <li>privacy policy</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProfileDrawer
