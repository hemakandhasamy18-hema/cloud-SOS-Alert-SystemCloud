import React from 'react'

const Admin = () => (
  <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
    <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
    <p className="mt-2 text-slate-300">Monitor system health, user activity, and alert volume.</p>

    <div className="mt-6 grid gap-4 md:grid-cols-3">
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Users</p>
        <p className="mt-2 text-3xl font-bold text-white">120</p>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Alerts</p>
        <p className="mt-2 text-3xl font-bold text-white">840</p>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Incidents</p>
        <p className="mt-2 text-3xl font-bold text-white">23</p>
      </div>
    </div>
  </div>
)

export default Admin
