import { put, select, takeLatest } from 'redux-saga/effects'
import fetch from 'node-fetch'
import { BASE_URL } from '../../constants'

const initialState = {

}

export const reducer = (state = initialState, { type, data }) => {
  switch (type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        ...data
      }

    default:
      return state
  }
}

export const fetchUserAction = () => ({ type: USER_FETCH_REQUESTED })

function * fetchUser () {
  try {
    const response = yield fetch(queries.getUserData)
    yield put({ type: GET_USER_SUCCESS, data: response })
  } catch (err) {
    yield put({ type: GET_USER_FAILED, err })
  }
}


export function * userRootSaga () {

}

const queries = {
  getWishList: `${BASE_URL}/wish`
}
