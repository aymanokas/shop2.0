import { takeLatest, put, select } from 'redux-saga/effects'
import fetch from 'node-fetch'
import { BASE_URL } from '../../constants'

const initialState = []

export const reducer = (state = initialState, { type, data }) => {
  switch (type) {
    case ADD_ITEM:
      return [
        ...state,
        data
      ]
    case REMOVE_ITEM:
      return [
        ...data
      ]
    default:
      return state
  }
}

export const addItemAction = (item) => ({ type: ADD_ITEN_WISH_REQUESTED, item })
export const removeItemWishListAction = (id) => ({ type: REMOVE_ITEM_WISH_REQUESTED, id })

function * addItemToWishList ({ item }) {
  const isAuth = yield select(({ session }) => session.authenticated)
  if (isAuth) {
    try {
      const response = yield fetch(queries.updateWishList)
      yield put({ type: UPDATE_USER_WISH_LIST_SUCCESS, data: response })
    } catch (err) {
      yield put({ type: UPDATE_USER_WISH_LIST_FAILED, err })
    }
  } else {
    yield put({ type: ADD_ITEM, data: item })
  }
}

function * removeItemToWishList ({ id }) {
  const isAuth = yield select(({ session }) => session.authenticated)
  const wishList = yield select(({ wishList }) => wishList)
  const updatedList = wishList.filter(item => item._id !== id)
  if (isAuth) {
    try {
      const response = yield fetch(queries.updateWishList)
      yield put({ type: UPDATE_USER_WISH_LIST_SUCCESS, data: response })
    } catch (err) {
      yield put({ type: UPDATE_USER_WISH_LIST_FAILED, err })
    }
  } else {
    yield put({ type: REMOVE_ITEM, data: updatedList })
  }
}

export function * WishListRootSaga () {
  yield takeLatest(ADD_ITEN_WISH_REQUESTED, addItemToWishList)
  yield takeLatest(REMOVE_ITEM_WISH_REQUESTED, removeItemToWishList)
}

const queries = {
  updateWishList: `${BASE_URL}/wish`
}

const ADD_ITEN_WISH_REQUESTED = 'ADD_ITEN_WISH_REQUESTED'
const UPDATE_USER_WISH_LIST_SUCCESS = 'UPDATE_USER_WISH_LIST_SUCCESS'
const UPDATE_USER_WISH_LIST_FAILED = 'UPDATE_USER_WISH_LIST_FAILED'
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM_WISH_REQUESTED = 'REMOVE_ITEM_WISH_REQUESTED'
const REMOVE_ITEM = 'REMOVE_ITEM'
