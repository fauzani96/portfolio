import React, {useContext} from 'react'
import {experienceData} from './Experience.data'
import ExperienceCard from './ExperienceCard.component'
import Image from 'next/image'
import expOrange from '../../assets/images/expOrange.svg'
// import {ThemeContext} from '../../contexts/ThemeContext'

function Experience() {
  //   const {theme} = useContext(ThemeContext)
  return (
    <div
      className="experience"
      id="experience"
      style={{backgroundColor: 'rgb(33, 33, 33)'}}
    >
      <div className="experience-body">
        <div className="experience-image">
          <Image src={expOrange} alt="" />
        </div>
        <div className="experience-description">
          <h1 style={{color: 'rgb(245, 101, 57)'}}>Experience</h1>
          {experienceData.map((exp) => (
            <ExperienceCard
              key={exp.id}
              id={exp.id}
              jobtitle={exp.jobtitle}
              company={exp.company}
              startYear={exp.startYear}
              endYear={exp.endYear}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
