import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import style from './style'
import Container from '../Container'

const useStyle = makeStyles(style)
export default ({ index, setIndex }) => {
  const { tabsBar, tab, selectedTab } = useStyle()

  return (
    <Container>
      <div className={tabsBar}>
        <Typography onClick={() => setIndex(1)} className={index === 1 ? selectedTab : tab}>New Arrivals</Typography>
        <Typography onClick={() => setIndex(2)} className={index === 2 ? selectedTab : tab}>Best Sellers</Typography>
        <Typography onClick={() => setIndex(3)} className={index === 3 ? selectedTab : tab}>Sale Items</Typography>
      </div>
    </Container>
  )
}
