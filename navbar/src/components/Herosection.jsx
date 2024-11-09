import { Bio } from "../data/constant";
import Typewriter from "typewriter-effect";
import HeroImg from "../images/HeroImg.jpg";
import React from 'react';

function Herosection() {
  return (
    <div className='hero-containner' id="about">
      <div className='hero-section'>
        <div className="hero-left">
          <h1 className="hero-title">
            Hi, I am <br />
            {Bio.name}
          </h1>
          <h3 className="hero-loop">
            I am a{" "}
            <span className="hero-row">
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h3>
          <p className="hero-description">{Bio.description}</p>
          <a href={Bio.resume} target="_blank" rel="noopener noreferrer">
            <button className="resume-btn">Resume Button</button>
          </a>
        </div>
        <div className="hero-right">
        <div className="HeroBg">
          {/* <HeroBgAnimation/> */}
        </div>
          <img src={HeroImg} className="hero_img" />
        </div>
      </div>
    </div>
  )
}

export default Herosection