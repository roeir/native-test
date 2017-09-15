import firebase from 'firebase';

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
} from '../constants';

export const updateEmployee = (prop, value) => ({
  type: EMPLOYEE_UPDATE,
  payload: {
    prop,
    value,
  },
});

export const employeeCreate = () => ({
  type: EMPLOYEE_CREATE,
});

export const createEmployee = employeeData => {
  const { currentUser: { uid } } = firebase.auth();
  return dispatch =>
    firebase.database().ref(`/users/${uid}/employees`)
      .push(employeeData)
      .then(() => { dispatch(employeeCreate()) })
};