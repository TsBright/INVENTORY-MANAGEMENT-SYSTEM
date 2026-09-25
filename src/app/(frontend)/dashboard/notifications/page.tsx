'use client'
import { useState } from 'react'
import './styles.css'
export default function NotificationsPage() {
  const [tab, setTab] = useState('All')
  const [read, setRead] = useState(false)
  const notices = [
    [
      'red',
      'Low Stock Alert',
      'Shampoo X reached minimum stock threshold (15 units remaining).',
      '10 mins ago',
    ],
    [
      'blue',
      'System Update Scheduled',
      'Routine maintenance scheduled for tonight at 2:00 AM EST. Expected downtime: 30 minutes.',
      '1 hour ago',
    ],
    [
      'gray',
      'Batch Process Completed',
      'Monthly inventory reconciliation completed successfully.',
      'Yesterday, 4:30 PM',
    ],
    [
      'gray',
      'New User Added',
      "Admin granted access to 'Sarah Jenkins' for Inventory module.",
      'Oct 24, 2023',
    ],
  ]
  return (
    <main className="notifications-page">
      <header>
        <div>
          <small>Home › Notifications</small>
          <h1>Notifications</h1>
          <p>Stay updated on system alerts and inventory status.</p>
        </div>
        <button onClick={() => setRead(true)}>Mark All as Read</button>
      </header>
      <nav>
        {['All', 'Unread (4)', 'Inventory', 'System'].map((item) => (
          <button className={tab === item ? 'active' : ''} onClick={() => setTab(item)} key={item}>
            {item}
          </button>
        ))}
      </nav>
      <section>
        {notices.map((notice, index) => (
          <article className={`notice ${notice[0]} ${read ? 'read' : ''}`} key={notice[1]}>
            <i>{notice[0] === 'red' ? '!' : notice[0] === 'blue' ? '△' : '✓'}</i>
            <div>
              <h2>
                {notice[1]} {!read && index < 2 && <b />}
              </h2>
              <p>{notice[2]}</p>
              {index < 2 && <a>{index === 0 ? 'View Product →' : 'View Details'}</a>}
            </div>
            <time>{notice[3]}</time>
          </article>
        ))}
      </section>
      <button className="load-more">Load More</button>
    </main>
  )
}
