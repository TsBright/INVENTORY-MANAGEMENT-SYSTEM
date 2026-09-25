'use client'
import '../styles.css'
export default function FinancialReportPage() {
  return (
    <main className="report-page">
      <header>
        <div>
          <h1>Financial Summary</h1>
          <p>Q3 2023 Performance Overview</p>
        </div>
        <div className="report-controls">
          <button>⇩ Export</button>
          <button className="dark">☷ Filter</button>
        </div>
      </header>
      <div className="kpi-grid">
        <article>
          <small>TOTAL REVENUE</small>
          <strong>$2.45M</strong>
          <b>↗ 12.5%</b>
        </article>
        <article>
          <small>COGS</small>
          <strong>$845K</strong>
          <b>↗ 4.2%</b>
          <span>Cost of Goods Sold</span>
        </article>
        <article>
          <small>ESTIMATED GROSS PROFIT</small>
          <strong>$1.6M</strong>
          <b>↗ 18.2%</b>
          <span>Margin: 65.3%</span>
        </article>
      </div>
      <div className="financial-grid">
        <section className="chart-panel">
          <h2>Performance Trends</h2>
          <div className="financial-chart">▂ ▃ ▂ ▄ ▃ ▅ ▆ ▇ ▆ ▇</div>
        </section>
        <aside>
          <section className="chart-panel">
            <h2>Cost Distribution</h2>
            <div className="donut">◉</div>
          </section>
          <section className="target-card">
            <h2>Target Achievement</h2>
            <p>YTD vs Annual Goal</p>
            <strong>82%</strong>
            <span>On Track</span>
            <hr />
          </section>
        </aside>
      </div>
      <section className="data-panel">
        <div className="data-heading">
          <h2>Recent Transactions Impact</h2>
          <a>View All</a>
        </div>
        <table>
          <thead>
            <tr>
              <th>DATE</th>
              <th>DESCRIPTION</th>
              <th>CATEGORY</th>
              <th>AMOUNT</th>
              <th>IMPACT</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                'Oct 24, 2023',
                'Q3 Enterprise License Renewals',
                'Software',
                '$124,500',
                '↑ Positive',
              ],
              ['Oct 22, 2023', 'Server Infrastructure Upgrade', 'COGS', '-$45,200', '↓ Negative'],
              [
                'Oct 20, 2023',
                'Consulting Services - Phase 1',
                'Services',
                '$85,000',
                '↑ Positive',
              ],
            ].map((row) => (
              <tr key={row[1]}>
                {row.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  )
}
