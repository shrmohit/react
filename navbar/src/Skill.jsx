import React from 'react'
import { skills } from './data/constant';
import SkillCard from './SkillCard';

function Skill() {
  return (
    <div className='skill-container'>
      <div className='skill-section'>
        <h1>Skills</h1>
        <p>Here are some of my skills on which i have been working on for the past 1 years.</p>
        <div className='skillcard-container'>
          <SkillCard/>
        </div>
      </div>
    </div>
  )
}

export default Skill