'use client'

import { FormEvent, useState } from 'react'
import './styles.css'

export default function FirstTimeSetupPage() {
  const [step, setStep] = useState(1)
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState({
    businessName: '',
    type: '',
    currency: 'USD ($)',
    email: '',
    phone: '',
    website: '',
  })
  const update = (key: keyof typeof form, value: string) =>
    setForm((current) => ({ ...current, [key]: value }))
  function continueSetup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStep(Math.min(3, step + 1))
    setSaved(false)
  }
  return (
    <main className="setup-page">
      <header className="setup-header">
        <div className="setup-brand">
          <span className="setup-brand-mark">▦</span> Executive Precision
        </div>
        <span>?</span>
      </header>
      <section className="setup-shell">
        <div className="setup-step-label">STEP {step} OF 3</div>
        <div className="setup-progress">
          <span style={{ width: `${step * 33.333}%` }} />
        </div>
        <nav className="setup-steps">
          <span className={step >= 1 ? 'active' : ''}>1. Business Details</span>
          <span className={step >= 2 ? 'active' : ''}>
            2. First Product <small>(Optional)</small>
          </span>
          <span className={step >= 3 ? 'active' : ''}>
            3. Invite Team <small>(Optional)</small>
          </span>
        </nav>
        <form className="setup-card" onSubmit={continueSetup}>
          <h1>
            {step === 1
              ? 'Tell us about your business'
              : step === 2
                ? 'Set up your first product'
                : 'Invite your team'}
          </h1>
          <p>
            This information will be used to configure your Executive Precision environment and
            generate initial reports.
          </p>
          {step === 1 ? (
            <>
              <label>
                Business Name
                <input
                  required
                  value={form.businessName}
                  onChange={(event) => update('businessName', event.target.value)}
                  placeholder="e.g. Acme Corporation"
                />
              </label>
              <div className="setup-grid">
                <label>
                  Business Type
                  <select
                    required
                    value={form.type}
                    onChange={(event) => update('type', event.target.value)}
                  >
                    <option value="">Select an industry...</option>
                    <option>Retail</option>
                    <option>Wholesale</option>
                    <option>Services</option>
                  </select>
                </label>
                <label>
                  Base Currency
                  <select
                    value={form.currency}
                    onChange={(event) => update('currency', event.target.value)}
                  >
                    <option>USD ($)</option>
                    <option>NGN (₦)</option>
                    <option>GHS (₵)</option>
                    <option>FCFA</option>
                  </select>
                </label>
              </div>
              <div className="setup-divider" />
              <h2>Primary Contact Information</h2>
              <label>
                Business Email
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => update('email', event.target.value)}
                  placeholder="billing@acmecorp.com"
                />
              </label>
              <div className="setup-grid">
                <label>
                  Phone Number
                  <input
                    value={form.phone}
                    onChange={(event) => update('phone', event.target.value)}
                    placeholder="+1 (555) 000-0000"
                  />
                </label>
                <label>
                  Website URL
                  <input
                    value={form.website}
                    onChange={(event) => update('website', event.target.value)}
                    placeholder="https://acmecorp.com"
                  />
                </label>
              </div>
            </>
          ) : (
            <div className="setup-next-step">
              <span>{step === 2 ? '＋' : '✉'}</span>
              <strong>
                {step === 2
                  ? 'Product setup is ready when you are.'
                  : 'Invite collaborators after setup.'}
              </strong>
              <p>You can configure this optional step later from the dashboard.</p>
            </div>
          )}
          <div className="setup-actions">
            <button type="button" onClick={() => setSaved(true)}>
              Save for Later
            </button>
            <button className="setup-primary" type="submit">
              {step === 1
                ? 'Continue to Product Setup →'
                : step === 2
                  ? 'Continue to Team Setup →'
                  : 'Finish Setup →'}
            </button>
          </div>
          {saved && (
            <div className="setup-notice" role="status">
              Progress saved locally for this demo.
            </div>
          )}
        </form>
        <footer>
          Secure 256-bit encryption. Your data is protected under our{' '}
          <a href="#privacy">Privacy Policy</a>.
        </footer>
      </section>
    </main>
  )
}
