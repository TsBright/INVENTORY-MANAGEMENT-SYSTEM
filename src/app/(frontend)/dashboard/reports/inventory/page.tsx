'use client'
import '../styles.css'
export default function InventoryReportPage() {
  return (
    <main className="report-page">
      <header>
        <div>
          <h1>Inventory Overview</h1>
          <p>Real-time stock analysis and warehouse health.</p>
        </div>
        <div className="report-controls">
          <button>⇩ Export</button>
          <button className="dark">☷ Filter</button>
        </div>
      </header>
      <div className="kpi-grid five">
        <article>
          <small>TOTAL PRODUCTS</small>
          <strong>1,248</strong>
          <b>↗ +2.4%</b>
        </article>
        <article>
          <small>TOTAL UNITS</small>
          <strong>45,920</strong>
          <b>↗ +1.1%</b>
        </article>
        <article className="warn">
          <small>LOW STOCK</small>
          <strong>42</strong>
          <span>Requires action</span>
        </article>
        <article className="critical">
          <small>OUT OF STOCK</small>
          <strong>12</strong>
          <span>Critical shortage</span>
        </article>
        <article>
          <small>INVENTORY VALUE</small>
          <strong>$2.4M</strong>
          <b>↗ +5.8%</b>
        </article>
      </div>
      <div className="chart-grid">
        <section className="chart-panel">
          <h2>Stock Movement</h2>
          <div className="bar-chart">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </section>
        <section className="chart-panel distribution">
          <h2>Category Distribution</h2>
          {[
            ['Electronics', '45%'],
            ['Apparel', '30%'],
            ['Home Goods', '15%'],
            ['Other', '10%'],
          ].map((row) => (
            <p key={row[0]}>
              ●　{row[0]} <b>{row[1]}</b>
              <span style={{ width: row[1] }} />
            </p>
          ))}
        </section>
      </div>
      <section className="data-panel">
        <div className="data-heading">
          <h2>⚠ Low Stock Alerts</h2>
          <a>View All</a>
        </div>
        <table>
          <thead>
            <tr>
              <th>PRODUCT SKU</th>
              <th>PRODUCT NAME</th>
              <th>CATEGORY</th>
              <th>CURRENT STOCK</th>
              <th>REORDER POINT</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                'SKU-8921-A',
                'Quantum Noise-Canceling Headphones',
                'Electronics',
                '14',
                '25',
                'Low Stock',
              ],
              [
                'SKU-4412-B',
                'Ergonomic Mesh Office Chair',
                'Home Goods',
                '0',
                '10',
                'Out of Stock',
              ],
              ['SKU-1190-C', 'Mechanical Keyboard Pro', 'Electronics', '8', '30', 'Low Stock'],
              ['SKU-7734-D', 'Premium Cotton Polo', 'Apparel', '2', '50', 'Critical'],
            ].map((row) => (
              <tr key={row[0]}>
                {row.map((cell, index) => (
                  <td key={cell}>
                    {index === 5 ? <span className="table-badge">{cell}</span> : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  )
}
