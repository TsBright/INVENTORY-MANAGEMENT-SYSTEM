'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import './styles.css'

type Transaction = {
  id: string
  date: string
  time: string
  customer: string
  cashier: string
  total: string
  status: 'Completed' | 'Pending' | 'Cancelled'
}

const transactions: Transaction[] = [
  {
    id: '#TR-8092',
    date: 'Oct 24, 2023',
    time: '14:32 PM',
    customer: 'Acme Corp',
    cashier: 'Sarah J.',
    total: '$4,250.00',
    status: 'Completed',
  },
  {
    id: '#TR-8091',
    date: 'Oct 24, 2023',
    time: '11:15 AM',
    customer: 'Global Tech LLC',
    cashier: 'Michael T.',
    total: '$12,800.50',
    status: 'Pending',
  },
  {
    id: '#TR-8090',
    date: 'Oct 23, 2023',
    time: '16:45 PM',
    customer: 'Walk-in Customer',
    cashier: 'Sarah J.',
    total: '$120.00',
    status: 'Cancelled',
  },
  {
    id: '#TR-8089',
    date: 'Oct 23, 2023',
    time: '09:30 AM',
    customer: 'Stark Industries',
    cashier: 'David K.',
    total: '$54,200.00',
    status: 'Completed',
  },
  {
    id: '#TR-8088',
    date: 'Oct 22, 2023',
    time: '15:20 PM',
    customer: 'Acme Corp',
    cashier: 'Michael T.',
    total: '$8,940.00',
    status: 'Completed',
  },
  {
    id: '#TR-8087',
    date: 'Oct 22, 2023',
    time: '10:05 AM',
    customer: 'Nexus Industrial',
    cashier: 'Sarah J.',
    total: '$2,175.75',
    status: 'Pending',
  },
]

const navigation = [
  ['Overview', '/dashboard/business-owner-dashboard', '▦'],
  ['Products', '/dashboard/products', '▤'],
  ['Transactions', '/dashboard/sales/sales-history', '▣'],
  ['Inventory', '/dashboard/inventory-management/inventory-overview', '⌂'],
  ['Team', '/dashboard/settings/users', '♙'],
]

export default function SalesHistoryPage() {
  const [search, setSearch] = useState('')
  const [dateRange, setDateRange] = useState('Last 7 Days')
  const [status, setStatus] = useState('All Statuses')
  const [showFilters, setShowFilters] = useState(false)
  const [page, setPage] = useState(1)

  const filteredTransactions = useMemo(
    () =>
      transactions.filter((transaction) => {
        const matchesSearch = Object.values(transaction).some((value) =>
          value.toLowerCase().includes(search.toLowerCase()),
        )
        const matchesStatus = status === 'All Statuses' || transaction.status === status
        return matchesSearch && matchesStatus
      }),
    [search, status],
  )

  return (
    <main className="transactions-page">
      <aside className="transactions-sidebar">
        <div className="transactions-brand">
          <span className="brand-mark">◉</span>
          <div>
            <strong>ExecPrecision</strong>
            <small>Enterprise Suite</small>
          </div>
        </div>
        <Link className="new-transaction" href="/dashboard/pos">
          ＋ <span>New Transaction</span>
        </Link>
        <nav className="transactions-nav" aria-label="Primary navigation">
          {navigation.map(([label, href, icon]) => (
            <Link className={label === 'Transactions' ? 'active' : ''} href={href} key={label}>
              <span>{icon}</span>
              {label}
            </Link>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <Link href="#">
            ? <span>Help Center</span>
          </Link>
          <Link href="#">
            ⇥ <span>Logout</span>
          </Link>
        </div>
      </aside>

      <section className="transactions-main">
        <header className="transactions-topbar">
          <h1>Transactions</h1>
          <label className="global-search">
            <span>⌕</span>
            <input
              value={search}
              onChange={(event) => {
                setSearch(event.target.value)
                setPage(1)
              }}
              placeholder="Global search..."
              aria-label="Global search"
            />
          </label>
          <span className="top-avatar">SJ</span>
        </header>
        <div className="transactions-content">
          <div className="transaction-filters">
            <label className="select-control">
              <select value={dateRange} onChange={(event) => setDateRange(event.target.value)}>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>This Year</option>
              </select>
              <span>⌄</span>
            </label>
            <label className="select-control">
              <select
                value={status}
                onChange={(event) => {
                  setStatus(event.target.value)
                  setPage(1)
                }}
              >
                <option>All Statuses</option>
                <option>Completed</option>
                <option>Pending</option>
                <option>Cancelled</option>
              </select>
              <span>⌄</span>
            </label>
            <button
              className={`filter-button ${showFilters ? 'selected' : ''}`}
              onClick={() => setShowFilters(!showFilters)}
            >
              ☷ <span>More Filters</span>
            </button>
            <div className="filter-actions">
              <button
                onClick={() => window.alert('Transaction export prepared')}
                aria-label="Export transactions"
              >
                ⇩
              </button>
              <button onClick={() => window.print()} aria-label="Print transactions">
                ▤
              </button>
            </div>
          </div>
          {showFilters && (
            <div className="advanced-filters">
              <label>
                Cashier
                <select>
                  <option>All Cashiers</option>
                  <option>Sarah J.</option>
                  <option>Michael T.</option>
                </select>
              </label>
              <label>
                Customer
                <input placeholder="Search customer" />
              </label>
              <button
                className="button-clear"
                onClick={() => {
                  setSearch('')
                  setStatus('All Statuses')
                }}
              >
                Clear filters
              </button>
            </div>
          )}
          <div className="transactions-table-card">
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>TXN ID</th>
                    <th>DATE &amp; TIME</th>
                    <th>CUSTOMER</th>
                    <th>CASHIER</th>
                    <th className="amount-heading">TOTAL</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.slice((page - 1) * 4, page * 4).map((transaction) => (
                    <tr key={transaction.id}>
                      <td>
                        <Link href={`/dashboard/sales/${transaction.id.replace('#', '')}`}>
                          {transaction.id}
                        </Link>
                      </td>
                      <td>
                        <span>{transaction.date}</span>
                        <small>{transaction.time}</small>
                      </td>
                      <td>{transaction.customer}</td>
                      <td>{transaction.cashier}</td>
                      <td className="amount">{transaction.total}</td>
                      <td>
                        <span className={`transaction-status ${transaction.status.toLowerCase()}`}>
                          {transaction.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <footer className="transactions-footer">
              <span>
                Showing {filteredTransactions.length ? (page - 1) * 4 + 1 : 0} to{' '}
                {Math.min(page * 4, filteredTransactions.length)} of 248 entries
              </span>
              <div className="pagination">
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                  ‹
                </button>
                <button className={page === 1 ? 'current' : ''} onClick={() => setPage(1)}>
                  1
                </button>
                <button className={page === 2 ? 'current' : ''} onClick={() => setPage(2)}>
                  2
                </button>
                <button className={page === 3 ? 'current' : ''} onClick={() => setPage(3)}>
                  3
                </button>
                <button>…</button>
                <button onClick={() => setPage(Math.min(3, page + 1))}>›</button>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </main>
  )
}
