import React from 'react'

const Settings = () => (
  <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
    <h1 className="text-2xl font-bold text-white">Settings</h1>
    <p className="mt-2 text-slate-300">Configure alert preferences and experience settings.</p>

    <div className="mt-6 space-y-4">
      {[
        'Enable notifications',
        'Enable sound alerts',
        'Share location with contacts',
        'Dark mode',
      ].map((setting) => (
        <div key={setting} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
          <span className="text-white">{setting}</span>
          <button className="h-6 w-11 rounded-full bg-red-500/80 p-1">
            <span className="block h-4 w-4 rounded-full bg-white"></span>
          </button>
        </div>
      ))}
    </div>
  </div>
)

export default Settings
