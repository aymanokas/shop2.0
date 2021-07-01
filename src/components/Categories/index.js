import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import style from './style'
import Container from '../Container'

const useStyle = makeStyles(style)
const image = 'https://flone.reactdemo.hasthemes.com/assets/img/product/hm9-cagi-1.jpg'
export default () => {
  const { categorie, thumbnail, titleStyle, categoriesContainer, productCount } = useStyle()

  return (
    <Container>
      <div className={categoriesContainer}>
        <div className={categorie}>
          <img src={image} className={thumbnail} />
          <Typography className={productCount}>4 Products</Typography>
          <Typography className={titleStyle}>Bluetooth Speaker</Typography>
        </div>
        <div className={categorie}>
          <img src={image} className={thumbnail} />
          <Typography className={productCount}>4 Products</Typography>
          <Typography className={titleStyle}>Bluetooth Speaker</Typography>
        </div>
        <div className={categorie}>
          <img src={image} className={thumbnail} />
          <Typography className={productCount}>4 Products</Typography>
          <Typography className={titleStyle}>Bluetooth Speaker</Typography>
        </div>
      </div>
    </Container>
  )
}
