import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import style from './style'
import { push } from 'connected-react-router'
import { HomePath } from '../../navigation/Routes'
import { useDispatch } from 'react-redux'

const useStyle = makeStyles(style)
export default ({ pathname }) => {
  const { BCContainer, priviousLink, selectedLink } = useStyle()
  const dispatch = useDispatch()
  return (
    <div className={BCContainer}>
      <Typography onClick={() => dispatch(push(HomePath))} className={priviousLink}>HOME</Typography>
      &nbsp;&nbsp;/&nbsp;&nbsp;
      <Typography className={selectedLink}>{pathname}</Typography>
    </div>
  )
}
