'use client'

import Link from 'next/link'
import './styles.css'

const settingCards = [
  {
    title: 'Business Profile',
    description: 'Manage company details, billing information, and primary operational locations.',
    tags: ['Profile', 'Billing'],
    icon: 'BP',
    href: '/dashboard/settings/business-profile',
    tone: 'blue',
  },
  {
    title: 'Team & Roles',
    description: 'Configure user access levels, define custom roles, and monitor active sessions.',
    tags: ['Users', 'Permissions'],
    icon: 'TR',
    href: '/dashboard/settings/users',
    tone: 'sky',
  },
  {
    title: 'Inventory',
    description: 'Set global stock thresholds and tracking preferences.',
    tags: ['Thresholds'],
    icon: 'IN',
    href: '/dashboard/settings/inventory-settings',
    tone: 'teal',
  },
  {
    title: 'System Preferences',
    description:
      'Configure global notification routing, API keys, and overarching workspace settings tailored to your workflow.',
    tags: ['Notifications', 'API Config'],
    icon: 'SP',
    href: '/dashboard/settings/notification-settings',
    tone: 'gray',
  },
]

export default function SettingsPage() {
  return (
    <main className="settings-shell">
      <aside className="settings-sidebar">
        <div className="brand">
          <strong>Executive Precision</strong>
          <span>BUSINESS SUITE</span>
        </div>
        <nav className="settings-nav" aria-label="Primary navigation">
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
      <section className="settings-content">
        <div className="breadcrumbs">
          Home <span>/</span> <b>Settings</b>
        </div>
        <header className="page-heading">
          <h1>System Preferences</h1>
          <p>Manage your enterprise configuration, team access, and operational thresholds.</p>
        </header>
        <div className="settings-card-grid">
          {settingCards.map((card) => (
            <Link className={`settings-card ${card.tone}`} href={card.href} key={card.title}>
              <div className="settings-card-icon">{card.icon}</div>
              <div className="settings-card-body">
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <div className="tag-list">
                  {card.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
