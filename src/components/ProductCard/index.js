import React from 'react'
import { makeStyles, Button, Typography } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye'
import style from './style'
import ItemsTable from '../ItemsTable'

const useStyle = makeStyles(style)
export default ({ handleOpen, item }) => {
  const { badges, isNew, discountAmount, discoutedPrice, titleandpriceContainer, selectButton, previewButton, productImage, productContainer, productTitle, productPrice, wishButton } = useStyle({ image: item.images[0] })
  console.warn(item.isNew)
  return (
    <div className={productContainer}>
      <div className={productImage}>
        <div className={badges}>
          {!!item.discountPercentage && <Typography className={discountAmount}>-{item.discountPercentage}%</Typography>}
          {item.isNew && <Typography className={isNew}>New</Typography>}
        </div>
        <Button className={wishButton}><FavoriteBorderIcon /></Button>
        <Button className={selectButton}>Select Option</Button>
        <Button onClick={handleOpen} className={previewButton}><RemoveRedEyeIcon /></Button>
      </div>
      <div className={titleandpriceContainer}>
        <Typography className={productTitle}>{item.name}</Typography>
        <Typography className={productPrice}>€{item.discountPrice ? item.discountPrice : item.price} {!!item.discountPrice && <Typography className={discoutedPrice}>&nbsp; €{item.price}</Typography>} </Typography>
      </div>
    </div>
  )
}
