import React from 'react'
import NavBar from '../../components/NavBar'
import BreadCrumb from '../../components/BreadCrumb'
import ShopProduct from '../../components/ShopProduct'
import Footer from '../../components/Footer'

export default _ => {
  return (
    <>
      <NavBar fixed />
      <BreadCrumb pathname='SHOP PRODUCT' />
      <ShopProduct />
      <Footer />
    </>
  )
}
