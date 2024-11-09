import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Herosection from './components/Herosection';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Project from './components/Project';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
