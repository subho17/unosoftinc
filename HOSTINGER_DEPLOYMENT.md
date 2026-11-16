# Hostinger Deployment Guide for StudioDemo (Next.js)

Your project is fully configured and optimized for Hostinger. Choose the option matching your Hostinger plan:

---

## Option 1: Hostinger Shared / Cloud Web Hosting (Recommended & Easiest)
*(Using hPanel File Manager or FTP to `public_html`)*

### Step 1: Generate the static export
On your local machine or build terminal:
```bash
npm run build:export
```
This generates the ready-to-deploy **`out/`** directory containing all pre-rendered HTML files (`index.html`, `contact.html`, `404.html`), CSS, JavaScript, `.htaccess`, and optimized assets.

### Step 2: Upload to Hostinger
1. Log in to your **Hostinger hPanel**.
2. Go to **Websites** → Select your domain → Click **File Manager**.
3. Open the **`public_html`** directory.
4. Select all files and folders inside your local **`d:\unosoftinc\unosoft\out\`** folder (or zip the contents of `out/` and extract it inside `public_html`).
5. Ensure `.htaccess` is present in `public_html` (it handles clean URLs like `/contact` and HTTPS redirects).

Your site is live!

---

## Option 2: Hostinger VPS or Node.js Web App
*(For plans with Node.js runtime)*

### Step 1: Build the standalone project
```bash
npm run build
```
This generates `.next/standalone` with a lightweight, optimized `server.js` and dependencies.

### Step 2: Setup in Hostinger hPanel
1. In hPanel, go to **Node.js** under your domain settings.
2. Set **Application root**: `/home/username/domains/yourdomain.com/public_html` (or your chosen path).
3. Set **Application startup file**: `server.js` (from `.next/standalone`).
4. Set **Node version**: `20.x` or higher.
5. Copy `.next/standalone/server.js`, `.next/standalone/node_modules`, and the public assets into the app root.
6. Click **Start / Restart** application.

