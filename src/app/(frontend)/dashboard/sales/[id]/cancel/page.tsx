'use client'
import Link from 'next/link'
import { useState } from 'react'
import './styles.css'
export default function CancelSalePage() {
  const [reason, setReason] = useState('')
  const [restore, setRestore] = useState(true)
  const [cancelled, setCancelled] = useState(false)
  return (
    <main className="cancel-page">
      <section className="cancel-dialog">
        <div className="cancel-heading">
          <span>!</span>
          <div>
            <h1>Cancel this transaction?</h1>
            <p>Canceling this sale may restore the sold quantities to inventory.</p>
          </div>
        </div>
        <div className="cancel-amount">
          <strong>
            TRANSACTION ID <b>#TRX-8924A</b>
          </strong>
          <strong>
            AMOUNT <b>$1,450.00</b>
          </strong>
        </div>
        <label>
          Reason for Cancellation *
          <select value={reason} onChange={(event) => setReason(event.target.value)}>
            <option value="">Select a reason...</option>
            <option>Customer Return</option>
            <option>Cashier Error</option>
            <option>Defective Item</option>
          </select>
        </label>
        <label className="restore-check">
          <input
            type="checkbox"
            checked={restore}
            onChange={(event) => setRestore(event.target.checked)}
          />
          <span>
            <strong>Restore items to inventory</strong>
            <small>Automatically adjust stock levels for 3 items.</small>
          </span>
        </label>
        <footer>
          <Link href="/dashboard/sales/id">Keep Transaction</Link>
          <button disabled={!reason} onClick={() => setCancelled(true)}>
            Cancel Transaction
          </button>
        </footer>
        {cancelled && (
          <p className="cancel-notice" role="status">
            Transaction cancellation submitted.
          </p>
        )}
      </section>
    </main>
  )
}
