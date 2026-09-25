'use client'
import { useState } from 'react'
import Link from 'next/link'
import '../styles.css'
export default function SalesReportPage() {
  const [range, setRange] = useState('7 Days')
  return (
    <main className="report-page">
      <header>
        <div>
          <h1>Sales Report</h1>
          <p>Comprehensive overview of transaction performance.</p>
        </div>
        <div className="report-controls">
          {['Today', '7 Days', '30 Days', 'Custom'].map((x) => (
            <button className={range === x ? 'selected' : ''} onClick={() => setRange(x)} key={x}>
              {x}
            </button>
          ))}
          <Link href="/dashboard/reports/export">⇩ Export</Link>
        </div>
      </header>
      <div className="kpi-grid">
        <article>
          <small>TOTAL REVENUE</small>
          <strong>$124,500.00</strong>
          <b>↗ +12.5%</b>
        </article>
        <article>
          <small>TRANSACTIONS</small>
          <strong>1,248</strong>
          <b>↗ +4.2%</b>
        </article>
        <article>
          <small>AVERAGE SALE</small>
          <strong>$99.75</strong>
          <b className="down">↘ -1.1%</b>
        </article>
      </div>
      <section className="chart-panel">
        <h2>Sales Over Time</h2>
        <div className="line-chart">╱╲　╱╲　╱╲　╱╲　╱╲</div>
      </section>
      <section className="data-panel">
        <div className="data-heading">
          <h2>Detailed Breakdown</h2>
          <select>
            <option>All Categories</option>
          </select>
          <select>
            <option>All Employees</option>
          </select>
          <select>
            <option>All Products</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>CATEGORY</th>
              <th>EMPLOYEE</th>
              <th>UNITS</th>
              <th>REVENUE</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Enterprise Server X1', 'Hardware', 'J. Smith', '45', '$45,000.00'],
              ['Cloud Storage Pro (Annual)', 'Software', 'A. Davis', '120', '$14,400.00'],
              ['On-site Implementation', 'Services', 'M. Johnson', '8', '$12,000.00'],
              ['Network Switch Q4', 'Hardware', 'J. Smith', '32', '$9,600.00'],
              ['Security Audit Basic', 'Services', 'A. Davis', '15', '$7,500.00'],
            ].map((row) => (
              <tr key={row[0]}>
                {row.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <footer>
          Showing 1-5 of 42 results　‹　<b>1</b>　2　3　›
        </footer>
      </section>
    </main>
  )
}
