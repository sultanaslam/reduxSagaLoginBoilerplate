import { takeLatest, fork, all } from 'redux-saga/effects';

import * as types from '../types';
import sendUserAuthenticationSaga from './sendUserAuthenticationSaga';
import userSignOutSaga from './userSignOutSaga';

function* watchSendUserAuthentication() {
  yield takeLatest(types.SEND_USER_AUTHENTICATION, sendUserAuthenticationSaga);
}

function* watchUserSignOut() {
  yield takeLatest(types.USER_LOGOUT, userSignOutSaga);
}

export default function* rootSaga() {
  yield all([
    fork(watchSendUserAuthentication),
    fork(watchUserSignOut)
  ]);
}
