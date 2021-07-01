import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { signin } from 'identity/userManager'

const PrivateRoute = ({ path, exact, isConnected, children, logoutInProgress }) => {
  return isConnected || logoutInProgress
    ? <Route exact={exact} path={path}>{children}</Route>
    : signin()
}

const mapStateToProps = ({ identity }) => ({
  isConnected: identity.isConnected,
  logoutInProgress: identity.logoutInProgress
})

export default connect(mapStateToProps, null)(PrivateRoute)
