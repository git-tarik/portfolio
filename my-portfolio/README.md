# MD TARIK ANVAR - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS, showcasing my projects, skills, and experience as an AI/ML Engineer and Full Stack Developer.

![Portfolio Preview](https://via.placeholder.com/800x400/06b6d4/ffffff?text=Portfolio+Website+Preview)

## 🚀 Features

- **Modern Design**: Clean, professional design optimized for recruiters
- **Fully Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Accessible**: Semantic HTML, alt texts, and ARIA labels for screen readers
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Interactive UI**: Smooth animations, hover effects, and skill rating bars
- **Project Showcase**: Filterable project cards with live demo and repo links
- **Easy Deployment**: GitHub Pages ready with automated CI/CD

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with GitHub Actions
- **Development**: Hot reload, ESLint, PostCSS

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg              # Your profile photo (replace)
│   │   └── project-thumbs/          # Project thumbnail images
│   ├── resume.pdf                   # Your resume PDF (replace)
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx               # Navigation header
│   │   ├── Hero.jsx                 # Hero section with intro
│   │   ├── Skills.jsx               # Skills with rating bars
│   │   ├── Projects.jsx             # Project showcase with filtering
│   │   ├── ProjectCard.jsx          # Individual project cards
│   │   ├── Internships.jsx          # Experience section
│   │   ├── Achievements.jsx         # Certifications and awards
│   │   ├── Education.jsx            # Educational background
│   │   ├── Contact.jsx              # Contact form and info
│   │   └── Footer.jsx               # Footer with links
│   ├── data/
│   │   ├── projects.json            # Project data (edit here)
│   │   └── skills.json              # Skills data (edit here)
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Global styles
├── .github/workflows/
│   └── deploy.yml                   # GitHub Pages deployment
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The site will auto-reload when you make changes

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## ✏️ Customization Guide

### 🖼️ Replace Placeholder Content

#### 1. Profile Photo
- Add your professional photo to `public/images/profile.jpg`
- Recommended: 400x400px, square, under 500KB
- Update `src/components/Hero.jsx` to uncomment the image code

#### 2. Resume PDF
- Replace `public/resume.pdf` with your actual resume
- Keep the filename as `resume.pdf` for download links to work

#### 3. Project Images
- Add project screenshots to `public/images/project-thumbs/`
- Recommended: 600x400px, under 200KB each
- Update filenames in `src/data/projects.json`

### 📝 Update Personal Information

#### 1. Basic Info (Multiple Files)
Replace these placeholders throughout the codebase:

- `YOUR_GITHUB_USERNAME` → Your GitHub username
- `YOUR_LINKEDIN_USERNAME` → Your LinkedIn username  
- `your.email@example.com` → Your email address
- `+91 XXXXX XXXXX` → Your phone number (optional)

**Files to update:**
- `src/components/Header.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`
- `src/components/Achievements.jsx`
- `src/components/Projects.jsx`

#### 2. Projects Data
Edit `src/data/projects.json`:
```json
{
  "projects": [
    {
      "title": "Your Project Title",
      "short_desc": "Brief description",
      "repo_url": "https://github.com/yourusername/project",
      "live_url": "https://yourproject.com",
      // ... other fields
    }
  ]
}
```

#### 3. Skills & Ratings
Edit `src/data/skills.json`:
```json
{
  "categories": [
    {
      "title": "Programming",
      "skills": [
        { "name": "Python", "level": 90 },
        // ... add your skills with ratings 0-100
      ]
    }
  ]
}
```

### 🎨 Customize Colors & Styling

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'primary': '#0f172a',    // Dark blue-black
      'accent': '#06b6d4',     // Teal
      'secondary': '#64748b',  // Gray
      'light': '#f8fafc',      // Light gray
    },
  },
}
```

### 📧 Contact Form Setup

The contact form currently uses `mailto:` links. For a backend solution:

1. **Option 1: Formspree**
   - Sign up at [Formspree](https://formspree.io)
   - Replace form action in `Contact.jsx`

2. **Option 2: Netlify Forms**
   - Add `netlify` attribute to form
   - Deploy on Netlify

3. **Option 3: Custom Backend**
   - Create your own API endpoint
   - Update form submission logic

## 🌐 Deployment

### GitHub Pages (Recommended)

#### Option 1: Automatic Deployment with GitHub Actions

1. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Source: "GitHub Actions"

2. **Update package.json**
   ```json
   {
     "homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME"
   }
   ```

3. **Push to main branch**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

The GitHub Action will automatically build and deploy your site!

#### Option 2: Manual Deployment with gh-pages

1. **Install gh-pages**
   ```bash
   npm install -D gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Other Hosting Options

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect GitHub
- **Cloudflare Pages**: Connect GitHub for automatic builds

## ✅ Pre-Launch Checklist

Before publishing your portfolio, ensure you've completed:

- [ ] **Replace profile image** (`public/images/profile.jpg`)
- [ ] **Update resume PDF** (`public/resume.pdf`)
- [ ] **Add project screenshots** (`public/images/project-thumbs/`)
- [ ] **Update all social media links** (GitHub, LinkedIn, email)
- [ ] **Edit project data** (`src/data/projects.json`)
- [ ] **Customize skills and ratings** (`src/data/skills.json`)
- [ ] **Update homepage URL** in `package.json`
- [ ] **Test all links and downloads**
- [ ] **Verify mobile responsiveness**
- [ ] **Check accessibility** (alt texts, contrast)
- [ ] **Enable GitHub Pages** in repository settings
- [ ] **Test deployment** and live site functionality

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

### Adding New Sections

1. Create component in `src/components/`
2. Import and add to `src/App.jsx`
3. Add navigation link in `Header.jsx`
4. Update `Footer.jsx` if needed

### Performance Tips

- Optimize images (use WebP format, compress files)
- Lazy load images for better performance
- Minify CSS and JavaScript (handled by Vite)
- Use a CDN for faster loading

## 🆘 Troubleshooting

### Common Issues

**Build fails with "Module not found"**
- Check all import paths are correct
- Ensure all dependencies are installed: `npm install`

**Images not showing**
- Verify image paths start with `/` for public folder
- Check image files exist in correct locations
- Ensure proper file extensions (.jpg, .png, etc.)

**GitHub Pages not updating**
- Check Actions tab for build errors
- Verify GitHub Pages source is set to "GitHub Actions"
- Clear browser cache and wait a few minutes

**Links not working**
- Update all placeholder URLs with your actual links
- Test links locally before deploying

### Getting Help

- Check browser console for JavaScript errors
- Verify all required files are in place
- Test locally before deploying: `npm run build && npm run preview`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a personal portfolio template, but suggestions and improvements are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests
- Share your customized versions

## 📞 Support

If you need help customizing this portfolio:

- Open an issue on GitHub
- Check the documentation above
- Review the component files for examples

---

**Happy coding! 🚀**

*Made with ❤️ by MD TARIK ANVAR*