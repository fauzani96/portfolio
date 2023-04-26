import React, {useContext} from 'react'

// import {ThemeContext} from '../../contexts/ThemeContext'
import {Typography} from '@mui/material'
import expImgWhite from '../../assets/images/expImgWhite.svg'

import Image from 'next/image'

interface ExperienceProps {
  id: number
  company: string
  jobtitle: string
  startYear: string
  endYear: string
}

function ExperienceCard({
  id,
  company,
  jobtitle,
  startYear,
  endYear,
}: ExperienceProps) {
  //   const {theme} = useContext(ThemeContext)

  return (
    <div
      key={id}
      className={`experience-card `}
      style={{
        backgroundColor: 'rgb(245, 101, 57)',
      }}
    >
      <div className="expcard-img" style={{backgroundColor: 'rgb(33, 33, 33)'}}>
        <Image src={expImgWhite} alt="" />
      </div>
      <div className="experience-details">
        <Typography variant="h6" style={{color: 'rgb(33, 33, 33)'}}>
          {startYear}-{endYear}
        </Typography>
        <Typography variant="h4" style={{color: 'white'}}>
          {jobtitle}
        </Typography>
        <Typography variant="h5" style={{color: 'white'}}>
          {company}
        </Typography>
      </div>
    </div>
  )
}

export default ExperienceCard
