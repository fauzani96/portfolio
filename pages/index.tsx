import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import type {NextPage} from 'next'
import Copyright from '../src/Copyright'
import {Avatar, Button, Chip, Typography} from '@mui/material'
import Image from 'next/image'
import LinkinIcon from '../src/assets/images/linkedin.svg'
import InstagramIcon from '../src/assets/images/instagram.svg'
import GithubIcon from '../src/assets/images/twitter.svg'
import TwitterIcon from '../src/assets/images/github.svg'
import Link from 'next/link'
import About from './about'

const Home: NextPage = () => {
  const socialLinks = [
    {
      alt: 'linkedin',
      icon: LinkinIcon,
    },
    {
      alt: 'github',
      icon: GithubIcon,
    },
    {
      alt: 'twitter',
      icon: TwitterIcon,
    },
    {
      alt: 'instagram',
      icon: InstagramIcon,
    },
  ]
  return (
    <>
      <Box sx={{mt: 10, p: 4}}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: {
              xs: 'column', // theme.breakpoints.up('xs')
              lg: 'row',
            },
            gap: {
              xs: 4, // theme.breakpoints.up('xs')
              lg: 10,
            },
            minHeight: 'calc(100vh - 174px)',
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
              There wasn&apos;t a bird in the sky, but that was not what caught
              There wasn&apos;t a bird in the sky, but that was not what caught
            </Typography>
            <Box sx={{display: 'flex', gap: 2}}>
              <Chip
                label="Download CV"
                clickable
                variant="outlined"
                color="primary"
              />
              <Chip
                label="Contact"
                clickable
                variant="filled"
                color="primary"
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{display: 'flex', gap: 2}}>
          {socialLinks.map((res, i) => (
            <Image
              key={i}
              alt={res.alt}
              src={res.icon}
              height={30}
              width={30}
            />
          ))}
        </Box>
        <About />
      </Box>
    </>
  )
}

export default Home
