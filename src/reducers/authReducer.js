import isEmpty from '../validation/isEmpty';
import * as types from '../types';

const initialState = {
	isAuthenticated: false,
	user: {},
	errors: null
}

export default function(state = initialState, action){
	switch(action.type) {
		case types.SET_CURRENT_USER:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case types.SEND_USER_AUTHENTICATION_ATTEMPT:
      return { ...state, isLoading: true};
    case types.SEND_USER_AUTHENTICATION_FAIL:
      return { ...state, isLoading: false, errors: action.payload };  
		default:
			return state;
	}
}
