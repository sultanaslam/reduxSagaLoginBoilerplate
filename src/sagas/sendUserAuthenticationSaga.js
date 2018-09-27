import { put, call } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import * as actions from '../actions/authActions';
import * as api from '../api';

import {setAuthToken} from '../utils';
import jwt_decode from 'jwt-decode';

export default function* sendUserAuthenticationSaga(action) {
  console.log('action: ', action)
  const data = action.payload;

  yield put(actions.sendUserAuthenticationAttempt());
  // yield call(delay, 1000);
  try {
    const res = yield call(api.postUserAuthentication, data);
    if (res.status >= 200 && res.status < 300) {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      yield put(actions.setCurrentUser(decoded));
    } else {
      throw res;
    }
  } catch (e) {
    yield put(actions.sendUserAuthenticationFail(e));
  }
}
