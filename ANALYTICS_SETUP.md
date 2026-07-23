# Google Analytics Setup Guide

Complete guide to set up analytics tracking for the Nimph Ventures website.

## 🎯 What Gets Tracked

### Automatic Tracking:
- ✅ **Page views** - Every time someone visits the site
- ✅ **Unique visitors** - Individual users (tracked by browser)
- ✅ **Session duration** - How long people stay
- ✅ **Bounce rate** - If they leave immediately
- ✅ **Device types** - Desktop, mobile, tablet
- ✅ **Location** - Country, city
- ✅ **Traffic sources** - Where visitors came from

### Custom Event Tracking:
- ✅ **Product button clicks** - Which products people are interested in
  - Drafsense clicks
  - ProMark Works clicks
  - Ordex clicks
  - AV+P clicks
- ✅ **Email clicks** - Which contact method they prefer
- ✅ **LinkedIn clicks** - Profile visits

---

## 📋 Step-by-Step Setup

### Step 1: Create Google Analytics Account

1. Go to [analytics.google.com](https://analytics.google.com)
2. Sign in with your Google account
3. Click **Start measuring**
4. Fill in account details:
   - **Account name**: Nimph Ventures
   - Check the boxes you want
   - Click **Next**

### Step 2: Set Up Property

1. **Property name**: Nimph Ventures Website
2. **Reporting time zone**: Your timezone
3. **Currency**: USD
4. Click **Next**

### Step 3: Business Information

1. **Industry**: Technology
2. **Business size**: Small (1-10 employees)
3. **How you plan to use Google Analytics**: Check relevant boxes
4. Click **Create**
5. Accept Terms of Service

### Step 4: Set Up Data Stream

1. Choose platform: **Web**
2. **Website URL**: Your domain (e.g., `nimphventures.com`)
   - For now, use: `localhost:5173` for testing
3. **Stream name**: Nimph Ventures Main Site
4. Click **Create stream**

### Step 5: Get Your Measurement ID

1. You'll see your **Measurement ID** at the top
2. It looks like: `G-XXXXXXXXXX`
3. **Copy this ID** - you'll need it next!

### Step 6: Add to Your Website

1. Create a file named `.env.local` in your project root:

```bash
# In terminal
touch .env.local
```

2. Add your Measurement ID to `.env.local`:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual ID.

3. Restart your dev server:

```bash
# Kill current server (Ctrl+C)
npm run dev
```

### Step 7: Test It's Working

1. Open your site: `http://localhost:5173`
2. Go to Google Analytics
3. Click **Reports** → **Realtime**
4. You should see **1 user** (you!) active right now
5. Click around, check product buttons
6. Watch the events appear in real-time!

---

## 📊 How to View Your Data

### Real-Time Data (see it now):

1. Go to **Reports** → **Realtime**
2. See who's on your site RIGHT NOW
3. What pages they're viewing
4. What they're clicking

### Historical Data (after 24-48 hours):

1. **Reports** → **Life cycle** → **Acquisition**
   - Where visitors came from
   
2. **Reports** → **Life cycle** → **Engagement**
   - Which pages are most popular
   - How long people stay
   
3. **Reports** → **User** → **Demographics**
   - Age, gender, location, device type

### Custom Events (your product clicks):

1. **Reports** → **Engagement** → **Events**
2. You'll see:
   - `click` - Main event
   - Product name as event label
   - Count of clicks per product

---

## 🎯 What You Can Learn

### Questions You Can Answer:

✅ **How many people visit?**
- Go to **Reports** → **Life cycle** → **Engagement** → **Overview**
- See total users, new users, sessions

✅ **Which products are most interesting?**
- **Reports** → **Engagement** → **Events**
- Compare click counts:
  - Drafsense vs ProMark vs Ordex vs AV+P

✅ **Where are visitors from?**
- **Reports** → **User** → **Demographics** → **Overview**
- See countries, cities

✅ **How did they find you?**
- **Reports** → **Life cycle** → **Acquisition** → **Traffic acquisition**
- See: Direct, Social, Referral, Search

✅ **Mobile vs Desktop?**
- **Reports** → **User** → **Tech** → **Overview**
- See device breakdown

---

## 🚀 After Deployment

When you deploy to production:

1. **Update data stream URL**:
   - Go to Google Analytics → Admin → Data Streams
   - Click your stream
   - Update URL to your real domain

2. **Production environment variable**:
   - Most hosting platforms (Vercel, Netlify) let you add environment variables
   - Add `VITE_GA_MEASUREMENT_ID` in their dashboard
   - Same value as your `.env.local`

3. **Domain verification** (optional but recommended):
   - Proves you own the domain
   - Better data accuracy

---

## 📈 Advanced: Custom Dashboards

### Create a "Product Interest" Dashboard:

1. Go to **Explore** (left sidebar)
2. Click **Create New Exploration**
3. Add dimensions: Event name, Event label
4. Add metrics: Event count
5. Drag to table
6. See which products get most clicks!

---

## 🔒 Privacy & Compliance

- ✅ Google Analytics is GDPR-compliant when configured correctly
- ✅ No personal data (emails, names) is collected
- ✅ Anonymous visitor tracking only
- ✅ Users can opt-out via browser settings

**Optional**: Add a cookie consent banner if required in your region.

---

## 🆘 Troubleshooting

### Not seeing data?

1. **Check Measurement ID is correct**:
   ```bash
   cat .env.local
   ```

2. **Restart dev server**:
   ```bash
   npm run dev
   ```

3. **Check browser console**:
   - Open DevTools (F12)
   - Look for `gtag` errors

4. **Disable ad blockers**:
   - They block Google Analytics
   - Disable temporarily to test

5. **Wait 24-48 hours**:
   - Some reports take time to populate

### Events not showing?

1. Go to **Realtime** → **Event count by Event name**
2. Click around your site
3. Events should appear within 30 seconds

---

## 📱 Mobile App Tracking (Future)

If you build mobile apps for your products:
- Use **Firebase Analytics** (same family)
- Links to same Google Analytics account
- Unified dashboard for web + mobile

---

## 💡 Pro Tips

1. **Set up goals** to track conversions:
   - Email clicks
   - Product visits
   - Time on site

2. **Weekly email reports**:
   - Admin → Account Access Management
   - Add your email
   - Get weekly summaries

3. **Link to Google Search Console**:
   - See which search terms bring visitors
   - Requires domain ownership verification

---

## 📞 Need Help?

**Google Analytics Resources:**
- [Help Center](https://support.google.com/analytics)
- [Analytics Academy](https://analytics.google.com/analytics/academy/) - Free courses

**Contact:**
- dhaval@nimphventures.com

---

## ✅ Quick Checklist

- [ ] Created Google Analytics account
- [ ] Got Measurement ID (G-XXXXXXXXXX)
- [ ] Added to `.env.local`
- [ ] Restarted dev server
- [ ] Tested in Realtime view
- [ ] Clicked product buttons to test events
- [ ] Waiting for 24-48h for full reports
- [ ] Will add to production environment variables after deployment

---

**Once set up, you'll have complete visibility into:**
- 📊 How many people visit
- 🔍 Which products interest them most
- 🌍 Where they're from
- 📱 What devices they use
- ⏱️ How long they stay
- 🔗 How they found you

All for free! 🎉
