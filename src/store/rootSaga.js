import { all } from 'redux-saga/effects'
import { catalogRootSaga } from '../pages/Catalog/store'
import { LoginRootSaga } from '../pages/Login/store'
import { WishListRootSaga } from '../pages/Whishlist/store'

export default function * () {
  yield all([
    catalogRootSaga(),
    LoginRootSaga(),
    WishListRootSaga()
  ])
}
