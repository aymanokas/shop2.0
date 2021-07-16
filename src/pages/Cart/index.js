import React, { useState } from 'react'
import NavBar from '../../components/NavBar'
import BreadCrumb from '../../components/BreadCrumb'
import Footer from '../../components/Footer'
import ItemsTable from '../../components/ItemsTable'
import { Button, makeStyles, Typography, Select, InputLabel, MenuItem, FormControl, TextField } from '@material-ui/core'
import style from './style'
import Container from '../../components/Container'

const whishListProducts = [
  {
    id: 1,
    photo: 'https://flone.reactdemo.hasthemes.com/assets/img/product/electronics/5.jpg',
    name: 'Lorem ipsum headphone',
    price: '900',
    isInCart: true
  },
  {
    id: 2,
    photo: 'https://flone.reactdemo.hasthemes.com/assets/img/product/electronics/5.jpg',
    name: 'Lorem ipsum speaker',
    price: '500',
    isInCart: false
  },
  {
    id: 3,
    photo: 'https://flone.reactdemo.hasthemes.com/assets/img/product/electronics/5.jpg',
    name: 'Lorem ipsum camera',
    price: '300',
    isInCart: false
  }
]

const useStyle = makeStyles(style)
export default _ => {
  const { footerContainer, buttonStyle, bottomContainer, paper, titleClass, buttonClass, row, smallTitle, formControl, bold, coloredText, inputWidth } = useStyle()
  const [county, setCounty] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [coupon, setCoupon] = useState('')
  const handleCouponChange = (event) => {
    setCoupon(event.target.value)
  }
  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value)
  }
  const handleCountryChange = (event) => {
    setCounty(event.target.value)
  }
  return (
    <>
      <NavBar fixed />
      <BreadCrumb pathname='CART' />
      <ItemsTable data={whishListProducts} />
      <Container>
        <div className={footerContainer}>
          <Button variant='contained' className={buttonStyle}>
            Continue Shopping
          </Button>
          <Button variant='contained' className={buttonStyle}>
            Clear wishlist
          </Button>
        </div>
        <div className={bottomContainer}>
          <div className={paper}>
            <Typography className={titleClass}>Estimate Shipping and Tax</Typography>
            <Typography className={smallTitle}>Enter your destination to get a shipping estimate</Typography>
            <FormControl variant='outlined' className={formControl}>
              <InputLabel id='label-country'>City</InputLabel>
              <Select
                className={inputWidth}
                labelId='country-label'
                id='country'
                value={county}
                onChange={handleCountryChange}
              >
                <MenuItem value={10}>Rabat</MenuItem>
                <MenuItem value={20}>Temara</MenuItem>
                <MenuItem value={30}>Sale</MenuItem>
              </Select>
            </FormControl>
            <TextField className={inputWidth} id='zip-code' label='Zip' variant='outlined' value={zipCode} onChange={handleZipCodeChange} />
            <Button className={buttonClass}>Get a quote</Button>
          </div>
          <div className={paper}>
            <Typography className={titleClass}>Use Coupon</Typography>
            <Typography className={smallTitle}>Enter your coupon code if you have one</Typography>
            <TextField className={inputWidth} id='coupon' label='Coupon' variant='outlined' value={coupon} onChange={handleCouponChange} />
            <Button className={buttonClass}>Apply coupon</Button>
          </div>
          <div className={paper}>
            <Typography className={titleClass}>Cart Total</Typography>
            <div className={row}>
              <Typography className={smallTitle}>Total products</Typography>
              <Typography className={[smallTitle, bold]}>$54,8</Typography>
            </div>
            <div className={row}>
              <Typography className={smallTitle}>Grand Total</Typography>
              <Typography className={[smallTitle, bold, coloredText]}>$999</Typography>
            </div>
            <Button className={buttonClass}>proceed to checkout</Button>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}
