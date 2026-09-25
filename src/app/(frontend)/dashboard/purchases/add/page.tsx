'use client'
import { useMemo, useState } from 'react'
import Link from 'next/link'
import './styles.css'
type Line = { product: string; qty: string; cost: string }
export default function AddPurchasePage() {
  const [lines, setLines] = useState<Line[]>([
    { product: 'Dell Latitude 7420', qty: '10', cost: '1250.00' },
    { product: 'Logitech MX Master 3', qty: '5', cost: '89.99' },
  ])
  const [vat, setVat] = useState(true)
  const [shipping, setShipping] = useState('0')
  const subtotal = useMemo(
    () => lines.reduce((sum, line) => sum + Number(line.qty || 0) * Number(line.cost || 0), 0),
    [lines],
  )
  const tax = vat ? subtotal * 0.1 : 0
  const update = (index: number, key: keyof Line, value: string) =>
    setLines(
      lines.map((line, lineIndex) => (lineIndex === index ? { ...line, [key]: value } : line)),
    )
  return (
    <main className="purchase-form-page">
      <header>
        <h1>Record Purchase</h1>
        <p>Enter details for incoming inventory and supplier invoices.</p>
        <div>
          <Link href="/dashboard/purchases">Cancel</Link>
          <button>▣ Record Purchase</button>
        </div>
      </header>
      <div className="purchase-form-layout">
        <section>
          <fieldset>
            <h2>▦ Supplier Information</h2>
            <div className="field-grid">
              <label>
                Supplier
                <select>
                  <option>Select supplier</option>
                  <option>Global Tech Supplies Inc.</option>
                </select>
              </label>
              <label>
                Reference Number (PO/Invoice)
                <input placeholder="e.g. INV-2023-001" />
              </label>
            </div>
            <div className="field-grid">
              <label>
                Purchase Date
                <input type="date" />
              </label>
              <label>
                Expected Delivery
                <input type="date" />
              </label>
            </div>
          </fieldset>
          <fieldset>
            <div className="purchase-items-heading">
              <h2>▣ Products</h2>
              <button
                type="button"
                onClick={() => setLines([...lines, { product: '', qty: '1', cost: '0' }])}
              >
                ⊕ Add Product
              </button>
            </div>
            <div className="purchase-table-head">
              PRODUCT NAME　　QUANTITY　　 UNIT COST　　 TOTAL
            </div>
            {lines.map((line, index) => (
              <div className="purchase-line" key={index}>
                <select
                  value={line.product}
                  onChange={(event) => update(index, 'product', event.target.value)}
                >
                  <option>{line.product || 'Select product'}</option>
                  <option>Dell Latitude 7420</option>
                  <option>Logitech MX Master 3</option>
                </select>
                <input
                  type="number"
                  value={line.qty}
                  onChange={(event) => update(index, 'qty', event.target.value)}
                />
                <input
                  type="number"
                  value={line.cost}
                  onChange={(event) => update(index, 'cost', event.target.value)}
                />
                <strong>
                  $
                  {(Number(line.qty || 0) * Number(line.cost || 0)).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}
                </strong>
                <button
                  type="button"
                  onClick={() => setLines(lines.filter((_, lineIndex) => lineIndex !== index))}
                >
                  ♧
                </button>
              </div>
            ))}
          </fieldset>
          <fieldset>
            <h2>▤ Additional Notes</h2>
            <textarea placeholder="Add any specific instructions, delivery notes, or terms here..." />
          </fieldset>
        </section>
        <aside className="purchase-summary">
          <h2>▤ Summary</h2>
          <p>
            Subtotal ({lines.length} items){' '}
            <b>${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</b>
          </p>
          <p>
            Tax / VAT{' '}
            <button className={vat ? 'vat on' : 'vat'} onClick={() => setVat(!vat)}>
              {vat ? '10%' : 'Off'}
            </button>
            <b>${tax.toLocaleString(undefined, { minimumFractionDigits: 2 })}</b>
          </p>
          <label>
            Shipping{' '}
            <input
              type="number"
              value={shipping}
              onChange={(event) => setShipping(event.target.value)}
            />
          </label>
          <hr />
          <h3>
            Total Cost{' '}
            <strong>
              $
              {(subtotal + tax + Number(shipping || 0)).toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </strong>
          </h3>
          <button className="record-button">▣ Record Purchase</button>
          <div className="purchase-notice">
            ⓘ This will immediately update pending inventory counts upon recording.
          </div>
        </aside>
      </div>
    </main>
  )
}
