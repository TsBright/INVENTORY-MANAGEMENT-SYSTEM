'use client'

import Link from 'next/link'
import { useState } from 'react'
import '../styles.css'
import './styles.css'

export default function NotificationSettingsPage() {
  const [lowStock, setLowStock] = useState(true)
  const [outOfStock, setOutOfStock] = useState(false)
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
      <section className="settings-content notification-content">
        <div className="breadcrumbs">
          Settings <span>/</span> <b>Notification Settings</b>
        </div>
        <header className="page-heading">
          <h1>Notification Settings</h1>
          <p>Configure alerts for critical operational events.</p>
        </header>
        <section className="notification-card">
          <h2>
            <span className="section-icon">IN</span>Inventory Alerts
          </h2>
          <div className="notification-row">
            <div>
              <strong>Low-stock notifications</strong>
              <p>
                Receive an alert when an item's quantity falls below its predefined safety
                threshold.
              </p>
            </div>
            <button
              className={`toggle ${lowStock ? 'on' : ''}`}
              onClick={() => setLowStock(!lowStock)}
              aria-pressed={lowStock}
              aria-label="Toggle low-stock notifications"
            >
              <i />
            </button>
          </div>
          <div className="notification-row">
            <div>
              <strong>Out-of-stock notifications</strong>
              <p>
                Immediate high-priority alert when an item reaches zero inventory, requiring
                immediate action.
              </p>
            </div>
            <button
              className={`toggle ${outOfStock ? 'on' : ''}`}
              onClick={() => setOutOfStock(!outOfStock)}
              aria-pressed={outOfStock}
              aria-label="Toggle out-of-stock notifications"
            >
              <i />
            </button>
          </div>
        </section>
        <section className="notification-card muted">
          <h2>
            <span className="section-icon">SY</span>System Notifications
          </h2>
          <p>Additional system-level configurations are managed by the administration team.</p>
        </section>
      </section>
    </main>
  )
}
