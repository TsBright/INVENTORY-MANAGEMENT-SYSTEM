'use client'
import Link from 'next/link'
import { useState } from 'react'
import './styles.css'
export default function ProductDetailPage() {
  const [tab, setTab] = useState('Overview')
  return (
    <main className="product-detail-page">
      <header className="detail-topbar">
        <Link href="/products">⌕　Search...</Link>
        <span>♧　?　◎</span>
      </header>
      <section className="detail-content">
        <div className="detail-title">
          <div>
            <h1>
              Shampoo X <em>In Stock</em>
            </h1>
            <p>SKU: SHMP-X-500ML | Category: Personal Care</p>
          </div>
          <div>
            <button>Adjust Stock</button>
            <Link href="/products/productid/edit-product">Edit Product</Link>
          </div>
        </div>
        <nav className="detail-tabs">
          {['Overview', 'Inventory History', 'Sales History', 'Price History'].map((item) => (
            <button
              className={tab === item ? 'active' : ''}
              onClick={() => setTab(item)}
              key={item}
            >
              {item}
            </button>
          ))}
        </nav>
        {tab === 'Overview' ? (
          <div className="detail-grid">
            <section>
              <div className="detail-metrics">
                <article>
                  <small>CURRENT STOCK</small>
                  <strong>
                    1,245 <i>units</i>
                  </strong>
                </article>
                <article>
                  <small>SELLING PRICE</small>
                  <strong>$14.99</strong>
                </article>
                <article>
                  <small>COST PRICE</small>
                  <strong>$6.50</strong>
                </article>
              </div>
              <section className="detail-panel">
                <div className="detail-panel-head">
                  <h2>Recent Stock Movements</h2>
                  <a>View All</a>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>DATE</th>
                      <th>TYPE</th>
                      <th>QUANTITY</th>
                      <th>REFERENCE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Oct 24, 2023', 'Restock', '+500', 'PO-2023-089'],
                      ['Oct 22, 2023', 'Sale', '-12', 'INV-4452'],
                      ['Oct 21, 2023', 'Sale', '-45', 'INV-4421'],
                      ['Oct 19, 2023', 'Adjustment', '-3', 'ADJ-004'],
                    ].map((row) => (
                      <tr key={row[3]}>
                        {row.map((cell) => (
                          <td key={cell}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </section>
            <aside className="detail-panel metadata">
              <div className="product-photo">♧</div>
              <h2>Product Details</h2>
              <p>Core details and identifiers for this SKU.</p>
              {[
                ['Barcode', '8901234567890'],
                ['Supplier', 'Global Cosmetics Co.'],
                ['Weight', '500ml'],
                ['Location', 'Aisle 4, Bin B2'],
              ].map((row) => (
                <div className="meta-row" key={row[0]}>
                  <span>{row[0]}</span>
                  <strong>{row[1]}</strong>
                </div>
              ))}
            </aside>
          </div>
        ) : (
          <div className="detail-empty">{tab} records will appear here.</div>
        )}
      </section>
    </main>
  )
}
