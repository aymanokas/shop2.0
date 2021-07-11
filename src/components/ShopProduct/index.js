import React from 'react'
import { Typography, makeStyles, Divider, FormLabel, FormControl, RadioGroup, Button, FormControlLabel, Radio } from '@material-ui/core'
import style from './style'
import Container from '../Container'
import Product from '../Product'
import Rating from '@material-ui/lab/Rating'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

const useStyle = makeStyles(style)
export default () => {
  const { productImage, badges, product, discountAmount, lineDividerStyle, sizes, specsInfo, sectionTitle, relatedTitle, relatedSectionContainer, productSmallImagesSlider, productSmallImage, addToCartSection, radioContainer, iconStyle, shopButtonStyle, dividerStyle, meduimRadio, blueRadio, yellowRadio, productDescription, isNew, productControls, productDicountedPrice, productTitle, titleAndPrice, productPrice } = useStyle()
  return (
    <Container>
      <div className={product}>
        <div className={productImage}>
          <div className={badges}>
            <Typography className={discountAmount}>-10%</Typography>
            <Typography className={isNew}>New</Typography>
          </div>
        </div>
        <div className={productControls}>
          <div className={titleAndPrice}>
            <Typography className={productTitle}>Lorem ipsum jacket</Typography>
            <Typography className={productPrice}>€10.47<Typography className={productDicountedPrice}>€17.45</Typography></Typography>
            <Rating name='read-only' value={3} readOnly />
            <Typography className={productDescription}>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</Typography>
            <Divider className={dividerStyle} />
            <FormControl component='fieldset'>
              <FormLabel component='legend'>Color</FormLabel>
              <RadioGroup className={radioContainer} aria-label='colors' name='colors'>
                <FormControlLabel value='blue' control={<Radio color='default' className={blueRadio} />} />
                <FormControlLabel value='yellow' control={<Radio color='default' className={yellowRadio} />} />
                <FormControlLabel value='red' control={<Radio color='default' className={yellowRadio} />} />
              </RadioGroup>
            </FormControl>
            <FormControl component='fieldset'>
              <FormLabel component='legend'>Size</FormLabel>
              <div className={sizes}>
                <Button className={meduimRadio}>M</Button>
                <Button className={meduimRadio}>XL</Button>
                <Button className={meduimRadio}>XXL</Button>
              </div>
            </FormControl>
            <div className={addToCartSection}>
              <Button className={shopButtonStyle}>Add To Cart</Button>
              <FavoriteBorderIcon className={iconStyle} />
            </div>
            <Typography className={productDescription}>Categories : fashion  men</Typography>
            <Typography className={productDescription}>Tags : fashion  men  jacket  full sleeve</Typography>
          </div>
        </div>
      </div>
      <div className={productSmallImagesSlider}>
        <div className={productSmallImage} />
        <div className={productSmallImage} />
        <div className={productSmallImage} />
        <div className={productSmallImage} />
      </div>
      <div className={specsInfo}>
        <Typography className={sectionTitle}>Additional Information</Typography>
      </div>
      <Typography className={productDescription}>Weight :  400 g</Typography>
      <Typography className={productDescription}>Dimensions : 10 x 10 x 15 cm</Typography>
      <Typography className={productDescription}>Materials :  60% cotton, 40% polyester</Typography>
      <Typography className={productDescription}>Other Info : American heirloom jean shorts pug seitan letterpress</Typography>
      <div className={specsInfo}>
        <Typography className={sectionTitle}>Description</Typography>
      </div>
      <Typography className={productDescription}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</Typography>
      <div className={relatedSectionContainer}>
        <Divider className={lineDividerStyle} />
        <Typography className={relatedTitle}>Related Products</Typography>
        <Divider className={lineDividerStyle} />
      </div>
      <Product />
    </Container>
  )
}
