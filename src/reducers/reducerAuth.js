import { CREATE_SIGNUP, FETCH_SIGNUP, CREATE_LOGIN, FETCH_LOGIN, CREATE_LOGOUT, FETCH_LOGOUT } from '../actions/index';


const INITIAL_STATE = {register: {}, login: {}};

export default function(state = INITIAL_STATE, action) {
  switch (action.type ) {
    case CREATE_SIGNUP:
      return {...state, register: action.payload.data};
    case FETCH_SIGNUP:
      return {...state, register: action.payload.data};
    case CREATE_LOGIN:
      return {...state, login: action.payload.data};
    case FETCH_LOGIN:
      return {...state, login: action.payload.data};
    case CREATE_LOGOUT:
      return {...state, login: action.payload.data};
    case FETCH_LOGOUT:
      return {...state, login: action.payload.data};
    default:
    return state;
  }
}
