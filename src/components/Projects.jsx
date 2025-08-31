import React, { useState } from 'react'
import { Filter } from 'lucide-react'
import ProjectCard from './ProjectCard'
import projectsData from '../data/projects.json'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All' 
    ? projectsData.projects 
    : projectsData.projects.filter(project => project.category === activeFilter)

  const handleFilterClick = (category) => {
    setActiveFilter(category)
  }

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto mb-8">
            A showcase of my recent work in AI/ML, web development, and IoT. Each project 
            demonstrates my ability to solve real-world problems using modern technologies.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 text-sm text-secondary mb-2">
              <Filter size={16} />
              <span>Filter by category:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {projectsData.categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleFilterClick(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-accent text-white shadow-lg transform scale-105'
                      : 'bg-white text-secondary hover:bg-accent/10 hover:text-accent'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-sm">
              <ProjectCard
                project={project}
                delay={index * 150}
              />
            </div>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-primary mb-2">No projects found</h3>
            <p className="text-secondary">Try selecting a different category</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in animation-delay-600">
          <div className="card p-8 bg-gradient-to-r from-accent/5 to-blue-500/5">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Interested in collaborating?
            </h3>
            <p className="text-secondary mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, innovative projects, 
              and ways we can work together to build something amazing.
            </p>
            <button
              onClick={() => {
                const contactSection = document.querySelector('#contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="btn-primary"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* GitHub Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-secondary">
            <span className="inline-block mr-2">💡</span>
            More projects and contributions can be found on my{' '}
            <a 
              href="https://github.com/git-tarik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              {"https://github.com/git-tarik"}
              GitHub profile
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects