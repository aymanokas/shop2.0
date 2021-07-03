import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import style from './style'
import Container from '../Container'

const useStyle = makeStyles(style)

export default () => {
  const { root, smallHeader, header, divider, paragprah } = useStyle()

  return (
    <Container>
      <div className={root}>
        <Typography className={smallHeader}>Who are we</Typography>
        <Typography className={header}>Welcome to Shop 2.0</Typography>
        <div className={divider} />
        <Typography className={paragprah}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat irure</Typography>
      </div>
    </Container>
  )
}
