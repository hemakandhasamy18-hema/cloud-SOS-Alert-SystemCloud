import React from 'react'

const Contacts = () => (
  <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
    <h1 className="text-2xl font-bold text-white">Emergency Contacts</h1>
    <p className="mt-2 text-slate-300">Manage your trusted contacts for SOS alert delivery.</p>

    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {['Mom', 'Dad', 'Sibling', 'Friend'].map((name, index) => (
        <div key={name} className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">{name}</h2>
            <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] uppercase text-emerald-300">
              Active
            </span>
          </div>
          <p className="mt-3 text-sm text-slate-400">+1 555 0{index + 1}2 9{index + 1}8</p>
          <p className="mt-1 text-sm text-slate-400">{name.toLowerCase()}@example.com</p>
        </div>
      ))}
    </div>
  </div>
)

export default Contacts
