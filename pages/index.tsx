import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import type {NextPage} from 'next'
import Copyright from '../src/Copyright'
import {Avatar, Button, Chip, Typography} from '@mui/material'

const Home: NextPage = () => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: {
            xs: 'column', // theme.breakpoints.up('xs')
            lg: 'row',
          },
          gap: 10,
          minHeight: 'calc(100vh - 84px)',
        }}
      >
        <Avatar
          sx={{width: {xs: 200, lg: 400}, height: {xs: 200, lg: 400}}}
          src="https://raw.githubusercontent.com/PhantomScript/asset-container/main/developer-portfolio/landingImg.png"
        />
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexDirection: 'column',
          }}
        >
          <Typography variant="h5">Front End Developer</Typography>
          <Typography variant="h3" fontWeight={500}>
            Muhammad Fauzani Shah Allam
          </Typography>
          <Typography variant="h6">
            There wasn&apos;t a bird in the sky, but that was not what caught
            her attention. It was the clouds. The deep green that isn&apos;t the
            color of clouds, but came with these. She knew what was coming and
            she hoped she was prepared.
          </Typography>
          <Box sx={{display: 'flex', gap: 2}}>
            <Chip
              label="Download CV"
              clickable
              variant="outlined"
              color="primary"
            />
            <Chip label="Contact" clickable variant="filled" color="primary" />
          </Box>
        </Box>
      </Box>
      <Copyright />
    </Container>
  )
}

export default Home
