import React from 'react'
import { Info } from 'lucide-react'
import skillsData from '../data/skills.json'

const SkillBar = ({ skill, percentage, delay = 0 }) => {
  return (
    <div className="space-y-2" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex justify-between items-center">
        <span className="font-medium text-primary">{skill}</span>
        <span className="text-sm text-secondary">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-accent to-blue-500 rounded-full transition-all duration-1000 ease-out animate-slide-up"
          style={{ 
            width: `${percentage}%`,
            animationDelay: `${delay}ms`
          }}
        />
      </div>
    </div>
  )
}

const SkillCategory = ({ title, skills, icon, delay = 0 }) => {
  return (
    <div className="card p-6 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar 
            key={skill.name}
            skill={skill.name}
            percentage={skill.level}
            delay={delay + (index * 100)}
          />
        ))}
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains, 
            from AI/ML frameworks to full-stack development tools.
          </p>
          
          {/* Rating Explanation */}
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-secondary">
            <Info size={16} className="text-accent" />
            <span>Skill ratings are self-assessed and editable in the code</span>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.categories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              delay={index * 200}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center animate-fade-in animation-delay-600">
          <div className="card p-6 bg-gradient-to-r from-accent/5 to-blue-500/5">
            <h3 className="text-lg font-semibold text-primary mb-2">Continuous Learning</h3>
            <p className="text-secondary">
              I'm constantly expanding my skill set through hands-on projects, online courses, 
              and staying updated with the latest technologies in AI/ML and web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills