import React from 'react'
import { skills } from './data/constant';

function Skill() {
  return (
    <div>
      <div>
        <h1>Skills</h1>
        <p>Here are some of my skills on which i have been working on for the past 1 years.</p>
        <div>
          <SkillCard/>
        </div>
      </div>
    </div>
  )
}

export default Skill