import { takeLatest, put } from 'redux-saga/effects'
import fetch from 'node-fetch'
import { BASE_URL } from '../../constants'

const initialUserState = {
  count: 0,
  data: []
}

export const reducer = (state = initialUserState, { type, data }) => {
  switch (type) {
    case GET_CATALOG_SUCCESS:
      return {
        ...state,
        ...data
      }
    default:
      return state
  }
}

export const getCatalogAction = (take, skip) => ({ type: GET_CATALOG_REQUESTED, take, skip })

function * fetchCatalog ({ take, skip }) {
  try {
    console.warn(take, skip)
    const json = yield fetch(queries.getCatalog(take, skip))
    const response = yield json.json()
    yield put({ type: GET_CATALOG_SUCCESS, data: response })
  } catch (err) {
    yield put({ type: GET_CATALOG_FAILED, data: err })
  }
}

export function * catalogRootSaga () {
  yield takeLatest(GET_CATALOG_REQUESTED, fetchCatalog)
}

const queries = {
  getCatalog: (take, skip) => `${BASE_URL}/catalog/getCatalog?take=${take}&skip=${skip}&orderby=numberOfPurchases`
}

const GET_CATALOG_SUCCESS = 'GET_CATALOG_SUCCESS'
const GET_CATALOG_FAILED = 'GET_CATALOG_FAILED'
const GET_CATALOG_REQUESTED = 'GET_CATALOG_REQUESTED'
