import {createTheme, responsiveFontSizes} from '@mui/material/styles'
import {red} from '@mui/material/colors'

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(33, 33, 33)',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
})

theme = responsiveFontSizes(theme)

export default theme
