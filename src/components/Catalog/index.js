import React, { useState } from 'react'
import { MenuItem, TextField, makeStyles, Button, Modal, Typography, Divider, FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core'
import style from './style'
import Container from '../Container'
import NavBar from '../NavBar'
import BreadCrumb from '../BreadCrumb'
import Footer from '../Footer'
import Rating from '@material-ui/lab/Rating'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ProductCard from '../ProductCard'
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
  const { productsStyle, filterStyle, buttonStyle, paper, buttonContainer, productImage, badges, product, discountAmount, sizes, addToCartSection, radioContainer, iconStyle, shopButtonStyle, dividerStyle, meduimRadio, blueRadio, yellowRadio, productDescription, isNew, productControls, productDicountedPrice, productTitle, titleAndPrice, productPrice } = useStyle()
  const [open, setOpen] = React.useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }
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
                <ProductCard handleOpen={handleOpen} key={key} />
              )
            }
          )}
        </div>
        <div className={buttonContainer}>
          <Button variant='contained' className={buttonStyle}>
            Show more
          </Button>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <div className={paper}>
            <div className={product}>
              <div className={productImage}>
                <div className={badges}>
                  <Typography className={discountAmount}>-10%</Typography>
                  <Typography className={isNew}>New</Typography>
                </div>
              </div>
              <div className={productControls}>
                <div className={titleAndPrice}>
                  <Typography className={productTitle}>Lorem ipsum jacket</Typography>
                  <Typography className={productPrice}>€10.47<Typography className={productDicountedPrice}>€17.45</Typography></Typography>
                  <Rating name='read-only' value={3} readOnly />
                  <Typography className={productDescription}>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</Typography>
                  <Divider className={dividerStyle} />
                  <FormControl component='fieldset'>
                    <FormLabel component='legend'>Color</FormLabel>
                    <RadioGroup className={radioContainer} aria-label='colors' name='colors'>
                      <FormControlLabel value='blue' control={<Radio color='default' className={blueRadio} />} />
                      <FormControlLabel value='yellow' control={<Radio color='default' className={yellowRadio} />} />
                      <FormControlLabel value='red' control={<Radio color='default' className={yellowRadio} />} />
                    </RadioGroup>
                  </FormControl>
                  <FormControl component='fieldset'>
                    <FormLabel component='legend'>Size</FormLabel>
                    <div className={sizes}>
                      <Button className={meduimRadio}>M</Button>
                      <Button className={meduimRadio}>XL</Button>
                      <Button className={meduimRadio}>XXL</Button>
                    </div>
                  </FormControl>
                  <div className={addToCartSection}>
                    <Button className={shopButtonStyle}>Add To Cart</Button>
                    <FavoriteBorderIcon className={iconStyle} />
                  </div>
                  <Typography className={productDescription}>Categories : fashion  men</Typography>
                  <Typography className={productDescription}>Tags : fashion  men  jacket  full sleeve</Typography>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </Container>
      <Footer />
    </>
  )
}
