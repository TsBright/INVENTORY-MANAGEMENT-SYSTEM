'use client'
import { FormEvent, useState } from 'react'
import Link from 'next/link'
import './styles.css'
export default function AddProductPage() {
  const [created, setCreated] = useState(false)
  const [sku, setSku] = useState('')
  const [name, setName] = useState('')
  const submit = (event: FormEvent) => {
    event.preventDefault()
    setCreated(true)
  }
  return (
    <main className="product-form-page">
      <header className="product-form-header">
        <Link href="/products">Products</Link>
        <span>/</span>
        <strong>Add New</strong>
        <div>
          <Link href="/products">Cancel</Link>
          <button onClick={() => document.querySelector('form')?.requestSubmit()}>
            ▣　Create Product
          </button>
        </div>
      </header>
      <form className="product-form-layout" onSubmit={submit}>
        <section>
          <h1>Add New Product</h1>
          <p>Enter the details below to catalog a new item in your inventory.</p>
          <fieldset>
            <h2>ⓘ　Basic Information</h2>
            <label>
              Product Name *
              <input
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="e.g. Ergonomic Office Chair"
              />
            </label>
            <div className="field-grid">
              <label>
                Category *
                <select required>
                  <option value="">Select a category</option>
                  <option>Furniture</option>
                  <option>Electronics</option>
                </select>
              </label>
              <label>
                Brand
                <input placeholder="Brand Name" />
              </label>
            </div>
            <label>
              Description
              <textarea placeholder="Detailed product description..." />
            </label>
          </fieldset>
          <fieldset>
            <h2>▣　Pricing Strategy</h2>
            <div className="field-grid">
              <label>
                Cost Price
                <input type="number" placeholder="$ 0.00" />
              </label>
              <label>
                Selling Price *<input required type="number" placeholder="$ 0.00" />
              </label>
            </div>
          </fieldset>
        </section>
        <aside>
          <fieldset>
            <h2>▦　Identification</h2>
            <label>
              SKU (Stock Keeping Unit) *
              <div className="inline-field">
                <input
                  required
                  value={sku}
                  onChange={(event) => setSku(event.target.value)}
                  placeholder="e.g. FUR-CHR-001"
                />
                <button
                  type="button"
                  onClick={() => setSku(`SKU-${Math.floor(Math.random() * 9000 + 1000)}`)}
                >
                  ↻
                </button>
              </div>
            </label>
            <label>
              Barcode (UPC/EAN)
              <input placeholder="Scan or enter barcode" />
            </label>
            <label className="check-label">
              <input type="checkbox" /> This product has no barcode
            </label>
          </fieldset>
          <fieldset>
            <h2>▣　Inventory</h2>
            <div className="field-grid">
              <label>
                Opening Qty
                <input type="number" placeholder="0" />
              </label>
              <label>
                Min Stock Level
                <input type="number" placeholder="5" />
              </label>
            </div>
            <label>
              Unit of Measure
              <select>
                <option>Pieces (pcs)</option>
                <option>Boxes</option>
                <option>Kg</option>
              </select>
            </label>
            <label>
              Primary Supplier
              <select>
                <option>Select Supplier</option>
                <option>Global Supplies Co.</option>
              </select>
            </label>
          </fieldset>
        </aside>
      </form>
      {created && (
        <div className="form-toast" role="status">
          {name || 'Product'} created in this demo.
        </div>
      )}
    </main>
  )
}
