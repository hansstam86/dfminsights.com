# DFM Insights — Hardware Engineering Intelligence Platform

**Pre-launch landing page + free demo.**

🌐 Live: [www.dfminsights.com](https://www.dfminsights.com)
📧 Contact: hello@dfminsights.com

---

## Chairman Setup Checklist

### Step 1 — Set up Stripe Payment Link

1. Go to [dashboard.stripe.com](https://dashboard.stripe.com) and log in with hans.stam@gmail.com
2. Navigate to **Payment Links** → **+ New**
3. Create a product: "DFM Insights – Founding Member"
4. Set price: **$49 USD**, one-time payment
5. Add description: "Founding member spot. 5 projects, 10 questions each. Early access when we launch."
6. Enable: "Let customers adjust quantity" → OFF
7. Click **Create link** — you get a URL like `https://buy.stripe.com/xxxxxxxxxxxx`
8. Open `index.html` and replace **all 4 instances** of:
   ```
   https://buy.stripe.com/REPLACE_WITH_STRIPE_LINK
   ```
   with your actual Stripe link.
9. Save and push to GitHub.

### Step 2 — Update Founding Member Count

Every time someone pays, update the counter:

1. Open `index.html`
2. Find this line near the bottom of the `<script>` block:
   ```js
   const SPOTS_TAKEN = 0;
   ```
3. Change `0` to the current number of paid signups
4. Save and push to GitHub — the progress bar updates automatically

### Step 3 — Upload to GitHub

Files to upload (all in this folder):
```
index.html     ← Landing/marketing page (this is the homepage)
demo.html      ← Free demo (linked from landing page)
CNAME          ← Custom domain for GitHub Pages
robots.txt     ← SEO
sitemap.xml    ← SEO
404.html       ← Error page
README.md      ← This file
```

---

## File Structure

| File | Purpose |
|------|---------|
| `index.html` | Commercial landing page with pre-launch Stripe |
| `demo.html` | Free demo — 10 example hardware programs |
| `CNAME` | Points GitHub Pages to dfminsights.com |
| `robots.txt` | Search engine instructions |
| `sitemap.xml` | SEO sitemap |
| `404.html` | Custom error page |

---

## Pricing Tiers

| Tier | Price | Status |
|------|-------|--------|
| Free Demo | $0 | Live — demo.html |
| DFM Starter | $49/project | Pre-launch (Stripe) |
| Expert Review | $500/project | Email enquiry |
| PRD Builder | $49 + $500 review | Coming Q3 2026 |

---

## Business Model

- **Goal:** 10 founding members before building the paid platform
- **Payment:** Stripe → hans.stam@gmail.com
- **Refund policy:** Full refund if we don't hit 10 members in 90 days
- **Build timeline:** 8 weeks from 10 members to beta access

---

## Management Team

| Role | Name |
|------|------|
| Chairman | Hans Stam |
| CEO | Claude (AI) |
| CTO | Claude (AI) |
| CFO | Claude (AI) |

