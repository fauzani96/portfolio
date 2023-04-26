import * as React from 'react'
import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      color="#fff"
      sx={{background: 'rgb(33, 33, 33)'}}
      align="center"
    >
      {'Copyright © '}
      <MuiLink color="#fff" href="https://github.com/fauzani96/portfolio">
        Github
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}
