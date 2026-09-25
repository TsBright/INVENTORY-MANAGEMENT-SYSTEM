'use client'
import Link from 'next/link'
import './styles.css'
export default function ReceiptPage() {
  return (
    <main className="receipt-page">
      <header>
        <Link href="/dashboard/sales/id">← Back to Transactions</Link>
        <div>
          <button>⇩ Download PDF</button>
          <button onClick={() => window.print()}>▣ Print Receipt</button>
        </div>
      </header>
      <section className="receipt">
        <h1>EXECUTIVE PRECISION</h1>
        <p>
          1200 Enterprise Avenue, Suite 400
          <br />
          San Francisco, CA 94103
          <br />
          Tel: +1 (555) 019-8472 | contact@execprecision.com
        </p>
        <hr />
        <div className="receipt-meta">
          <strong>
            Transaction #: TXN-8942-A
            <br />
            Cashier: S. Peterson (ID: 1042)
          </strong>
          <strong>
            Date: Oct 24, 2023
            <br />
            Time: 14:32:45 PST
          </strong>
        </div>
        <table>
          <thead>
            <tr>
              <th>ITEM</th>
              <th>QTY</th>
              <th>PRICE</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Professional Consultation - 1hr', '1', '$150.00', '$150.00'],
              ['Premium Support Package (Monthly)', '1', '$299.00', '$299.00'],
              ['Data Migration Services - Tier 2', '1', '$850.00', '$850.00'],
              ['Administrative Processing Fee', '1', '$25.00', '$25.00'],
            ].map((row) => (
              <tr key={row[0]}>
                {row.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="receipt-total">
          <p>
            Subtotal <b>$1,324.00</b>
          </p>
          <p>
            Tax (8.5%) <b>$112.54</b>
          </p>
          <h2>
            Total <strong>$1,436.54</strong>
          </h2>
        </div>
        <div className="receipt-payment">
          <p>
            Payment Method <b>Corporate Visa ending in 4092</b>
          </p>
          <p>
            Amount Received <b>$1,436.54</b>
          </p>
          <p>
            Change <b>$0.00</b>
          </p>
        </div>
        <footer>
          THANK YOU FOR YOUR BUSINESS.
          <br />
          Returns accepted within 30 days with valid receipt.
        </footer>
      </section>
    </main>
  )
}
