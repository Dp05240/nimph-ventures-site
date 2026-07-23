# Customization Guide

Quick guide to customizing the Nimph Ventures portfolio website.

## Table of Contents

1. [Colors](#colors)
2. [Typography](#typography)
3. [Content](#content)
4. [Layout](#layout)
5. [Animations](#animations)
6. [Adding New Sections](#adding-new-sections)

## Colors

### Changing the Color Scheme

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      'nimph-dark': '#0A0E14',       // Background
      'nimph-surface': '#131826',    // Card backgrounds
      'nimph-accent': '#3B82F6',     // Primary accent (buttons, highlights)
      'nimph-accent-light': '#60A5FA', // Lighter accent (hover states)
      'nimph-text': '#E8ECF1',       // Main text color
      'nimph-gray': '#6B7280',       // Secondary text
    },
  },
}
```

### Using Colors in Components

```jsx
// Background
<div className="bg-nimph-dark">

// Text colors
<p className="text-nimph-text">
<p className="text-nimph-gray">
<p className="text-nimph-accent">

// Borders
<div className="border border-nimph-accent/20">
```

### Adding New Colors

```js
// In tailwind.config.js
colors: {
  'custom-blue': '#1E40AF',
  'custom-green': '#10B981',
}
```

Then use:
```jsx
<div className="bg-custom-blue text-custom-green">
```

## Typography

### Changing Fonts

#### 1. Update Google Fonts Import

In `src/index.css`, change the `@import` line:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@300;400;500;600;700&display=swap');
```

#### 2. Update Tailwind Config

In `tailwind.config.js`:

```js
fontFamily: {
  'sans': ['YOUR_FONT', 'system-ui', 'sans-serif'],
  'display': ['YOUR_DISPLAY_FONT', 'system-ui', 'sans-serif'],
}
```

#### 3. Apply Fonts

```jsx
<h1 className="font-display">Headline</h1>
<p className="font-sans">Body text</p>
```

### Font Sizes and Weights

```jsx
// Sizes
<h1 className="text-5xl">        // 48px
<h2 className="text-4xl">        // 36px
<h3 className="text-3xl">        // 30px
<p className="text-lg">          // 18px
<p className="text-base">        // 16px
<p className="text-sm">          // 14px

// Weights
<h1 className="font-bold">       // 700
<h1 className="font-semibold">   // 600
<p className="font-medium">      // 500
<p className="font-normal">      // 400
<p className="font-light">       // 300
```

### Letter Spacing

```jsx
<h1 className="tracking-tight">   // Tight
<h1 className="tracking-normal">  // Normal
<h1 className="tracking-wide">    // Wide
```

## Content

### Updating Hero Section

Edit `src/components/Hero.jsx`:

```jsx
// Change company name
<h1>Your Company<span className="text-nimph-accent">.</span></h1>

// Change tagline
<h2>Your custom tagline here</h2>
```

### Updating Products

Edit `src/components/Products.jsx`:

```jsx
const products = [
  {
    name: 'Product Name',
    description: 'One-line description',
    detail: 'Detailed description paragraph',
    status: 'Live · Paying customers',
    statusColor: 'text-green-400', // or text-blue-400, text-yellow-400, etc.
    badge: 'Key metric or achievement',
    tech: ['Tech1', 'Tech2', 'Tech3'],
  },
  // Add more products...
]
```

### Updating Stats

Edit `src/components/Traction.jsx`:

```jsx
const stats = [
  {
    value: '100+',
    label: 'Metric Name',
    sublabel: 'Description',
  },
  // Add more stats...
]
```

### Updating About Section

Edit `src/components/About.jsx`:

```jsx
<p>
  Your custom philosophy text here
</p>
```

### Updating Contact Info

Edit `src/components/Footer.jsx`:

```jsx
// Update email addresses
<a href="mailto:your@email.com">

// Update LinkedIn
<a href="https://linkedin.com/in/yourprofile">
```

## Layout

### Changing Section Spacing

```jsx
// Padding options
<section className="py-8">   // Small
<section className="py-16">  // Medium
<section className="py-24">  // Large
<section className="py-32">  // Extra large

// Responsive spacing
<section className="py-8 sm:py-12 lg:py-20">
```

### Max Width Containers

```jsx
<div className="max-w-3xl">  // Small (768px)
<div className="max-w-4xl">  // Medium (896px)
<div className="max-w-6xl">  // Large (1152px)
<div className="max-w-7xl">  // Extra large (1280px)
```

### Grid Layouts

```jsx
// 2 columns on desktop, 1 on mobile
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

// 3 columns with responsive breakpoints
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// 4 columns
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
```

## Animations

### Adjusting Animation Duration

In components using Framer Motion:

```jsx
// Faster
<motion.div
  transition={{ duration: 0.3 }}
>

// Slower
<motion.div
  transition={{ duration: 1.0 }}
>
```

### Changing Animation Delays

```jsx
// Staggered animations
<motion.div
  transition={{ duration: 0.6, delay: index * 0.1 }}
>

// Increase delay between items
<motion.div
  transition={{ duration: 0.6, delay: index * 0.2 }}
>
```

### Disable Animations

For accessibility or performance:

```jsx
// Conditionally disable
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

<motion.div
  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
  animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
>
```

### Custom Easing

```jsx
<motion.div
  transition={{
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier
  }}
>
```

Common easings:
- `ease: "linear"` - Constant speed
- `ease: "easeIn"` - Slow start
- `ease: "easeOut"` - Slow end
- `ease: "easeInOut"` - Slow start and end
- `ease: [0.16, 1, 0.3, 1]` - Custom (used throughout site)

## Adding New Sections

### 1. Create Component File

Create `src/components/NewSection.jsx`:

```jsx
import React from 'react'
import { motion } from 'framer-motion'

const NewSection = () => {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Section Title
          </h2>
          <p className="text-lg text-nimph-gray">
            Section content
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default NewSection
```

### 2. Import in App.jsx

```jsx
import NewSection from './components/NewSection'

function App() {
  return (
    <div className="min-h-screen bg-nimph-dark">
      <Hero />
      <Products />
      <NewSection />  {/* Add here */}
      <Traction />
      <About />
      <Footer />
    </div>
  )
}
```

## Common Patterns

### Card with Hover Effect

```jsx
<div className="group bg-nimph-surface rounded-xl p-6 transition-smooth hover:bg-nimph-surface/80 hover:-translate-y-1 hover:shadow-2xl hover:shadow-nimph-accent/10">
  <h3 className="text-xl font-bold group-hover:text-gradient">
    Title
  </h3>
  <p className="text-nimph-gray">
    Description
  </p>
</div>
```

### Gradient Text

```jsx
<span className="text-gradient">
  Highlighted text
</span>
```

### Button with Icon

```jsx
<button className="inline-flex items-center gap-2 px-6 py-3 bg-nimph-accent text-white rounded-lg hover:bg-nimph-accent-light transition-smooth">
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M..." />
  </svg>
  <span>Button Text</span>
</button>
```

### Status Badge

```jsx
<span className="inline-flex items-center gap-2 px-3 py-1 bg-nimph-accent/10 text-nimph-accent text-sm rounded-full border border-nimph-accent/20">
  <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
  Status Text
</span>
```

### Responsive Image

```jsx
<img 
  src="/path/to/image.png" 
  alt="Description"
  className="w-full h-auto rounded-lg"
/>
```

## Troubleshooting

### Changes Not Showing Up?

1. **Clear browser cache**: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
2. **Restart dev server**: Stop and run `npm run dev` again
3. **Check console**: Look for errors in browser DevTools

### Tailwind Classes Not Working?

1. Check `tailwind.config.js` content paths
2. Ensure class names are complete strings (not concatenated)
3. Purge/rebuild: `rm -rf node_modules/.vite && npm run dev`

### Animations Not Smooth?

1. Add `transition-smooth` class
2. Check `will-change` CSS property for performance
3. Reduce number of animated elements on mobile

## Best Practices

1. **Maintain consistency**: Use existing components and patterns
2. **Keep it responsive**: Always test on mobile, tablet, and desktop
3. **Optimize images**: Compress before adding to site
4. **Test performance**: Use Lighthouse in Chrome DevTools
5. **Accessibility**: Ensure proper contrast ratios and keyboard navigation

## Need Help?

- Check the main [README.md](README.md)
- Review [GSAP_GUIDE.md](GSAP_GUIDE.md) for advanced animations
- Contact: dhaval@nimphventures.com

---

Happy customizing! 🎨
