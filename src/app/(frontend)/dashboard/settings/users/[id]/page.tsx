'use client'

import Link from 'next/link'
import { useState } from 'react'
import '../../styles.css'
import '../styles.css'

export default function UserProfilePage() {
  const [active, setActive] = useState(true)
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
      <section className="settings-content profile-content">
        <div className="breadcrumbs">
          Settings <span>/</span> Users <span>/</span> <b>Sarah Jenkins</b>
        </div>
        <header className="profile-heading">
          <div className="profile-identity">
            <span className="avatar profile-avatar">SJ</span>
            <div>
              <h1>Sarah Jenkins</h1>
              <p>Senior Operations Manager</p>
            </div>
          </div>
          <div className="profile-actions">
            <button className="button outline" onClick={() => setActive(!active)}>
              {active ? 'Deactivate User' : 'Activate User'}
            </button>
            <button className="button primary">Edit User</button>
          </div>
        </header>
        <div className="profile-grid">
          <section className="detail-card">
            <h2>Contact &amp; Details</h2>
            {[
              ['EMAIL ADDRESS', 's.jenkins@executiveprecision.com'],
              ['PHONE NUMBER', '+1 (555) 019-8472'],
              ['DEPARTMENT', 'Logistics & Supply Chain'],
              ['LOCATION', 'New York HQ'],
            ].map(([label, value]) => (
              <div className="detail-row" key={label}>
                <b>{label}</b>
                <span>{value}</span>
              </div>
            ))}
            <div className="detail-status">
              <b>STATUS</b>
              <span className={`status ${active ? 'active' : 'inactive'}`}>
                {active ? 'Active' : 'Inactive'}
              </span>
            </div>
            <div className="detail-status">
              <b>LAST ACTIVE</b>
              <span>Today, 09:42 AM</span>
            </div>
          </section>
          <section className="timeline-card">
            <div className="card-title">
              <h2>Activity Timeline</h2>
              <button>View All</button>
            </div>
            {[
              [
                'Updated Inventory Thresholds',
                'Modified minimum stock levels for Warehouse C.',
                '10:15 AM',
              ],
              [
                'Generated Q3 Report',
                'Exported comprehensive supply chain analysis report.',
                'Yesterday',
              ],
              [
                'Approved Purchase Order #8921',
                'Authorized vendor payment for structural components.',
                'Oct 24',
              ],
            ].map(([title, detail, time], index) => (
              <div className="timeline-item" key={title}>
                <span className={index === 0 ? 'timeline-dot current' : 'timeline-dot'}></span>
                <div>
                  <strong>{title}</strong>
                  <p>{detail}</p>
                </div>
                <time>{time}</time>
              </div>
            ))}
          </section>
        </div>
      </section>
    </main>
  )
}
