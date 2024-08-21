import React from 'react'
import Header from './assets/components/Header'
import Home from './assets/components/Home'
import Projects from './assets/components/Projects'
import Skills from './assets/components/Skills'
import Contact from './assets/components/Contact'
import Footer from './assets/components/Footer'
import About from './assets/components/About'


const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App