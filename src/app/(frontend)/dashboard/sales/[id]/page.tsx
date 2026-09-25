'use client'
import Link from 'next/link'
import './styles.css'
export default function SaleDetailsPage() {
  return (
    <main className="sale-page">
      <header>
        <Link href="/dashboard/sales">← Back to Transactions</Link>
        <div>
          <button onClick={() => window.print()}>▣ Print</button>
          <Link href="/dashboard/sales/id/receipt">▤ View Receipt</Link>
          <Link className="danger-link" href="/dashboard/sales/id/cancel">
            Cancel Transaction
          </Link>
        </div>
      </header>
      <section className="sale-content">
        <h1>
          Transaction #INV-000428 <em>Completed</em>
        </h1>
        <div className="sale-info-grid">
          <article>
            <h2>Details</h2>
            <p>
              DATE &amp; TIME <b>Oct 24, 2023 - 14:32</b>
            </p>
            <p>
              CASHIER <b>Sarah Jenkins</b>
            </p>
            <p>
              REGISTER <b>REG-03 (Front Desk)</b>
            </p>
          </article>
          <article>
            <h2>♙ Customer Info</h2>
            <p>
              <strong>Michael Chen</strong>
              <br />
              michael.chen@example.com
            </p>
            <p>
              ID: CUST-89234
              <br />
              Tier: Premium Member
            </p>
          </article>
          <article>
            <h2>▣ Payment Method</h2>
            <p>
              <strong>VISA　　　　 **** **** **** 4291</strong>
            </p>
            <p>
              Auth Code: AUTH-9921-A
              <br />
              Type: Chip &amp; PIN
            </p>
          </article>
        </div>
        <section className="sale-items">
          <div className="sale-section-title">
            <h2>Purchased Items</h2>
            <span>3 Items</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>SKU / ITEM</th>
                <th>QTY</th>
                <th>UNIT PRICE</th>
                <th>TAX</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Ergonomic Office Chair', 'FUR-092-B', '2', '$349.00', '8%', '$753.84'],
                ['Mechanical Keyboard Pro', 'ACC-114-K', '1', '$129.99', '8%', '$140.39'],
                ['Wireless Mouse V2', 'ACC-089-M', '1', '$79.99', '8%', '$86.39'],
              ].map((row) => (
                <tr key={row[1]}>
                  <td>
                    <strong>{row[0]}</strong>
                    <small>SKU: {row[1]}</small>
                  </td>
                  <td>{row[2]}</td>
                  <td>{row[3]}</td>
                  <td>{row[4]}</td>
                  <td>{row[5]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="sale-summary">
            <p>
              Subtotal <b>$907.98</b>
            </p>
            <p>
              Tax (8%) <b>$72.64</b>
            </p>
            <p className="discount">
              Discount (Premium Tier) <b>-$45.40</b>
            </p>
            <hr />
            <h3>
              Total <strong>$935.22</strong>
            </h3>
          </div>
        </section>
      </section>
    </main>
  )
}
