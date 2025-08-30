import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Internships from './components/Internships'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Internships />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App