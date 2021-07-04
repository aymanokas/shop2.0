import React from 'react'
import NavBar from '../../components/NavBar'
import BreadCrumb from '../../components/BreadCrumb'
import ShopProduct from '../../components/ShopProduct'
import Footer from '../../components/Footer'
import ItemsTable from '../../components/ItemsTable'

const whishListProducts = [
  {
    id: 1,
    photo: '',
    name: 'Lorem ipsum headphone',
    price: '900',
    isInCart: true
  },
  {
    id: 2,
    photo: '',
    name: 'Lorem ipsum speaker',
    price: '500',
    isInCart: false
  },
  {
    id: 3,
    photo: '',
    name: 'Lorem ipsum camera',
    price: '300',
    isInCart: false
  }
]

export default _ => {
  return (
    <>
      <NavBar fixed />
      <BreadCrumb />
      <ItemsTable data={whishListProducts}/>
      <Footer />
    </>
  )
}
