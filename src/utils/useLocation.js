import { useEffect, useState } from 'react'

export const useLocation = () => {
  const [location, setLocation] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  )

  useEffect(() => {
    const handleLocationChange = () => {
      setLocation(window.location.pathname)
    }

    // Listen for popstate (back/forward navigation)
    window.addEventListener('popstate', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [])

  return location
}
