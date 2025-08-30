import React from 'react'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  // TODO: Replace these URLs with your actual social media links
  const socialLinks = {
    github: "https://github.com/YOUR_GITHUB_USERNAME", // Replace with your GitHub URL
    linkedin: "https://linkedin.com/in/YOUR_LINKEDIN_USERNAME", // Replace with your LinkedIn URL
    email: "mailto:your.email@example.com" // Replace with your email
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const footerLinks = [
    { href: '#home', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#internships', label: 'Experience' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-primary text-white relative">
      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">MD TARIK ANVAR</h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              AI/ML Engineer & Full Stack Developer passionate about creating innovative 
              solutions that bridge the gap between cutting-edge technology and real-world applications.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href={socialLinks.github}
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-accent hover:scale-110 rounded-lg transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href={socialLinks.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-accent hover:scale-110 rounded-lg transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={socialLinks.email}
                className="p-3 bg-white/10 hover:bg-accent hover:scale-110 rounded-lg transition-all duration-300"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-300 hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="text-sm">Email</p>
                <a 
                  href={socialLinks.email}
                  className="hover:text-accent transition-colors duration-300"
                >
                  your.email@example.com
                </a>
              </div>
              <div>
                <p className="text-sm">Location</p>
                <p>Ranchi, Jharkhand, India</p>
              </div>
              <div>
                <p className="text-sm">Available for</p>
                <p>Internships & Full-time Roles</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-300 text-sm text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start gap-1">
                © {new Date().getFullYear()} MD TARIK ANVAR. Made with{' '}
                <Heart size={16} className="text-red-500 animate-pulse" />
                {' '}and React
              </p>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors duration-300 group"
              aria-label="Back to top"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  )
}

export default Footer