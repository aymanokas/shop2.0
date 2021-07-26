import React from 'react'
import { makeStyles, Divider, Button, TextField, Typography, Grid } from '@material-ui/core'
import style from './style'
import Container from '../Container'
import NavBar from '../NavBar'
import BreadCrumb from '../BreadCrumb'
import Footer from '../Footer'

const useStyle = makeStyles(style)
export default () => {
  const { productTitle, rowInputContainer, paperContainer, buttonStyle, productTitles, total, price, textContainer, smallTitles, container, inputWidthSmall, inputWidth } = useStyle()

  return (
    <>
      <NavBar fixed />
      <BreadCrumb pathname='CHECKOUT' />
      <Container>
        <Grid
          className={container}
          container
          direction='row'
          justifycontent='center'
          alignItems='center'
        >
          <Grid item xs={7}>
            <Typography className={productTitle}>Billing Details</Typography>
            <div className={rowInputContainer}>
              <TextField className={inputWidthSmall} id='fname' label='First Name' variant='outlined' />
              <TextField className={inputWidthSmall} id='fname' label='Last Name' variant='outlined' />
            </div>
            <TextField className={inputWidth} id='fname' label='House number and street name' variant='outlined' />
            <TextField className={inputWidth} id='fname' label='Apartement, sweet, unit etc.' variant='outlined' />
            <TextField className={inputWidth} id='fname' label='Town / City' variant='outlined' />
            <div className={rowInputContainer}>
              <TextField className={inputWidthSmall} id='fname' label='Postcode / ZIP' variant='outlined' />
              <TextField className={inputWidthSmall} id='fname' label='Phone' variant='outlined' />
            </div>
            <TextField className={inputWidth} id='fname' label='Email Address' variant='outlined' />
            <TextField className={inputWidth} id='fname' label='Additional information' variant='outlined' />
          </Grid>
          <Grid item xs={5}>
            <Typography className={productTitle}>Your order</Typography>
            <div className={paperContainer}>
              <div className={textContainer}>
                <Typography className={smallTitles}>Product</Typography>
                <Typography className={smallTitles}>Total</Typography>
              </div>
              <Divider />
              <div className={textContainer}>
                <Typography className={productTitles}>Lorem ipsum accessories three X 1</Typography>
                <Typography className={price}>€12.50</Typography>
              </div>
              <Divider />
              <div className={textContainer}>
                <Typography className={productTitles}>Shipping</Typography>
                <Typography className={price}>Free shipping</Typography>
              </div>
              <Divider />
              <div className={textContainer}>
                <Typography className={smallTitles}>Total</Typography>
                <Typography className={total}>€12.50</Typography>
              </div>
            </div>
            <Button variant='contained' className={buttonStyle}>
              PLACE ORDER
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  )
}
