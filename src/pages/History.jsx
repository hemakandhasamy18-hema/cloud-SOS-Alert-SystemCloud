import React from 'react'

const History = () => (
  <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
    <h1 className="text-2xl font-bold text-white">Alert History</h1>
    <p className="mt-2 text-slate-300">Review and export historical emergency events.</p>

    <div className="mt-6 space-y-4">
      {[
        { title: 'SOS triggered from home', date: '9 Oct 2026 · 08:15 AM', status: 'Sent' },
        { title: 'Location check-in', date: '8 Oct 2026 · 08:00 PM', status: 'Received' },
        { title: 'Medical support alert', date: '5 Oct 2026 · 06:45 PM', status: 'Escalated' },
      ].map((item) => (
        <div key={item.title} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
          <div>
            <p className="font-medium text-white">{item.title}</p>
            <p className="text-sm text-slate-400">{item.date}</p>
          </div>
          <span className="rounded-full bg-blue-500/10 px-2 py-1 text-[10px] uppercase text-blue-300">{item.status}</span>
        </div>
      ))}
    </div>
  </div>
)

export default History
