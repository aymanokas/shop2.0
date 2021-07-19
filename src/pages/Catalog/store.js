import { takeLatest, put } from 'redux-saga/effects'
const initialUserState = {

}

export const reducer = (state = initialUserState, { type, data }) => {
  switch (type) {
    case GET_CATALOG_SUCCESS:
      return {
        ...state,
        catalog: data
      }
    default:
      return state
  }
}

export const getCatalogAction = () => ({ type: GET_CATALOG_SUCCESS })

function * fetchCatalog () {
  try {
    yield put({ type: GET_CATALOG_SUCCESS, data: 'hello' })
  } catch (err) {
    yield put({ type: GET_CATALOG_FAILED, data: err })
  }
}

export function * trainerRootSaga () {
  yield takeLatest(GET_CATALOG_REQUESTED, fetchCatalog)
}

const GET_CATALOG_SUCCESS = 'GET_CATALOG_SUCCESS'
const GET_CATALOG_FAILED = 'GET_CATALOG_FAILED'
const GET_CATALOG_REQUESTED = 'GET_CATALOG_REQUESTED'
