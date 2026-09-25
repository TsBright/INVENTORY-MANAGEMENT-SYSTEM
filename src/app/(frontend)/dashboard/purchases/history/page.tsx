'use client'
import Link from 'next/link'
import { useState } from 'react'
import './styles.css'
export default function PurchaseHistoryPage() {
  const [tab, setTab] = useState('All')
  const [search, setSearch] = useState('')
  const rows = [
    ['PO-2023-1042', 'Global Tech Supplies Inc.', 'Oct 24, 2023', '14', '$12,450.00', 'Received'],
    ['PO-2023-1041', 'Apex Manufacturing Logistics', 'Oct 22, 2023', '3', '$4,120.50', 'Pending'],
    ['PO-2023-1040', 'Precision Parts Co.', 'Oct 19, 2023', '45', '$890.00', 'Received'],
    ['PO-2023-1039', 'Nexus Industrial', 'Oct 15, 2023', '1', '$15,000.00', 'Cancelled'],
  ]
  return (
    <main className="purchase-list-page">
      <header>
        <div>
          <h1>Purchases</h1>
          <p>Review and manage inbound inventory orders.</p>
        </div>
        <div>
          <label>
            ⌕{' '}
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search references, suppliers..."
            />
          </label>
          <button>☷ Filter</button>
          <Link href="/dashboard/purchases/add">＋ New Purchase</Link>
        </div>
      </header>
      <section className="purchase-list-card">
        <nav>
          {['All', 'Pending', 'Received'].map((item) => (
            <button
              className={tab === item ? 'active' : ''}
              onClick={() => setTab(item)}
              key={item}
            >
              {item}
              {item === 'All' ? ' (124)' : item === 'Pending' ? ' (12)' : ' (108)'}
            </button>
          ))}
        </nav>
        <table>
          <thead>
            <tr>
              <th>REFERENCE</th>
              <th>SUPPLIER</th>
              <th>DATE</th>
              <th>ITEMS</th>
              <th>TOTAL</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {rows
              .filter(
                (row) =>
                  (tab === 'All' || row[5] === tab) &&
                  row.some((cell) => cell.toLowerCase().includes(search.toLowerCase())),
              )
              .map((row) => (
                <tr key={row[0]}>
                  <td>
                    <Link href={`/dashboard/purchases/${row[0]}`}>{row[0]}</Link>
                  </td>
                  {row.slice(1).map((cell, index) => (
                    <td key={cell}>
                      {index === 4 ? (
                        <span className={`purchase-status ${cell.toLowerCase()}`}>{cell}</span>
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
          Showing 1 to 5 of 124 entries　‹　<b>1</b>　2　3　…　25　›
        </footer>
      </section>
    </main>
  )
}
