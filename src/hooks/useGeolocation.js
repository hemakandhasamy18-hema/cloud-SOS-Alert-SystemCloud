import { useCallback, useState } from 'react'

export const useGeolocation = () => {
  const [location, setLocation] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const requestLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser.')
      return
    }

    setLoading(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: new Date(position.timestamp),
        })
        setError(null)
        setLoading(false)
      },
      (err) => {
        const message = err.code === 1 ? 'Location access denied.' : 'Unable to fetch your location.'
        setError(message)
        setLoading(false)
      },
      { enableHighAccuracy: true, timeout: 10000 }
    )
  }, [])

  const watchLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser.')
      return () => {}
    }

    const id = navigator.geolocation.watchPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: new Date(position.timestamp),
        })
        setError(null)
      },
      (err) => {
        setError(err.code === 1 ? 'Location access denied.' : 'Unable to fetch your location.')
      },
      { enableHighAccuracy: true }
    )

    return () => navigator.geolocation.clearWatch(id)
  }, [])

  return { location, loading, error, requestLocation, watchLocation }
}
