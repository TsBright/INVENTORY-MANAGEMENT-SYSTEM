'use client'
import { useState } from 'react'
import Link from 'next/link'
import './styles.css'
export default function EditProductPage() {
  const [saved, setSaved] = useState(false)
  return (
    <main className="edit-product-page">
      <header className="edit-topbar">
        <Link href="/products">Executive Precision</Link>
        <span>⌕　Search...</span>
        <b>♧　?　◎</b>
      </header>
      <section className="edit-content">
        <div className="edit-breadcrumb">Products　›　Hair Care　›　Shampoo X</div>
        <div className="edit-heading">
          <div>
            <h1>Edit Product</h1>
            <p>Update product information and inventory settings.</p>
          </div>
          <div>
            <Link href="/products">Cancel</Link>
            <button onClick={() => setSaved(true)}>Save Changes</button>
          </div>
        </div>
        <div className="edit-grid">
          <section>
            <fieldset>
              <h2>ⓘ　Basic Information</h2>
              <label>
                Product Name
                <input defaultValue="Shampoo X" />
              </label>
              <label>
                Description
                <textarea defaultValue="Premium daily shampoo with active botanical extracts. Formulated for normal to oily hair types." />
              </label>
              <div className="field-grid">
                <label>
                  Category
                  <select defaultValue="Hair Care">
                    <option>Hair Care</option>
                    <option>Personal Care</option>
                  </select>
                </label>
                <label>
                  SKU
                  <input defaultValue="SHX-500-NM" readOnly />
                </label>
              </div>
            </fieldset>
            <fieldset>
              <h2>
                ♢　Pricing <em>Active Pricing</em>
              </h2>
              <div className="field-grid">
                <label>
                  Retail Price (USD)
                  <input defaultValue="$ 24.99" />
                </label>
                <label>
                  Cost Price (USD)
                  <input defaultValue="$ 8.50" />
                </label>
              </div>
              <div className="pricing-note">
                ↻　<strong>Pricing History Note</strong>
                <br />
                Updating the retail price will only affect future transactions. Past sales records
                retain the historical price at the time of purchase.
              </div>
            </fieldset>
          </section>
          <aside>
            <fieldset>
              <h2>▧　Product Media</h2>
              <div className="media-preview">Shampoo X</div>
              <button className="upload-button">＋ Add image</button>
            </fieldset>
            <fieldset>
              <h2>▣　Status &amp; Inventory</h2>
              <label>
                Product Status
                <select defaultValue="Active">
                  <option>Active</option>
                  <option>Draft</option>
                  <option>Archived</option>
                </select>
              </label>
              <div className="inventory-stat">
                <span>Current Stock</span>
                <strong>1,245 units</strong>
              </div>
              <div className="inventory-stat">
                <span>Reorder Point</span>
                <strong>200 units</strong>
              </div>
              <button className="manage-button">⚙ Manage Inventory</button>
            </fieldset>
          </aside>
        </div>
        {saved && (
          <div className="form-toast" role="status">
            Product changes saved locally.
          </div>
        )}
      </section>
    </main>
  )
}
