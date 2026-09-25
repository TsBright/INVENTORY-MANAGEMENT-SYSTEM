'use client'

import Link from 'next/link'
import { useState } from 'react'
import '../../styles.css'
import '../styles.css'

export default function AddUserPage() {
  const [created, setCreated] = useState(false)
  return (
    <main className="settings-shell">
      <aside className="settings-sidebar">
        <div className="brand">
          <strong>Executive Precision</strong>
          <span>BUSINESS SUITE</span>
        </div>
        <nav className="settings-nav">
          <Link className="nav-item" href="/dashboard/settings">
            <span className="nav-icon">O</span>Overview
          </Link>
          <Link className="nav-item active" href="/dashboard/settings/users">
            <span className="nav-icon">S</span>Settings
          </Link>
        </nav>
      </aside>
      <section className="settings-content form-content">
        <div className="breadcrumbs">
          Settings <span>/</span> Users <span>/</span> <b>Add User</b>
        </div>
        <header className="page-heading">
          <h1>Add New User</h1>
          <p>Provision a new user account and assign system privileges.</p>
        </header>
        <form
          className="form-card"
          onSubmit={(event) => {
            event.preventDefault()
            setCreated(true)
          }}
        >
          <div className="field full">
            <label htmlFor="full-name">Full Name</label>
            <input id="full-name" placeholder="e.g. Jane Doe" required />
          </div>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" placeholder="jane.doe@example.com" required />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" placeholder="+1 (555) 000-0000" />
            </div>
            <div className="field">
              <label htmlFor="role">System Role</label>
              <select id="role" defaultValue="">
                <option value="" disabled>
                  Select a role...
                </option>
                <option>Owner</option>
                <option>Manager</option>
                <option>Cashier</option>
                <option>Inventory Officer</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="account-status">Account Status</label>
              <select id="account-status" defaultValue="Active">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
          {created && <p className="form-message">User account ready to be provisioned.</p>}
          <div className="form-actions">
            <Link className="button outline" href="/dashboard/settings/users">
              Cancel
            </Link>
            <button className="button primary" type="submit">
              Create User
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}
