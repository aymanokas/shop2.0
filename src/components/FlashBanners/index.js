import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import style from './style'
import Container from '../Container'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'

const useStyle = makeStyles(style)

export default () => {
  const { root, paper, title, price, leftContainer, rightContainer, iconStyle } = useStyle()

  return (
    <Container>
      <div className={root}>
        <div className={paper}>
          <div className={leftContainer}>
            <div>
              <Typography className={title}>HeadPhone</Typography>
              <Typography className={price}>Starting at $99.00</Typography>
            </div>
            <ArrowRightAltIcon className={iconStyle} />
          </div>
        </div>
        <div className={paper}>
          <div className={leftContainer}>
            <div>
              <Typography className={title}>Earphone</Typography>
              <Typography className={price}>Starting at $99.00</Typography>
            </div>
            <ArrowRightAltIcon className={iconStyle} />
          </div>
        </div>
      </div>
    </Container>
  )
}
