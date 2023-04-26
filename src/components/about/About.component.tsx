import React, {useContext} from 'react'

import BoyImage from '../../assets/images/orangeTheme-boy.svg'
import {aboutData} from './About.data'
import Image from 'next/image'
// import {ThemeContext} from '../../contexts/ThemeContext'

function About() {
  // const {theme} = useContext(ThemeContext)
  return (
    <div
      className="about"
      id="about"
      style={{backgroundColor: 'rgb(33, 33, 33)'}}
    >
      <div className="line-styling">
        <div
          className="style-circle"
          style={{backgroundColor: 'rgb(245, 101, 57)'}}
        ></div>
        <div
          className="style-circle"
          style={{backgroundColor: 'rgb(245, 101, 57)'}}
        ></div>
        <div
          className="style-line"
          style={{backgroundColor: 'rgb(245, 101, 57)'}}
        ></div>
      </div>
      <div className="about-body">
        <div className="about-description">
          <h2 style={{color: 'white'}}>{aboutData.title}</h2>
          <p style={{color: 'white'}}>
            {aboutData.description1}
            <br />
            <br />
            {aboutData.description2}
          </p>
        </div>
        <div className="about-img">
          <Image src={BoyImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
