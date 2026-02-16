# Momentum Insights

Daily AI-powered tips and smart insights to help you make informed decisions and manage your day with confidence.

## 🚀 Tech Stack

- **Vite** - Fast build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type-safe development
- **Vercel Analytics** - Built-in analytics tracking
- **Facebook Pixel** - Marketing analytics

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## 🏗️ Build

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## 📁 Project Structure

```
momentum-insights/
├── src/
│   ├── components/       # React components
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Footer.tsx
│   │   └── TopTelegramButton.tsx
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main App component
│   ├── App.css          # App styles
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
│   └── logo.png
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── vercel.json          # Vercel deployment config
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## 🌐 Deployment to Vercel

### Automatic Deployment

This project is configured for automatic deployment on Vercel:

- **Production**: Pushes to `main` branch deploy to production
- **Preview**: Pushes to `dev` branch (or any other branch) create preview deployments

### Branch Strategy

1. **main** - Production branch (auto-deploys to production)
2. **dev** - Development branch (auto-deploys to preview)

### Setup Instructions

1. Install Vercel CLI (optional):
   ```bash
   npm i -g vercel
   ```

2. Connect your repository to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the Vite framework

3. Configure environment variables (if needed):
   - Go to Project Settings → Environment Variables
   - Add your Facebook Pixel ID or other secrets

### Working with Branches

Create and push to dev branch for preview:
```bash
git checkout -b dev
git push origin dev
```

Merge to main for production:
```bash
git checkout main
git merge dev
git push origin main
```

## 📊 Analytics

### Vercel Analytics

Vercel Analytics is automatically integrated via `@vercel/analytics/react`. It tracks:
- Page views
- Custom events (e.g., button clicks)
- User interactions

Custom event tracking example:
```typescript
if (window.va) {
  window.va('track', 'telegram_button_click', { location: 'header' })
}
```

### Facebook Pixel

Facebook Pixel is integrated for marketing analytics. Update the Pixel ID in `index.html`:
```html
fbq('init', 'YOUR_PIXEL_ID')
```

## 🔧 Configuration

### Update Telegram Link

Update the Telegram channel link in:
- `src/components/Header.tsx`
- `src/components/TopTelegramButton.tsx`

### Update Facebook Pixel ID

Update your Facebook Pixel ID in `index.html`:
```html
fbq('init', 'YOUR_ACTUAL_PIXEL_ID')
```

## 📝 License

© 2026 Momentum Insights. All rights reserved.
