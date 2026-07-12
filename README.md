# Quicker Website — Setup & Deployment Guide

This is your full website, built in React, connected to your real Supabase
database (the same one your FlutterFlow app uses). No Odoo subscription needed.

---

## 1. Run it locally in VS Code

1. Install **Node.js** if you don't have it: https://nodejs.org (choose LTS version)
2. Open this folder in VS Code
3. Open the terminal in VS Code (`` Ctrl + ` ``)
4. Run:
   ```
   npm install
   ```
   (this downloads all the libraries the project needs — takes 1-2 minutes)
5. Run:
   ```
   npm run dev
   ```
6. Open the link it shows (usually `http://localhost:5173`) in your browser
   — your website is now running locally!

---

## 2. Add your real product images & data

Your products and shops already exist in Supabase (you created them earlier).
This website reads directly from those same tables: `shops`, `products`,
`orders`. Anything you add in Supabase Table Editor shows up automatically.

To add product images: in Supabase → Table Editor → `products` table →
edit the `image_url` column for each row → paste an image link.

---

## 3. Deploy for free (Vercel)

1. Push this project to GitHub:
   - Create a free account at github.com if you don't have one
   - Create a new repository called `quicker-website`
   - In VS Code terminal, run:
     ```
     git init
     git add .
     git commit -m "Quicker website"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/quicker-website.git
     git push -u origin main
     ```
2. Go to **vercel.com** → sign up free with your GitHub account
3. Click **Add New Project** → import `quicker-website`
4. Click **Deploy** (no settings needed, Vercel auto-detects Vite)
5. In 1-2 minutes you'll get a live link like `quicker-website.vercel.app`

---

## 4. Connect your domain (thequicker.in)

1. In Vercel → your project → **Settings → Domains**
2. Type `thequicker.in` → **Add**
3. Vercel will show you DNS records to add (similar to before with Odoo)
4. Go to **GoDaddy → DNS Records** for thequicker.in
5. Update the **A record** (`@`) to the IP Vercel shows you
6. Update the **CNAME record** (`www`) to the value Vercel shows you
7. Wait 15-30 minutes for DNS to update
8. Visit `thequicker.in` — your new site is live, SSL (https) is automatic
   and free on Vercel (no more "Not Secure" warning issue!)

---

## 5. Making changes later

Any time you want to change text, colors, or add a page:
1. Edit the file in VS Code
2. Save
3. Run `git add . && git commit -m "update" && git push`
4. Vercel automatically redeploys in under a minute

---

## File structure reference

```
src/
  lib/supabase.js       → connects to your Supabase project
  lib/CartContext.jsx   → cart logic (add/remove/checkout)
  components/Navbar.jsx → top navigation, same as your Odoo site
  components/Footer.jsx → footer with all links
  pages/Home.jsx         → homepage (hero, categories, stores)
  pages/Stores.jsx        → all stores listing
  pages/Shop.jsx          → products, filtered by shop or category
  pages/Cart.jsx           → cart + checkout (writes to Supabase orders table)
  pages/HowItWorks.jsx
  pages/FAQs.jsx
  pages/PartnerWithUs.jsx
  pages/OnboardingGuide.jsx
  pages/Contact.jsx
  pages/AboutUs.jsx
  pages/OrderConfirmed.jsx
```
