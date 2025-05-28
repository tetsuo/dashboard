import { createTheme } from '@mui/material/styles'

const theme = createTheme({
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
          borderRadius: 24,
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
          borderRadius: 6,
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
          '.MuiButton-root:first-of-type': {
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
    MuiCard: {
      styleOverrides: {
        root: {
          minWidth: 380,
          boxShadow: 'none',
          border: '1px solid #ccc',
          backgroundColor: 'transparent',
          '.MuiCardContent-root:last-child': {
            padding: 0,
          },
          '&.danger': {
            border: '1px solid #ff9139',
            backgroundColor: '#fff5f5',
          },
          variants: [
            {
              props: { variant: 'action' },
              style: {
                '> .MuiCardContent-root': {
                  paddingBottom: 0,
                  '.MuiContainer-root': {
                    width: '100%',
                    backgroundColor: 'transparent',
                    '.MuiList-root': {
                      padding: 0,
                      '.MuiListItemIcon-root': {
                        flexDirection: 'row-reverse',
                      },
                      '.MuiListItemText-root:first-of-type .MuiTypography-root': {
                        color: '#666',
                      },
                      '.MuiListItemButton-root .MuiContainer-root': {
                        width: '100%',
                        padding: '14px 0px',
                        paddingTop: 10,
                        '> .MuiTypography-root': {
                          fontSize: '1.2rem',
                          marginBottom: 8,
                        },
                        '.MuiListItemText-root': {
                          margin: 0,
                          '.MuiTypography-root': {
                            fontSize: '1rem',
                            color: 'rgba(0, 0, 0, 0.87)',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            {
              props: { variant: 'summary' },
              style: {
                '> .MuiCardContent-root .MuiContainer-root': {
                  '&:first-of-type': {
                    marginTop: 2,
                    padding: 16,
                    '> .MuiTypography-root': {
                      fontSize: '1rem',
                      '&:first-of-type': {
                        fontSize: '1.2rem',
                        marginBottom: 8,
                      },
                    },
                  },
                  '&:last-of-type': {
                    width: '100%',
                    backgroundColor: 'transparent',
                    '.MuiList-root': {
                      paddingBottom: 0,
                      '.MuiListItemButton-root': {
                        padding: 16,
                        '.MuiListItemText-root:first-of-type': {
                          paddingTop: '0.1em',
                          '.MuiTypography-root': {
                            color: '#666',
                            fontSize: '1rem',
                          },
                        },
                      },
                      '.MuiListItemIcon-root': {
                        flexDirection: 'row-reverse',
                      },
                      '.MuiDivider-root:last-of-type': {
                        display: 'none',
                      },
                    },
                  },
                },
                '&.info-card > .MuiCardContent-root .MuiContainer-root:last-of-type .MuiList-root .MuiListItemButton-root .MuiListItemText-root':
                  {
                    minWidth: 140,
                    '&:first-of-type': {
                      maxWidth: 140,
                    },
                    '&:nth-of-type(2)': {
                      whiteSpace: 'nowrap',
                      '> .MuiTypography-root': {
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                      },
                    },
                  },
              },
            },
          ],
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: '#fff',
          fontSize: '.875rem',
          fontWeight: 'bold',
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

export default theme
