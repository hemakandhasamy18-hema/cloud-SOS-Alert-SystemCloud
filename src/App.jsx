import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import DashboardPage from './pages/Dashboard'
import ContactsPage from './pages/Contacts'
import HistoryPage from './pages/History'
import ProfilePage from './pages/Profile'
import SettingsPage from './pages/Settings'
import AdminPage from './pages/Admin'
import Navbar from './components/Common/Navbar'
import Sidebar from './components/Common/Sidebar'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-red-500"></div>
          <p>Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  return user ? children : <Navigate to="/login" replace />
}

const AppLayout = () => (
  <div className="flex min-h-screen bg-slate-950 text-slate-100">
    <Sidebar />
    <div className="flex min-h-screen flex-1 flex-col">
      <Navbar />
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <AppLayout />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
