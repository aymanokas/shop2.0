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
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '26px 60px',
    backgroundColor: '#f6f6f6',
    width: 'auto',
    height: '350px',
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
  buttonStyle: {
    fontSize: 14,
    fontWeight: 500,
    height: 45,
    padding: '15px 52px',
    textTransform: 'uppercase',
    color: '#fff',
    margin: '14px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#a749ff',
      color: 'white'
    }
  },
  iconStyle: {
    width: 23,
    height: 23,
    cursor: 'pointer'
  },
  inputWidth: {
    width: '100%',
    marginBottom: 24,
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
    width: '48%',
    marginBottom: 24,
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
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
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
  },
  contactTextRow: {
    display: 'flex',
    flexDirection: 'column',
    '&:first-child': {
      marginBottom: 8
    }
  },
  iconContainer: {
    marginRight: 15,
    display: 'flex',
    border: '1px solid black',
    borderRadius: '50%',
    padding: 15,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    '&:hover': {
      '& > svg': {
        color: 'white'
      },
      backgroundColor: 'black'
    }
  },
  iconStyle: {
    color: 'black'
  },
  formPaper: {
    width: '100%',
    backgroundColor: '#f6f6f6',
    padding: 26,
    height: '350px'
  },
  formHeader: {
    marginBottom: 16,
    fontWeight: 500,
    fontSize: 24,
    textTransform: 'uppercase',
    ontFamily: '"Poppins", sans-serif'
  }
}
