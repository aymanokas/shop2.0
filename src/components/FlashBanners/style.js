export default {
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  paper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    height: 230,
    width: '45%',
    backgroundImage: 'url("https://flone.reactdemo.hasthemes.com/assets/img/banner/banner-8.png")',
    paddingTop: 50,
    paddingLeft: 24,
    paddingBottom: 30,
    backgroundSize: '100%',
    transition: 'all .7s',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    cursor: 'pointer',
    '&:hover': {
      transition: 'all .5s',
      backgroundSize: '110%'
    }
  },
  title: {
    fontSize: 48,
    color: '#915342'
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: '100%',
    width: '50%'
  },
  iconStyle: {
    color: '#915342',
    border: '2px solid #915342',
    borderRadius: 50,
    cursor: 'pointer'
  }
}
