import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import style from './style'
import Container from '../Container'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { ProductPath } from '../../navigation/Routes'

const useStyle = makeStyles(style)

export default () => {
  const { root, paper, title, price, leftContainer, iconStyle } = useStyle()
  const dispatch = useDispatch()
  return (
    <Container>
      <div className={root}>
        <div onClick={() => dispatch(push(ProductPath))} className={paper}>
          <div className={leftContainer}>
            <div>
              <Typography className={title}>HeadPhone</Typography>
              <Typography className={price}>Starting at $99.00</Typography>
            </div>
            <ArrowRightAltIcon className={iconStyle} />
          </div>
        </div>
        <div onClick={() => dispatch(push(ProductPath))} className={paper}>
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
