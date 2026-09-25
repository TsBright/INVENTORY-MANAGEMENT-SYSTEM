'use client'
import { useState } from 'react'
import './styles.css'
export default function OutOfStockPage() {
  const [search, setSearch] = useState('')
  const [ordered, setOrdered] = useState<string[]>([])
  const rows = [
    ['Machined Aluminum Casing V2', 'MAC-883-V2', '0', '500'],
    ['Lithium-Ion Polymer Cell 4000mAh', 'LIP-4K-CELL', '0', '2,000'],
    ['Tactile Switch Assembly SMD', 'TSW-SMD-X', '0', '10,000'],
    ['Optical Sensor Array Module', 'OSA-MOD-9', '0', '150'],
    ['Thermal Paste Compound Syringe 10g', 'TPC-10G-SYR', '0', '300'],
  ]
  return (
    <main className="outstock-page">
      <header>
        <div>
          <h1>
            Out of Stock <em>24 Items</em>
          </h1>
          <p>Critical inventory items requiring immediate reorder.</p>
        </div>
        <div>
          <button>⇩ Export List</button>
          <button className="dark">♛ Bulk Reorder</button>
        </div>
      </header>
      <section className="outstock-card">
        <div className="outstock-filters">
          <label>
            ⌕{' '}
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Filter by product name or SKU..."
            />
          </label>
          <span>
            Sort by:{' '}
            <select>
              <option>Highest Minimum</option>
              <option>Product Name</option>
            </select>
          </span>
        </div>
        <table>
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>SKU</th>
              <th>AVAILABLE</th>
              <th>MINIMUM</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {rows
              .filter(
                (row) =>
                  row[0].toLowerCase().includes(search.toLowerCase()) ||
                  row[1].toLowerCase().includes(search.toLowerCase()),
              )
              .map((row) => (
                <tr key={row[1]}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td className="red">{row[2]}</td>
                  <td>{row[3]}</td>
                  <td>
                    <span className="out-badge">Out of Stock</span>
                  </td>
                  <td>
                    <button onClick={() => setOrdered([...ordered, row[1]])}>
                      {ordered.includes(row[1]) ? 'Ordered' : 'Reorder'}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <footer>
          Showing 1 to 5 of 24 entries　‹　<b>1</b>　2　3　…　5　›
        </footer>
      </section>
    </main>
  )
}
