import React, { useEffect, useState } from 'react'
import { AlertCircle } from 'lucide-react'
import { useGeolocation } from '../../hooks/useGeolocation'
import { useAlert } from '../../context/AlertContext'

const QuickSOS = ({ contacts = [] }) => {
  const [countdown, setCountdown] = useState(3)
  const [isCountingDown, setIsCountingDown] = useState(false)
  const [sending, setSending] = useState(false)

  const { location, requestLocation, error: geoError } = useGeolocation()
  const { sendAlert, loading } = useAlert()

  useEffect(() => {
    if (!isCountingDown) return undefined

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          if (location) {
            void handleTriggerAlert()
          }
          return 3
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isCountingDown, location])

  const handleTriggerAlert = async () => {
    if (!location) return

    setSending(true)
    try {
      await sendAlert(location, contacts.map((contact) => contact.id))
      setIsCountingDown(false)
    } catch (error) {
      console.error(error)
    } finally {
      setSending(false)
    }
  }

  const startCountdown = () => {
    requestLocation()
    setCountdown(3)
    setIsCountingDown(true)
  }

  const cancelAlert = () => {
    setIsCountingDown(false)
    setCountdown(3)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6 text-center">
      <button
        type="button"
        disabled={isCountingDown || sending || loading}
        className="sos-button flex h-52 w-52 items-center justify-center rounded-full text-4xl font-bold disabled:cursor-not-allowed disabled:opacity-60"
        onClick={startCountdown}
      >
        <span className="flex items-center gap-3">
          <AlertCircle size={40} />
          SOS
        </span>
      </button>

      {isCountingDown && (
        <div className="space-y-4">
          <p className="text-2xl font-bold text-red-400">{countdown}</p>
          <button
            type="button"
            onClick={cancelAlert}
            className="rounded-lg border border-slate-500 bg-slate-700 px-5 py-2 text-sm text-white hover:bg-slate-600"
          >
            Cancel Alert
          </button>
        </div>
      )}

      {geoError && <p className="text-sm text-red-400">{geoError}</p>}

      <p className="max-w-md text-sm text-slate-300">
        Press SOS to send an emergency alert. You have 3 seconds to cancel before the alert is shared with your contacts.
      </p>
    </div>
  )
}

export default QuickSOS
