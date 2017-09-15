import {
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEES_FETCH_PENDING,
} from '../constants';

const initialState = {
  employeeList: {},
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return {
        ...state,
        employeeList: action.payload,
        loading: false,
      };
      return state;
    default:
      return state;
  }
};