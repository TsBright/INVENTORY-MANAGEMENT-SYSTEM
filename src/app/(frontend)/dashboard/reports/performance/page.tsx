'use client'
import { useState } from 'react'
import '../styles.css'
export default function PerformanceReportPage() {
  const [tab, setTab] = useState('All')
  const rows = [
    ['Enterprise Server Blade Gen 9', 'SRV-G9-001', '1,245', '$1,494,000', '↑ 18%', 'Best Seller'],
    ['Quantum Data Switch X2', 'QDS-X2-884', '890', '$845,500', '↑ 12%', 'Best Seller'],
    ['Legacy Cooling Unit V1', 'LCU-V1-092', '45', '$12,000', '↓ 24%', 'Poor Performer'],
    ['Standard Rack Mount 42U', 'SRM-42-111', '320', '$96,000', '— 0%', 'Average'],
    ['Obsolete Patch Panel X', 'OPP-XX-000', '0', '$0', '⚠ N/A', 'No Sales'],
  ]
  return (
    <main className="report-page">
      <header>
        <div>
          <h1>Product Performance Report</h1>
          <p>Q3 2023 Analysis &amp; Insights</p>
        </div>
        <div className="report-controls">
          <button>⇩ Export</button>
          <button className="dark">☷ Filter</button>
        </div>
      </header>
      <div className="kpi-grid">
        <article>
          <small>TOP PERFORMERS REVENUE</small>
          <strong>$4.2M</strong>
          <b>+12%</b>
          <span>Across 15 products</span>
        </article>
        <article>
          <small>UNDERPERFORMING REVENUE</small>
          <strong>$185K</strong>
          <b className="down">-4.5%</b>
          <span>Needs immediate attention</span>
        </article>
        <article>
          <small>ZERO ACTIVITY ITEMS</small>
          <strong>24</strong>
          <b>Alert</b>
          <span>Idle capital tied up</span>
        </article>
      </div>
      <section className="data-panel performance-data">
        <div className="data-heading">
          <h2>Comprehensive Product Data</h2>
          <div>
            {['All', 'Best', 'Worst'].map((x) => (
              <button className={tab === x ? 'selected' : ''} onClick={() => setTab(x)} key={x}>
                {x}
              </button>
            ))}
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>PRODUCT NAME</th>
              <th>SKU</th>
              <th>UNITS SOLD</th>
              <th>REVENUE</th>
              <th>GROWTH</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {rows
              .filter(
                (row) =>
                  tab === 'All' ||
                  (tab === 'Best' ? row[5] === 'Best Seller' : row[5] !== 'Best Seller'),
              )
              .map((row) => (
                <tr key={row[1]}>
                  {row.map((cell, index) => (
                    <td key={cell}>
                      {index === 5 ? <span className="table-badge">{cell}</span> : cell}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
        <footer>Showing 1-5 of 142 products　Prev　 Next</footer>
      </section>
    </main>
  )
}
