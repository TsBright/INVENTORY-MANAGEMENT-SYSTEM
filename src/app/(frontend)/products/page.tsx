'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import './styles.css'

const products = [
  ['Ergonomic Office Chair - Obsidian', 'SKU-1029', 'Furniture', '$299.00', '45', 'Active', '▥'],
  ['ProType Mechanical Keyboard', 'SKU-3382', 'Electronics', '$129.50', '12', 'Low Stock', '⌨'],
  ['Dual Motor Desk Frame', 'SKU-8821', 'Furniture', '$450.00', '0', 'Out of Stock', '▱'],
  ['Ergo Wireless Mouse V2', 'SKU-9912', 'Electronics', '$45.00', '150', 'Active', '◒'],
]

export default function ProductsPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All Categories')
  const [status, setStatus] = useState('Status: All')
  const [sort, setSort] = useState(false)
  const filtered = useMemo(
    () =>
      products.filter(
        (product) =>
          product[0].toLowerCase().includes(search.toLowerCase()) &&
          (category === 'All Categories' || product[2] === category) &&
          (status === 'Status: All' || product[5] === status),
      ),
    [category, search, status],
  )

  return (
    <main className="catalog-page">
      <header className="catalog-header">
        <div>
          <h1>Products</h1>
          <p>Manage the products your business sells.</p>
        </div>
        <Link href="/products/add-product" className="catalog-primary">
          ＋ Add Product
        </Link>
      </header>
      <section className="catalog-card">
        <div className="catalog-filters">
          <label className="catalog-search">
            ⌕
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products, SKUs..."
            />
          </label>
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option>All Categories</option>
            <option>Furniture</option>
            <option>Electronics</option>
          </select>
          <select value={status} onChange={(event) => setStatus(event.target.value)}>
            <option>Status: All</option>
            <option>Active</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
          <button className="sort-button" onClick={() => setSort(!sort)}>
            ☷　Sort{sort ? ' ↑' : ''}
          </button>
        </div>
        <div className="catalog-table-wrap">
          <table className="catalog-table">
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>SKU</th>
                <th>CATEGORY</th>
                <th>SELLING PRICE</th>
                <th>STOCK</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((product) => (
                <tr key={product[1]}>
                  <td>
                    <span className="catalog-thumb">{product[6]}</span>
                    <strong>{product[0]}</strong>
                  </td>
                  <td>{product[1]}</td>
                  <td>{product[2]}</td>
                  <td className="price">{product[3]}</td>
                  <td className={product[4] === '0' ? 'zero' : ''}>{product[4]}</td>
                  <td>
                    <span
                      className={`catalog-status ${product[5].toLowerCase().replace(' ', '-')}`}
                    >
                      {product[5]}
                    </span>
                  </td>
                  <td>
                    <Link href={`/products/${product[1].toLowerCase()}`}>⋯</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <footer className="catalog-footer">
          <span>Showing 1 to {filtered.length} of 24 entries</span>
          <div>
            <button disabled>‹</button>
            <button className="current">1</button>
            <button>2</button>
            <button>3</button>
            <button>›</button>
          </div>
        </footer>
      </section>
    </main>
  )
}
