import React, { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#internships', label: 'Experience' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ]

  // TODO: Replace these URLs with your actual social media links
  const socialLinks = {
    github: "https://github.com/YOUR_GITHUB_USERNAME", // Replace with your GitHub URL
    linkedin: "https://linkedin.com/in/YOUR_LINKEDIN_USERNAME", // Replace with your LinkedIn URL
    email: "mailto:your.email@example.com" // Replace with your email
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Brand */}
          <div className="flex items-center">
            {/* Name removed from navbar as requested */}
            <button 
              onClick={() => scrollToSection('#home')}
              className="text-2xl font-bold text-primary hover:text-accent transition-colors duration-300"
            >
              {/* MD TARIK ANVAR */}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-secondary hover:text-accent font-medium transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Social Links & Resume Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={socialLinks.github}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a 
              href={socialLinks.linkedin}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={socialLinks.email}
              className="text-secondary hover:text-accent transition-colors duration-300"
              aria-label="Send Email"
            >
              <Mail size={20} />
            </a>
            {/* Resume download button removed as requested */}
            {/* <a 
              href="/resume.pdf" 
              download="MD_TARIK_ANVAR_Resume.pdf"
              className="btn-primary ml-4"
            >
              Download Resume
            </a> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary hover:text-accent transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t">
            <nav className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-secondary hover:text-accent font-medium transition-colors duration-300 text-left py-2"
                  >
                    {link.label}
                  </button>
                ))}
                
                {/* Mobile Social Links */}
                <div className="flex items-center space-x-4 pt-4 border-t">
                  <a 
                    href={socialLinks.github}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-accent transition-colors duration-300"
                    aria-label="GitHub Profile"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={socialLinks.linkedin}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-accent transition-colors duration-300"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href={socialLinks.email}
                    className="text-secondary hover:text-accent transition-colors duration-300"
                    aria-label="Send Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
                
                {/* Mobile Resume Button removed as requested */}
                {/* <a 
                  href="/resume.pdf" 
                  download="MD_TARIK_ANVAR_Resume.pdf"
                  className="btn-primary text-center mt-4"
                >
                  Download Resume
                </a> */}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header