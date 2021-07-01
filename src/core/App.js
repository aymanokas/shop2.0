import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Routes from '../navigation/Routes'
import { store, persistor } from '../store'

export default () =>
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routes />
    </PersistGate>
  </ReduxProvider>
