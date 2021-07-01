import React from 'react'
import NavBar from '../../components/NavBar'
import Swiper from '../../components/Swiper'
import Categories from '../../components/Categories'
import style from './style'
import { makeStyles } from '@material-ui/core'
const useStyle = makeStyles(style)
export default _ => {
  const { homeContainer } = useStyle()

  return (
    <>
      <div className={homeContainer}>
        <NavBar />
        <Swiper />
      </div>
      <Categories />
    </>
  )
}
