import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import CardSection from './components/CardSection'

const App = () => {


  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <div className="App">
      <h1 style={{ textAlign: 'center', color:'#172554', }}>System development Methodology *Agile*</h1>
      <CardSection />
    </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default App