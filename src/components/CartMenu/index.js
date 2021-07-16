import React from 'react'
import { Typography, makeStyles, Button } from '@material-ui/core'
import style from './style'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { CheckoutPath } from '../../navigation/Routes'

const useStyle = makeStyles(style)
export default () => {
  const dispatch = useDispatch()
  const { root, productsContainer, product, thumbnail, productInfo, total, buttonClass, titleClass, qtyClass, priceClass } = useStyle()
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
        <Button onClick={() => dispatch(push(CheckoutPath))} className={buttonClass}>Check Out</Button>
      </div>
    </div>
  )
}
