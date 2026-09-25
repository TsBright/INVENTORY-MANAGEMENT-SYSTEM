'use client'

import Link from 'next/link'
import { useState } from 'react'
import '../styles.css'
import './styles.css'

export default function BusinessProfilePage() {
  const [businessName, setBusinessName] = useState('Executive Precision LLC')
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
      <section className="settings-content business-content">
        <div className="breadcrumbs">
          Settings <span>/</span> <b>Business Profile</b>
        </div>
        <header className="page-heading business-heading">
          <div>
            <h1>Business Profile</h1>
            <p>Manage your company details and receipt branding.</p>
          </div>
          <div className="header-actions">
            <button className="button outline">Discard</button>
            <button className="button primary">Save Changes</button>
          </div>
        </header>
        <div className="business-grid">
          <div>
            <section className="business-card">
              <h2>Core Information</h2>
              <div className="logo-row">
                <button className="upload-box">Upload Logo</button>
                <div className="field">
                  <label htmlFor="business-name">Business Name</label>
                  <input
                    id="business-name"
                    value={businessName}
                    onChange={(event) => setBusinessName(event.target.value)}
                  />
                </div>
              </div>
              <div className="form-grid">
                <div className="field">
                  <label>Business Type</label>
                  <select defaultValue="Retail & Commerce">
                    <option>Retail & Commerce</option>
                    <option>Services</option>
                    <option>Wholesale</option>
                  </select>
                </div>
                <div className="field">
                  <label>Default Currency</label>
                  <select defaultValue="USD ($)">
                    <option>USD ($)</option>
                    <option>FCFA</option>
                    <option>EUR (€)</option>
                  </select>
                </div>
              </div>
            </section>
            <section className="business-card">
              <h2>Contact &amp; Location</h2>
              <div className="form-grid">
                <div className="field">
                  <label>Support Email</label>
                  <input defaultValue="billing@execprecision.com" />
                </div>
                <div className="field">
                  <label>Business Phone</label>
                  <input defaultValue="+1 (555) 019-2837" />
                </div>
              </div>
              <div className="field address-field">
                <label>Headquarters Address</label>
                <textarea
                  defaultValue={'100 Wall Street, Suite 4500\nNew York, NY 10005\nUnited States'}
                />
              </div>
            </section>
          </div>
          <section className="receipt-card">
            <h2>
              Receipt Preview <span>◉</span>
            </h2>
            <div className="receipt">
              <small>Logo</small>
              <strong>{businessName || 'Your Business'}</strong>
              <b>LLC</b>
              <p>
                100 Wall Street, Suite 4500
                <br />
                New York, NY 10005
                <br />
                +1 (555) 019-2837
              </p>
              <hr />
              <div>
                Consulting Retainer <span>$2,500.00</span>
              </div>
              <div>
                Software License <span>$450.00</span>
              </div>
              <hr />
              <strong>
                SUBTOTAL <span>$2,950.00</span>
              </strong>
              <div>
                Tax (8.875%) <span>$261.81</span>
              </div>
              <strong>
                TOTAL <span>$3,211.81</span>
              </strong>
              <p>Thank you for your business.</p>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
