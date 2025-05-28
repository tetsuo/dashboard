import * as React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import LocationProvider from './Location'

export default function RootProvider({ children, theme }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocationProvider>{children}</LocationProvider>
    </ThemeProvider>
  )
}
