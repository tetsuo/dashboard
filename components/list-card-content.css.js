const styles = {
  '.MuiContainer-root': {
    '&:first-of-type': {
      marginTop: '2px',
      padding: '16px',
      '> .MuiTypography-root': {
        fontSize: '1rem',
        '&:first-of-type': {
          fontSize: '1.2rem',
          marginBottom: '8px',
        },
      },
    },
    '&:last-of-type': {
      width: '100%',
      backgroundColor: 'transparent',
      '.MuiList-root': {
        paddingBottom: 0,
        '.MuiListItemButton-root': {
          padding: 2,
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
}

export default styles
