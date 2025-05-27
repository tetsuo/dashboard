const styles = {
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
        paddingTop: '10px',
        '> .MuiTypography-root': {
          fontSize: '1.2rem',
          marginBottom: '8px',
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
}
export default styles
