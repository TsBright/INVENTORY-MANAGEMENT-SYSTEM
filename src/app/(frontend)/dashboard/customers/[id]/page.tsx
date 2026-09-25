'use client'
import Link from 'next/link'
import { useState } from 'react'
import './styles.css'
export default function CustomerDetailPage() {
  const [tab, setTab] = useState('Overview')
  return (
    <main className="customer-detail-page">
      <header>
        <Link href="/dashboard/customers">← Back to Customers</Link>
        <div>
          <h1>
            Eleanor Vance <em>◉ Active</em>
          </h1>
        </div>
        <aside>
          <button>Edit Profile</button>
          <button className="new-order">＋ New Order</button>
        </aside>
      </header>
      <section className="customer-detail-content">
        <div className="customer-metrics">
          <article>
            <small>TOTAL PURCHASES</small>
            <strong>143</strong>
            <b>↗ +12% vs last year</b>
          </article>
          <article>
            <small>LIFETIME VALUE</small>
            <strong>$42,850.00</strong>
            <b>Avg. Order Value: $299.65</b>
          </article>
          <article>
            <small>LAST ACTIVITY</small>
            <strong>Oct 24, 2023</strong>
            <span>Order #INV-8492</span>
            <a>View Invoice →</a>
          </article>
        </div>
        <nav className="customer-tabs">
          {['Overview', 'Purchase History', 'Notes & Interactions'].map((item) => (
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
          <div className="customer-detail-grid">
            <section>
              <article className="customer-panel">
                <h2>Contact Information</h2>
                <p>
                  EMAIL<strong>eleanor.vance@examplecorp.com</strong>
                </p>
                <p>
                  PHONE<strong>+1 (555) 019-2834</strong>
                </p>
                <p>
                  COMPANY<strong>▦　Hill House Corp</strong>
                </p>
              </article>
              <article className="customer-panel">
                <h2>Shipping Address</h2>
                <p className="address">
                  1042 Haunted Hill Drive
                  <br />
                  Suite 300
                  <br />
                  San Francisco, CA 94114
                  <br />
                  United States
                </p>
                <a>Copy Address</a>
              </article>
            </section>
            <section className="customer-panel recent-purchases">
              <div className="panel-title">
                <h2>Recent Purchases</h2>
                <b>⋮</b>
              </div>
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
                    ['#INV-8492', 'Oct 24, 2023', 'Completed', '$1,240.00'],
                    ['#INV-8450', 'Sep 12, 2023', 'Completed', '$850.50'],
                    ['#INV-8311', 'Aug 05, 2023', 'Processing', '$3,400.00'],
                    ['#INV-8102', 'Jul 20, 2023', 'Completed', '$450.00'],
                    ['#INV-7998', 'Jun 15, 2023', 'Refunded', '-$120.00'],
                  ].map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, index) => (
                        <td key={cell}>
                          {index === 2 ? (
                            <span className={`purchase-badge ${cell.toLowerCase()}`}>{cell}</span>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <footer>View All Purchases</footer>
            </section>
          </div>
        ) : (
          <div className="customer-empty">{tab} will appear here.</div>
        )}
      </section>
    </main>
  )
}
