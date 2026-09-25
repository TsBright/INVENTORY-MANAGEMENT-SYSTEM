'use client'

import { useState } from 'react'
import './styles.css'

export default function CashierDashboard() {
  const [search, setSearch] = useState('')
  const [saleStarted, setSaleStarted] = useState(false)
  return (
    <main className="cashier-app">
      <aside className="cashier-sidebar">
        <div className="cashier-brand">
          Executive Precision<small>Enterprise Suite</small>
        </div>
        <button className="new-transaction" onClick={() => setSaleStarted(true)}>
          ＋ New Transaction
        </button>
        <nav>
          {[
            '⌘ Overview',
            '▤ Products',
            '▣ Transactions',
            '⌂ Inventory',
            '♙ Team',
            '⚙ Settings',
          ].map((item, index) => (
            <a className={index === 2 ? 'active' : ''} key={item}>
              {item}
            </a>
          ))}
        </nav>
        <div className="cashier-bottom">
          <a>ⓘ Help Center</a>
          <a>↪ Logout</a>
        </div>
      </aside>
      <section className="cashier-main">
        <header className="cashier-header">
          <div className="cashier-search">
            <span>⌕</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Scan or search products..."
            />
          </div>
          <button onClick={() => setSaleStarted(true)}>▣　New Sale</button>
        </header>
        <div className="cashier-body">
          <h1>Cashier Desk</h1>
          <p>Ready for next transaction.</p>
          <div className="cashier-grid">
            <div className="cashier-metrics">
              <article>
                <span>TODAY&apos;S SALES</span>
                <strong>$4,250.00</strong>
                <i>▣</i>
              </article>
              <article>
                <span>TRANSACTIONS</span>
                <strong>86</strong>
                <i>▤</i>
              </article>
              <article className="system-online">
                <strong>● System Online</strong>
                <p>Scanner connected. Printer ready.</p>
              </article>
            </div>
            <section className="cashier-transactions">
              <div className="cashier-title">
                <h2>Recent Transactions</h2>
                <a>View All</a>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>TIME</th>
                    <th>ID</th>
                    <th>AMOUNT</th>
                    <th>STATUS</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['10:42 AM', '#TRX-8901', '$145.50', 'Completed'],
                    ['10:38 AM', '#TRX-8900', '$22.00', 'Completed'],
                    ['10:25 AM', '#TRX-8899', '$310.75', 'Completed'],
                    ['10:15 AM', '#TRX-8898', '$89.99', 'Processing'],
                    ['09:55 AM', '#TRX-8897', '$45.00', 'Completed'],
                  ].map((row) => (
                    <tr key={row[1]}>
                      {row.map((cell, index) => (
                        <td key={cell}>
                          {index === 3 ? (
                            <span className={`cashier-status ${cell.toLowerCase()}`}>{cell}</span>
                          ) : (
                            cell
                          )}
                          {index === 4 && <button>♧</button>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
          {saleStarted && (
            <div className="cashier-toast" role="status">
              New sale workspace opened for {search || 'a new customer'}.
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
