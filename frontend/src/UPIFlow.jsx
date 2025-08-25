import { useState } from 'react'

function UPIFlow ({ onClose }) {
  const [step, setStep] = useState(0)
  const [bank, setBank] = useState('')
  const [upiId, setUpiId] = useState('')
  const [pin, setPin] = useState('')
  const [payee, setPayee] = useState('')
  const [amount, setAmount] = useState('')

  return (
    <div className="upi-flow">
      {step === 0 && (
        <div>
          <h2>UPI Setup</h2>
          <p>Register your bank account to start paying with UPI.</p>
          <button onClick={() => setStep(1)}>Start</button>
        </div>
      )}
      {step === 1 && (
        <form
          onSubmit={e => {
            e.preventDefault()
            setStep(2)
          }}
        >
          <h2>Select Bank</h2>
          <select value={bank} onChange={e => setBank(e.target.value)} required>
            <option value="">Choose bank</option>
            <option value="Axis Bank">Axis Bank</option>
            <option value="HDFC Bank">HDFC Bank</option>
            <option value="SBI">State Bank of India</option>
          </select>
          <button type="submit">Continue</button>
        </form>
      )}
      {step === 2 && (
        <form
          onSubmit={e => {
            e.preventDefault()
            setStep(3)
          }}
        >
          <h2>Create UPI ID</h2>
          <input
            placeholder="yourname@bank"
            value={upiId}
            onChange={e => setUpiId(e.target.value)}
            required
          />
          <button type="submit">Continue</button>
        </form>
      )}
      {step === 3 && (
        <form
          onSubmit={e => {
            e.preventDefault()
            setStep(4)
          }}
        >
          <h2>Set UPI PIN</h2>
          <input
            type="password"
            placeholder="4-digit PIN"
            value={pin}
            onChange={e => setPin(e.target.value)}
            required
          />
          <button type="submit">Continue</button>
        </form>
      )}
      {step === 4 && (
        <form
          onSubmit={e => {
            e.preventDefault()
            setStep(5)
          }}
        >
          <h2>Make Payment</h2>
          <input
            placeholder="Payee UPI ID"
            value={payee}
            onChange={e => setPayee(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            required
          />
          <button type="submit">Pay</button>
        </form>
      )}
      {step === 5 && (
        <div>
          <h2>Payment Successful</h2>
          <p>
            ₹{amount} sent to {payee}
          </p>
          <button onClick={onClose}>Done</button>
        </div>
      )}
    </div>
  )
}

export default UPIFlow
