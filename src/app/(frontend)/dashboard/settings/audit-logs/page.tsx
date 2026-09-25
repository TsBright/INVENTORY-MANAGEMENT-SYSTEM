'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import '../styles.css'
import './styles.css'

const entries = [
  [
    '2023-10-24 14:32:01',
    'A. Administrator',
    'UPDATE',
    'System Settings',
    '{"field":"max_login_attempts","old":5,"new":3}',
  ],
  [
    '2023-10-24 14:28:45',
    'System',
    'DELETE',
    'Inventory',
    '{"id":"INV-992","reason":"archived_cleanup"}',
  ],
  [
    '2023-10-24 14:15:10',
    'J. Doe',
    'CREATE',
    'Transactions',
    '{"txn_id":"TXN-10293","amount":4500.00}',
  ],
  [
    '2023-10-24 13:55:00',
    'A. Administrator',
    'LOGIN',
    'Authentication',
    '{"ip":"192.168.1.45","method":"MFA"}',
  ],
  [
    '2023-10-24 13:42:12',
    'Unknown',
    'FAILED',
    'Authentication',
    '{"ip":"45.22.19.101","reason":"invalid_credentials"}',
  ],
]

export default function AuditLogsPage() {
  const [search, setSearch] = useState('')
  const rows = useMemo(
    () => entries.filter((entry) => entry.join(' ').toLowerCase().includes(search.toLowerCase())),
    [search],
  )
  return (
    <main className="settings-shell">
      <aside className="settings-sidebar">
        <div className="brand">
          <strong>Executive Precision</strong>
          <span>BUSINESS SUITE</span>
        </div>
        <nav className="settings-nav">
          {['Overview', 'Products', 'Transactions', 'Inventory', 'Team', 'Settings'].map((item) => (
            <Link
              className={item === 'Settings' ? 'nav-item active' : 'nav-item'}
              href={item === 'Settings' ? '/dashboard/settings' : '#'}
              key={item}
            >
              <span className="nav-icon">{item.slice(0, 1)}</span>
              {item}
            </Link>
          ))}
        </nav>
        <div className="sidebar-user">
          <span className="avatar small">AA</span>
          <div>
            <strong>A. Administrator</strong>
            <small>SysAdmin</small>
          </div>
        </div>
      </aside>
      <section className="settings-content audit-content">
        <div className="breadcrumbs">
          Settings <span>/</span> <b>Audit Log</b>
        </div>
        <header className="page-heading audit-heading">
          <div>
            <h1>Audit Log</h1>
            <p>Track system activity and changes across your workspace.</p>
          </div>
          <button className="button outline">⇩ Export CSV</button>
        </header>
        <div className="audit-frame">
          <div className="audit-filters">
            <label>
              Search Record / ID
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="⌕  e.g. REC-8923"
              />
            </label>
            <label>
              User
              <select>
                <option>All Users</option>
                <option>System</option>
                <option>A. Administrator</option>
              </select>
            </label>
            <label>
              Action
              <select>
                <option>All Actions</option>
                <option>UPDATE</option>
                <option>DELETE</option>
              </select>
            </label>
            <label>
              Module
              <select>
                <option>All Modules</option>
                <option>Inventory</option>
                <option>Authentication</option>
              </select>
            </label>
          </div>
          <div className="audit-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Date / Time (UTC)</th>
                  <th>User</th>
                  <th>Action</th>
                  <th>Module</th>
                  <th>Record Details</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) => (
                      <td key={cell}>
                        {index === 1 ? (
                          <span className="audit-user">
                            <span className="avatar audit-avatar">
                              {cell
                                .split(' ')
                                .map((part) => part[0])
                                .join('')}
                            </span>
                            {cell}
                          </span>
                        ) : index === 2 ? (
                          <span className={`audit-action ${cell.toLowerCase()}`}>{cell}</span>
                        ) : index === 4 ? (
                          <code>{cell}</code>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-footer">
            <strong>Showing 1 to {rows.length} of 2,491 entries</strong>
            <div className="pagination">
              <button>‹</button>
              <button className="selected">1</button>
              <button>2</button>
              <button>3</button>
              <button>›</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
