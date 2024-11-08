import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Herosection from './Herosection'
import Skill from './Skill'
import Experience from './Experience'
import Project from './Project'
import Education from './Education'
import Contact from './Contact'
import Footer from './Footer'

function App() {

  return (
    <>
    <Navbar/>
    <Herosection/>
    <Skill/>
    <Experience/>
    <Project/>
    <Education/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
