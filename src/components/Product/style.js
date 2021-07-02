export default {
  productContainer: {
    maxWidth: '25%',
    width: '100%',
    flex: '0 0 25%',
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer'
  },
  productsStyle: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  },
  titleandpriceContainer: {
    width: '100%',
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column'
  },
  productImage: {
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundImage: 'url("https://flone.reactdemo.hasthemes.com/assets/img/product/electronics/9.jpg")',
    overflow: 'hidden',
    alignItems: 'center',
    backgroundSize: '100%',
    transition: 'all .7s',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    justifyContent: 'center',
    '&:hover': {
      transition: 'all .5s',
      backgroundSize: '110%'
    }
  },
  thumbnail: {
    width: '100%',
    transition: 'all .7s',
    justifyContent: 'center'
  },
  productTitle: {
    color: '#000',
    letterSpacing: '.8px',
    fontSize: 16,
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all .4s ease 0s'
  },
  productPrice: {
    color: '#000',
    letterSpacing: '.8px',
    fontSize: 14,
    cursor: 'pointer',
    fontWeight: '600'
  }
}
