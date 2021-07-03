export default {
  productContainer: {
    maxWidth: '25%',
    height: 400,
    width: 'calc(100% * (1/4) - 10px - 0.5px - 0.5px)',
    flex: '1 0 22%',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    alignItems: 'center',
    cursor: 'pointer',
    paddingRight: 10,
    paddingLeft: 10
  },
  productsStyle: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 55,
    marginBottom: 65
  },
  titleandpriceContainer: {
    width: '100%',
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 35
  },
  productImage: {
    width: '100%',
    position: 'relative',
    height: '100%',
    display: 'flex',
    backgroundImage: 'url("https://flone.reactdemo.hasthemes.com/assets/img/product/electronics/5.jpg")',
    overflow: 'hidden',
    alignItems: 'flex-end',
    backgroundSize: '100%',
    transition: 'all .7s',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    justifyContent: 'center',
    '&:hover': {
      transition: 'all .5s',
      backgroundSize: '110%',
      '& > button': {
        transform: 'translateY(0)'
      }
    }
  },
  thumbnail: {
    width: '100%',
    transition: 'all .7s',
    fontFamily: '"Poppins", sans-serif',
    justifyContent: 'center'
  },
  productTitle: {
    color: '#000',
    letterSpacing: '.8px',
    fontSize: 16,
    cursor: 'pointer',
    transition: 'all .4s ease 0s',
    fontFamily: '"Poppins", sans-serif'
  },
  productPrice: {
    color: '#000',
    letterSpacing: '.8px',
    fontSize: 14,
    display: 'inline-flex',
    cursor: 'pointer',
    fontFamily: '"Poppins", sans-serif'
  },
  discoutedPrice: {
    color: '#8e8e8e',
    textDecoration: 'line-through',
    letterSpacing: '.8px',
    display: 'inline-flex',
    fontSize: 14,
    cursor: 'pointer',
    fontFamily: '"Poppins", sans-serif'
  },
  wishButton: {
    width: 48,
    height: 48,
    fontSize: 14,
    color: '#fff',
    backgroundColor: '#a749ff',
    borderRadius: 0,
    transition: 'transform .4s',
    transform: 'translateY(100%)',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff'
    }
  },
  selectButton: {
    width: 'calc( 100% - 96px )',
    height: 48,
    fontSize: 14,
    color: '#fff',
    backgroundColor: '#a749ff',
    borderRadius: 0,
    transition: 'transform .5s',
    transform: 'translateY(100%)',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff'
    }
  },
  previewButton: {
    width: 48,
    height: 48,
    fontSize: 14,
    color: '#fff',
    backgroundColor: '#a749ff',
    borderRadius: 0,
    transition: 'transform .6s',
    transform: 'translateY(100%)',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff'
    }
  },
  badges: {
    position: 'absolute',
    top: 12,
    right: 12
  },
  discountAmount: {
    color: '#fa6bff',
    letterSpacing: '.8px',
    fontSize: 13,
    cursor: 'pointer',
    fontFamily: '"Poppins", sans-serif'
  },
  isNew: {
    color: '#a749ff',
    letterSpacing: '.8px',
    fontSize: 13,
    cursor: 'pointer',
    fontFamily: '"Poppins", sans-serif'
  }
}
