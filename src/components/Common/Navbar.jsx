import React from 'react'
import { Bell, LogOut, Moon, UserCircle } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'

const Navbar = () => {
  const { user, logout } = useAuth()
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <header className="flex items-center justify-between border-b border-white/10 bg-slate-900/60 px-4 py-3 backdrop-blur-xl md:px-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-red-400">Cloud SOS</p>
        <h1 className="text-lg font-semibold text-white md:text-xl">Emergency Response Console</h1>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggleTheme}
          className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10"
          aria-label="Toggle theme"
        >
          <Moon size={18} className={isDarkMode ? 'text-yellow-300' : 'text-slate-300'} />
        </button>

        <button className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 hover:bg-white/10" aria-label="Notifications">
          <Bell size={18} />
        </button>

        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2">
          <UserCircle size={18} className="text-red-400" />
          <div className="hidden text-left md:block">
            <p className="text-sm font-medium text-white">{user?.displayName || 'User'}</p>
            <p className="text-[10px] uppercase tracking-wide text-slate-400">Online</p>
          </div>
        </div>

        <button
          type="button"
          onClick={logout}
          className="flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200 hover:bg-red-500/20"
        >
          <LogOut size={16} />
          <span className="hidden md:inline">Logout</span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
