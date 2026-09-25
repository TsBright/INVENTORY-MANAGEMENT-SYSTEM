'use client'

import Link from 'next/link'
import { useState } from 'react'
import '../styles.css'
import './styles.css'

const permissions = [
  ['PRODUCT MANAGEMENT', 'View Products'],
  ['PRODUCT MANAGEMENT', 'Edit Products'],
  ['PRODUCT MANAGEMENT', 'Delete Products'],
  ['TRANSACTIONS & SALES', 'Process Sales'],
  ['TRANSACTIONS & SALES', 'Issue Refunds'],
  ['TRANSACTIONS & SALES', 'View Reports'],
  ['SYSTEM SETTINGS', 'Manage Users'],
]
const roles = ['Owner', 'Manager', 'Cashier', 'Inventory']

export default function RolesPage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    'Edit Products-Inventory': true,
    'View Reports-Inventory': true,
  })
  const toggle = (permission: string, role: string) =>
    setChecked({ ...checked, [`${permission}-${role}`]: !checked[`${permission}-${role}`] })
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
      <section className="settings-content matrix-content">
        <div className="breadcrumbs">
          Settings <span>/</span> <b>Roles &amp; Permissions</b>
        </div>
        <header className="page-heading matrix-heading">
          <div>
            <h1>Roles &amp; Permissions</h1>
            <p>Manage access levels and operational capabilities for your team.</p>
          </div>
          <div className="header-actions">
            <button className="button outline">+ New Role</button>
            <button className="button primary">Save Changes</button>
          </div>
        </header>
        <div className="matrix-frame">
          <div className="matrix-row matrix-header">
            <div>PERMISSION LEVEL</div>
            {roles.map((role) => (
              <div key={role}>
                <strong>{role}</strong>
                <small>
                  {role === 'Owner'
                    ? 'Full Access'
                    : role === 'Manager'
                      ? 'Operations'
                      : role === 'Cashier'
                        ? 'Sales Only'
                        : 'Stock Mgmt'}
                </small>
              </div>
            ))}
          </div>
          {permissions.map(([group, permission], index) => (
            <div key={permission}>
              {(index === 0 || permissions[index - 1][0] !== group) && (
                <div className="matrix-group">{group}</div>
              )}
              <div className="matrix-row">
                <div>{permission}</div>
                {roles.map((role) => (
                  <div key={role}>
                    {role === 'Owner' ||
                    (role === 'Manager' &&
                      !['Delete Products', 'Manage Users'].includes(permission)) ||
                    (role === 'Cashier' && permission === 'Process Sales') ? (
                      <button
                        className="check"
                        onClick={() => toggle(permission, role)}
                        aria-label={`${permission} for ${role}`}
                      >
                        ✓
                      </button>
                    ) : role === 'Inventory' &&
                      ['Edit Products', 'View Reports'].includes(permission) ? (
                      <button
                        className={`switch ${checked[`${permission}-${role}`] ? 'on' : ''}`}
                        onClick={() => toggle(permission, role)}
                        aria-label={`${permission} for ${role}`}
                      >
                        <i />
                      </button>
                    ) : (
                      <span className="dash">—</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="matrix-footer">
            Showing 7 permissions across 4 roles{' '}
            <Link href="/dashboard/settings/audit-logs">View detailed audit log</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
