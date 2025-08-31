import React, { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const contactInfo = {
    email: "mdtarikanvar.cuj@gmail.com", 
    phone: "+91 6201143306", 
    location: "Ranchi, Jharkhand, India  835222",
    linkedin: "https://www.linkedin.com/in/tarik-anvar/", 
    github: "https://github.com/git-tarik" 
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Using Formspree for form handling - replace with your Formspree endpoint
      const response = await fetch('https://formspree.io/f/mdtarikanvar.cuj@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email
        })
      })
      
      if (response.ok) {
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' })
        alert('Thank you for your message! I will get back to you soon.')
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      // Fallback to mailto
      const subject = encodeURIComponent(formData.subject || 'Portfolio Contact')
      const body = encodeURIComponent(
        `Hi MD TARIK ANVAR,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
      )
      window.open(`mailto:mdtarikanvar.cuj@gmail.com?subject=${subject}&body=${body}`, '_blank')
      alert('Opening your email client as fallback. Please send the message from there.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: contactInfo.email,
      link: `mailto:${contactInfo.email}`,
      description: 'Send me an email'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: contactInfo.phone,
      link: `tel:${contactInfo.phone}`,
      description: 'Give me a call'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: contactInfo.location,
      link: null,
      description: 'Find me here'
    }
  ]

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      link: contactInfo.github,
      description: 'Check out my code'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      link: contactInfo.linkedin,
      description: 'Connect professionally'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, 
            or just having a conversation about technology and AI/ML. Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Let's start a conversation
              </h3>
              <p className="text-secondary leading-relaxed mb-8">
                Whether you're a recruiter looking for talent, a fellow developer wanting to collaborate, 
                or someone interested in AI/ML projects, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center gap-4 p-4 card">
                  <div className="flex-shrink-0 p-3 bg-accent/10 rounded-xl text-accent">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary">{method.label}</h4>
                    <p className="text-secondary text-sm mb-1">{method.description}</p>
                    {method.link ? (
                      <a 
                        href={method.link}
                        className="text-accent hover:underline font-medium"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <span className="text-secondary">{method.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-primary mb-4">Find me online</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 card hover:bg-accent/5 transition-colors duration-300 group"
                    title={social.description}
                  >
                    <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <div>
                      <div className="font-medium text-primary">{social.label}</div>
                      <div className="text-secondary text-sm">{social.description}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in animation-delay-200">
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                <MessageCircle size={24} className="text-accent" />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300 resize-vertical"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Form Note */}
              <p className="text-xs text-secondary mt-4 text-center">
                * This form will open your default email client with the message pre-filled. 
                Alternatively, you can email me directly at{' '}
                <a href={`mailto:${contactInfo.email}`} className="text-accent hover:underline">
                  {contactInfo.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
