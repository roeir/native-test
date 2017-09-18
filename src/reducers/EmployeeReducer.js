import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  SET_EDITED_EMPLOYEE,
} from '../constants';

const initialState = {
  name: '',
  phone: '',
  shift: 'Monday',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
      };
    case SET_EDITED_EMPLOYEE:
      return {
        ...action.payload,
      };
    case EMPLOYEE_CREATE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};