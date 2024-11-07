import React from 'react';
import {skills} from './data/constant'

function SkillCard() {
  return (
    <div className='skillcard-section'>
        {skills.map((item) =>(
            <div className='skillcard-inner'>
                <h3>{item.title}</h3>
                <div className='skillcard-flex'>
                    {item.skills.map((skill) =>
                    <div className='skill-item'>
                        <img className='skillcard-img' src={skill.image} alt="" />
                       <span className='skill-ittem-text'>{skill.name}</span> 
                    </div>
                    )}
                </div>
            </div>
            
            
        ))}
    </div>
  )
}

export default SkillCard