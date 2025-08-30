import React from 'react'
import { Github, ExternalLink, Eye } from 'lucide-react'

const ProjectCard = ({ project, delay = 0 }) => {
  const handleRepoClick = (repoUrl) => {
    if (repoUrl.includes('/*')) {
      alert('Please add your GitHub repository URL in src/data/projects.json')
      return
    }
    window.open(repoUrl, '_blank', 'noopener,noreferrer')
  }

  const handleLiveClick = (liveUrl) => {
    if (liveUrl.includes('/*')) {
      alert('Please add your live demo URL in src/data/projects.json')
      return
    }
    window.open(liveUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div 
      className="card p-6 h-full flex flex-col animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Project Image */}
      <div className="relative mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 h-48">
        {/* TODO: Replace with actual project images */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-4xl text-gray-400">
            {project.category === 'AI/ML' ? '🤖' : 
             project.category === 'Web' ? '🌐' : 
             project.category === 'IoT' ? '⚡' : '💻'}
          </div>
        </div>
        {/* 
          Replace the div above with:
          <img 
            src={project.thumbnail} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
        */}
        
        {/* Featured Badge removed as requested */}
        {/* {project.featured && (
          <div className="absolute top-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )} */}

        {/* Category Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-medium">
          {project.category}
        </div>
      </div>

      {/* Project Content */}
      <div className="flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-semibold text-primary mb-2 line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-secondary text-sm leading-relaxed mb-4 flex-1">
          {project.short_desc}
        </p>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">
                +{project.stack.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <button
            onClick={() => handleRepoClick(project.repo_url)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 text-sm font-medium"
            title="View Repository"
          >
            <Github size={16} />
            <span>Code</span>
          </button>
          
          <button
            onClick={() => handleLiveClick(project.live_url)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-accent text-accent hover:bg-accent hover:text-white rounded-lg transition-colors duration-300 text-sm font-medium"
            title="View Live Demo"
          >
            <ExternalLink size={16} />
            <span>Demo</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard