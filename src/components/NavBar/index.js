import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import style from './style'
import Container from '../Container'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import LocalMallIcon from '@material-ui/icons/LocalMall'

const useStyle = makeStyles(style)
const logo = 'https://flone.reactdemo.hasthemes.com/assets/img/logo/logo.png'
export default () => {
  const { callusStyle, tabsBar, tab, navbarContainer, iconStyle, iconsContainerStyle, logoStyle } = useStyle()

  return (
    <Container>
      <div className={navbarContainer}>
        <Typography className={callusStyle}>Call Us 3965410</Typography>
        <img src={logo} className={logoStyle} />
        <div className={iconsContainerStyle}>
          <SearchIcon className={iconStyle} />
          <AccountCircleIcon className={iconStyle} />
          <FavoriteBorderIcon className={iconStyle} />
          <LocalMallIcon className={iconStyle} />
        </div>
      </div>
      <div className={tabsBar}>
        <Typography className={tab}>Home</Typography>
        <Typography className={tab}>Collection</Typography>
        <Typography className={tab}>Contact Us</Typography>
      </div>
    </Container>
  )
}
