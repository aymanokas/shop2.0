import React from 'react'
import { makeStyles } from '@material-ui/core'
import style from './style'

const useStyle = makeStyles(style)

export default ({ children }) => {
  const { Container } = useStyle()

  return (
    <div className={Container}>
      {children}
    </div>
  )
}
