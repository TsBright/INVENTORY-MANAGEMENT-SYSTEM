'use client'
import { useState } from 'react'
import './styles.css'
export default function StockAdjustmentPage() {
  const [quantity, setQuantity] = useState('')
  const [done, setDone] = useState(false)
  return (
    <main className="adjust-page">
      <header>Inventory　›　Products　›　Shampoo X</header>
      <h1>Adjust Inventory</h1>
      <p>Record a discrepancy or manual adjustment for this SKU.</p>
      <section className="adjust-product">
        <span>▣</span>
        <div>
          <h2>Shampoo X</h2>
          <p>SKU: SHX-992-BLU • Batch: B-4921</p>
          <small>ⓘ Standard Unit</small>
        </div>
      </section>
      <div className="adjust-layout">
        <section className="adjust-card">
          <h2>Adjustment Details</h2>
          <div className="field-grid">
            <label>
              Current Quantity
              <input readOnly value="25" />
            </label>
            <label>
              New Quantity *
              <input
                required
                type="number"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
                placeholder="Enter new quantity"
              />
            </label>
          </div>
          <label>
            Reason Code *
            <select>
              <option>Select reason...</option>
              <option>Damage</option>
              <option>Expiry</option>
              <option>Audit Discrepancy</option>
            </select>
          </label>
          <label>
            Adjustment Notes (Optional)
            <textarea placeholder="Provide additional context for this adjustment..." />
          </label>
        </section>
        <aside className="audit-card">
          <h2>⚠　Audit Notice</h2>
          <p>
            Manual adjustments are recorded in the system audit log and may require managerial
            approval if exceeding standard variance thresholds.
          </p>
          <hr />
          <button disabled={!quantity} onClick={() => setDone(true)}>
            ◉ Confirm Adjustment
          </button>
          <button className="outline">Cancel</button>
          {done && <div className="adjust-notice">Adjustment submitted for review.</div>}
        </aside>
      </div>
    </main>
  )
}
