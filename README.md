# Nimph Ventures Portfolio

A professional, venture-capital-style portfolio website for Nimph Ventures — a startup studio building category-defining B2B SaaS products.

## 🎯 Design Philosophy

**Overall Vibe**: Confident, minimal, high-production-value — inspired by a16z portfolio pages and top-tier YC startups. Dark theme with a calm and powerful aesthetic.

### Design System

**Typography**
- Headlines: Clean geometric sans-serif (SF Pro / Google Sans style)
- Body/UI: Inter font family for crisp readability
- Weight contrast: Bold headlines (600-700) vs light body text (400)
- Tabular numerals for stats and metrics

**Color Palette**
- Base: Deep near-black `#0A0E14` with cool undertone
- Surface: Slightly lighter `#131826` for cards
- Accent: Electric blue `#3B82F6` → `#60A5FA` gradient
- Text: Off-white `#E8ECF1`

**Motion & Transitions**
- Smooth, deliberate animations with `cubic-bezier(0.16, 1, 0.3, 1)` easing
- 300-400ms transition times
- Gentle fade-ins and upward drifts on scroll
- Subtle particle system in hero section

## 🚀 Tech Stack

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Ready for GSAP** - Component structure prepared for advanced animations

## 📦 Project Structure

```
nimph-ventures/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Hero section with animated background
│   │   ├── Products.jsx      # Product portfolio showcase
│   │   ├── Traction.jsx      # Stats and metrics
│   │   ├── About.jsx         # Studio philosophy
│   │   └── Footer.jsx        # Contact and links
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles and Tailwind config
├── public/
│   └── assets/
│       └── logo.png          # Nimph logo
├── index.html                # HTML template
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
└── package.json              # Dependencies
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

Build output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Features

### Fully Responsive
- Mobile: ≤480px
- Large mobile: 481-767px
- Tablet: 768-1023px
- Desktop: 1024-1439px
- Large desktop: 1440px+

### Smooth Animations
- Scroll-triggered fade-ins
- Hover state transitions
- Animated particle background
- Intersection Observer for performance

### Product Showcase
Five products with real data:
1. **Drafsense** - RCC check-drafting SaaS (Live, paying customers)
2. **ProMark Works** - Digital inspection platform (Beta live)
3. **WebCat ERP** - B2B catalog platform (Private, live)
4. **Ordex** - Commercial distribution platform (Testing beta)
5. **AV+P** - Early-stage B2B solution (Prototyping)

### Contact Integration
- Email: dhaval@nimphventures.com
- Email: dhaval@drafsense.com
- LinkedIn: linkedin.com/in/dhavalpatel27

## 🎭 Adding GSAP Animations

The component structure is ready for GSAP integration. Example:

```jsx
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const MyComponent = () => {
  const elementRef = useRef(null)

  useEffect(() => {
    gsap.from(elementRef.current, {
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
  }, [])

  return <div ref={elementRef}>Content</div>
}
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:

```js
colors: {
  'nimph-dark': '#0A0E14',
  'nimph-surface': '#131826',
  'nimph-accent': '#3B82F6',
  // ... add more colors
}
```

### Typography
Modify font families in `tailwind.config.js`:

```js
fontFamily: {
  'sans': ['Inter', 'system-ui', ...],
  'display': ['SF Pro Display', 'system-ui', ...],
}
```

### Content
Update product data in `src/components/Products.jsx`:

```js
const products = [
  {
    name: 'Your Product',
    description: 'One-line description',
    // ... more fields
  },
]
```

## 📱 Responsive Breakpoints

All components are fully responsive with these breakpoints:
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Custom Server
```bash
npm run build
# Serve dist/ folder with any static file server
```

## 📄 License

© 2026 Nimph Ventures. All rights reserved.

## 🤝 Contact

For inquiries:
- Email: dhaval@nimphventures.com
- LinkedIn: [linkedin.com/in/dhavalpatel27](https://linkedin.com/in/dhavalpatel27)

---

Built with ⚡ by Nimph Ventures - Building the future of B2B SaaS
