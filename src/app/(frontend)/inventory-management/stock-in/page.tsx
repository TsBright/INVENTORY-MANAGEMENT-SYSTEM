'use client'
import { useMemo, useState } from 'react'
import './styles.css'
type Item = { product: string; qty: string; cost: string }
export default function StockInPage() {
  const [items, setItems] = useState<Item[]>([
    { product: 'Industrial Servo Motor (SM-400)', qty: '12', cost: '450.00' },
    { product: 'Proximity Sensor Array', qty: '50', cost: '85.50' },
  ])
  const [confirmed, setConfirmed] = useState(false)
  const total = useMemo(
    () => items.reduce((sum, item) => sum + Number(item.qty || 0) * Number(item.cost || 0), 0),
    [items],
  )
  const update = (index: number, key: keyof Item, value: string) =>
    setItems((current) =>
      current.map((item, itemIndex) => (itemIndex === index ? { ...item, [key]: value } : item)),
    )
  return (
    <main className="stock-in-page">
      <header>
        <span>
          Transactions　›　<strong>Record Stock-In</strong>
        </span>
      </header>
      <h1>Stock-In Record</h1>
      <div className="stock-in-layout">
        <section>
          <fieldset>
            <h2>Receipt Details</h2>
            <div className="field-grid">
              <label>
                Supplier *
                <select>
                  <option>Select Supplier</option>
                  <option>Global Supplies Co.</option>
                </select>
              </label>
              <label>
                Reference Number *<input placeholder="e.g. PO-2023-1042" />
              </label>
            </div>
            <label>
              Date Received *<input type="date" />
            </label>
          </fieldset>
          <fieldset>
            <div className="stock-items-heading">
              <h2>Received Items</h2>
              <button
                type="button"
                onClick={() => setItems([...items, { product: '', qty: '0', cost: '0.00' }])}
              >
                ＋ Add Product
              </button>
            </div>
            {items.map((item, index) => (
              <div className="stock-item" key={index}>
                <input
                  value={item.product}
                  onChange={(event) => update(index, 'product', event.target.value)}
                  placeholder="Search product..."
                />
                <input
                  type="number"
                  value={item.qty}
                  onChange={(event) => update(index, 'qty', event.target.value)}
                />
                <input
                  type="number"
                  value={item.cost}
                  onChange={(event) => update(index, 'cost', event.target.value)}
                />
              </div>
            ))}
          </fieldset>
        </section>
        <aside className="stock-summary">
          <h2>Record Summary</h2>
          <p>
            Total Items <b>{items.reduce((sum, item) => sum + Number(item.qty || 0), 0)}</b>
          </p>
          <p>
            Distinct Products <b>{items.length}</b>
          </p>
          <hr />
          <small>Estimated Total Cost</small>
          <strong>${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</strong>
          <button onClick={() => setConfirmed(true)}>◉ Confirm Stock-In</button>
          <button className="outline">Save as Draft</button>
          <a>Cancel</a>
          {confirmed && <div className="stock-notice">Stock-in confirmed locally.</div>}
        </aside>
      </div>
    </main>
  )
}
