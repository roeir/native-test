import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from '../constants';

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
    case EMPLOYEE_CREATE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};