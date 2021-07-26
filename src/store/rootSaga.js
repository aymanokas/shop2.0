import { all } from 'redux-saga/effects'
import { catalogRootSaga } from '../pages/Catalog/store'
import { LoginRootSaga } from '../pages/Login/store'

export default function * () {
  yield all([
    catalogRootSaga(),
    LoginRootSaga()
  ])
}
