import React, {useContext} from 'react'

// import {ThemeContext} from '../../contexts/ThemeContext'

import {educationData} from './Education.data'
import EducationCard from './EducationCard.component'
import Image from 'next/image'
import eduOrange from '../../assets/images/eduOrange.svg'

function Education() {
  //   const {theme} = useContext(ThemeContext)
  return (
    <div
      className="education"
      id="resume"
      style={{backgroundColor: 'rgb(33, 33, 33)'}}
    >
      <div className="education-body">
        <div className="education-description">
          <h1 style={{color: 'rgb(245, 101, 57)'}}>Education</h1>
          <iframe 
        src="https://eaglepredict.com/widgets/results/abia-warriors-fc/" 
        width="100%" 
        height="650"
            frameBorder="0"
        title="Example Website"
      ></iframe>
          {educationData.map((edu) => (
            <EducationCard
              key={edu.id}
              id={edu.id}
              institution={edu.institution}
              course={edu.course}
              startYear={edu.startYear}
              endYear={edu.endYear}
            />
          ))}
        </div>
        <div className="education-image">
          <Image src={eduOrange} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Education
