'use client'
import Link from 'next/link'
import { useState } from 'react'
import './styles.css'
export default function SuppliersPage() {
  const [search, setSearch] = useState('')
  const rows = [
    [
      'AT',
      'Apex Technologies',
      'Sarah Connor',
      's.connor@apextech.com',
      '14 Active SKUs',
      '$142,500.00',
      'Active',
    ],
    [
      'GM',
      'Global Manufacturing',
      'Michael Chang',
      'mchang@globalmfg.co',
      '8 Active SKUs',
      '$89,240.50',
      'Active',
    ],
    [
      'SS',
      'Stellar Supplies Ltd.',
      'Elena Rodriguez',
      'elena@stellarsupplies.net',
      '24 Active SKUs',
      '$312,890.00',
      'Review',
    ],
    [
      'ND',
      'Nexus Distributors',
      'David Kim',
      'dkim@nexusdist.com',
      '2 Active SKUs',
      '$12,400.00',
      'Suspended',
    ],
    [
      'PP',
      'Prime Packaging Inc.',
      'Rachel Green',
      'rachel@primepack.co',
      '42 Active SKUs',
      '$56,720.00',
      'Active',
    ],
  ]
  return (
    <main className="suppliers-page">
      <header>
        <div>
          <h1>Supplier Directory</h1>
          <p>Manage vendor relationships and procurement sources.</p>
        </div>
        <div>
          <label>
            ⌕{' '}
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search suppliers..."
            />
          </label>
          <button>☷ Filter</button>
          <Link href="/dashboard/suppliers/add">＋ Add Supplier</Link>
        </div>
      </header>
      <section className="supplier-card">
        <table>
          <thead>
            <tr>
              <th>SUPPLIER</th>
              <th>CONTACT</th>
              <th>PRODUCTS SUPPLIED</th>
              <th>TOTAL PURCHASES</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {rows
              .filter((row) =>
                row.some((cell) => cell.toLowerCase().includes(search.toLowerCase())),
              )
              .map((row) => (
                <tr key={row[1]}>
                  <td>
                    <span className="supplier-avatar">{row[0]}</span>
                    <strong>{row[1]}</strong>
                  </td>
                  <td>
                    {row[2]}
                    <small>{row[3]}</small>
                  </td>
                  <td>{row[4]}</td>
                  <td>{row[5]}</td>
                  <td>
                    <span className={`supplier-status ${row[6].toLowerCase()}`}>{row[6]}</span>
                  </td>
                  <td>
                    <Link
                      href={`/dashboard/suppliers/${row[1].toLowerCase().replaceAll(' ', '-')}`}
                    >
                      ›
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <footer>Showing 1 to 5 of 24 suppliers　‹　›</footer>
      </section>
    </main>
  )
}
