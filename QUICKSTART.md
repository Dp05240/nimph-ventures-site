# Quick Start Guide ⚡

Get the Nimph Ventures portfolio running in under 2 minutes.

## Prerequisites

- Node.js 18+ installed ([Download here](https://nodejs.org/))
- Terminal/Command line access
- Code editor (VS Code recommended)

---

## 🚀 Installation (30 seconds)

```bash
# 1. Navigate to project folder
cd "/Users/dhavalpatel/Documents/Projects/Nimph Ventures"

# 2. Install dependencies
npm install
```

---

## 🎬 Run Development Server (5 seconds)

```bash
npm run dev
```

**That's it!** Open your browser to:
👉 **http://localhost:5173**

---

## 🎨 First Customizations (5 minutes)

### 1. Change Company Name (30 sec)

**File**: `src/components/Hero.jsx`

Find and replace:
```jsx
<h1>Nimph<span className="text-nimph-accent">.</span></h1>
```

### 2. Update Tagline (30 sec)

**File**: `src/components/Hero.jsx`

Find and replace:
```jsx
<h2>Your custom tagline here</h2>
```

### 3. Add/Edit Products (2 min)

**File**: `src/components/Products.jsx`

Edit the `products` array at the top:
```jsx
const products = [
  {
    name: 'Your Product',
    description: 'One-line pitch',
    detail: 'Longer description',
    status: 'Live',
    statusColor: 'text-green-400',
    badge: 'Key achievement',
    tech: ['Tech1', 'Tech2'],
  },
]
```

### 4. Update Contact Info (1 min)

**File**: `src/components/Footer.jsx`

Replace email addresses and LinkedIn:
```jsx
<a href="mailto:your@email.com">
<a href="https://linkedin.com/in/yourprofile">
```

### 5. Change Colors (1 min)

**File**: `tailwind.config.js`

Update the colors object:
```js
colors: {
  'nimph-accent': '#YOUR_COLOR',
  // ... other colors
}
```

---

## 🏗️ Build for Production (30 seconds)

```bash
# Build optimized production files
npm run build

# Preview production build locally
npm run preview
```

Files will be in `dist/` folder - ready to deploy!

---

## 🌐 Deploy (2 minutes)

### Fastest: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (follow prompts)
vercel
```

Done! Your site is live. 🎉

### Alternative: Netlify

1. Go to [app.netlify.com](https://app.netlify.com)
2. Drag and drop your `dist/` folder
3. Done!

---

## 📚 Learn More

- **Full customization**: See `CUSTOMIZATION.md`
- **Add GSAP animations**: See `GSAP_GUIDE.md`
- **Deploy to other platforms**: See `DEPLOYMENT.md`
- **Complete overview**: See `PROJECT_OVERVIEW.md`

---

## ⚡ Commands Cheat Sheet

```bash
npm install           # Install dependencies
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Check for code issues
```

---

## 🐛 Common Issues

### Port already in use?

```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

### Dependencies not installing?

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Changes not showing?

```bash
# Hard refresh browser
# Mac: Cmd + Shift + R
# Windows: Ctrl + Shift + R
```

---

## 🆘 Need Help?

**Contact**: dhaval@nimphventures.com

**Docs**:
- README.md - Main documentation
- CUSTOMIZATION.md - Detailed customization
- PROJECT_OVERVIEW.md - Complete project details

---

**Happy building!** 🚀
