import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import style from './style'

const useStyle = makeStyles(style)
export default () => {
  const { BCContainer, priviousLink, selectedLink } = useStyle()

  return (
    <div className={BCContainer}>
      <Typography className={priviousLink}>HOME</Typography>
      &nbsp;&nbsp;/&nbsp;&nbsp;
      <Typography className={selectedLink}>SHOP PRODUCT</Typography>
    </div>
  )
}
