# GSAP Integration Guide

This guide will help you integrate GSAP (GreenSock Animation Platform) into the Nimph Ventures website for advanced animations.

## Installation

```bash
npm install gsap
```

## Basic Setup

### 1. Import GSAP in your component

```jsx
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register plugins
gsap.registerPlugin(ScrollTrigger)
```

### 2. Example: Animated Card Entrance

Replace the Framer Motion animation in `Products.jsx` with GSAP:

```jsx
const ProductCard = ({ product, index }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.from(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.1,
      ease: 'power3.out',
    })

    // Hover animation
    const card = cardRef.current
    
    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -8,
        scale: 1.02,
        duration: 0.4,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      })
    }

    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [index])

  return (
    <div ref={cardRef} className="...">
      {/* Card content */}
    </div>
  )
}
```

### 3. Example: Parallax Hero Background

Add parallax effect to the Hero section:

```jsx
const Hero = () => {
  const heroRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    // Parallax scroll effect
    gsap.to(contentRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: 100,
      opacity: 0.5,
    })
  }, [])

  return (
    <section ref={heroRef}>
      <div ref={contentRef}>
        {/* Content */}
      </div>
    </section>
  )
}
```

### 4. Example: Stagger Animation for Stats

Animate the traction stats with a stagger effect:

```jsx
const Traction = () => {
  const statsRef = useRef(null)

  useEffect(() => {
    const stats = statsRef.current.querySelectorAll('.stat-item')

    gsap.from(stats, {
      scrollTrigger: {
        trigger: statsRef.current,
        start: 'top 75%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
    })

    // Animate numbers counting up
    stats.forEach((stat) => {
      const value = stat.querySelector('.stat-value')
      const target = value.textContent
      const isNumber = !isNaN(parseInt(target))

      if (isNumber) {
        const num = parseInt(target.replace(/,/g, ''))
        gsap.from(value, {
          scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
          },
          textContent: 0,
          duration: 2,
          ease: 'power1.out',
          snap: { textContent: 1 },
          onUpdate: function() {
            value.textContent = Math.floor(this.targets()[0].textContent).toLocaleString()
          },
        })
      }
    })
  }, [])

  return (
    <div ref={statsRef}>
      {stats.map((stat) => (
        <div className="stat-item" key={stat.label}>
          <div className="stat-value">{stat.value}</div>
        </div>
      ))}
    </div>
  )
}
```

### 5. Example: Smooth Page Transitions

Create a page transition effect:

```jsx
// src/components/PageTransition.jsx
import { useEffect } from 'react'
import gsap from 'gsap'

const PageTransition = ({ children }) => {
  useEffect(() => {
    // Page load animation
    gsap.from('.page-content', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.out',
    })
  }, [])

  return <div className="page-content">{children}</div>
}

export default PageTransition
```

### 6. Example: Text Split Animation

Animate text letter by letter:

```jsx
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText' // Requires GSAP membership

gsap.registerPlugin(SplitText)

const AnimatedHeading = ({ text }) => {
  const headingRef = useRef(null)

  useEffect(() => {
    const split = new SplitText(headingRef.current, { type: 'chars' })

    gsap.from(split.chars, {
      opacity: 0,
      y: 30,
      rotationX: -90,
      stagger: 0.02,
      duration: 0.8,
      ease: 'back.out',
    })

    return () => split.revert()
  }, [])

  return <h1 ref={headingRef}>{text}</h1>
}
```

## Advanced Techniques

### Magnetic Button Effect

```jsx
const MagneticButton = ({ children }) => {
  const buttonRef = useRef(null)
  const magneticRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const button = buttonRef.current

    const handleMouseMove = (e) => {
      const { left, top, width, height } = button.getBoundingClientRect()
      const centerX = left + width / 2
      const centerY = top + height / 2
      const deltaX = (e.clientX - centerX) * 0.3
      const deltaY = (e.clientY - centerY) * 0.3

      gsap.to(button, {
        x: deltaX,
        y: deltaY,
        duration: 0.4,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.3)',
      })
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <button ref={buttonRef} className="magnetic-button">
      {children}
    </button>
  )
}
```

### Cursor Follower

```jsx
// src/components/CustomCursor.jsx
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      })

      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      })
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-2 h-2 bg-nimph-accent rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={followerRef}
        className="fixed w-8 h-8 border border-nimph-accent rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  )
}

export default CustomCursor
```

## Performance Tips

1. **Use `will-change` CSS property** for animated elements
2. **Cleanup animations** in useEffect return function
3. **Kill ScrollTriggers** when component unmounts
4. **Use `gsap.context()`** for scoped animations (GSAP 3.11+)

```jsx
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from('.element', { ... })
  }, componentRef)

  return () => ctx.revert() // Cleanup
}, [])
```

## Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Demos](https://greensock.com/st-demos/)
- [GSAP Easing Visualizer](https://greensock.com/ease-visualizer/)
- [Cheat Sheet](https://greensock.com/cheatsheet/)

## Next Steps

1. Install GSAP: `npm install gsap`
2. Choose animations to replace/enhance
3. Test performance on mobile devices
4. Add loading states for heavy animations
5. Consider GSAP membership for premium plugins (SplitText, MorphSVG, etc.)
