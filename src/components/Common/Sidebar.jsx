import React from 'react'
import { NavLink } from 'react-router-dom'
import { Activity, History, Settings, ShieldAlert, ShieldCheck, UserCircle, UserCog } from 'lucide-react'

const links = [
  { to: '/', label: 'Dashboard', icon: Activity },
  { to: '/contacts', label: 'Contacts', icon: ShieldCheck },
  { to: '/history', label: 'History', icon: History },
  { to: '/profile', label: 'Profile', icon: UserCircle },
  { to: '/settings', label: 'Settings', icon: Settings },
  { to: '/admin', label: 'Admin', icon: UserCog },
]

const Sidebar = () => (
  <aside className="w-72 border-r border-white/10 bg-slate-900/80 p-4 backdrop-blur-xl">
    <div className="mb-8 flex items-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 p-3">
      <div className="rounded-xl bg-red-500/20 p-2 text-red-300">
        <ShieldAlert size={20} />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-red-300">System</p>
        <h2 className="text-lg font-bold text-white">Cloud SOS</h2>
      </div>
    </div>

    <nav className="space-y-2">
      {links.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
              isActive ? 'bg-red-500/20 text-red-200 ring-1 ring-red-500/30' : 'text-slate-300 hover:bg-white/5 hover:text-white'
            }`
          }
        >
          <Icon size={18} />
          {label}
        </NavLink>
      ))}
    </nav>

    <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">Safety Status</p>
      <div className="mt-2 flex items-center gap-2 text-emerald-200">
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
        <span className="font-medium">Monitoring</span>
      </div>
    </div>
  </aside>
)

export default Sidebar
