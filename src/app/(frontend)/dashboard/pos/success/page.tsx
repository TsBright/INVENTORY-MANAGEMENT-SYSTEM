'use client'

import Link from 'next/link'
import './styles.css'

export default function PosSuccessPage() {
  return (
    <main className="success-page">
      <header>
        <Link href="/dashboard/pos">Executive Precision</Link>
        <div>♧　?　◎</div>
      </header>
      <section className="success-card">
        <div className="success-hero">
          <span>✓</span>
          <h1>Sale Completed</h1>
          <p>
            The transaction has been processed successfully and the inventory
            <br className="desktop-break" /> has been updated.
          </p>
        </div>
        <div className="receipt-summary">
          <div>
            <small>TRANSACTION ID</small>
            <strong>#INV-000428</strong>
          </div>
          <div>
            <small>TOTAL AMOUNT</small>
            <strong>₣85,000</strong>
          </div>
          <hr />
          <div>
            <small>DATE &amp; TIME</small>
            <span>Oct 24, 2023 • 14:32 EST</span>
          </div>
          <div>
            <small>PAYMENT METHOD</small>
            <span>Wire Transfer (...4920)</span>
          </div>
        </div>
        <div className="success-actions">
          <Link className="new-sale" href="/dashboard/pos">
            ＋ New Sale
          </Link>
          <button>▤　View Receipt</button>
          <button onClick={() => window.print()}>▣　Print</button>
        </div>
      </section>
    </main>
  )
}
