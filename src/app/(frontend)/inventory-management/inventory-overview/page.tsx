'use client'
import { useState } from 'react'
import './styles.css'
export default function InventoryOverviewPage() {
  const [tab, setTab] = useState('All Items')
  const rows = [
    ['Ergonomic Office Chair', 'FURN-CHR-001', '145', '50', 'In Stock'],
    ['Wireless Mechanical Keyboard', 'ELEC-KBD-042', '12', '25', 'Low Stock'],
    ['27” 4K Professional Monitor', 'ELEC-MON-088', '0', '10', 'Out of Stock'],
    ['Standing Desk Converter', 'FURN-DSK-019', '88', '20', 'In Stock'],
    ['Noise-Cancelling Headphones', 'ELEC-AUD-005', '18', '30', 'Low Stock'],
  ]
  return (
    <main className="inventory-page">
      <header>
        <div>
          <h1>Inventory</h1>
          <p>Real-time overview of your warehouse stock levels.</p>
        </div>
        <div>
          <button>⇩ Export</button>
          <button className="dark">＋ Add Stock</button>
        </div>
      </header>
      <div className="inventory-metrics">
        {[
          ['TOTAL PRODUCTS', '1,248'],
          ['TOTAL UNITS', '45,912'],
          ['LOW STOCK', '42 items'],
          ['OUT OF STOCK', '8 items'],
          ['INVENTORY VALUE', '$1.2M'],
        ].map((item) => (
          <article key={item[0]}>
            <small>{item[0]}</small>
            <strong>{item[1]}</strong>
          </article>
        ))}
      </div>
      <section className="inventory-card">
        <nav>
          {['All Items', 'In Stock', 'Low Stock', 'Out of Stock'].map((item) => (
            <button
              className={tab === item ? 'active' : ''}
              onClick={() => setTab(item)}
              key={item}
            >
              {item}
            </button>
          ))}
        </nav>
        <table>
          <thead>
            <tr>
              <th>PRODUCT NAME</th>
              <th>SKU</th>
              <th>AVAILABLE</th>
              <th>MINIMUM</th>
              <th>STATUS</th>
              <th>LAST UPDATED</th>
            </tr>
          </thead>
          <tbody>
            {rows
              .filter((row) => tab === 'All Items' || row[4] === tab)
              .map((row) => (
                <tr key={row[1]}>
                  {row.map((cell, index) => (
                    <td key={cell}>
                      {index === 4 ? (
                        <span className={`stock-badge ${cell.toLowerCase().replace(' ', '-')}`}>
                          {cell}
                        </span>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
        <footer>
          Showing 1 to 5 of 1,248 entries{' '}
          <span>
            ‹　<b>1</b>　2　3　›
          </span>
        </footer>
      </section>
    </main>
  )
}
