'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import './styles.css'

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const checks = useMemo(
    () => ({
      length: password.length >= 8,
      upper: /[A-Z]/.test(password),
      number: /\d/.test(password),
      special: /[^A-Za-z0-9]/.test(password),
    }),
    [password],
  )
  const valid = Object.values(checks).every(Boolean) && password === confirm

  return (
    <main className="reset-page">
      <section className="reset-card">
        <div className="reset-icon" aria-hidden="true">
          ↻
        </div>
        <h1>Reset Password</h1>
        <p>Create a new, strong password for your account.</p>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            setSubmitted(true)
          }}
        >
          <label htmlFor="new-password">New Password</label>
          <div className="reset-input">
            <input
              id="new-password"
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter new password"
            />
            <span aria-hidden="true">⌧</span>
          </div>
          <div className="requirements">
            <strong>Password Requirements:</strong>
            {[
              ['length', 'At least 8 characters'],
              ['upper', 'At least one uppercase letter'],
              ['number', 'At least one number'],
              ['special', 'At least one special character'],
            ].map(([key, text]) => (
              <div
                className={
                  checks[key as keyof typeof checks] ? 'requirement passed' : 'requirement'
                }
                key={key}
              >
                <span>{checks[key as keyof typeof checks] ? '●' : '○'}</span>
                {text}
              </div>
            ))}
          </div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <div className="reset-input">
            <input
              id="confirm-password"
              type="password"
              required
              value={confirm}
              onChange={(event) => setConfirm(event.target.value)}
              placeholder="Confirm your new password"
            />
            <span aria-hidden="true">⌧</span>
          </div>
          {confirm && password !== confirm && (
            <small className="password-error">Passwords do not match.</small>
          )}
          <button disabled={!valid} type="submit">
            Reset Password
          </button>
          {submitted && valid && (
            <div className="reset-notice" role="status">
              Password updated successfully.
            </div>
          )}
        </form>
        <Link className="reset-back" href="/login">
          ← Back to Login
        </Link>
        <footer>EXECUTIVE PRECISION</footer>
      </section>
    </main>
  )
}
