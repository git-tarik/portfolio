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
          <div className="flex items-start justify-between gap-4">
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
              <div className="flex flex-wrap items-center gap-4 text-xs text-secondary">
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
              <button
                onClick={() => handleLinkClick(achievement.verificationUrl)}
                className="flex-shrink-0 p-2 text-accent hover:bg-accent/10 rounded-lg transition-colors duration-300"
                title="View Certificate"
              >
                <ExternalLink size={16} />
              </button>
            )}
          </div>
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
      date: "2024",
      rank: "Semifinalist",
      verificationUrl: "/* ADD_YOUR_CERTIFICATE_LINK_HERE */"
    },
    {
      title: "GATE 2025 Qualified",
      issuer: "Government of India",
      type: "exam",
      description: "Successfully qualified the Graduate Aptitude Test in Engineering (GATE) 2025, demonstrating strong technical aptitude in Computer Science.",
      date: "2025",
      score: "Qualified",
      verificationUrl: "/* ADD_YOUR_SCORECARD_LINK_HERE */"
    }
  ]

  // Certifications
  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "NPTEL",
      type: "certification",
      description: "Completed comprehensive machine learning course covering supervised learning, unsupervised learning, and neural networks with hands-on projects.",
      date: "2024",
      score: "Elite Grade",
      verificationUrl: "/* ADD_YOUR_CERTIFICATE_LINK_HERE */"
    },
    {
      title: "Deep Learning Fundamentals",
      issuer: "NPTEL",
      type: "certification",
      description: "Mastered deep learning concepts including neural networks, CNNs, RNNs, and advanced architectures with practical implementations.",
      date: "2024",
      score: "Elite Grade",
      verificationUrl: "/* ADD_YOUR_CERTIFICATE_LINK_HERE */"
    },
    {
      title: "Python for Data Science",
      issuer: "NPTEL",
      type: "certification",
      description: "Comprehensive certification in Python programming for data science, covering NumPy, Pandas, Matplotlib, and statistical analysis.",
      date: "2023",
      score: "Elite Grade",
      verificationUrl: "/* ADD_YOUR_CERTIFICATE_LINK_HERE */"
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "NPTEL",
      type: "certification",
      description: "Advanced certification in algorithms and data structures, covering complexity analysis, graph algorithms, and optimization techniques.",
      date: "2023",
      score: "Elite Grade",
      verificationUrl: "/* ADD_YOUR_CERTIFICATE_LINK_HERE */"
    }
  ]

  const stats = [
    { label: "Certifications", value: "6+", icon: "🏆" },
    { label: "CGPA", value: "9.06", icon: "📚" },
    { label: "Competitions", value: "3+", icon: "🚀" },
    { label: "Elite Grades", value: "5", icon: "⭐" }
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="card p-6 text-center animate-fade-in"
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
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {highlights.map((achievement, index) => (
              <AchievementCard
                key={index}
                achievement={achievement}
                delay={(index + 4) * 150}
              />
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
            <span className="text-gradient">Certifications</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {certifications.map((achievement, index) => (
              <AchievementCard
                key={index}
                achievement={achievement}
                delay={(index + highlights.length + 4) * 150}
              />
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {/* TODO: Replace with your LinkedIn URL */}
                View LinkedIn Profile
              </a>
              {/* Resume download link removed as requested */}
              {/* <a 
                href="/resume.pdf" 
                download="MD_TARIK_ANVAR_Resume.pdf"
                className="btn-outline"
              >
                Download Full Resume
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements