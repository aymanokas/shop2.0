import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import style from './style'
import Container from '../Container'

const useStyle = makeStyles(style)
export default () => {
  const { productsStyle, titleandpriceContainer, productImage, productContainer, productTitle, productPrice } = useStyle()

  return (
    <Container>
      <div className={productsStyle}>
        <div className={productContainer}>
          <div className={productImage} />
          <div className={titleandpriceContainer}>
            <Typography className={productTitle}>Very expensive speaker</Typography>
            <Typography className={productPrice}>900.54 €</Typography>
          </div>
        </div>
      </div>
    </Container>
  )
}
