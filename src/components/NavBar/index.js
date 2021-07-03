import React from 'react'
import { Typography, makeStyles, Badge, Menu, MenuItem } from '@material-ui/core'
import style from './style'
import Container from '../Container'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import LocalMallIcon from '@material-ui/icons/LocalMall'

const useStyle = makeStyles(theme => style(theme))
const logo = 'https://flone.reactdemo.hasthemes.com/assets/img/logo/logo.png'
export default () => {
  const { callusStyle, tabsBar, tab, navbarContainer, iconStyle, iconsContainerStyle, logoStyle, search, searchIcon, inputRoot, inputInput  } = useStyle()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)
  return (
    <Container>
      <div className={navbarContainer}>
        <Typography className={callusStyle}>Call Us 3965410</Typography>
        <img src={logo} className={logoStyle} />
        <div className={iconsContainerStyle}>
          <div className={search}>
            <div className={searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: inputRoot,
                input: inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <AccountCircleIcon className={iconStyle} onClick={handleClick} />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Register</MenuItem>
            <MenuItem onClick={handleClose}>Login</MenuItem>
            <MenuItem onClick={handleClose}>My Account</MenuItem>
          </Menu>
          <Badge badgeContent={4} color="primary">
            <FavoriteBorderIcon className={iconStyle} />
          </Badge>
          <Badge badgeContent={4} color="primary">
            <LocalMallIcon className={iconStyle} />
          </Badge>
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
