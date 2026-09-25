'use client'
import { useState } from 'react'
import Link from 'next/link'
import './styles.css'
export default function AddSupplierPage() {
  const [saved, setSaved] = useState(false)
  return (
    <main className="supplier-form-page">
      <header>
        <Link href="/dashboard/suppliers">←</Link>
        <h1>Add Supplier</h1>
        <div>
          <Link href="/dashboard/suppliers">Cancel</Link>
          <button onClick={() => setSaved(true)}>Save Supplier</button>
        </div>
      </header>
      <div className="supplier-form-grid">
        <fieldset>
          <h2>Basic Information</h2>
          <label>
            Supplier name *<input placeholder="Enter supplier name" />
          </label>
          <div className="field-grid">
            <label>
              Phone
              <input placeholder="+1 (555) 000-0000" />
            </label>
            <label>
              Email
              <input type="email" placeholder="contact@supplier.com" />
            </label>
          </div>
          <label>
            Address
            <input placeholder="Street Address" />
          </label>
        </fieldset>
        <aside>
          <fieldset>
            <h2>Notes</h2>
            <textarea placeholder="Add internal notes about this supplier..." />
          </fieldset>
          <fieldset>
            <h2>Settings</h2>
            <label>
              Primary Category
              <select>
                <option>Select Category...</option>
                <option>Electronics</option>
                <option>Furniture</option>
              </select>
            </label>
            <label className="check">
              <input type="checkbox" /> Set as Active Supplier
            </label>
          </fieldset>
        </aside>
      </div>
      {saved && (
        <div className="supplier-toast" role="status">
          Supplier saved locally.
        </div>
      )}
    </main>
  )
}
