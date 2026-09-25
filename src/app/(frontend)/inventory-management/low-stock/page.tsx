'use client'
import { useState } from 'react'
import './styles.css'
export default function LowStockPage() {
  const [search, setSearch] = useState('')
  const rows = [
    ['ThinkPad X1 Carbon Gen 10', 'TPX1-10G-256', '3', '10', 'Low Stock'],
    ['Sony WH-1000XM5', 'SNY-WH5-BLK', '0', '15', 'Out of Stock'],
    ['Logitech MX Master 3S', 'LOG-MX3S-GRY', '12', '25', 'Low Stock'],
    ['Dell UltraSharp 27 4K', 'DEL-U2723QE', '2', '8', 'Critical'],
    ['Keychron Q1 Pro', 'KEY-Q1P-ISO', '8', '10', 'Warning'],
  ]
  return (
    <main className="lowstock-page">
      <header>
        <div>
          <h1>Low Stock</h1>
          <p>Manage inventory items currently below their minimum threshold.</p>
        </div>
        <div>
          <button>☷ Filter</button>
          <button className="dark">＋ Record Stock-In</button>
        </div>
      </header>
      <div className="low-metrics">
        <article className="critical">
          <small>⚠</small>
          <strong>
            12 <i>products</i>
          </strong>
          <span>Items Needing Attention</span>
          <b>Critical</b>
          <hr />
          ↗　+3 since yesterday
        </article>
        <article>
          <small>▣</small>
          <span>Total Value at Risk</span>
          <strong>$14,250</strong>
          <hr />
          <p>Estimated lost revenue potential</p>
        </article>
        <article>
          <small>▱</small>
          <span>Pending Stock-Ins</span>
          <strong>5</strong>
          <hr />
          <p>Scheduled for delivery this week</p>
        </article>
      </div>
      <section className="lowstock-card">
        <div className="lowstock-heading">
          <h2>Low Stock Inventory</h2>
          <label>
            ⌕{' '}
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products..."
            />
          </label>
        </div>
        <table>
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>SKU</th>
              <th>CURRENT QTY</th>
              <th>MINIMUM QTY</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {rows
              .filter((row) => row[0].toLowerCase().includes(search.toLowerCase()))
              .map((row) => (
                <tr key={row[1]}>
                  {row.map((cell, index) => (
                    <td key={cell}>
                      {index === 4 ? (
                        <span className={`low-badge ${cell.toLowerCase().replace(' ', '-')}`}>
                          {cell}
                        </span>
                      ) : (
                        cell
                      )}
                      {index === 5 && <button>Record Stock-In</button>}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
        <footer>Showing 1-5 of 12 items　‹　›</footer>
      </section>
    </main>
  )
}
