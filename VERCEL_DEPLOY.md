# Quick Vercel Deployment Guide

Your site is ready to deploy! Follow these steps:

## 🚀 Deploy to Vercel (3 minutes)

### Option 1: Vercel Dashboard (Easiest)

1. **Go to Vercel**
   - Visit: [vercel.com](https://vercel.com)
   - Sign in with GitHub

2. **Import Project**
   - Click **"Add New"** → **"Project"**
   - Select **"Import Git Repository"**
   - Find: `nimph-ventures-site`
   - Click **"Import"**

3. **Configure Project**
   - **Framework Preset**: Vite (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)

4. **Add Environment Variable**
   - Click **"Environment Variables"**
   - Add:
     ```
     Name: VITE_GA_MEASUREMENT_ID
     Value: G-1SVJKF0XY4
     ```
   - Select: **All Environments**

5. **Deploy!**
   - Click **"Deploy"**
   - Wait 1-2 minutes
   - Done! 🎉

### Option 2: Vercel CLI (For Developers)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Add environment variable
vercel env add VITE_GA_MEASUREMENT_ID
# Enter: G-1SVJKF0XY4

# Deploy to production
vercel --prod
```

---

## 🌐 After Deployment

### Your Live URL:
You'll get a URL like: `https://nimph-ventures-site.vercel.app`

### Add Custom Domain (Optional):

1. **In Vercel Dashboard**:
   - Go to Project Settings → Domains
   - Add: `nimphventures.com` (or your domain)
   
2. **Update DNS Records**:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **SSL Certificate**: Auto-generated (free)

---

## 📊 Update Google Analytics

After deployment, update your GA data stream:

1. Go to [analytics.google.com](https://analytics.google.com)
2. Admin → Data Streams → Click your stream
3. Update URL to: `https://your-vercel-url.vercel.app`
4. Or your custom domain: `https://nimphventures.com`

---

## 🔄 Automatic Deployments

Every time you push to GitHub, Vercel auto-deploys:

```bash
# Make changes locally
git add .
git commit -m "Update content"
git push

# Vercel deploys automatically!
```

---

## ✅ Deployment Checklist

- [ ] Deployed to Vercel
- [ ] Environment variable added (GA ID)
- [ ] Site is live and working
- [ ] Google Analytics updated with production URL
- [ ] Custom domain added (optional)
- [ ] SSL certificate active (automatic)
- [ ] Test all product links work
- [ ] Test on mobile devices

---

## 🆘 Troubleshooting

### Build Fails?
- Check build logs in Vercel dashboard
- Verify environment variable is set
- Ensure `npm run build` works locally

### Analytics Not Working?
- Verify `VITE_GA_MEASUREMENT_ID` is set in Vercel
- Check browser console for errors
- Disable ad blocker and test

### Custom Domain Not Working?
- DNS propagation takes 24-48 hours
- Verify DNS records are correct
- Check domain settings in Vercel

---

## 📞 Support

**Vercel Help**: [vercel.com/support](https://vercel.com/support)

**Your Repo**: [github.com/Dp05240/nimph-ventures-site](https://github.com/Dp05240/nimph-ventures-site)

---

**Ready to deploy?** Go to [vercel.com](https://vercel.com) and import your repo! 🚀
