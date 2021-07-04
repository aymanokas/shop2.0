import React from 'react'
import { Typography, makeStyles, Button } from '@material-ui/core'
import style from './style'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye'
import Container from '../Container'

const useStyle = makeStyles(style)
export default () => {
  const { productsStyle, badges, isNew, discountAmount, discoutedPrice, titleandpriceContainer, selectButton, previewButton, productImage, productContainer, productTitle, productPrice, wishButton } = useStyle()

  return (
    <Container>
      <div className={productsStyle}>
        <div className={productContainer}>
          <div className={productImage}>
            <div className={badges}>
              <Typography className={discountAmount}>-10%</Typography>
              <Typography className={isNew}>New</Typography>
            </div>
            <Button className={wishButton}><FavoriteBorderIcon /></Button>
            <Button className={selectButton}>Select Option</Button>
            <Button className={previewButton}><RemoveRedEyeIcon /></Button>
          </div>
          <div className={titleandpriceContainer}>
            <Typography className={productTitle}>Very expensive speaker</Typography>
            <Typography className={productPrice}>€900.54 &nbsp;<Typography className={discoutedPrice}>&nbsp; €900.54</Typography> </Typography>
          </div>
        </div>
        <div className={productContainer}>
          <div className={productImage}>
            <div className={badges}>
              <Typography className={discountAmount}>-10%</Typography>
              <Typography className={isNew}>New</Typography>
            </div>
            <Button className={wishButton}><FavoriteBorderIcon /></Button>
            <Button className={selectButton}>Select Option</Button>
            <Button className={previewButton}><RemoveRedEyeIcon /></Button>
          </div>
          <div className={titleandpriceContainer}>
            <Typography className={productTitle}>Very expensive speaker</Typography>
            <Typography className={productPrice}>€900.54 &nbsp;<Typography className={discoutedPrice}>&nbsp; €900.54</Typography> </Typography>
          </div>
        </div>
        <div className={productContainer}>
          <div className={productImage}>
            <div className={badges}>
              <Typography className={discountAmount}>-10%</Typography>
              <Typography className={isNew}>New</Typography>
            </div>
            <Button className={wishButton}><FavoriteBorderIcon /></Button>
            <Button className={selectButton}>Select Option</Button>
            <Button className={previewButton}><RemoveRedEyeIcon /></Button>
          </div>
          <div className={titleandpriceContainer}>
            <Typography className={productTitle}>Very expensive speaker</Typography>
            <Typography className={productPrice}>€900.54 &nbsp;<Typography className={discoutedPrice}>&nbsp; €900.54</Typography> </Typography>
          </div>
        </div>
        <div className={productContainer}>
          <div className={productImage}>
            <div className={badges}>
              <Typography className={discountAmount}>-10%</Typography>
              <Typography className={isNew}>New</Typography>
            </div>
            <Button className={wishButton}><FavoriteBorderIcon /></Button>
            <Button className={selectButton}>Select Option</Button>
            <Button className={previewButton}><RemoveRedEyeIcon /></Button>
          </div>
          <div className={titleandpriceContainer}>
            <Typography className={productTitle}>Very expensive speaker</Typography>
            <Typography className={productPrice}>€900.54 &nbsp;<Typography className={discoutedPrice}>&nbsp; €900.54</Typography> </Typography>
          </div>
        </div>
      </div>
    </Container>
  )
}
