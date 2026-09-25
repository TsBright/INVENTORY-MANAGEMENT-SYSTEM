'use client'

import Link from 'next/link'
import { useState } from 'react'
import './styles.css'

export default function PaymentPage() {
  const [method, setMethod] = useState('Cash')
  const [received, setReceived] = useState('100000')
  const [complete, setComplete] = useState(false)
  const change = Math.max(0, Number(received || 0) - 85000)
  return (
    <main className="payment-page">
      <header>
        <Link href="/dashboard/pos">Executive Precision</Link>
        <div>♧　?　◎</div>
      </header>
      <section className="payment-card">
        <div className="payment-heading">
          <div>
            <h1>Payment Summary</h1>
            <p>Transaction ID: #TXN-8492-AB</p>
          </div>
          <button>×</button>
        </div>
        <div className="payment-body">
          <div className="amount-due">
            <small>TOTAL AMOUNT DUE</small>
            <strong>₣85,000</strong>
          </div>
          <div className="payment-controls">
            <label>PAYMENT METHOD</label>
            <div className="method-picker">
              {['▣ Cash', '▭ Card', '••• Other'].map((item) => (
                <button
                  className={method === item.slice(2) ? 'selected' : ''}
                  onClick={() => setMethod(item.slice(2))}
                  key={item}
                >
                  {item}
                </button>
              ))}
            </div>
            <label htmlFor="received">Amount Received</label>
            <div className="received">
              <span>₣</span>
              <input
                id="received"
                type="number"
                value={received}
                onChange={(event) => setReceived(event.target.value)}
              />
            </div>
            <div className="change-due">
              <span>Change Due</span>
              <strong>₣{change.toLocaleString()}</strong>
            </div>
          </div>
        </div>
        <div className="payment-actions">
          <Link href="/dashboard/pos">Cancel</Link>
          <button onClick={() => setComplete(true)}>◉ Complete Sale</button>
        </div>
        {complete && (
          <p className="payment-notice" role="status">
            Payment recorded in this demo. <Link href="/dashboard/pos/success">View receipt</Link>
          </p>
        )}
      </section>
    </main>
  )
}
