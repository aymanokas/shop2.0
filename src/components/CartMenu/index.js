import React from 'react'
import { Typography, makeStyles, Button } from '@material-ui/core'
import style from './style'

const useStyle = makeStyles(style)
export default () => {
  const { root, productsContainer, product, thumbnail, productInfo, divider, total, buttonClass, titleClass, qtyClass, priceClass } = useStyle()
  return (
    <div className={root}>
      <div className={productsContainer}>
        <div className={product}>
          <img src='https://flone.reactdemo.hasthemes.com/assets/img/product/electronics/5.jpg' alt='thumbnail' className={thumbnail} />
          <div className={productInfo}>
            <Typography className={titleClass}>Lorem Ipsum Title</Typography>
            <Typography className={qtyClass}>Qty : 3</Typography>
            <Typography className={priceClass}>$999</Typography>
          </div>
        </div>
        <div className={product}>
          <img src='https://flone.reactdemo.hasthemes.com/assets/img/product/electronics/5.jpg' alt='thumbnail' className={thumbnail} />
          <div className={productInfo}>
            <Typography className={titleClass}>Lorem Ipsum Title</Typography>
            <Typography variant='h4' className={qtyClass}>Qty : 3</Typography>
            <Typography className={priceClass}>$999</Typography>
          </div>
        </div>
        <div className={total}>
          <Typography>Total :</Typography>
          <Typography>$9999</Typography>
        </div>
        <Button className={buttonClass}>View Cart</Button>
        <Button className={buttonClass}>Check Out</Button>
      </div>
    </div>
  )
}
