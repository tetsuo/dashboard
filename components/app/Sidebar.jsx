import * as React from 'react'
import { Layout } from './model'
import Sidebar from '../drawer/sidebar'

export default function AppSidebar(props) {
  const [layout, setLayout] = React.useState(Layout.Expanded)
  const onToggle = evt => {
    evt.preventDefault()
    setLayout(prev => (prev === Layout.Compact ? Layout.Expanded : Layout.Compact))
  }
  return <Sidebar onToggle={onToggle} className={layout} {...props} />
}
