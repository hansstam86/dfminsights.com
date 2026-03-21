# DFM Insights — Design for Manufacturability Platform

A live, interactive platform showing how real hardware products are engineered — following team conversations across EVT, DVT, and PVT build stages.

🌐 **Live site:** [www.dfminsights.com](https://www.dfminsights.com)

---

## Hosting on GitHub Pages + GoDaddy Domain

### Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in (or create a free account).
2. Click **New repository**.
3. Name it `dfminsights.com` (or any name — e.g. `dfm-website`).
4. Set it to **Public**.
5. Click **Create repository**.

### Step 2 — Upload the Website Files

Upload these files to the root of your repository:
```
index.html      ← Main website
404.html        ← Custom error page
CNAME           ← Your custom domain
robots.txt      ← SEO crawler instructions
sitemap.xml     ← SEO sitemap
README.md       ← This file
```

You can do this via:
- **GitHub web UI:** Drag and drop files into the repository.
- **Git CLI:** `git add . && git commit -m "Initial deploy" && git push`

### Step 3 — Enable GitHub Pages

1. In your repository, go to **Settings → Pages**.
2. Under **Source**, select **Deploy from a branch**.
3. Choose branch: **main**, folder: **/ (root)**.
4. Click **Save**.

GitHub will give you a URL like `https://yourusername.github.io/dfm-website/` — your site is live!

### Step 4 — Connect Your GoDaddy Domain

**In GitHub:**
1. Go to **Settings → Pages → Custom domain**.
2. Enter `www.dfminsights.com` (or your domain).
3. Click **Save**. GitHub will verify the domain.
4. Check **Enforce HTTPS** once the certificate is issued (takes ~30 min).

**In GoDaddy:**
1. Log in to your GoDaddy account.
2. Go to **My Products → DNS** for your domain.
3. Delete any existing `A` records and `CNAME` records for `www`.
4. Add these **4 A records** (for the apex domain `@`):

| Type | Name | Value           | TTL  |
|------|------|-----------------|------|
| A    | @    | 185.199.108.153 | 1 hr |
| A    | @    | 185.199.109.153 | 1 hr |
| A    | @    | 185.199.110.153 | 1 hr |
| A    | @    | 185.199.111.153 | 1 hr |

5. Add a **CNAME record** for `www`:

| Type  | Name | Value                         | TTL  |
|-------|------|-------------------------------|------|
| CNAME | www  | yourusername.github.io        | 1 hr |

> Replace `yourusername` with your actual GitHub username.

6. **Save** all DNS changes.

### Step 5 — Wait for DNS Propagation

DNS changes take **15 minutes to 48 hours** to propagate globally. You can check status at [dnschecker.org](https://dnschecker.org).

Once propagated, `https://www.dfminsights.com` will load your site with a valid SSL certificate.

---

## Updating the Site

1. Edit `index.html` (or any file) locally.
2. Push to GitHub: `git add . && git commit -m "Update" && git push`
3. GitHub Pages automatically redeploys within ~60 seconds.

---

## File Structure

```
/
├── index.html      Main application (self-contained)
├── 404.html        Custom 404 redirect page
├── CNAME           Custom domain for GitHub Pages
├── robots.txt      Search engine crawler rules
├── sitemap.xml     XML sitemap for SEO
└── README.md       This setup guide
```

---

## Tech Stack

- **Zero dependencies** — pure HTML, CSS, and vanilla JavaScript
- **Single file app** — all logic, data and styles in `index.html`
- **Google Fonts CDN** — Barlow Condensed, Barlow, Fira Code
- **GitHub Pages** — free static hosting with SSL
- **GoDaddy** — custom domain DNS

---

## Customising

All product data, team members, and conversations live in the `<script>` section of `index.html` as clean JavaScript objects. To add a product:

```javascript
// Add to the PRODUCTS array:
{ id:'p11', icon:'🔋', name:'Your Product Name', category:'Category', stage:'EVT',
  desc:'Short product description.', badges:['Spec1','Spec2','Spec3'] }

// Add conversations to CONVERSATIONS.p11 = { evt: [...], dvt: [...], pvt: [...] }
// Add team members to PRODUCT_TEAMS.p11 = ['sarah','marcus', ...]
```

---

*Built to show the real conversations behind hardware engineering.*
