import React, { useEffect } from 'react'
import NavBar from '../../components/NavBar'
import BreadCrumb from '../../components/BreadCrumb'
import Footer from '../../components/Footer'
import ItemsTable from '../../components/ItemsTable'
import { Button, makeStyles } from '@material-ui/core'
import style from './style'
import Container from '../../components/Container'
import { useDispatch, useSelector } from 'react-redux'

const useStyle = makeStyles(style)
export default _ => {
  const { footerContainer, buttonStyle } = useStyle()
  const data = useSelector(({ wishList }) => wishList)
  const dispatch = useDispatch()
  useEffect(() => null, [])
  return (
    <>
      <NavBar fixed />
      <BreadCrumb pathname='WISH LIST' />
      <ItemsTable data={data} />
      <Container>
        <div className={footerContainer}>
          <Button variant='contained' className={buttonStyle}>
            Continue Shopping
          </Button>
          <Button variant='contained' className={buttonStyle}>
            Clear wishlist
          </Button>
        </div>
      </Container>
      <Footer />
    </>
  )
}
