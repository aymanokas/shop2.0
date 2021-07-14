import React from 'react'
import { Typography, makeStyles, Button } from '@material-ui/core'
import style from './style'
import Container from '../Container'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { ProductPath } from '../../navigation/Routes'

const useStyle = makeStyles(style)
const image = 'https://flone.reactdemo.hasthemes.com/assets/img/slider/single-slide-6.png'
export default () => {
  const { container, productType, productTitle, shopButtonStyle, productTitleContainer, productThumbnail } = useStyle()
  const dispatch = useDispatch()
  return (
    <Container>
      <div className={container}>
        <div className={productTitleContainer}>
          <Typography className={productType}>New Arrival</Typography>
          <Typography className={productTitle}>New Design <br /> Bluetooth Speaker</Typography>
          <Button onClick={() => dispatch(push(ProductPath))} className={shopButtonStyle}>Shop now</Button>
        </div>
        <img src={image} className={productThumbnail} />
      </div>
    </Container>
  )
}
