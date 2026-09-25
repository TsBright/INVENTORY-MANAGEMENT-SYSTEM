'use client'
import { useState } from 'react'
import Link from 'next/link'
import './styles.css'
export default function AddCustomerPage() {
  const [saved, setSaved] = useState(false)
  return (
    <main className="customer-form-page">
      <header>
        <Link href="/dashboard/customers">← Back to Customers</Link>
        <h1>Add New Customer</h1>
        <div>
          <Link href="/dashboard/customers">Cancel</Link>
          <button onClick={() => setSaved(true)}>▣ Save Customer</button>
        </div>
      </header>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setSaved(true)
        }}
      >
        <fieldset>
          <h2>♙　Primary Information</h2>
          <label>
            Full Name *<input required placeholder="e.g. Jane Doe" />
          </label>
          <div className="field-grid">
            <label>
              Email Address
              <input type="email" placeholder="jane.doe@company.com" />
            </label>
            <label>
              Phone Number
              <input placeholder="+1 (555) 000-0000" />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <h2>⌖　Location Details</h2>
          <label>
            Street Address
            <input placeholder="123 Corporate Blvd, Suite 400" />
          </label>
        </fieldset>
        <fieldset>
          <h2>☷　Additional Context</h2>
          <label>
            Internal Notes
            <textarea placeholder="Enter any specific requirements, account history, or context..." />
          </label>
        </fieldset>
        <footer>
          <button type="button">Discard</button>
          <button className="primary" type="submit">
            Save Customer
          </button>
        </footer>
      </form>
      {saved && (
        <div className="customer-toast" role="status">
          Customer saved locally.
        </div>
      )}
    </main>
  )
}
