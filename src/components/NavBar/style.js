import { fade } from '@material-ui/core/styles'
export default (theme) => ({
  navbarContainer: {
    width: '100%',
    height: 89,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #cecece'
  },
  callusStyle: {
    color: '#555252',
    letterSpacing: '.8px',
    fontSize: 14,
    fontFamily: '"Poppins", sans-serif'
  },
  logoStyle: {
    width: 103,
    height: 26,
    marginLeft: 118
  },
  iconStyle: {
    width: 23,
    height: 23,
    cursor: 'pointer'
  },
  iconsContainerStyle: {
    width: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tabsBar: {
    width: '100%',
    height: 55,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tab: {
    color: '#000',
    letterSpacing: '.8px',
    fontSize: 15,
    cursor: 'pointer',
    margin: '0 12px 0 12px',
    fontFamily: '"Poppins", sans-serif',
    '&:hover': {
      color: '#a749ff'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
})
