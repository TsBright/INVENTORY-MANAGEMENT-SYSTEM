'use client'
import Link from 'next/link'
import { useState } from 'react'
import './styles.css'
export default function SupplierDetailPage() {
  const [tab, setTab] = useState('Overview')
  return (
    <main className="supplier-detail-page">
      <header>
        <Link href="/dashboard/suppliers">←</Link>
        <div>
          <h1>Acme Corp Logistics</h1>
          <p>Supplier ID: SUP-2023-8921</p>
        </div>
        <aside>
          <button>✉ Contact</button>
          <Link href="/dashboard/purchases/add">♛ New Purchase</Link>
        </aside>
      </header>
      <nav className="supplier-tabs">
        {['Overview', 'Products', 'Purchases'].map((item) => (
          <button className={tab === item ? 'active' : ''} onClick={() => setTab(item)} key={item}>
            {item}
          </button>
        ))}
      </nav>
      {tab === 'Overview' ? (
        <div className="supplier-detail-grid">
          <section>
            <article className="supplier-panel">
              <h2>▣ Contact Information</h2>
              <p>
                <strong>Jane Smith</strong>
                <br />
                Account Manager
              </p>
              <hr />
              <p>⌕　+1 (555) 123-4567</p>
              <p>✉　jane.smith@acmecorp.com</p>
              <p>
                ⌖　123 Industrial Pkwy,
                <br />　 Logistics Hub, CA 90210
              </p>
            </article>
            <article className="supplier-panel">
              <h2>▣ Financial Overview</h2>
              <small>OUTSTANDING OBLIGATIONS</small>
              <strong className="obligation">$45,230.00</strong>
              <hr />
              <div className="financial-grid">
                <p>
                  YTD SPEND<strong>$124,500</strong>
                </p>
                <p>
                  PAYMENT TERMS<strong>Net 30</strong>
                </p>
              </div>
            </article>
          </section>
          <section>
            <article className="supplier-panel">
              <div className="supplier-panel-head">
                <h2>▣ Top Products Supplied</h2>
                <a>View All</a>
              </div>
              <div className="top-products">
                {['Widget Alpha XL', 'Gear Assembly B', 'Circuit Board V2'].map((item) => (
                  <div key={item}>
                    <span>▧</span>
                    <strong>{item}</strong>
                    <small>SKU: {item.slice(0, 3).toUpperCase()}-01</small>
                  </div>
                ))}
              </div>
            </article>
            <article className="supplier-panel">
              <h2>▣ Recent Purchases</h2>
              <table>
                <thead>
                  <tr>
                    <th>ORDER ID</th>
                    <th>DATE</th>
                    <th>STATUS</th>
                    <th>AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['PO-2023-1042', 'Oct 24, 2023', 'Pending', '$12,450.00'],
                    ['PO-2023-0988', 'Sep 12, 2023', 'Delivered', '$8,200.00'],
                    ['PO-2023-0855', 'Aug 05, 2023', 'Delivered', '$24,580.00'],
                  ].map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, index) => (
                        <td key={cell}>
                          {index === 2 ? (
                            <span className={`supplier-status ${cell.toLowerCase()}`}>{cell}</span>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>
          </section>
        </div>
      ) : (
        <div className="supplier-tab-empty">{tab} for this supplier will appear here.</div>
      )}
    </main>
  )
}
