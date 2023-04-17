import {AppBar} from '@mui/material'
import {styled} from '@mui/material/styles'

export const StyledAppBar = styled(AppBar)(({}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  boxShadow: 'none',
  fontFamily: 'BestermindRegular',
}))
