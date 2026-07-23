import React, { useEffect, useState } from 'react'

/**
 * Button component with smooth transitions and accent styling
 */
export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-smooth rounded-lg'
  
  const variants = {
    primary: 'bg-nimph-accent text-white hover:bg-nimph-accent-light hover:shadow-lg hover:shadow-nimph-accent/30',
    secondary: 'bg-nimph-surface text-nimph-text border border-nimph-accent/20 hover:border-nimph-accent hover:shadow-lg hover:shadow-nimph-accent/20',
    ghost: 'text-nimph-text hover:bg-nimph-surface/50',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

/**
 * Card component with hover effects
 */
export const Card = ({ children, className = '', hoverable = true }) => {
  const hoverStyles = hoverable 
    ? 'hover:bg-nimph-surface/80 hover:shadow-2xl hover:shadow-nimph-accent/10 hover:-translate-y-1' 
    : ''

  return (
    <div className={`bg-nimph-surface rounded-xl p-6 transition-smooth ${hoverStyles} ${className}`}>
      {children}
    </div>
  )
}

/**
 * Badge component for status indicators
 */
export const Badge = ({ 
  children, 
  variant = 'default',
  dot = false,
  className = '' 
}) => {
  const variants = {
    default: 'bg-nimph-accent/10 text-nimph-accent border-nimph-accent/20',
    success: 'bg-green-500/10 text-green-400 border-green-500/20',
    warning: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    info: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    gray: 'bg-nimph-gray/10 text-nimph-gray border-nimph-gray/20',
  }

  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 text-sm rounded-full border ${variants[variant]} ${className}`}>
      {dot && <span className="w-2 h-2 rounded-full bg-current animate-pulse" />}
      {children}
    </span>
  )
}

/**
 * Section container with consistent spacing
 */
export const Section = ({ 
  children, 
  className = '',
  size = 'default' 
}) => {
  const sizes = {
    sm: 'py-12 sm:py-16',
    default: 'py-20 sm:py-32',
    lg: 'py-32 sm:py-40',
  }

  return (
    <section className={`px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}

/**
 * Animated gradient text
 */
export const GradientText = ({ children, className = '' }) => {
  return (
    <span className={`text-gradient ${className}`}>
      {children}
    </span>
  )
}

/**
 * Loading spinner
 */
export const Spinner = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  return (
    <div className={`${sizes[size]} ${className}`}>
      <div className="w-full h-full border-2 border-nimph-accent/20 border-t-nimph-accent rounded-full animate-spin" />
    </div>
  )
}

/**
 * Scroll to top button
 */
export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 bg-nimph-accent text-white rounded-full shadow-lg hover:bg-nimph-accent-light transition-smooth z-50"
      aria-label="Scroll to top"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  )
}

/**
 * Divider with gradient
 */
export const Divider = ({ className = '' }) => {
  return (
    <div className={`w-full h-px bg-gradient-to-r from-transparent via-nimph-accent/20 to-transparent ${className}`} />
  )
}

/**
 * Container with max width
 */
export const Container = ({ 
  children, 
  size = 'default',
  className = '' 
}) => {
  const sizes = {
    sm: 'max-w-3xl',
    default: 'max-w-6xl',
    lg: 'max-w-7xl',
    full: 'max-w-full',
  }

  return (
    <div className={`${sizes[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

/**
 * Grid layout
 */
export const Grid = ({ 
  children, 
  cols = 3,
  gap = 6,
  className = '' 
}) => {
  const colsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={`grid ${colsClasses[cols]} gap-${gap} ${className}`}>
      {children}
    </div>
  )
}

/**
 * Icon wrapper
 */
export const Icon = ({ children, size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  }

  return (
    <div className={`${sizes[size]} ${className}`}>
      {children}
    </div>
  )
}
