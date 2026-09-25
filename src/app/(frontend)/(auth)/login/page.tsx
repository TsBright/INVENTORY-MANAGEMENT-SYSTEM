'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'
import './styles.css'

export default function LoginPage() {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage(
      identifier && password
        ? 'Demo sign in ready to connect.'
        : 'Enter your credentials to continue.',
    )
  }

  return (
    <div className="login-page">
      <section className="login-brand-panel" aria-label="Executive Precision">
        <div className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span>Executive Precision</span>
        </div>
        <p className="brand-kicker">Enterprise Suite</p>
        <div className="brand-message">
          <h1>
            Organized control.
            <br />
            Professional reliability.
          </h1>
          <p>
            High-density business management environments where clarity, data integrity, and
            efficiency are paramount. Our systemic approach ensures you maintain full command over
            your enterprise data streams.
          </p>
        </div>
      </section>

      <section className="login-form-panel">
        <div className="login-form-wrap">
          <div className="form-heading">
            <h2>Welcome back</h2>
            <p>Sign in to manage your business</p>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="identifier">Email or Username</label>
            <div className="input-with-icon">
              <span aria-hidden="true">♙</span>
              <input
                id="identifier"
                value={identifier}
                onChange={(event) => setIdentifier(event.target.value)}
                placeholder="name@company.com"
                autoComplete="username"
              />
            </div>
            <label htmlFor="password">Password</label>
            <div className="input-with-icon">
              <span aria-hidden="true">▣</span>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
              />
            </div>
            <div className="form-link-row">
              <Link href="/forgot-password">Forgot password?</Link>
            </div>
            <button className="primary-button" type="submit">
              Sign In <span aria-hidden="true">→</span>
            </button>
            {message && (
              <p className="form-message" role="status">
                {message}
              </p>
            )}
          </form>
          <p className="contact-copy">
            Don&apos;t have an account?{' '}
            <a href="mailto:admin@example.com">
              Contact
              <br className="contact-break" /> Administrator
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
