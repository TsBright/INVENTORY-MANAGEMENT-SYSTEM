'use client'

import Link from 'next/link'
import { useState } from 'react'
import '../styles.css'
import './styles.css'

export default function InventorySettingsPage() {
  const [alertMode, setAlertMode] = useState('Immediate Notification')
  const [identifier, setIdentifier] = useState('SKU')
  const [autoSku, setAutoSku] = useState(true)
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
      <section className="settings-content inventory-content">
        <div className="breadcrumbs">
          Settings <span>/</span> <b>Inventory Settings</b>
        </div>
        <header className="page-heading inventory-heading">
          <div>
            <h1>Inventory Settings</h1>
            <p>Configure stock levels, alerts, and identification preferences.</p>
          </div>
          <div className="header-actions">
            <button className="button outline">Discard Changes</button>
            <button className="button primary">Save Settings</button>
          </div>
        </header>
        <div className="inventory-layout">
          <nav className="settings-tabs">
            <a className="selected">Inventory Basics</a>
            <a>Stock Alerts</a>
            <a>Identification</a>
          </nav>
          <div className="inventory-panels">
            <section className="inventory-card">
              <h2>Stock Levels</h2>
              <div className="field compact">
                <label htmlFor="minimum-stock">
                  Default Minimum Stock Level <span>ⓘ</span>
                </label>
                <small>Applied to all new products unless overridden.</small>
                <input id="minimum-stock" type="number" defaultValue="10" />
              </div>
              <hr />
              <h2>Stock Alert Behavior</h2>
              <label className="radio-row">
                <input
                  type="radio"
                  checked={alertMode === 'Immediate Notification'}
                  onChange={() => setAlertMode('Immediate Notification')}
                />{' '}
                <span>
                  <b>Immediate Notification</b>
                  <small>Send alerts as soon as stock dips below minimum.</small>
                </span>
              </label>
              <label className="radio-row">
                <input
                  type="radio"
                  checked={alertMode === 'Daily Digest'}
                  onChange={() => setAlertMode('Daily Digest')}
                />{' '}
                <span>
                  <b>Daily Digest</b>
                  <small>Group all low stock alerts into a single daily email.</small>
                </span>
              </label>
            </section>
            <section className="inventory-card">
              <h2>Product Identification</h2>
              <div className="identifier-row">
                <b>Primary Identifier</b>
                <label>
                  <input
                    type="radio"
                    checked={identifier === 'SKU'}
                    onChange={() => setIdentifier('SKU')}
                  />{' '}
                  SKU
                </label>
                <label>
                  <input
                    type="radio"
                    checked={identifier === 'Barcode / UPC'}
                    onChange={() => setIdentifier('Barcode / UPC')}
                  />{' '}
                  Barcode / UPC
                </label>
              </div>
              <hr />
              <label className="checkbox-row">
                <input
                  type="checkbox"
                  checked={autoSku}
                  onChange={(event) => setAutoSku(event.target.checked)}
                />{' '}
                Auto-generate SKUs for new products
              </label>
              <div className="field prefix-field">
                <label htmlFor="prefix">Prefix format (Optional)</label>
                <input id="prefix" placeholder="e.g. PRD-" disabled={!autoSku} />
              </div>
            </section>
            <section className="inventory-card">
              <h2>Measurement Units</h2>
              <div className="form-grid">
                <div className="field">
                  <label>Default Weight Unit</label>
                  <select defaultValue="Kilograms (kg)">
                    <option>Kilograms (kg)</option>
                    <option>Pounds (lb)</option>
                  </select>
                </div>
                <div className="field">
                  <label>Default Dimension Unit</label>
                  <select defaultValue="Centimeters (cm)">
                    <option>Centimeters (cm)</option>
                    <option>Inches (in)</option>
                  </select>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
