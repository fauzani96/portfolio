import React, {useContext} from 'react'

// import {ThemeContext} from '../../contexts/ThemeContext'
import {List, ListItem, Typography} from '@mui/material'
import expImgWhite from '../../assets/images/expImgWhite.svg'

import Image from 'next/image'
import CodeIcon from '@mui/icons-material/Code'

interface ExperienceProps {
  id: number
  company: string
  jobtitle: string
  startYear: string
  endYear: string
  techStack: string[]
}

function ExperienceCard({
  id,
  company,
  jobtitle,
  startYear,
  endYear,
  techStack,
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
        <Image src={expImgWhite} alt="" width={36} height={36} />
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
        <List>
          {techStack.map((res, i) => (
            <ListItem key={i} style={{gap: 8}}>
              <CodeIcon />
              {res}
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  )
}

export default ExperienceCard
