# MD TARIK ANVAR - Portfolio Website

A modern, responsive portfolio website built with React + Vite + Tailwind CSS, showcasing AI/ML projects, professional experience, and achievements.

## 🚀 Live Demo

Visit the live portfolio: [https://git-tarik.github.io/portfolio](https://git-tarik.github.io/portfolio) 🌟

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with GitHub Actions
- **Package Manager**: npm

## 📁 Project Structure

```
portfolio/
├── public/           # Static assets
│   ├── images/       # Profile images and assets
│   ├── favicon.svg   # Site favicon
│   ├── .nojekyll     # GitHub Pages config
│   └── resume.pdf    # Resume file
├── src/
│   ├── components/   # React components
│   ├── data/         # JSON data files
│   └── main.jsx      # App entry point
├── .github/
│   └── workflows/    # GitHub Actions deployment
└── vite.config.js    # Vite configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/git-tarik/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
Open [http://localhost:5173/portfolio/](http://localhost:5173/portfolio/) in your browser.

## 🏗️ Building for Production

```bash
npm run build
npm run preview  # Preview build locally
```

## 📊 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### IMPORTANT: Repository Settings Configuration

**After making your repository public, you MUST configure GitHub Pages settings:**

1. **Go to Repository Settings**: `https://github.com/git-tarik/portfolio/settings/pages`
2. **Under "Source"**, select **"GitHub Actions"** (NOT "Deploy from a branch")
3. **Click "Save"**
4. **Wait 2-3 minutes** for deployment to complete

### Deployment Process

1. **Push to main branch** - triggers automatic deployment
2. **GitHub Actions** builds the project
3. **Deploys to GitHub Pages** at `https://git-tarik.github.io/portfolio`

### Key Configuration Files

- **`vite.config.js`**: Configured with base path `/portfolio/` for GitHub Pages
- **`.github/workflows/deploy.yml`**: GitHub Actions workflow for deployment
- **`package.json`**: Homepage URL set for GitHub Pages
- **`public/.nojekyll`**: Prevents Jekyll processing

## 🔧 Troubleshooting GitHub Pages Issues

### Issue 1: "Page Not Rendering After Public/Private Switch"
**Solution**:
1. Go to `https://github.com/git-tarik/portfolio/settings/pages`
2. Change Source from "Deploy from a branch" to **"GitHub Actions"**
3. Push any commit to trigger new deployment

### Issue 2: "Build Succeeds Locally But Fails on GitHub"
**Solution**:
- Verify `vite.config.js` has `base: '/portfolio/'`
- Ensure `.nojekyll` file exists in `public/` directory
- Check that script tag in `index.html` uses `/src/main.jsx` (not `/portfolio/src/main.jsx`)

### Issue 3: "Assets Not Loading"
**Solution**:
- All images should be in `public/images/` directory
- Use paths like `/portfolio/images/image.jpg` in components
- For meta tags, use full URLs: `https://git-tarik.github.io/portfolio/images/image.jpg`

## 🔄 Development Workflow

### For Code Changes:
1. **Make changes** to components in `src/`
2. **Test locally** with `npm run dev`
3. **Build and test** with `npm run build && npm run preview`
4. **Commit and push** to trigger auto-deployment

### For Asset Changes:
1. **Add/update assets** in `public/` directory
2. **Use correct paths** with `/portfolio/` prefix
3. **Test build** before pushing
4. **Commit and push** for deployment

## 📝 Build Configuration Notes

### Why Local Works but GitHub Pages Fails:

1. **Base Path**: Local dev server serves from root `/`, but GitHub Pages serves from `/portfolio/`
2. **Asset Resolution**: Vite handles assets differently in dev vs production
3. **Repository Settings**: GitHub Pages source must be set to "GitHub Actions"
4. **Meta Tag URLs**: Relative URLs in meta tags don't work with subdirectory deployment

### Key Files for Deployment:
- `vite.config.js` - Sets base path and build options
- `public/.nojekyll` - Disables Jekyll processing
- `.github/workflows/deploy.yml` - Handles automated deployment
- `package.json` - Contains homepage URL for GitHub Pages

## 🎯 Performance Tips

- Images are automatically optimized by Vite
- CSS is purged and minified with Tailwind CSS
- JavaScript is bundled and minified
- Assets include cache-busting hashes

## 📧 Support

If you encounter deployment issues:
1. Ensure repository is **public**
2. Set GitHub Pages source to **"GitHub Actions"**
3. Check the [Actions tab](https://github.com/git-tarik/portfolio/actions) for build status
4. Verify all configuration files match this README

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by MD TARIK ANVAR**