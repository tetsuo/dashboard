import { createTheme } from '@mui/material/styles'

const muiTheme = createTheme({
  typography: {
    htmlFontSize: 16,
    fontSize: 14,
    h1: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          padding: '0.62rem 1.2rem',
          fontWeight: 'bold',
          fontSize: '1rem',
          borderRadius: '24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '8px',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          backgroundColor: '#f1f1f1',
          marginBottom: '1.3rem',
          borderBottom: '1px solid #ddd',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '.3rem 1rem 1.15rem 0',
          '& .MuiButton-root:first-of-type': {
            color: '#999',
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: '#888888',
          '&.Mui-checked': {
            color: '#1066e4',
          },
          '&.Mui-checked + .MuiSwitch-track': {
            backgroundColor: '#7e8af9',
          },
        },
        checked: {},
        track: {
          backgroundColor: '#999',
        },
      },
    },
  },
  palette: {
    background: {
      default: '#fff',
    },
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#0418ef',
    },
  },
})

export default muiTheme
