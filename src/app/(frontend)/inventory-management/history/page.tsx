'use client'

import { useMemo, useState } from 'react'
import './styles.css'

const movements = [
  [
    'Oct 24, 2023 14:32:01',
    'Industrial Servo Motor X1',
    'SVO-X1-992',
    'Stock In',
    '+50',
    '125',
    'J. Doe',
    'PO-2023-8812',
  ],
  [
    'Oct 24, 2023 11:15:44',
    'Titanium Bracket Assm.',
    'TB-ASM-44',
    'Sale',
    '-12',
    '48',
    'A. Smith',
    'INV-99231',
  ],
  [
    'Oct 23, 2023 16:45:10',
    'Coolant Fluid 50L Drum',
    'CF-50L-DRM',
    'Adjustment',
    '-2',
    '14',
    'M. Ross',
    'Cycle Count Discrepancy',
  ],
]

export default function MovementHistoryPage() {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('All Types')
  const [limit, setLimit] = useState('25')
  const filtered = useMemo(
    () =>
      movements.filter(
        (movement) =>
          (type === 'All Types' || movement[3] === type) &&
          movement.some((value) => value.toLowerCase().includes(search.toLowerCase())),
      ),
    [search, type],
  )

  return (
    <main className="movement-page">
      <header className="movement-header">
        <div>
          <div className="movement-breadcrumb">
            Inventory　›　<strong>Movement History</strong>
          </div>
          <h1>Inventory Movement History</h1>
          <p>Traceable log of all stock adjustments, inflows, and outflows.</p>
        </div>
        <div className="movement-actions">
          <button onClick={() => setType(type === 'All Types' ? 'Adjustment' : 'All Types')}>
            ☷　Filter
          </button>
          <button className="dark-button">⇩　Export CSV</button>
        </div>
      </header>
      <section className="movement-card">
        <div className="movement-toolbar">
          <label>
            ⌕{' '}
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search movements..."
            />
          </label>
          <span>
            Showing{' '}
            <select value={limit} onChange={(event) => setLimit(event.target.value)}>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>{' '}
            entries
          </span>
        </div>
        <div className="movement-table-wrap">
          <table>
            <thead>
              <tr>
                <th>DATE / TIME</th>
                <th>PRODUCT (SKU)</th>
                <th>MOVEMENT TYPE</th>
                <th>QTY</th>
                <th>BALANCE</th>
                <th>USER</th>
                <th>REASON / REF</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((movement) => (
                <tr key={movement[0]}>
                  <td>{movement[0]}</td>
                  <td>
                    <strong>{movement[1]}</strong>
                    <small>SKU: {movement[2]}</small>
                  </td>
                  <td>
                    <span
                      className={`movement-badge ${movement[3].toLowerCase().replace(' ', '-')}`}
                    >
                      {movement[3]}
                    </span>
                  </td>
                  <td
                    className={
                      movement[4].startsWith('+')
                        ? 'positive'
                        : movement[4] === '-2'
                          ? 'warning'
                          : 'negative'
                    }
                  >
                    {movement[4]}
                  </td>
                  <td>{movement[5]}</td>
                  <td>{movement[6]}</td>
                  <td>{movement[7]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <footer>
          Showing 1 to {filtered.length} of 97 results{' '}
          <div>
            <button>‹</button>
            <button className="selected">1</button>
            <button>2</button>
            <button>3</button>
            <button>…</button>
            <button>›</button>
          </div>
        </footer>
      </section>
    </main>
  )
}
