import React, { createContext, useContext, useState } from 'react'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  where,
} from 'firebase/firestore'
import { db } from '../firebase/config'
import { useAuth } from './AuthContext'

const AlertContext = createContext(null)

export const AlertProvider = ({ children }) => {
  const { user } = useAuth()
  const [alerts, setAlerts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const sendAlert = async (location, contactIds = []) => {
    if (!user) throw new Error('User not authenticated')

    try {
      setLoading(true)
      setError(null)

      const payload = {
        userId: user.uid,
        userEmail: user.email,
        displayName: user.displayName || 'User',
        location: {
          latitude: location.latitude,
          longitude: location.longitude,
          timestamp: new Date().toISOString(),
        },
        contactIds,
        status: 'active',
        mapLink: `https://www.google.com/maps?q=${location.latitude},${location.longitude}`,
        createdAt: new Date().toISOString(),
      }

      const ref = await addDoc(collection(db, 'alerts'), payload)
      return ref.id
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const getUserAlerts = async () => {
    if (!user) return []

    try {
      setLoading(true)
      setError(null)
      const q = query(collection(db, 'alerts'), where('userId', '==', user.uid), orderBy('createdAt', 'desc'))
      const snapshot = await getDocs(q)
      const list = snapshot.docs.map((docSnapshot) => ({ id: docSnapshot.id, ...docSnapshot.data() }))
      setAlerts(list)
      return list
    } catch (err) {
      setError(err.message)
      return []
    } finally {
      setLoading(false)
    }
  }

  const deleteAlert = async (alertId) => {
    try {
      setError(null)
      await deleteDoc(doc(db, 'alerts', alertId))
      setAlerts((current) => current.filter((item) => item.id !== alertId))
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  const value = { alerts, loading, error, sendAlert, getUserAlerts, deleteAlert }

  return <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
}

export const useAlert = () => {
  const context = useContext(AlertContext)
  if (!context) {
    throw new Error('useAlert must be used within AlertProvider')
  }
  return context
}
