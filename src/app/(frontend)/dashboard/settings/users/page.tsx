'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import '../styles.css'
import './styles.css'

const users = [
  ['Sarah Jenkins', 's.jenkins@executive.com', 'Administrator', 'Active', 'Just now'],
  ['Michael Chen', 'm.chen@executive.com', 'Manager', 'Active', '2 hours ago'],
  ['Emily Davis', 'e.davis@executive.com', 'Analyst', 'Inactive', 'Oct 12, 2023'],
  ['James Wilson', 'j.wilson@executive.com', 'Editor', 'Pending', 'Never'],
]

export default function UsersPage() {
  const [search, setSearch] = useState('')
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const filteredUsers = useMemo(
    () => users.filter((user) => user.join(' ').toLowerCase().includes(search.toLowerCase())),
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
          <span className="avatar small">AU</span>
          <div>
            <strong>Admin User</strong>
            <small>System Administrator</small>
          </div>
        </div>
      </aside>
      <section className="settings-content users-content">
        <div className="breadcrumbs">
          Settings <span>/</span> <b>Users</b>
        </div>
        <header className="page-heading users-heading">
          <div>
            <h1>Users</h1>
            <p>Manage user access, roles, and status.</p>
          </div>
          <Link className="button primary" href="/dashboard/settings/users/add">
            + Add User
          </Link>
        </header>
        <div className="directory-toolbar">
          <label className="search-field">
            <span>⌕</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search users..."
              aria-label="Search users"
            />
          </label>
          <button className="button outline">≡ Filter</button>
        </div>
        <div className="table-frame">
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th>Last Active</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(([name, email, role, status, active]) => (
                <tr key={email}>
                  <td>
                    <div className="user-cell">
                      <span className="avatar">
                        {name
                          .split(' ')
                          .map((part) => part[0])
                          .join('')}
                      </span>
                      <span>
                        <strong>{name}</strong>
                        <small>{email}</small>
                      </span>
                    </div>
                  </td>
                  <td>{role}</td>
                  <td>
                    <span className={`status ${status.toLowerCase()}`}>{status}</span>
                  </td>
                  <td>{active}</td>
                  <td className="action-cell">
                    <button
                      className="icon-button"
                      onClick={() => setOpenMenu(openMenu === email ? null : email)}
                      aria-label={`Actions for ${name}`}
                    >
                      ...
                    </button>
                    {openMenu === email && (
                      <div className="action-menu">
                        <Link
                          href={`/dashboard/settings/users/${name.toLowerCase().replaceAll(' ', '-')}`}
                        >
                          View profile
                        </Link>
                        <button>Deactivate</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="table-footer">
            <strong>Showing 1 to {filteredUsers.length} of 24 users</strong>
            <div className="pagination">
              <button aria-label="Previous page">‹</button>
              <button className="selected">1</button>
              <button>2</button>
              <button>3</button>
              <button aria-label="Next page">›</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
