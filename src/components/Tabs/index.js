import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import style from './style'
import Container from '../Container'

const useStyle = makeStyles(style)
export default () => {
  const { tabsBar, tab, selectedTab } = useStyle()

  return (
    <Container>
      <div className={tabsBar}>
        <Typography className={tab}>New Arrivals</Typography>
        <Typography className={selectedTab}>Best Sellers</Typography>
        <Typography className={tab}>Sale Items</Typography>
      </div>
    </Container>
  )
}
