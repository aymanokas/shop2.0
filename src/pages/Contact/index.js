import React from 'react'
import { makeStyles, Divider, Button, TextField, Typography, Grid } from '@material-ui/core'
import style from './style'
import Container from '../../components/Container'
import NavBar from '../../components/NavBar'
import BreadCrumb from '../../components/BreadCrumb'
import Footer from '../../components/Footer'
import PhoneIcon from '@material-ui/icons/Phone'
import PublicRoundedIcon from '@material-ui/icons/PublicRounded'
import RoomRoundedIcon from '@material-ui/icons/RoomRounded'

const useStyle = makeStyles(style)
export default _ => {
  const { rowInputContainer, paperContainer, iconContainer, formPaper, formHeader, contactInfoText, iconStyle, buttonStyle, contactTextRow, productTitles, total, price, textContainer, smallTitles, container, inputWidthSmall, inputWidth } = useStyle()

  return (
    <>
      <NavBar fixed />
      <BreadCrumb pathname='CONTACT' />
      <Container>
        <Grid
          className={container}
          container
          spacing={2}
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <Grid spacing={2} item xs={4}>
            <div className={paperContainer}>
              <div className={textContainer}>
                <div className={iconContainer}>
                  <PhoneIcon className={iconStyle} />
                </div>
                <div className={contactTextRow}>
                  <Typography className={contactInfoText}>+012 345 678 102</Typography>
                  <Typography className={contactInfoText}>+012 345 678 102</Typography>
                </div>
              </div>
              <div className={textContainer}>
                <div className={iconContainer}>
                  <PublicRoundedIcon className={iconStyle} />
                </div>
                <div className={contactTextRow}>
                  <Typography className={contactInfoText}>yourwebsitename.com</Typography>
                  <Typography className={contactInfoText}>yourwebsitename.com</Typography>
                </div>
              </div>
              <div className={textContainer}>
                <div className={iconContainer}>
                  <RoomRoundedIcon className={iconStyle} />
                </div>
                <div className={contactTextRow}>
                  <Typography className={contactInfoText}>+Adress goes here Lorem ipsum sit dolor amet</Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid spacing={2} item xs={8}>
            <div className={formPaper}>
              <Typography className={formHeader}>Get in touch</Typography>
              <div className={rowInputContainer}>
                <TextField className={inputWidthSmall} id='fname' label='First Name' variant='outlined' />
                <TextField className={inputWidthSmall} id='fname' label='Last Name' variant='outlined' />
              </div>
              <TextField className={inputWidth} id='fname' label='House number and street name' variant='outlined' />
              <TextField className={inputWidth} id='fname' label='House number and street name' variant='outlined' />
              <Button variant='contained' className={buttonStyle}>
                Send
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  )
}
