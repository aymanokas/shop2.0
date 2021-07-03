export default {
  container: {
    width: '100%',
    height: 580,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#daedff'
  },
  productType: {
    color: '#000',
    letterSpacing: '.8px',
    fontSize: 16,
    fontWeight: '500'
  },
  productTitle: {
    color: '#000',
    letterSpacing: '.8px',
    fontSize: 48,
    fontWeight: '500',
    marginTop: 12,
    marginBottom: 16
  },
  productThumbnail: {
    width: 450
  },
  productTitleContainer: {
    width: 570
  },
  shopButtonStyle: {
    width: 189,
    height: 56,
    borderRadius: 0,
    border: '1px #000 solid',
    color: '#000',
    backgroundColor: '#ffffff00',
    boxShadow: 'inset 0 0 0 0 #a749ff',
    fontFamily: '"Poppins", sans-serif',
    transition: 'ease-out 0.4s',
    '&:hover': {
      color: '#fff',
      boxShadow: 'inset 400px 0 0 #a749ff'
    }
  }
}
