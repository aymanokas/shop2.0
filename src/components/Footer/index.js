import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import style from './style'
import Container from '../Container'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';

const useStyle = makeStyles(style)
const logo = 'https://flone.reactdemo.hasthemes.com/assets/img/logo/logo.png'
export default () => {
  const { root, container, col, logoStyle, copyright, title, links, watermark, heartIcon, coffeeIcon, watermarkText } = useStyle()
  return (
    <>
      <div className={root}>
        <Container>
          <div className={container}>
            <div className={col}>
            <img src={logo} className={logoStyle} />
            <Typography className={copyright}>2021 Flone</Typography>
            <Typography className={copyright}>All Rights Reserved</Typography>
          </div>
          <div className={col}>
            <Typography className={title}>ABOUT US</Typography>
            <Typography className={links}>Store location</Typography>
            <Typography className={links}>Contact</Typography>
            <Typography className={links}>Orders tracking</Typography>
          </div>
          <div className={col}>
            <Typography className={title}>USEFUL LINKS</Typography>
            <Typography className={links}>Returns</Typography>
            <Typography className={links}>Contact</Typography>
            <Typography className={links}>Orders tracking</Typography>
          </div>
          <div className={col}>
            <Typography className={title}>FOLLOW US</Typography>
            <Typography className={links}>Store location</Typography>
            <Typography className={links}>Contact</Typography>
            <Typography className={links}>Orders tracking</Typography>
          </div>
          <div className={col}>
            <Typography className={title}>SUBSCRIBE</Typography>
            <Typography className={links}>Store location</Typography>
            <Typography className={links}>Contact</Typography>
            <Typography className={links}>Orders tracking</Typography>
          </div>
          </div>
        </Container>
      </div>
      <div className={watermark}>
        <Typography className={watermarkText}>Made with</Typography>
        <FavoriteOutlinedIcon className={heartIcon} />
        <Typography className={watermarkText}>&</Typography>
        <FreeBreakfastIcon className={coffeeIcon} />
      </div>
    </>
  )
}
