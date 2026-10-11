import React from 'react'
import GlassCard from '../Common/GlassCard'
import QuickSOS from '../Dashboard/QuickSOS'

const Dashboard = () => (
  <div className="space-y-6">
    <div className="grid gap-4 md:grid-cols-3">
      <GlassCard className="bg-gradient-to-br from-red-500/15 to-red-900/30">
        <p className="text-sm uppercase tracking-[0.2em] text-red-300">Live Status</p>
        <h2 className="mt-2 text-3xl font-bold text-white">Safe</h2>
      </GlassCard>

      <GlassCard className="bg-gradient-to-br from-cyan-500/15 to-sky-900/30">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Alerts Sent</p>
        <h2 className="mt-2 text-3xl font-bold text-white">12</h2>
      </GlassCard>

      <GlassCard className="bg-gradient-to-br from-amber-500/15 to-yellow-900/30">
        <p className="text-sm uppercase tracking-[0.2em] text-amber-300">Emergency Contacts</p>
        <h2 className="mt-2 text-3xl font-bold text-white">4</h2>
      </GlassCard>
    </div>

    <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
      <GlassCard className="min-h-[420px]">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">Quick SOS</h3>
          <span className="rounded-full border border-red-500/40 bg-red-500/10 px-2 py-1 text-xs uppercase tracking-[0.2em] text-red-300">
            Active
          </span>
        </div>
        <QuickSOS />
      </GlassCard>

      <GlassCard>
        <h3 className="mb-4 text-xl font-semibold text-white">Recent Alerts</h3>
        <div className="space-y-3">
          {[
            { time: '2m ago', title: 'Family home location alert', status: 'Delivered' },
            { time: 'Today, 8:20 AM', title: 'Travel safety check-in', status: 'Acknowledged' },
            { time: 'Yesterday', title: 'Medical support escalation', status: 'Queued' },
          ].map((alert) => (
            <div key={alert.time} className="rounded-xl border border-white/10 bg-slate-900/50 p-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-white">{alert.title}</p>
                <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] uppercase text-emerald-300">
                  {alert.status}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-400">{alert.time}</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  </div>
)

export default Dashboard
