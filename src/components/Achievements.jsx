import React from 'react'
import { Award, Trophy, FileText, Star, ExternalLink } from 'lucide-react'

const AchievementCard = ({ achievement, delay = 0 }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'competition':
        return <Trophy className="text-yellow-500" size={24} />
      case 'certification':
        return <FileText className="text-blue-500" size={24} />
      case 'exam':
        return <Star className="text-green-500" size={24} />
      default:
        return <Award className="text-accent" size={24} />
    }
  }

  const handleLinkClick = (url) => {
    if (url && !url.includes('ADD_YOUR_LINK')) {
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      alert('Certificate/verification link not available')
    }
  }

  return (
    <div 
      className="card p-6 animate-fade-in hover:shadow-xl transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 p-3 bg-gray-50 rounded-xl">
          {getIcon(achievement.type)}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-primary mb-1">
              {achievement.title}
            </h3>
            <p className="text-accent font-medium text-sm mb-2">
              {achievement.issuer}
            </p>
            <p className="text-secondary text-sm leading-relaxed mb-3">
              {achievement.description}
            </p>
            
            {/* Date and additional info */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-secondary mb-4">
              <span>{achievement.date}</span>
              {achievement.score && (
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                  {achievement.score}
                </span>
              )}
              {achievement.rank && (
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full font-medium">
                  {achievement.rank}
                </span>
              )}
            </div>
          </div>

          {/* Verification Link */}
          {achievement.verificationUrl && (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => handleLinkClick(achievement.verificationUrl)}
                className="flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors duration-300 text-sm font-medium"
                title="View Certificate"
              >
                <ExternalLink size={16} />
                <span>View Certificate</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const Achievements = () => {
  // Highlights (Key Achievements)
  const highlights = [
    {
      title: "Bajaj Finserv HackRx 6.0 Semifinalist",
      issuer: "Bajaj Finserv",
      type: "competition",
      description: "Qualified for the semifinals of one of India's premier hackathons, competing among thousands of participants with innovative fintech solutions.",
      date: "2025",
      rank: "Semifinalist",
      verificationUrl: "https://github.com/rohitmahali01/LIT-RAG"
    },
    {
      title: "GATE 2025 Qualified",
      issuer: "Government of India",
      type: "exam",
      description: "Successfully qualified the Graduate Aptitude Test in Engineering (GATE) 2025, demonstrating strong technical aptitude in Computer Science.",
      date: "2025",
      score: "Qualified",
      verificationUrl: "https://drive.google.com/file/d/1I0_msoa9pNmdx0KgwI-2FAG8HbxCS3a1/view?usp=sharing"
    }
  ]

  // Certifications
  const certifications = [
    {
      title: " Digital Design with Verilog from NPTEL",
      issuer: "NPTEL",
      type: "certification",
      description: "Certified in Digital Design with Verilog (NPTEL, IIT Guwahati) — Skilled in FSMs, RTL, and Verilog-based hardware design.",
      date: "2024",
      score: "50%",
      verificationUrl: "https://drive.google.com/file/d/1C7AM2tZJYrZqspHN0a8yDpsiR0KGPaoK/view?usp=sharing"
    },
    {
      title: "Programming in JAVA from NPTEL",
      issuer: "NPTEL",
      type: "certification",
      description: "Certified in Programming in Java (NPTEL, IIT Kharagpur) — Secured 75% (Elite, Top 5% among 15,570 candidates); gained expertise in OOP, exception handling, multithreading, collections, and JDBC",
      date: "2024",
      score: "Elite + Silver",
      verificationUrl: "https://drive.google.com/file/d/1D6Rrjgdi_OKsx2SA-o9Thi2jMSJarCou/view?usp=sharing"
    },
    {
      title: "Deloitte Australia Data Analytics Job Sumulation on Forage -JUNE 2025.",
      issuer: "FORAGE",
      type: "certification",
      description: "Completed practical tasks in data analysis and forensic technology, applying real-world techniques for problem-solving and decision-making in business scenarios",
      score: "Completed",
      verificationUrl: "https://drive.google.com/file/d/1SnAhJXs6n8hrlLaiAL0hItDgKRjAY2xt/view?usp=sharing"
    }
  ]

  const stats = [
    { label: "Certifications", value: "5+", icon: "🏆" },
    { label: "CGPA", value: "9.06", icon: "📚" },
    { label: "Competitions", value: "2+", icon: "🚀" }
  ]

  return (
    <section id="achievements" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4">
            Achievements & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Recognition of my dedication to continuous learning and excellence in 
            academics, competitions, and professional development.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="card p-6 text-center animate-fade-in min-w-[150px]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Key Achievements Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
            Key <span className="text-gradient">Achievements</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {highlights.map((achievement, index) => (
              <div key={index} className="w-full md:w-[calc(50%-12px)] max-w-lg">
                <AchievementCard
                  achievement={achievement}
                  delay={(index + 4) * 150}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
            <span className="text-gradient">Certifications</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {certifications.map((achievement, index) => (
              <div key={index} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-lg">
                <AchievementCard
                  achievement={achievement}
                  delay={(index + highlights.length + 4) * 150}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in animation-delay-600">
          <div className="card p-8 bg-gradient-to-r from-accent/5 to-blue-500/5 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-secondary mb-6">
              I believe in lifelong learning and constantly update my skills through 
              courses, competitions, and hands-on projects to stay at the forefront of technology.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://www.linkedin.com/in/tarik-anvar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements