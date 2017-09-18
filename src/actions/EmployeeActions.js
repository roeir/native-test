import firebase from 'firebase';

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  SET_EDITED_EMPLOYEE
} from '../constants';

export const updateEmployee = (prop, value) => ({
  type: EMPLOYEE_UPDATE,
  payload: {
    prop,
    value,
  },
});

export const setEditedEmployee = employee => ({
  type: SET_EDITED_EMPLOYEE,
  payload: employee,
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

export const saveEmployee = employee => {
  const { currentUser } = firebase.auth();
  const { name, phone, shift, uid } = employee;
  return dispatch =>
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => dispatch(employeeCreate()))
};

export const employeeDelete = uid => {
  const { currentUser } = firebase.auth();
  return dispatch =>
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
};