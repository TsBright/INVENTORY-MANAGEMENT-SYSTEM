'use client'

import { useState } from 'react'
import './styles.css'

export default function ManagerDashboard() {
  const [notice, setNotice] = useState('')
  return (
    <main className="manager-app">
      <aside className="manager-sidebar">
        <div className="manager-brand">
          <span>▣</span> ExecutivePrecision<small>Enterprise Suite</small>
        </div>
        <button>＋ New Transaction</button>
        <nav>
          {[
            '▦ Overview',
            '▤ Products',
            '▣ Transactions',
            '⌂ Inventory',
            '♙ Team',
            '⚙ Settings',
          ].map((item, index) => (
            <a className={index === 0 ? 'active' : ''} key={item}>
              {item}
            </a>
          ))}
        </nav>
        <div className="manager-bottom">
          ⓘ　Help Center
          <br />
          ↪　Logout
        </div>
      </aside>
      <section className="manager-main">
        <header>
          <h1>Overview</h1>
          <p>Manager Operations Dashboard - Tuesday, Oct 24</p>
          <div className="manager-search">⌕　Search operations...</div>
          <span>♧　?　◎</span>
        </header>
        <section className="manager-content">
          <div className="manager-metrics">
            {[
              ['▣', 'TODAY’S SALES', '$8,432.00'],
              ['⚠', 'LOW STOCK ALERTS', '14 Items'],
              ['🛒', 'PENDING ORDERS', '42'],
              ['▣', 'STAFF PRESENT', '8 / 12'],
            ].map(([icon, label, value], index) => (
              <article className={index === 1 ? 'critical' : ''} key={label}>
                <i>{icon}</i>
                <small>{label}</small>
                <strong>{value}</strong>
                {index === 0 && <b>↗ 12.5%</b>}
                {index === 1 && <b>Requires Action</b>}
              </article>
            ))}
          </div>
          <div className="manager-grid">
            <section className="manager-panel inventory-center">
              <div className="manager-panel-title">
                <div>
                  <h2>Inventory Action Center</h2>
                  <p>Critical items requiring immediate attention</p>
                </div>
                <button onClick={() => setNotice('Full inventory view is ready.')}>
                  View Full Inventory
                </button>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>PRODUCT SKU / NAME</th>
                    <th>STATUS</th>
                    <th>CURRENT QTY</th>
                    <th>REORDER LVL</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Titanium Widget Pro', 'Critical', '2', '15'],
                    ['Industrial Ethernet Cable', 'Low Stock', '18', '25'],
                    ['Logic Board Rev. B', 'Low Stock', '8', '10'],
                  ].map((row, index) => (
                    <tr key={row[0]}>
                      <td>
                        <span className="product-square">⌘</span>
                        <strong>{row[0]}</strong>
                        <small>SKU-{['TWP-902', 'IEC-100', 'LBR-002'][index]}</small>
                      </td>
                      <td>
                        <span className={`stock-label ${index === 0 ? 'red' : ''}`}>{row[1]}</span>
                      </td>
                      <td>{row[2]}</td>
                      <td>{row[3]}</td>
                      <td>
                        <button onClick={() => setNotice(`${row[0]} action selected.`)}>
                          {index === 0 ? 'Order Now' : 'Review'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
            <section className="manager-panel recent-activity">
              <div className="manager-panel-title">
                <h2>Recent Activity</h2>
                <b>•••</b>
              </div>
              {[
                ['▤', 'Order #TXN-882', '+$1,240.00', '2 mins ago • J. Doe', 'COMPLETED'],
                ['▣', 'Restock: Cables', '+50 Units', '45 mins ago • System', 'RECEIVED'],
                ['◷', 'Order #TXN-881', '+$895.50', '1 hour ago • S. Smith', 'PENDING'],
                ['▤', 'Order #TXN-880', '+$3,400.00', '3 hrs ago • M. Lee', 'COMPLETED'],
              ].map((row) => (
                <div className="activity" key={row[1]}>
                  <i>{row[0]}</i>
                  <span>
                    <strong>{row[1]}</strong>
                    <small>{row[3]}</small>
                  </span>
                  <b>
                    {row[2]}
                    <em>{row[4]}</em>
                  </b>
                </div>
              ))}
              <a>View All Activity</a>
            </section>
          </div>
          <div className="manager-bottom-grid">
            <section className="manager-panel shifts">
              <div className="manager-panel-title">
                <h2>♙ Active Shifts</h2>
                <span>Current Shift: Day</span>
              </div>
              <div className="shift-list">
                {[
                  ['Sarah J.', 'FLOOR LEAD'],
                  ['Mike K.', 'SALES'],
                  ['David L.', 'INVENTORY (BREAK)'],
                  ['＋', 'Manage'],
                ].map((item) => (
                  <div key={item[0]}>
                    <span>{item[0]}</span>
                    <strong>{item[0]}</strong>
                    <small>{item[1]}</small>
                  </div>
                ))}
              </div>
            </section>
            <section className="manager-panel shortcuts">
              <h2>Operational Shortcuts</h2>
              <div>
                <button onClick={() => setNotice('Inventory scanner launched.')}>
                  ▦<strong>Scan Inventory</strong>
                  <small>Perform quick cycle count</small>
                </button>
                <button onClick={() => setNotice('Shipment intake launched.')}>
                  ▱<strong>Receive Shipment</strong>
                  <small>Log incoming stock</small>
                </button>
              </div>
            </section>
          </div>
          {notice && (
            <div className="manager-notice" role="status">
              {notice}
            </div>
          )}
        </section>
      </section>
    </main>
  )
}
