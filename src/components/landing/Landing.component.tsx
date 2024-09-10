import {Avatar, Chip, Typography} from '@mui/material'
import Box from '@mui/material/Box'
import Image from 'next/image'
import GithubIcon from '../../assets/images/github.svg'
import InstagramIcon from '../../assets/images/instagram.svg'
import LinkinIcon from '../../assets/images/linkedin.svg'
import TwitterIcon from '../../assets/images/twitter.svg'

const socialLinks = [
  {
    alt: 'linkedin',
    icon: LinkinIcon,
    url: 'https://www.linkedin.com/in/fauzanisa/',
  },
  {
    alt: 'github',
    icon: GithubIcon,
    url: 'https://github.com/fauzani96',
  },
  {
    alt: 'twitter',
    icon: TwitterIcon,
    url: 'https://twitter.com/FauzaniShahAlll',
  },
  {
    alt: 'instagram',
    icon: InstagramIcon,
    url: 'https://www.instagram.com/fauzanishahallam/',
  },
]

const Landing = () => {
  return (
    <Box
      sx={{pt: 10, pl: 4, pb: 4, pr: 4, backgroundColor: 'rgb(245, 101, 57)'}}
    >
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
          minHeight: 'calc(100vh - 148px)',
        }}
      >
        <Avatar
          sx={{
            width: {xs: 200, lg: 400},
            height: {xs: 200, lg: 400},
            ml: {lg: 24},
          }}
          src={'https://i.ibb.co/VxfD2DF/cv-phoy.jpg'}
        />
        <Box
          sx={{
            mx: {lg: 16},
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
            her attention. It was the clouds. The deepgreen that isn&apos;t the
            color of clouds, but came with these. She knew what was coming and
            she hoped she was prepared
          </Typography>
          <Box sx={{display: 'flex', gap: 2}}>
            <Chip
              label="Download CV"
              clickable
              component="a"
              href={
                'https://drive.google.com/file/d/1u0hjR4oaUS8x4FEF9ZGhYQvlKEwBu4oD/view?usp=drive_link'
              }
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              color="primary"
            />
            <Chip
              label="Contact"
              component="a"
              href="https://wa.me/+6289510615099"
              clickable
              variant="filled"
              color="primary"
              target="_blank"
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{display: 'flex', gap: 2}}>
        {socialLinks.map((res, i) => (
          <a href={res.url} key={i}>
            <Image alt={res.alt} src={res.icon} height={30} width={30} />
          </a>
        ))}
      </Box>
    </Box>
  )
}

export default Landing
