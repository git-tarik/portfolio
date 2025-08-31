import React from 'react'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const Education = () => {
  const education = {
    degree: "Integrated BTech + MTech in Computer Science & Engineering",
    specialization: "Machine Learning & Data Science",
    university: "Central University of Jharkhand",
    location: "Ranchi, Jharkhand, India",
    duration: "2022 - 2027",
    cgpa: "9.06",
    year: "Fourth Year",
    highlights: [
      "Specialized in Machine Learning and Data Science",
      "Maintained excellent academic performance with 9.06 CGPA",
      "Active participation in research projects and internships",
      "Focus on AI/ML applications and software development",
      "Hands-on experience with modern development frameworks"
    ],
    relevantCourses: [
      "Machine Learning",
      "Deep Learning",
      "Data Structures & Algorithms",
      "Computer Vision",
      "Natural Language Processing",
      "Database Management Systems",
      "Software Engineering",
      "Web Technologies"
    ]
  }

  return (
    <section id="education" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4">
            Educational <span className="text-gradient">Background</span>
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Strong academic foundation in Computer Science with specialized focus on 
            Machine Learning and Data Science from a prestigious central university.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 animate-fade-in animation-delay-200">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Info */}
              <div className="lg:col-span-2">
                {/* University Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-accent/10 rounded-xl">
                    <GraduationCap size={32} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-primary mb-2">
                      {education.degree}
                    </h3>
                    <p className="text-accent font-semibold mb-2">
                      Specialization: {education.specialization}
                    </p>
                    <div className="flex flex-wrap gap-4 text-secondary text-sm">
                      <div className="flex items-center gap-1">
                        <GraduationCap size={16} />
                        <span className="font-medium">{education.university}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{education.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{education.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3">Academic Highlights:</h4>
                  <ul className="space-y-2">
                    {education.highlights.map((highlight, index) => (
                      <li key={index} className="text-secondary text-sm flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Relevant Courses */}
                <div>
                  <h4 className="font-semibold text-primary mb-3">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {education.relevantCourses.map((course, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats Sidebar */}
              <div className="space-y-6">
                {/* CGPA Card */}
                <div className="card p-6 bg-gradient-to-br from-accent/5 to-blue-500/5 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Award className="text-accent" size={20} />
                    <span className="font-semibold text-primary">CGPA</span>
                  </div>
                  <div className="text-3xl font-bold text-accent mb-1">{education.cgpa}</div>
                  <div className="text-sm text-secondary">Out of 10.0</div>
                </div>

                {/* Current Status */}
                <div className="card p-6 text-center">
                  <div className="text-lg font-semibold text-primary mb-2">
                    Current Status
                  </div>
                  <div className="text-accent font-medium">{education.year}</div>
                  <div className="text-sm text-secondary mt-1">
                    Expected Graduation: 2026
                  </div>
                </div>
                
                  <a 
                    href="https://www.linkedin.com/in/tarik-anvar/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full btn-outline text-center"
                  >
                    {/* TODO: Replace with your LinkedIn URL */}
                    View LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Education Levels */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
            Previous <span className="text-gradient">Education</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Intermediate (Class XII) */}
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <GraduationCap size={24} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary">Intermediate (Class XII)</h4>
                  <p className="text-sm text-secondary">Higher Secondary Education</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-secondary">
                <p>St. Xavier's College of Ranchi</p>
                <p>Jharkhand Academic Council</p>
                <p>2022</p>
                <p>87.4 %</p>
              </div>
            </div>

            {/* High School (Class X) */}
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <GraduationCap size={24} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary">High School (Class X)</h4>
                  <p className="text-sm text-secondary">Secondary Education</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-secondary">
                <p>St. Ignatius High School Gumla</p>
                <p>Jharkhand Academic Council</p>
                <p>2022</p>
                <p>89.8 %</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center animate-fade-in animation-delay-400">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Academic Philosophy
            </h3>
            <p className="text-secondary leading-relaxed">
              I believe in combining theoretical knowledge with practical application. 
              My academic journey has been focused on not just understanding concepts, 
              but implementing them in real-world projects and contributing to research 
              that can make a meaningful impact in the field of AI and software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
