'use client'
import { useState } from 'react'
import './styles.css'
export default function InventorySettingsPage() {
  const [settings, setSettings] = useState({ alerts: true, negative: false, deduction: true })
  const toggle = (key: keyof typeof settings) => setSettings({ ...settings, [key]: !settings[key] })
  return (
    <main className="settings-page">
      <header>
        <h1>Inventory Settings</h1>
        <p>Configure global stock rules and automation.</p>
      </header>
      <section className="settings-card">
        <h2>Low Stock Alerts</h2>
        <p>Choose when the platform should flag inventory requiring attention.</p>
        <label>
          Default low-stock threshold
          <input type="number" defaultValue="10" />
          <small>Items are flagged when available quantity is at or below this number.</small>
        </label>
        <label>
          Out-of-stock threshold
          <input type="number" defaultValue="0" />
          <small>Set the quantity that marks an item as out of stock.</small>
        </label>
        <div className="setting-row">
          <span>
            <strong>Enable low-stock alerts</strong>
            <small>Show alerts on dashboards and inventory lists.</small>
          </span>
          <button className={settings.alerts ? 'on' : ''} onClick={() => toggle('alerts')}>
            <i />
          </button>
        </div>
      </section>
      <section className="settings-card">
        <h2>Stock Behavior</h2>
        <div className="setting-row">
          <span>
            <strong>Allow negative stock</strong>
            <small>Permit sales to reduce inventory below zero.</small>
          </span>
          <button className={settings.negative ? 'on' : ''} onClick={() => toggle('negative')}>
            <i />
          </button>
        </div>
        <div className="setting-row">
          <span>
            <strong>Automatically deduct stock</strong>
            <small>Reduce available quantity when a sale is completed.</small>
          </span>
          <button className={settings.deduction ? 'on' : ''} onClick={() => toggle('deduction')}>
            <i />
          </button>
        </div>
      </section>
      <button className="save-settings">Save Settings</button>
    </main>
  )
}
