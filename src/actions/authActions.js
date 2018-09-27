import * as types from '../types';

export function loginUser(userData, dispatch){
  return {
    type: types.SEND_USER_AUTHENTICATION,
    payload: {
      email: userData.email,
      password: userData.password
    }
  }
};

export function setCurrentUser(decoded){
  return {
    type: types.SET_CURRENT_USER,
    payload: decoded
  };
};

export function logoutUser(history) {
  return {
    type: types.USER_LOGOUT,
  };
};

export function sendUserAuthenticationAttempt() {
  return {
    type: types.SEND_USER_AUTHENTICATION_ATTEMPT
  };
}

export function sendUserAuthenticationSuccess(data) {
  return {
    type: types.SEND_USER_AUTHENTICATION_SUCCESS,
    payload: data
  };
}

export function sendUserAuthenticationFail(error) {
  return {
    type: types.SEND_USER_AUTHENTICATION_FAIL,
    payload: error.response.data
  };
}