# Deployment Guide

Complete guide for deploying the Nimph Ventures portfolio website to various platforms.

## Prerequisites

- Git repository initialized
- Code pushed to GitHub/GitLab/Bitbucket
- Production build tested locally (`npm run build` + `npm run preview`)

## Vercel (Recommended)

### Method 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Deploy to production:
```bash
vercel --prod
```

### Method 2: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click "Deploy"

### Custom Domain on Vercel

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

## Netlify

### Method 1: Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login:
```bash
netlify login
```

3. Initialize:
```bash
netlify init
```

4. Deploy:
```bash
netlify deploy --prod
```

### Method 2: Netlify Dashboard

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to Git provider
4. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click "Deploy site"

### netlify.toml Configuration

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

## GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/nimph-ventures",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```js
export default {
  base: '/nimph-ventures/',
}
```

4. Deploy:
```bash
npm run deploy
```

## AWS S3 + CloudFront

### 1. Build the project
```bash
npm run build
```

### 2. Create S3 Bucket

1. Go to AWS S3 Console
2. Create bucket (e.g., `nimph-ventures`)
3. Enable static website hosting
4. Upload `dist` folder contents

### 3. Set Bucket Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::nimph-ventures/*"
    }
  ]
}
```

### 4. Create CloudFront Distribution

1. Go to CloudFront Console
2. Create distribution
3. Origin domain: Select your S3 bucket
4. Default root object: `index.html`
5. Create custom error response:
   - HTTP Error Code: 404
   - Response Page Path: `/index.html`
   - HTTP Response Code: 200

### 5. Deploy Script

Create `deploy-aws.sh`:

```bash
#!/bin/bash

# Build
npm run build

# Upload to S3
aws s3 sync dist/ s3://nimph-ventures --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"

echo "Deployment complete!"
```

Make executable:
```bash
chmod +x deploy-aws.sh
```

## Docker + Nginx

### Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Build and Run

```bash
# Build image
docker build -t nimph-ventures .

# Run container
docker run -d -p 80:80 nimph-ventures
```

## DigitalOcean App Platform

1. Go to [DigitalOcean Apps](https://cloud.digitalocean.com/apps)
2. Create new app
3. Connect Git repository
4. Configure:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click "Next" and deploy

## Custom VPS (Ubuntu/Debian)

### 1. Install Node.js

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2. Install Nginx

```bash
sudo apt update
sudo apt install nginx
```

### 3. Clone and Build

```bash
cd /var/www
git clone https://github.com/yourusername/nimph-ventures.git
cd nimph-ventures
npm install
npm run build
```

### 4. Configure Nginx

```bash
sudo nano /etc/nginx/sites-available/nimph-ventures
```

```nginx
server {
    listen 80;
    server_name nimphventures.com www.nimphventures.com;
    
    root /var/www/nimph-ventures/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 5. Enable Site

```bash
sudo ln -s /etc/nginx/sites-available/nimph-ventures /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 6. SSL with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d nimphventures.com -d www.nimphventures.com
```

## Environment Variables

For production, create `.env.production`:

```env
VITE_API_URL=https://api.nimphventures.com
VITE_ANALYTICS_ID=your-analytics-id
```

Access in code:
```js
const apiUrl = import.meta.env.VITE_API_URL
```

## Performance Optimization

### 1. Enable Compression

Most platforms (Vercel, Netlify) handle this automatically. For custom servers, ensure gzip/brotli is enabled.

### 2. CDN Configuration

- Set proper cache headers
- Use CDN for static assets
- Consider image CDN (Cloudinary, ImageKit)

### 3. Build Optimizations

Update `vite.config.js`:

```js
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
        },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
}
```

## Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## Post-Deployment Checklist

- [ ] Test all pages on desktop
- [ ] Test all pages on mobile
- [ ] Verify all links work
- [ ] Check contact form/email links
- [ ] Test page load speed (Google PageSpeed Insights)
- [ ] Verify SEO meta tags
- [ ] Check console for errors
- [ ] Test on multiple browsers (Chrome, Firefox, Safari)
- [ ] Verify analytics tracking
- [ ] Check SSL certificate
- [ ] Test 404 page behavior

## Monitoring

### Performance Monitoring

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Uptime Monitoring

- [UptimeRobot](https://uptimerobot.com/)
- [Pingdom](https://www.pingdom.com/)
- [StatusCake](https://www.statuscake.com/)

### Analytics

Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Troubleshooting

### 404 on Page Refresh

Ensure your server/platform redirects all routes to `index.html` for SPA support.

### Build Fails

- Clear node_modules: `rm -rf node_modules package-lock.json && npm install`
- Check Node version: `node --version` (should be 18+)
- Review build logs for specific errors

### Slow Load Times

- Enable compression
- Optimize images
- Use lazy loading
- Implement code splitting
- Enable CDN

---

**Need help?** Contact dhaval@nimphventures.com
