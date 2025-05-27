import React from 'react'
import { styled } from '@mui/material/styles'
import Fade from '@mui/material/Fade'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip TransitionComponent={Fade} {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    color: '#fff',
    fontSize: '.875rem',
    fontWeight: 'bold',
  },
}))

export default StyledTooltip
