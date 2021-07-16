export default {
  container: {
    marginTop: 86,
    marginBottom: 86
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
  paperContainer: {
    display: 'flex',
    padding: 26,
    backgroundColor: '#f6f6f6',
    width: 'auto',
    height: 'auto',
    flexDirection: 'column'
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
    marginBottom: 24,
    fontFamily: '"Poppins", sans-serif'
  },
  smallTitles: {
    color: '#000',
    letterSpacing: '.8px',
    fontSize: 18,
    marginBottom: 16,
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
  buttonStyle: {
    fontSize: 14,
    fontWeight: 500,
    height: 45,
    width: '100%',
    textTransform: 'uppercase',
    color: '#fff',
    margin: '26px 0',
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a749ff',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#000',
      color: 'white'
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
  },
  inputWidth: {
    width: '100%',
    marginBottom: 16,
    '& .MuiOutlinedInput-input': {
      padding: 8
    },
    '& .MuiInputLabel-outlined': {
      marginTop: -10
    },
    '& .MuiSelect-nativeInput': {
      marginTop: -10
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '0 !important',
      height: 42
    }
  },
  inputWidthSmall: {
    width: '45%',
    marginBottom: 16,
    '& .MuiOutlinedInput-input': {
      padding: 8
    },
    '& .MuiInputLabel-outlined': {
      marginTop: -10
    },
    '& .MuiSelect-nativeInput': {
      marginTop: -10
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '0 !important',
      height: 42
    }
  },
  rowInputContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    margin: '16px 0 10px 0'
  },
  productTitles: {
    color: '#000',
    letterSpacing: '.8px',
    fontSize: 16,
    marginBottom: 16,
    fontFamily: '"Poppins", sans-serif'
  },
  price: {
    color: '#000',
    letterSpacing: '.8px',
    fontSize: 12,
    marginBottom: 16,
    fontFamily: '"Poppins", sans-serif'
  },
  total: {
    color: '#a749ff',
    letterSpacing: '.8px',
    fontSize: 18,
    marginBottom: 16,
    fontFamily: '"Poppins", sans-serif'
  }
}
