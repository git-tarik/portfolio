import React from 'react'
import { ChevronDown, Download, MapPin, GraduationCap } from 'lucide-react'

const Hero = () => {
  const scrollToSkills = () => {
    const skillsSection = document.querySelector('#skills')
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-light via-white to-light relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-accent font-semibold text-lg">Hello, I'm</p>
              <h1 className="heading-xl text-gradient">
                MD TARIK ANVAR
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary">
                AI/ML Engineer & Full Stack Developer
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-secondary leading-relaxed max-w-2xl">
                Fourth-year CSE student specializing in <span className="text-accent font-semibold">Artificial Intelligence</span> and 
                <span className="text-accent font-semibold"> Machine Learning</span>. Passionate about building intelligent systems 
                and creating innovative web solutions that make a difference.
              </p>
              
              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-secondary">
                <div className="flex items-center gap-2">
                  <GraduationCap size={16} className="text-accent" />
                  <span>BTech+MTech CSE (ML & DS)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-accent" />
                  <span>Central University of Jharkhand</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToSkills}
                className="btn-primary flex items-center gap-2 justify-center"
              >
                View My Work
                <ChevronDown size={20} />
              </button>
              {/* Resume download button removed as requested */}
              {/* <a 
                href="/resume.pdf" 
                download="MD_TARIK_ANVAR_Resume.pdf"
                className="btn-outline flex items-center gap-2 justify-center"
              >
                <Download size={20} />
                Download Resume
              </a> */}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">9.06</div>
                <div className="text-sm text-secondary">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-secondary">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2</div>
                <div className="text-sm text-secondary">Internships</div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in animation-delay-200">
            <div className="relative">
              {/* Background circle */}
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-full flex items-center justify-center">
                {/* Profile image */}
                <div className="w-72 h-72 md:w-88 md:h-88 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="/portfolio/images/profile.jpg" 
                    alt="MD TARIK ANVAR - AI/ML Engineer"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback initials (hidden by default) */}
                  <div className="text-6xl text-gray-500 font-bold absolute inset-0 flex items-center justify-center" style={{display: 'none'}}>TA</div>
                </div>
              </div>
              
              {/* Floating elements removed as requested */}
              {/* <div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-lg animate-bounce">
                <span className="text-2xl">🤖</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-2xl shadow-lg animate-bounce animation-delay-400">
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute top-1/2 -right-8 bg-white p-3 rounded-2xl shadow-lg animate-bounce animation-delay-600">
                <span className="text-2xl">⚡</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator animation removed as requested */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToSkills}
          className="text-secondary hover:text-accent transition-colors duration-300"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  )
}

export default Hero