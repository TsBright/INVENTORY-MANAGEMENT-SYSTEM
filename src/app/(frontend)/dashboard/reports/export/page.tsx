'use client'
import { useState } from 'react'
import Link from 'next/link'
import '../styles.css'
export default function ExportReportPage() {
  const [format, setFormat] = useState('PDF Document')
  const [charts, setCharts] = useState(true)
  const [done, setDone] = useState(false)
  return (
    <main className="export-page">
      <div className="export-backdrop">
        <div className="export-modal">
          <header>
            <h1>Export Report</h1>
            <Link href="/dashboard/reports">×</Link>
          </header>
          <section>
            <label>Format</label>
            <div className="format-grid">
              {['▣ PDF Document', '▤ Excel / CSV'].map((item) => (
                <button
                  className={format === item.slice(2) ? 'selected' : ''}
                  onClick={() => setFormat(item.slice(2))}
                  key={item}
                >
                  {item}
                </button>
              ))}
            </div>
            <label>
              Date Range (Current Filter)
              <div className="date-range">
                ▣　Oct 1, 2023 - Dec 31, 2023　 <a>Edit Filters</a>
              </div>
            </label>
            <label className="export-check">
              <input
                type="checkbox"
                checked={charts}
                onChange={(e) => setCharts(e.target.checked)}
              />{' '}
              Include summary charts
            </label>
            <label className="export-check">
              <input type="checkbox" /> Apply confidential watermark
            </label>
          </section>
          <footer>
            <Link href="/dashboard/reports">Cancel</Link>
            <button onClick={() => setDone(true)}>⇩ Export Report</button>
          </footer>
          {done && (
            <p className="export-success" role="status">
              {format} export queued.
            </p>
          )}
        </div>
      </div>
    </main>
  )
}
