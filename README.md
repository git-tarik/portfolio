# MD TARIK ANVAR - Portfolio Website

A modern, responsive portfolio website built with React + Vite + Tailwind CSS, showcasing AI/ML projects, professional experience, and achievements.

## 🚀 Live Demo

Visit the live portfolio: [https://git-tarik.github.io/portfolio](https://git-tarik.github.io/portfolio)

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

### Deployment Process

1. **Push to main branch** - triggers automatic deployment
2. **GitHub Actions** builds the project
3. **Deploys to GitHub Pages** at `https://git-tarik.github.io/portfolio`

### Key Configuration Files

- **`vite.config.js`**: Configured with base path `/portfolio/` for GitHub Pages
- **`.github/workflows/deploy.yml`**: GitHub Actions workflow for deployment
- **`package.json`**: Homepage URL set for GitHub Pages
- **`public/.nojekyll`**: Prevents Jekyll processing

## 🔧 Customization Guide

### 1. Personal Information

**Update Contact Details** in `src/components/Contact.jsx`:
```jsx
const contactInfo = {
  email: "your.email@example.com",
  phone: "+91 XXXXXXXXXX",
  location: "Your City, State, Country",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername"
}
```

**Update Social Links** in `src/components/Header.jsx`:
```jsx
const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  email: "mailto:your.email@example.com"
}
```

### 2. Profile Image

1. Add your profile image to `public/images/profile.jpg`
2. Ensure the image is optimized (recommended: 400x400px, under 200KB)
3. The image will automatically display with fallback to initials if not found

### 3. Resume

1. Add your resume PDF to `public/resume.pdf`
2. The download link will automatically work

### 4. Projects Data

Edit `src/data/projects.json` to add your projects:
```json
{
  "projects": [
    {
      "title": "Your Project Name",
      "short_desc": "Brief description",
      "description": "Detailed description",
      "stack": ["React", "Node.js", "MongoDB"],
      "category": "Web Development",
      "repo_url": "https://github.com/yourusername/project",
      "live_url": "https://yourproject.com",
      "featured": true
    }
  ]
}
```

### 5. Skills Data

Edit `src/data/skills.json` to update your skills and proficiency levels.

### 6. Internship Experience

Edit `src/components/Internships.jsx` to add your internship links:
```jsx
{
  // ... other internship data
  certificateUrl: "https://link-to-your-certificate.pdf",
  repoUrl: "https://github.com/yourusername/internship-project"
}
```

## 🐛 Common GitHub Pages Deployment Issues & Solutions

### Issue 1: "Page Not Rendering"
**Cause**: Asset path issues with GitHub Pages base path
**Solution**: 
- Ensure `vite.config.js` has `base: '/portfolio/'`
- Use absolute paths with base path: `/portfolio/images/image.jpg`
- Never use relative paths like `./images/` in components

### Issue 2: "White Screen on Live Site"
**Cause**: JavaScript/CSS assets not loading
**Solution**:
- Check `package.json` homepage field: `"homepage": "https://yourusername.github.io/repository-name"`
- Ensure `.nojekyll` file exists in `public/` directory
- Use `npm run build` before pushing

### Issue 3: "Images Not Loading"
**Cause**: Image paths not resolving correctly
**Solution**:
- Place all images in `public/images/` directory
- Use paths like `/portfolio/images/image.jpg` in components
- For meta tags, use full URLs: `https://yourusername.github.io/portfolio/images/image.jpg`

### Issue 4: "404 Errors"
**Cause**: GitHub Pages treating as Jekyll site
**Solution**:
- Ensure `public/.nojekyll` file exists
- Check GitHub repository settings > Pages > Source is set to "GitHub Actions"

## 🔄 Development Workflow

### For JSX/Component Changes:
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
3. **Jekyll Processing**: GitHub Pages tries to process files through Jekyll by default
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

If you encounter issues:
1. Check the [Live Demo](https://git-tarik.github.io/portfolio) to see expected behavior
2. Review the GitHub Actions logs in your repository
3. Ensure all configuration files match the examples in this README

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by MD TARIK ANVAR**