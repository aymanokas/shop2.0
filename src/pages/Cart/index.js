import React from 'react'
import NavBar from '../../components/NavBar'
import BreadCrumb from '../../components/BreadCrumb'
import ShopProduct from '../../components/ShopProduct'
import Footer from '../../components/Footer'
import ItemsTable from '../../components/ItemsTable'
import { Button, makeStyles, Typography } from '@material-ui/core'
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
    const { footerContainer, buttonStyle, bottomContainer, paper, titleClass, buttonClass, row, smallTitle } = useStyle()
  return (
    <>
      <NavBar fixed />
      <BreadCrumb />
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
            <div className={row}>
              <Typography className={smallTitle}>Total products</Typography>
              <Typography className={smallTitle}>$54,8</Typography>
            </div>
            <Button className={buttonClass}>Get a quote</Button>
          </div>
          <div className={paper}>
            <Typography className={titleClass}>Use Coupon</Typography>
            <div className={row}>
              <Typography className={smallTitle}>Total products</Typography>
              <Typography className={smallTitle}>$54,8</Typography>
            </div>
            <Button className={buttonClass}>Apply coupon</Button>
          </div>
          <div className={paper}>
            <Typography className={titleClass}>Cart Total</Typography>
            <div className={row}>
              <Typography className={smallTitle}>Total products</Typography>
              <Typography className={smallTitle}>$54,8</Typography>
            </div>
            <Button className={buttonClass}>proceed to checkout</Button>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}
