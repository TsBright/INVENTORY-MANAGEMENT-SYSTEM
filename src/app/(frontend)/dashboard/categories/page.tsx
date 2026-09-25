'use client'
import { useState } from 'react'
import './styles.css'
export default function CategoriesPage() {
  const [search, setSearch] = useState('')
  const rows = [
    ['Electronics', '1,245', 'Active', 'Oct 12, 2023'],
    ['Apparel', '892', 'Active', 'Nov 05, 2023'],
    ['Home & Office', '450', 'Draft', 'Dec 18, 2023'],
    ['Legacy Products', '12', 'Inactive', 'Jan 10, 2022'],
  ]
  return (
    <main className="categories-page">
      <header>
        <div>
          <h1>Categories</h1>
          <p>Manage product classifications and hierarchy.</p>
        </div>
        <button>＋ Add Category</button>
      </header>
      <section className="category-card">
        <label>
          ⌕{' '}
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search categories..."
          />
        </label>
        <table>
          <thead>
            <tr>
              <th>CATEGORY NAME</th>
              <th>PRODUCTS</th>
              <th>STATUS</th>
              <th>CREATED DATE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {rows
              .filter((row) => row[0].toLowerCase().includes(search.toLowerCase()))
              .map((row) => (
                <tr key={row[0]}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>
                    <span className={`category-status ${row[2].toLowerCase()}`}>{row[2]}</span>
                  </td>
                  <td>{row[3]}</td>
                  <td>✎　♧</td>
                </tr>
              ))}
          </tbody>
        </table>
        <footer>
          Showing 1 to 4 of 4 entries <span>Prev　 Next</span>
        </footer>
      </section>
    </main>
  )
}
