import {AppBar, Toolbar} from '@mui/material'
import HideOnScroll from '../../hooks/HideonScroll.hook'
import MenuIcon from '@mui/icons-material/Menu'
import {StyledAppBar} from './Navbar.style'

const pages = ['Products', 'Pricing', 'Blog']

const Navbar = () => {
  return (
    <>
      <HideOnScroll>
        <StyledAppBar color="transparent" sx={{px: 2, py: 2}}>
          <h1>Fauzani Shah Allam</h1>
          {/* <MenuIcon fontSize="large" /> */}
        </StyledAppBar>
      </HideOnScroll>
      {/* <Toolbar /> */}
    </>
  )
}

export default Navbar
