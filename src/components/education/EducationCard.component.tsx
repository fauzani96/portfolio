import React, {useContext} from 'react'

// import {ThemeContext} from '../../contexts/ThemeContext'

import eduImgWhite from '../../assets/images/eduImgWhite.svg'

import Image from 'next/image'
import {Typography} from '@mui/material'

interface EducationProps {
  id: number
  institution: string
  course: string
  startYear: string
  endYear: string
}

function EducationCard({
  id,
  institution,
  course,
  startYear,
  endYear,
}: EducationProps) {
  //   const {theme} = useContext(ThemeContext)

  return (
    // <Fade bottom>
    <div
      key={id}
      className={`education-card`}
      style={{
        backgroundColor: 'rgb(245, 101, 57)',
      }}
    >
      <div className="educard-img" style={{backgroundColor: 'rgb(33, 33, 33)'}}>
        <Image src={eduImgWhite} alt="" />
      </div>
      <div className="education-details">
        <Typography variant="h6" style={{color: 'rgb(33, 33, 33)'}}>
          {startYear}-{endYear}
        </Typography>
        <Typography variant="h4" style={{color: 'white'}}>
          {course}
        </Typography>
        <Typography variant="h5" style={{color: 'white'}}>
          {institution}
        </Typography>
      </div>
    </div>
    // </Fade>
  )
}

export default EducationCard
