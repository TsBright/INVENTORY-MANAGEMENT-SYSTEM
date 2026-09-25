'use client'
import Link from 'next/link'
import { useState } from 'react'
import './styles.css'
const customers = [
  ['SJ', 'Sarah Jenkins', 's.jenkins@acme.corp', '42', '$124,500.00', 'Oct 12, 2023', 'Active'],
  ['MC', 'Michael Chen', 'mchen@globaltech.io', '18', '$89,200.50', 'Sep 28, 2023', 'Active'],
  ['ER', 'Elena Rodriguez', 'elena.r@designco.net', '5', '$12,450.00', 'Nov 02, 2023', 'Pending'],
  ['DK', 'David Kim', 'dkim@ventures.com', '1', '$3,200.00', 'Aug 15, 2022', 'Inactive'],
]
export default function CustomersPage() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')
  const filtered = customers.filter(
    (row) =>
      (filter === 'All' || row[6] === filter) &&
      row.some((cell) => cell.toLowerCase().includes(search.toLowerCase())),
  )
  return (
    <main className="customers-page">
      <header>
        <div>
          <h1>Customers</h1>
          <p>Manage client relationships and purchase history.</p>
        </div>
        <div className="customers-actions">
          <label>
            ⌕{' '}
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search customers..."
            />
          </label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option>All</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Inactive</option>
          </select>
          <Link href="/dashboard/customers/add-customers">＋ Add Customer</Link>
        </div>
      </header>
      <section className="customers-card">
        <table>
          <thead>
            <tr>
              <th>CUSTOMER</th>
              <th>CONTACT</th>
              <th>PURCHASES</th>
              <th>TOTAL SPENT</th>
              <th>LAST PURCHASE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr key={row[1]}>
                <td>
                  <span className="customer-avatar">{row[0]}</span>
                  <strong>{row[1]}</strong>
                </td>
                <td>{row[2]}</td>
                <td>{row[3]}</td>
                <td>{row[4]}</td>
                <td>{row[5]}</td>
                <td>
                  <span className={`customer-status ${row[6].toLowerCase()}`}>{row[6]}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <footer>
          Showing 1 to {filtered.length} of 124 entries{' '}
          <span>
            ‹　<b>1</b>　2　3　…　12　›
          </span>
        </footer>
      </section>
    </main>
  )
}
