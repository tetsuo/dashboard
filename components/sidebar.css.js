import sidebarListStyles from './sidebar-list.css'

const styles = theme => ({
  '& > div': {
    width: 240,
    backgroundColor: '#f7f7f7',
    '.MuiContainer-root:first-of-type': {
      padding: 0,
      marginBottom: theme.spacing(2),
      '.MuiToolbar-root': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: theme.spacing(0), // TODO (0, 1)
        paddingLeft: theme.spacing(2),
        minHeight: '64px',
        '.MuiIconButton-root': {
          color: 'rgba(0, 0, 0, 0.4)',
        },
      },
    },
    '.MuiContainer-root:last-of-type': {
      padding: 0,
      marginTop: 'auto',
      marginBottom: theme.spacing(1),
    },
    '.MuiList-root': sidebarListStyles,
  },
})

export default styles
