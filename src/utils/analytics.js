import { useEffect } from 'react'
import { useLocation } from './useLocation'

// Initialize Google Analytics
export const initGA = (measurementId) => {
  if (typeof window !== 'undefined' && measurementId) {
    // Load gtag script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script1)

    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', measurementId, {
      page_path: window.location.pathname,
    })

    window.gtag = gtag
  }
}

// Track page views
export const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track product clicks
export const trackProductClick = (productName, url) => {
  trackEvent('click', 'Product', productName, url)
}

// Track CTA clicks
export const trackCTAClick = (ctaName, destination) => {
  trackEvent('click', 'CTA', ctaName, destination)
}

// Hook to track page views automatically
export const usePageTracking = () => {
  const location = useLocation()

  useEffect(() => {
    trackPageView(location)
  }, [location])
}

export default {
  initGA,
  trackPageView,
  trackEvent,
  trackProductClick,
  trackCTAClick,
  usePageTracking,
}
