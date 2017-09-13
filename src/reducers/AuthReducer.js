import {
  LOGIN_INPUT_CHANGED,
  LOGIN_ERROR,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
} from '../constants/';

const initialState = {
  email: '',
  password: '',
  error: null,
  loading: false,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_INPUT_CHANGED:
      return {
        ...state,
        [action.input]: action.text,
      };
    case LOGIN_PENDING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        password: '',
        error: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...initialState,
        user: action.payload,
      };
    default:
      return state;
  }
};