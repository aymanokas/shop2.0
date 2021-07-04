export default {
  productImage: {
    width: '50%',
    position: 'relative',
    height: 680,
    display: 'flex',
    backgroundImage: 'url("https://flone.reactdemo.hasthemes.com/assets/img/product/electronics/5.jpg")',
    overflow: 'hidden',
    alignItems: 'flex-end',
    backgroundSize: '100%',
    transition: 'all .7s',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    justifyContent: 'center'
  },
  productSmallImage: {
    width: '25%',
    position: 'relative',
    marginRight: 4,
    boxSizing: 'border-box',
    height: 230,
    display: 'flex',
    backgroundImage: 'url("https://flone.reactdemo.hasthemes.com/assets/img/product/electronics/5.jpg")',
    overflow: 'hidden',
    alignItems: 'flex-end',
    backgroundSize: '100%',
    transition: 'all .7s',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    justifyContent: 'center'
  },
  productSmallImagesSlider: {
    width: '50%',
    display: 'flex',
    boxSizing: 'border-box',
    paddingRight: 42
  },
  badges: {
    position: 'absolute',
    top: 12,
    left: 12
  },
  discountAmount: {
    color: '#fff',
    backgroundColor: '#fa6bff',
    letterSpacing: '.8px',
    padding: '0 12px 0 12px',
    marginBottom: 12,
    borderRadius: 2,
    fontSize: 14,
    fontFamily: '"Poppins", sans-serif'
  },
  isNew: {
    color: '#fff',
    backgroundColor: '#a749ff',
    letterSpacing: '.8px',
    padding: '0 12px 0 12px',
    borderRadius: 2,
    fontSize: 14,
    fontFamily: '"Poppins", sans-serif'
  },
  product: {
    height: 680,
    display: 'flex',
    marginTop: 70
  },
  productControls: {
    width: '50%',
    height: 680,
    padding: '0 24px 0 70px',
    display: 'flex',
    flexDeriction: 'column',
    alignItems: 'start'
  },
  productTitle: {
    color: '#000',
    letterSpacing: '.8px',
    fontSize: 24,
    fontFamily: '"Poppins", sans-serif'
  },
  productPrice: {
    color: '#fe5252',
    letterSpacing: '.8px',
    marginBottom: 26,
    fontSize: 24,
    fontFamily: '"Poppins", sans-serif'
  },
  productDicountedPrice: {
    color: '#8e8e8e',
    textDecoration: 'line-through',
    letterSpacing: '.8px',
    marginLeft: 16,
    display: 'inline-flex',
    fontSize: 18,
    fontFamily: '"Poppins", sans-serif'
  },
  productDescription: {
    color: '#333',
    letterSpacing: '.8px',
    marginTop: 26,
    fontSize: 15,
    fontFamily: '"Poppins", sans-serif'
  },
  dividerStyle: {
    margin: '37px 0 37px 0'
  },
  blueRadio: {
    color: '#66d9ef',
    '&:checked': {
      color: '#4fa4b5'
    }
  },
  yellowRadio: {
    color: '#dc3545',
    '&:checked': {
      color: '#dc3545'
    }
  },
  radioContainer: {
    flexDirection: 'row'
  },
  meduimRadio: {
    borderRadius: 0,
    width: 25,
    backgroundColor: '#f1f2f6',
    color: '#000',
    '&:hover': {
      backgroundColor: '#6f42c1',
      color: '#fff'
    }
  },
  sizes: {
    width: '110%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  shopButtonStyle: {
    width: 189,
    height: 56,
    borderRadius: 0,
    color: '#fff',
    backgroundColor: '#343538',
    boxShadow: 'inset 0 0 0 0 #a749ff',
    fontFamily: '"Poppins", sans-serif',
    transition: 'ease-out 0.7s',
    '&:hover': {
      color: '#fff',
      boxShadow: 'inset 400px 0 0 #a749ff'
    }
  },
  iconStyle: {
    width: 23,
    height: 23,
    cursor: 'pointer'
  },
  addToCartSection: {
    width: 236,
    marginTop: 24,
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  specsInfo: {
    width: '100%',
    haight: 60,
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    borderBottom: '1px solid #000'
  },
  sectionTitle: {
    color: '#000',
    letterSpacing: '.8px',
    marginTop: 26,
    fontSize: 26,
    fontFamily: '"Poppins", sans-serif',
    borderBottom: '2px solid #000'
  },
  relatedSectionContainer: {
    width: '100%',
    haight: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60
  },
  relatedTitle: {
    color: '#000',
    letterSpacing: '.8px',
    margin: '0 12px 0 12px',
    fontSize: 30,
    fontFamily: '"Poppins", sans-serif'
  },
  lineDividerStyle: {
    width: 120,
    backgroundColor: '#000',
    height: 2
  }
}
