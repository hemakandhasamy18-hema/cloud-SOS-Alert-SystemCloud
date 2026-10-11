import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const navigate = useNavigate()
  const { login, error } = useAuth()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const email = form.get('email')
    const password = form.get('password')

    try {
      await login(email, password)
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,#1e293b,#020817_50%)] px-4">
      <div className="glass-panel w-full max-w-md p-8">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-white">Cloud SOS</h1>
          <p className="mt-2 text-slate-300">Sign in to your emergency dashboard</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1 block text-sm text-slate-300">Email</label>
            <input name="email" type="email" required className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-white outline-none" />
          </div>

          <div>
            <label className="mb-1 block text-sm text-slate-300">Password</label>
            <input name="password" type="password" required className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-white outline-none" />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button type="submit" className="glow-button w-full bg-gradient-to-r from-red-500 to-red-600 px-4 py-3">
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-slate-300">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="text-red-300 underline">Create one</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
