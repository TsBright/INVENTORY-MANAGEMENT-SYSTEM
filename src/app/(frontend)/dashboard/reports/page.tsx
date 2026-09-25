'use client'
import Link from 'next/link'
import { useState } from 'react'
import './styles.css'
export default function ReportsPage() {
  const [period, setPeriod] = useState('This Month')
  return (
    <main className="reports-page">
      <header>
        <div>
          <h1>Reports Overview</h1>
          <p>Comprehensive insights across your enterprise ecosystem.</p>
        </div>
        <div>
          <button
            onClick={() => setPeriod(period === 'This Month' ? 'Last Quarter' : 'This Month')}
          >
            ▣ {period}
          </button>
          <Link href="/dashboard/reports/export">Generate New</Link>
        </div>
      </header>
      <nav className="report-tabs">
        <Link className="active" href="/dashboard/reports">
          Overview
        </Link>
        <Link href="/dashboard/reports/sales">Sales</Link>
        <Link href="/dashboard/reports/inventory">Inventory</Link>
        <Link href="/dashboard/reports/performance">Performance</Link>
        <Link href="/dashboard/reports/financial">Financial</Link>
      </nav>
      <div className="report-overview-grid">
        <Link href="/dashboard/reports/sales" className="report-card wide">
          <h2>▣　Sales &amp; Revenue　→</h2>
          <p>
            Detailed breakdown of revenue streams, transaction volumes, and period-over-period
            growth metrics.
          </p>
          <hr />
          <small>
            LAST UPDATED　　<span>Today, 09:00 AM</span>　 STATUS <b>Synced</b>
          </small>
        </Link>
        <Link href="/dashboard/reports/financial" className="report-card dark-card">
          <h2>◉ Financial Summary　→</h2>
          <p>
            High-level overview of P&amp;L, operational costs, and cash flow analysis across
            departments.
          </p>
          <button>View Full Ledger</button>
        </Link>
        <Link href="/dashboard/reports/inventory" className="report-card">
          <h2>▣　Inventory Status　→</h2>
          <p>Real-time stock levels, warehouse distribution, and supply chain bottlenecks.</p>
          <hr />
          <small>
            Low Stock Alerts <b>12 Items</b>
          </small>
        </Link>
        <Link href="/dashboard/reports/performance" className="report-card">
          <h2>▥　Product Performance　→</h2>
          <p>Analysis of top-performing SKUs, conversion rates, and seasonal trends.</p>
          <hr />
          <small>
            TOP CATEGORY　 Enterprise Hardware　　GROWTH <b>↑ 14.2%</b>
          </small>
        </Link>
      </div>
    </main>
  )
}
