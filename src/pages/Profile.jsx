import React from 'react'

const Profile = () => (
  <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
    <h1 className="text-2xl font-bold text-white">Profile</h1>
    <p className="mt-2 text-slate-300">Update your personal account details and emergency profile.</p>

    <div className="mt-6 grid gap-6 md:grid-cols-2">
      <div className="rounded-xl border border-white/10 bg-white/5 p-5">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Profile Details</p>
        <div className="mt-4 space-y-3">
          <div>
            <label className="text-sm text-slate-400">Display Name</label>
            <input className="mt-1 w-full rounded-lg border border-white/10 bg-slate-800 px-3 py-2 text-white outline-none" defaultValue="Emergency User" />
          </div>
          <div>
            <label className="text-sm text-slate-400">Email</label>
            <input className="mt-1 w-full rounded-lg border border-white/10 bg-slate-800 px-3 py-2 text-white outline-none" defaultValue="user@example.com" />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-5">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Security</p>
        <button className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600">
          Reset Password
        </button>
      </div>
    </div>
  </div>
)

export default Profile
