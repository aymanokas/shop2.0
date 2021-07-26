import React, { useEffect, useState } from 'react'
import { MenuItem, TextField, makeStyles, Button, Modal, Typography, Divider, FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core'
import style from './style'
import Container from '../Container'
import NavBar from '../NavBar'
import BreadCrumb from '../BreadCrumb'
import Footer from '../Footer'
import Rating from '@material-ui/lab/Rating'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ProductCard from '../ProductCard'
import { getCatalogAction } from '../../pages/Catalog/store'
import { useDispatch } from 'react-redux'
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
export default ({ catalog, total }) => {
  const { productsStyle, filterStyle, buttonStyle, paper, buttonContainer, productImage, badges, product, discountAmount, sizes, addToCartSection, radioContainer, iconStyle, shopButtonStyle, dividerStyle, meduimRadio, blueRadio, yellowRadio, productDescription, isNew, productControls, productDicountedPrice, productTitle, titleAndPrice, productPrice } = useStyle()
  const [open, setOpen] = useState(false)
  const [data, setCatalog] = useState(catalog)
  const dispatch = useDispatch()
  const [showMore, setShowMore] = useState(9)
  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }
  useEffect(() => JSON.stringify(catalog) !== JSON.stringify(data) && setCatalog([...data, ...catalog]), [catalog])
  const handleShowMore = () => {
    setShowMore(showMore + 9)
    dispatch(getCatalogAction(9, showMore))
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
          {data?.map(
            (item, key) => {
              return (
                <ProductCard item={item} handleOpen={handleOpen} key={key} />
              )
            }
          )}
        </div>
        {total !== data.length &&
          <div className={buttonContainer}>
            <Button onClick={handleShowMore} variant='contained' className={buttonStyle}>
              Show more
            </Button>
          </div>}
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
