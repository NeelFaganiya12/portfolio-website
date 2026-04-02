# Deploy to Vercel

## Option 1: Deploy with GitHub (recommended)

1. **Push your code to GitHub** (if you haven’t already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Sign in to Vercel**: Go to [vercel.com](https://vercel.com) and sign in with GitHub.

3. **Import the project**:
   - Click **Add New…** → **Project**.
   - Select your **portfolio** repository.
   - Vercel will detect Next.js; leave **Framework Preset** as **Next.js** and **Build Command** as `next build`.

4. **Deploy**:
   - Click **Deploy**. Vercel will build and deploy.
   - You’ll get a URL like `https://portfolio-xxx.vercel.app`. Every push to `main` will trigger a new deployment.

---

## Option 2: Deploy with Vercel CLI

1. **Install the CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Log in and deploy** (from the project folder):
   ```bash
   cd /path/to/portfolio
   vercel login
   vercel
   ```
   - First run: follow the prompts (link to existing project or create new one).
   - For production: `vercel --prod`.

---

## Notes

- **Environment variables**: If you add env vars later, set them in **Vercel Dashboard → Project → Settings → Environment Variables**.
- **Custom domain**: In **Project → Settings → Domains**, add your domain and follow the DNS instructions.
- **Build**: Vercel runs `npm run build` (i.e. `next build`) by default; no extra config needed for this app.
