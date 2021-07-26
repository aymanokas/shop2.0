import React, { useState } from 'react'
import NavBar from '../../components/NavBar'
import Swiper from '../../components/Swiper'
import Categories from '../../components/Categories'
import AboutUs from '../../components/AboutUs'
import FlashBanners from '../../components/FlashBanners'
import Tabs from '../../components/Tabs'
import Product from '../../components/Product'
import style from './style'
import { makeStyles } from '@material-ui/core'
import Footer from '../../components/Footer'

const useStyle = makeStyles(style)

export default _ => {
  const { homeContainer, aboutUsContainer, flashBannersContainer, footerContainer } = useStyle()
  const [index, setIndex] = useState(2)
  return (
    <>
      <div className={homeContainer}>
        <NavBar />
        <Swiper />
      </div>
      <Categories />
      <div className={aboutUsContainer}>
        <AboutUs />
      </div>
      <Tabs index={index} setIndex={setIndex} />
      <Product index={index} />
      <div className={flashBannersContainer}>
        <FlashBanners />
      </div>
      <div className={footerContainer}>
        <Footer />
      </div>
    </>
  )
}
