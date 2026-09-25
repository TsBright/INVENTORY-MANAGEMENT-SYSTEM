'use client'

import { useState } from 'react'
import './styles.css'

const transactions = [
  ['#TX-9921', 'Oct 26, 10:42 AM', 'Michael Chang', 'Completed', '₣12,500'],
  ['#TX-9920', 'Oct 26, 09:15 AM', 'Elena Rostova', 'Pending', '₣45,000'],
  ['#TX-9919', 'Oct 25, 16:30 PM', 'David Miller', 'Completed', '₣3,200'],
  ['#TX-9918', 'Oct 25, 14:05 PM', 'Sarah Jenkins', 'Completed', '₣8,950'],
]
export default function BusinessOwnerDashboard() {
  const [range, setRange] = useState('Today')
  return (
    <main className="owner-dashboard">
      <header className="owner-header">
        <div className="owner-logo">
          <span>▦</span> Executive Precision
        </div>
        <nav>
          <a className="active">Dashboard</a>
          <a>Inventory</a>
          <a>Sales</a>
          <a>Staff</a>
          <a>Reports</a>
        </nav>
        <div className="owner-tools">♧　?　◎</div>
      </header>
      <section className="owner-content">
        <div className="owner-greeting">
          <h1>Good morning, Sarah</h1>
          <p>Thursday, October 26, 2023</p>
        </div>
        <div className="metric-grid">
          {[
            ['TODAY’S SALES', '₣485,000', '↗ +12.4%', 'vs yesterday'],
            ['TRANSACTIONS', '38', '', 'Today'],
            ['INVENTORY VALUE', '₣7.8M', '', 'Current valuation'],
            ['EST. GROSS PROFIT', '₣1.9M', '', 'YTD'],
          ].map(([label, value, change, note]) => (
            <article className="owner-metric" key={label}>
              <div>
                {label}
                <span>⌁</span>
              </div>
              <strong>{value}</strong>
              <small>
                {change && <b>{change}</b>} {note}
              </small>
            </article>
          ))}
        </div>
        <div className="owner-main-grid">
          <section className="owner-chart panel">
            <div className="panel-title">
              <h2>Sales Trend</h2>
              <div className="range-buttons">
                {['Today', '7D', '30D', 'Custom'].map((item) => (
                  <button
                    className={range === item ? 'selected' : ''}
                    onClick={() => setRange(item)}
                    key={item}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="chart-placeholder">[ Area Chart Visualization ]</div>
          </section>
          <section className="owner-side">
            <article className="panel attention">
              <h2>⚠ Inventory Attention</h2>
              <div>
                Low Stock Items <b>14</b>
              </div>
              <div>
                Out of Stock <b>3</b>
              </div>
              <button>View Inventory</button>
            </article>
            <article className="panel donut-panel">
              <h2>Sales by Category</h2>
              <div className="donut-placeholder">[ Donut Chart ]</div>
            </article>
          </section>
        </div>
        <div className="owner-tables">
          <section className="panel">
            <h2>Top Products</h2>
            <table>
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th>UNITS</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Luxury Watch Series X', '142'],
                  ['Diamond Necklace Classic', '89'],
                  ['Platinum Ring Set', '65'],
                  ['Gold Cufflinks', '41'],
                ].map((row) => (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          <section className="panel transactions">
            <div className="table-heading">
              <h2>Recent Transactions</h2>
              <a>View All</a>
            </div>
            <table>
              <thead>
                <tr>
                  <th>TXN ID</th>
                  <th>DATE/TIME</th>
                  <th>CLIENT</th>
                  <th>STATUS</th>
                  <th>AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) => (
                      <td key={cell}>
                        {index === 3 ? (
                          <span className={`status ${cell.toLowerCase()}`}>{cell}</span>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </section>
    </main>
  )
}
