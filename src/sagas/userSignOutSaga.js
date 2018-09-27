import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import {setAuthToken} from '../utils';
import * as actions from '../actions/authActions';

export default function* userSignOutSaga() {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  yield put(actions.setCurrentUser({}));
  yield put(push('/login'));
}
