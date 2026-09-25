'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import './styles.css'

const products = [
  {
    name: 'Enterprise Server Blade X9',
    sku: 'HW-SRV-009',
    price: 2450,
    stock: 14,
    category: 'Hardware',
    icon: '▰',
  },
  {
    name: 'Rackmount Switch 48-Port',
    sku: 'HW-NET-048',
    price: 890,
    stock: 42,
    category: 'Hardware',
    icon: '▤',
  },
  {
    name: 'Premium Support SLA (Annual)',
    sku: 'SVC-SLA-PREM',
    price: 1200,
    stock: 0,
    category: 'Services',
    icon: '♧',
  },
  {
    name: '64GB ECC Memory Kit',
    sku: 'HW-MEM-064',
    price: 350,
    stock: 2,
    category: 'Hardware',
    icon: '▦',
  },
  {
    name: 'Cloud License Suite',
    sku: 'SFT-CLS-100',
    price: 620,
    stock: 18,
    category: 'Software Licenses',
    icon: '◈',
  },
]
export default function PosPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All Items')
  const [cart, setCart] = useState<Record<string, number>>({
    [products[0].name]: 2,
    [products[2].name]: 1,
  })
  const filtered = useMemo(
    () =>
      products.filter(
        (product) =>
          (category === 'All Items' || product.category === category) &&
          product.name.toLowerCase().includes(search.toLowerCase()),
      ),
    [category, search],
  )
  const cartItems = products.filter((product) => cart[product.name])
  const subtotal = cartItems.reduce((sum, product) => sum + product.price * cart[product.name], 0)
  const tax = subtotal * 0.085
  return (
    <main className="pos-page">
      <header className="pos-header">
        <Link href="/dashboard/cashier-dashboard">←</Link>
        <strong>Executive Precision</strong>
        <span>POS Mode</span>
        <div>♧　?　◎</div>
      </header>
      <div className="pos-layout">
        <section className="catalog">
          <div className="pos-search">
            <span>⌕</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search product or scan barcode..."
            />
            <b>▥</b>
          </div>
          <div className="category-pills">
            {['All Items', 'Hardware', 'Software Licenses', 'Services', 'Accessories'].map(
              (item) => (
                <button
                  className={category === item ? 'selected' : ''}
                  onClick={() => setCategory(item)}
                  key={item}
                >
                  {item}
                </button>
              ),
            )}
          </div>
          <div className="product-grid">
            {filtered.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-image">
                  <span>{product.icon}</span>
                  <b className={product.stock < 3 ? 'low' : ''}>Stock: {product.stock || '∞'}</b>
                </div>
                <h2>{product.name}</h2>
                <small>{product.sku}</small>
                <strong>${product.price.toLocaleString()}</strong>
                <button
                  onClick={() =>
                    setCart((current) => ({
                      ...current,
                      [product.name]: (current[product.name] || 0) + 1,
                    }))
                  }
                >
                  ＋
                </button>
              </article>
            ))}
          </div>
        </section>
        <aside className="cart-panel">
          <div className="cart-heading">
            <h2>♙ Add Customer</h2>
            <span>Walk-in</span>
          </div>
          <div className="cart-labels">
            <span>ITEM</span>
            <span>QTY</span>
            <span>TOTAL</span>
          </div>
          <div className="cart-items">
            {cartItems.map((product) => (
              <div className="cart-item" key={product.name}>
                <div>
                  <strong>{product.name}</strong>
                  <small>${product.price.toLocaleString()} / ea</small>
                </div>
                <div className="quantity">
                  <button
                    onClick={() =>
                      setCart((current) => ({
                        ...current,
                        [product.name]: Math.max(0, current[product.name] - 1),
                      }))
                    }
                  >
                    −
                  </button>
                  <span>{cart[product.name]}</span>
                  <button
                    onClick={() =>
                      setCart((current) => ({
                        ...current,
                        [product.name]: current[product.name] + 1,
                      }))
                    }
                  >
                    ＋
                  </button>
                </div>
                <b>${(product.price * cart[product.name]).toLocaleString()}</b>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <p>
              Subtotal{' '}
              <span>${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
            </p>
            <p>
              Add Discount <span>$0.00</span>
            </p>
            <p>
              Tax (8.5%) <span>${tax.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
            </p>
            <hr />
            <h3>
              Total{' '}
              <strong>
                ${(subtotal + tax).toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </strong>
            </h3>
            <Link href="/dashboard/pos/payment">Proceed to Payment →</Link>
            <div>
              <button>Save Draft</button>
              <button>Void Sale</button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
