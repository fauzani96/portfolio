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
                'https://export-download.canva.com/J3MMI/DAFgF9J3MMI/32/0-3441203044.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20230425%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230425T101840Z&X-Amz-Expires=68523&X-Amz-Signature=b16ac61626fc112960acc67139a2eb0bcace70bb7b2b3d66fe18e0f1b2840e4f&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Muhammad%2520fauzani%2520shah%2520allam.pdf&response-expires=Wed%2C%2026%20Apr%202023%2005%3A20%3A43%20GMT'
              }
              download="resume"
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
