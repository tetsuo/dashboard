import * as React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import LocationProvider from './Location'
import rootTheme from './muiTheme'

export default function RootProvider({ children }) {
  return (
    <ThemeProvider theme={rootTheme}>
      <CssBaseline />
      <LocationProvider>{children}</LocationProvider>
    </ThemeProvider>
  )
}
