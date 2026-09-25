'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'
import './styles.css'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <main className="forgot-page">
      <section className="forgot-card">
        <div className="security-icon" aria-hidden="true">
          ↻
        </div>
        <h1>Reset Password</h1>
        <p>Enter your email address to receive reset instructions.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="reset-email">Email address</label>
          <div className="forgot-input">
            <span aria-hidden="true">✉</span>
            <input
              id="reset-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <button type="submit">{sent ? 'Reset link sent' : 'Send reset link'}</button>
        </form>
        {sent && (
          <div className="forgot-notice" role="status">
            Check your inbox for reset instructions.
          </div>
        )}
        <Link className="back-link" href="/login">
          ← Return to Login
        </Link>
      </section>
    </main>
  )
}
