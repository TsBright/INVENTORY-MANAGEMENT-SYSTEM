'use client'
import Link from 'next/link'
import './styles.css'
export default function PurchaseDetailPage() {
  return (
    <main className="purchase-detail-page">
      <header>
        <Link href="/dashboard/purchases">←</Link>
        <div>
          <h1>
            Purchase #PO-2023-089 <em>RECEIVED</em>
          </h1>
          <p>Ordered on Oct 24, 2023 • Expected Delivery: Oct 28, 2023</p>
        </div>
        <aside>
          <button>⇩ Invoice</button>
          <button className="dark">▣ View Inventory Impact</button>
        </aside>
      </header>
      <div className="purchase-detail-layout">
        <section>
          <article className="purchase-panel supplier-details">
            <h2>▣ Supplier Details</h2>
            <div>
              <p>
                Supplier Name<strong>Acme Industrial Supplies Inc.</strong>
              </p>
              <p>
                Contact<strong>Jane Doe (jane.doe@acmesupplies.com)</strong>
              </p>
              <p>
                Shipping Address
                <strong>
                  Warehouse B, Dock 4<br />
                  123 Logistics Way
                  <br />
                  Industrial Park, NY 10001
                </strong>
              </p>
              <p>
                Terms<strong>Net 30</strong>
              </p>
            </div>
          </article>
          <article className="purchase-panel">
            <div className="purchase-section-head">
              <h2>Purchase Items</h2>
              <span>3 Unique Items</span>
            </div>
            <table>
              <thead>
                <tr>
                  <th>ITEM / DESCRIPTION</th>
                  <th>QTY</th>
                  <th>UNIT COST</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Titanium Bearings (ABEC-9)', 'TB-90021', '2,500', '$4.20', '$10,500.00'],
                  ['Heavy Duty Steel Wiring - 50m Roll', 'HDSW-50', '150', '$125.00', '$18,750.00'],
                  ['Industrial Lubricant L-45 (Gallon)', 'IL45-GAL', '40', '$45.50', '$1,820.00'],
                ].map((row) => (
                  <tr key={row[1]}>
                    <td>
                      <strong>{row[0]}</strong>
                      <small>SKU: {row[1]}</small>
                    </td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                    <td>{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        </section>
        <aside>
          <article className="purchase-panel order-summary">
            <h2>Order Summary</h2>
            <p>
              Subtotal <b>$31,070.00</b>
            </p>
            <p>
              Shipping (Freight) <b>$450.00</b>
            </p>
            <p>
              Tax (8.5%) <b>$2,679.20</b>
            </p>
            <hr />
            <h3>
              Total Value <strong>$34,199.20</strong>
            </h3>
            <small>PAYMENT STATUS</small>
            <p className="paid">◉ Paid in Full</p>
            <span>Ref: TRN-990234 • Oct 25, 2023</span>
          </article>
          <article className="purchase-panel notes">
            <h2>✎ Internal Notes</h2>
            <p>
              “Expedited shipping requested for the heavy duty wiring to avoid a production line
              stall on Project Titan.”
            </p>
          </article>
        </aside>
      </div>
    </main>
  )
}
