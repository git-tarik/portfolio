import React from 'react'
import { Building2, Calendar, MapPin, ExternalLink } from 'lucide-react'

const InternshipCard = ({ internship, delay = 0 }) => {
  return (
    <div 
      className="card p-6 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col md:flex-row gap-4">
        {/* Company Logo/Icon */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-xl flex items-center justify-center">
            <Building2 size={32} className="text-accent" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="mb-3">
            <h3 className="text-xl font-semibold text-primary mb-1">
              {internship.role}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-secondary text-sm">
              <div className="flex items-center gap-1">
                <Building2 size={16} />
                <span className="font-medium">{internship.company}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{internship.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>{internship.location}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-secondary mb-4 leading-relaxed">
            {internship.description}
          </p>

          {/* Key Achievements */}
          <div className="mb-4">
            <h4 className="font-semibold text-primary mb-2">Key Contributions:</h4>
            <ul className="space-y-1">
              {internship.achievements.map((achievement, index) => (
                <li key={index} className="text-secondary text-sm flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {internship.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const Internships = () => {
  const internships = [
    {
      role: "Research Intern",
      company: "MANIT Bhopal",
      duration: "Summer 2024",
      location: "Bhopal, India",
      description: "Conducted research on Explainable Hand Gesture Recognition using advanced deep learning techniques. Developed ParallelCNN architecture integrated with XAI methodologies for enhanced model interpretability.",
      achievements: [
        "Implemented ParallelCNN architecture for improved gesture recognition accuracy",
        "Integrated SHAP and Grad-CAM for explainable AI capabilities",
        "Achieved significant performance improvements in gesture classification",
        "Published research findings and documented methodology"
      ],
      technologies: ["Python", "PyTorch", "OpenCV", "SHAP", "Grad-CAM", "Deep Learning"]
    },
    {
      role: "ML Research Intern",
      company: "NIT Rourkela",
      duration: "Winter 2023",
      location: "Rourkela, India",
      description: "Developed comprehensive medical image segmentation pipeline using state-of-the-art deep learning frameworks. Focused on implementing U-Net architecture with PyTorch Lightning for efficient training and deployment.",
      achievements: [
        "Built end-to-end medical image segmentation pipeline",
        "Implemented U-Net architecture with PyTorch Lightning",
        "Optimized training procedures for large medical datasets",
        "Developed data preprocessing and augmentation strategies"
      ],
      technologies: ["Python", "PyTorch Lightning", "U-Net", "Medical Imaging", "Data Science"]
    }
  ]

  return (
    <section id="internships" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Hands-on experience in cutting-edge research and development through internships 
            at prestigious institutions, focusing on AI/ML and computer vision applications.
          </p>
        </div>

        {/* Internships List */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {internships.map((internship, index) => (
            <InternshipCard
              key={index}
              internship={internship}
              delay={index * 200}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in animation-delay-400">
          <div className="card p-6 bg-gradient-to-r from-accent/5 to-blue-500/5 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Seeking New Opportunities
            </h3>
            <p className="text-secondary">
              I'm actively looking for internship and full-time opportunities in AI/ML, 
              software development, and research roles where I can contribute to innovative projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Internships