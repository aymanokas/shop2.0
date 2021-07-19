import { put, select, takeLatest } from 'redux-saga/effects'
import fetch from 'node-fetch'
import { BASE_URL } from '../../constants'

const initialState = {

}

export const reducer = (state = initialState, { type, data }) => {
  switch (type) {
    case SIGN_UP_SUCCESS:
      return {
        ...state
      }

    default:
      return state
  }
}

export const signupAction = (data) => ({ type: SIGN_UP_REQUESTED, data })
export const signinAction = (data) => ({ type: SIGN_IN_REQUESTED, data })

function * signupUser ({ data }) {
  try {
    const response = yield fetch(
      queries.register,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
    )
    yield put({ type: SIGN_UP_SUCCESS, data: response })
  } catch (err) {
    yield put({ type: SIGN_UP_FAIL, err })
  }
}

function * signinUser ({ data }) {
  try {
    const response = yield fetch(
      queries.login,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
    )
    console.log('-------------> ', response)
    yield put({ type: SIGN_IN_SUCCESS, data: response })
  } catch (err) {
    yield put({ type: SING_IN_FAIL, err })
  }
}

export function * LoginRootSaga () {
  yield takeLatest(SIGN_UP_REQUESTED, signupUser)
  yield takeLatest(SIGN_IN_REQUESTED, signinUser)
}

const queries = {
  register: `${BASE_URL}/user/signup`,
  login: `${BASE_URL}/user/login`
}

const SIGN_UP_REQUESTED = 'SIGN_UP_REQUESTED'
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
const SIGN_UP_FAIL = 'SIGN_UP_FAIL'

const SIGN_IN_REQUESTED = 'SIGN_IN_REQUESTED'
const SING_IN_FAIL = 'SING_IN_FAIL'
const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
