import React, { useState } from 'react'
import { Typography, MenuItem, TextField, makeStyles, Button } from '@material-ui/core'
import style from './style'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye'
import Container from '../Container'
import NavBar from '../NavBar'
import BreadCrumb from '../BreadCrumb'
import Footer from '../Footer'
const arr = [11, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1]
const filters = [
  {
    value: 0,
    label: 'default'
  },
  {
    value: 1,
    label: 'Price Hight to Low'
  },
  {
    value: 2,
    label: 'Price Low to Hight'
  }
]
const useStyle = makeStyles(style)
export default () => {
  const { productsStyle, badges, filterStyle, buttonStyle, isNew, buttonContainer, discountAmount, discoutedPrice, titleandpriceContainer, selectButton, previewButton, productImage, productContainer, productTitle, productPrice, wishButton } = useStyle()

  const [currency, setCurrency] = useState(0)
  const handleChange = (event) => {
    setCurrency(event.target.value)
  }
  return (
    <>
      <NavBar fixed />
      <BreadCrumb pathname='SHOP' />
      <Container>
        <TextField
          className={filterStyle}
          select
          variant='outlined'
          value={currency}
          onChange={handleChange}
        >
          {filters.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div className={productsStyle}>
          {arr.map(
            (item, key) => {
              return (
                <div key={key} className={productContainer}>
                  <div className={productImage}>
                    <div className={badges}>
                      <Typography className={discountAmount}>-{item}%</Typography>
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
              )
            }
          )}
        </div>
        <div className={buttonContainer}>
          <Button variant='contained' className={buttonStyle}>
            Show more
          </Button>
        </div>
      </Container>
      <Footer />
    </>
  )
}
