import React from 'react'
import { Typography, makeStyles, Badge, Menu, MenuItem } from '@material-ui/core'
import style from './style'
import Container from '../Container'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import { useDispatch, useSelector } from 'react-redux'
import { push } from 'connected-react-router'
import CartMenu from '../CartMenu'
import { CatalogPath, HomePath, ContactPath } from '../../navigation/Routes'

const useStyle = makeStyles(theme => style(theme))
const logo = 'https://flone.reactdemo.hasthemes.com/assets/img/logo/logo.png'
export default () => {
  const { callusStyle, tabsBar, tab, navbarContainer, iconStyle, iconsContainerStyle, logoStyle, search, searchIcon, inputRoot, inputInput } = useStyle()
  const dispatch = useDispatch()
  const wishList = useSelector(({ wishList }) => wishList)
  console.log('========> ', wishList.length)
  const [anchorAccount, setAnchorAccount] = React.useState(null)
  const handleAccountClick = (event) => setAnchorAccount(event.currentTarget)
  const handleAccountClose = () => setAnchorAccount(null)
  const [anchorCart, setAnchorCart] = React.useState(null)
  const handleCartClick = (event) => setAnchorCart(event.currentTarget)
  const handleCartClose = () => setAnchorCart(null)
  const handleWhishlistRoute = () => dispatch(push('/Wishlist'))
  const handleLoginRoute = () => dispatch(push('/Login'))
  const handleRegisterRoute = () => dispatch(push('/Login'))
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
              placeholder='Search…'
              classes={{
                root: inputRoot,
                input: inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <AccountCircleIcon className={iconStyle} onClick={handleAccountClick} />
          <Menu
            id='simple-menu'
            anchorEl={anchorAccount}
            keepMounted
            open={Boolean(anchorAccount)}
            onClose={handleAccountClose}
          >
            <MenuItem onClick={handleRegisterRoute}>Register</MenuItem>
            <MenuItem onClick={handleLoginRoute}>Login</MenuItem>
            <MenuItem onClick={handleAccountClose}>My Account</MenuItem>
          </Menu>
          <Badge badgeContent={wishList.length} color='primary'>
            <FavoriteBorderIcon className={iconStyle} onClick={handleWhishlistRoute} />
          </Badge>
          <Badge badgeContent={5} color='primary'>
            <LocalMallIcon className={iconStyle} onClick={handleCartClick} />
          </Badge>
          <Menu
            id='simple-menu'
            anchorEl={anchorCart}
            keepMounted
            open={Boolean(anchorCart)}
            onClose={handleCartClose}
          >
            <CartMenu />
          </Menu>
        </div>
      </div>
      <div className={tabsBar}>
        <Typography onClick={() => dispatch(push(HomePath))} className={tab}>Home</Typography>
        <Typography onClick={() => dispatch(push(CatalogPath))} className={tab}>Collection</Typography>
        <Typography onClick={() => dispatch(push(ContactPath))} className={tab}>Contact Us</Typography>
      </div>
    </Container>
  )
}
