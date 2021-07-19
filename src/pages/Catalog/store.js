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

export const getCatalogAction = () => ({ type: GET_CATALOG_REQUESTED })

function * fetchCatalog () {
  try {
    const json = yield fetch(queries.getCatalog)
    const response = yield json.json()
    console.warn(response)
    yield put({ type: GET_CATALOG_SUCCESS, data: response })
  } catch (err) {
    yield put({ type: GET_CATALOG_FAILED, data: err })
  }
}

export function * catalogRootSaga () {
  yield takeLatest(GET_CATALOG_REQUESTED, fetchCatalog)
}

const queries = {
  getCatalog: `${BASE_URL}/catalog/getCatalog?take=10&skip=0`
}

const GET_CATALOG_SUCCESS = 'GET_CATALOG_SUCCESS'
const GET_CATALOG_FAILED = 'GET_CATALOG_FAILED'
const GET_CATALOG_REQUESTED = 'GET_CATALOG_REQUESTED'
