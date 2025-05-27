import linkCardContentStyles from './link-card-content.css'
import listCardContentStyles from './list-card-content.css'

const cardStyles = {
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
}

const styles = theme => ({
  padding: theme.spacing(4),
  '> .MuiStack-root .MuiBox-root .MuiCard-root': cardStyles,
  '> .MuiStack-root .MuiBox-root.notifications .MuiCardContent-root': listCardContentStyles,
  '> .MuiStack-root .MuiBox-root.sessions .MuiCardContent-root': listCardContentStyles,
  '> .MuiStack-root .MuiBox-root.basic-info .MuiCardContent-root': listCardContentStyles,
  '> .MuiStack-root .MuiBox-root.basic-info .MuiCardContent-root .MuiContainer-root:last-of-type .MuiList-root .MuiListItemButton-root .MuiListItemText-root':
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
  '> .MuiStack-root .MuiBox-root.change-password .MuiCardContent-root': linkCardContentStyles,
  '> .MuiStack-root .MuiBox-root.delete-account .MuiCardContent-root': linkCardContentStyles,
})

export default styles
