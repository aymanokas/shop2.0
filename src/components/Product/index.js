import React, { useEffect, useState } from 'react'
import { Typography, makeStyles, Button } from '@material-ui/core'
import style from './style'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye'
import Container from '../Container'
import { useDispatch, useSelector } from 'react-redux'
import { getCatalogAction } from '../../pages/Catalog/store'

const useStyle = makeStyles(style)
export default ({ index }) => {
  const { productsStyle, badges, isNew, discountAmount, discoutedPrice, titleandpriceContainer, selectButton, previewButton, productImage, productContainer, productTitle, productPrice, wishButton } = useStyle()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCatalogAction(11, 0))
  }, [])
  const { data } = useSelector(({ catalog }) => catalog)
  const [catalog, setCatalog] = useState([])
  useEffect(() => {
    index === 1 && setCatalog(data.filter(item => item.isNew))
  }, [index])
  useEffect(() => {
    index === 3 && setCatalog(data.filter(item => item.discountPercentage))
  }, [index])
  useEffect(() => {
    index === 2 && setCatalog(data)
  }, [index])
  return (
    <Container>
      <div className={productsStyle}>
        {catalog.slice(0, 4).map((item, key) => {
          return (
            <div key={key} className={productContainer}>
              <div className={productImage}>
                <div className={badges}>
                  {!!item?.discountPercentage && <Typography className={discountAmount}>-{item?.discountPercentage}%</Typography>}
                  {item?.isNew && <Typography className={isNew}>New</Typography>}
                </div>
                <Button className={wishButton}><FavoriteBorderIcon /></Button>
                <Button className={selectButton}>Select Option</Button>
                <Button className={previewButton}><RemoveRedEyeIcon /></Button>
              </div>
              <div className={titleandpriceContainer}>
                <Typography className={productTitle}>{item?.name}</Typography>
                <Typography className={productPrice}>€{item?.discountPrice ? item?.discountPrice : item?.price} {!!item?.discountPrice && <Typography className={discoutedPrice}>&nbsp; €{item?.price}</Typography>} </Typography>
              </div>
            </div>
          )
        })}
      </div>
    </Container>
  )
}
