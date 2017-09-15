import firebase from 'firebase';

import {
  EMPLOYEES_FETCH_PENDING,
  EMPLOYEES_FETCH_SUCCESS,
} from '../constants'

export const employeesFetchPending = () => ({
  type: EMPLOYEES_FETCH_PENDING,
});

export const employeesFetchSuccess = employees => ({
  type: EMPLOYEES_FETCH_SUCCESS,
  payload: employees,
});

export const employeesFetch = () => {
  const { currentUser: { uid } } = firebase.auth();
  return dispatch => {
    dispatch(employeesFetchPending());
    firebase.database().ref(`/users/${uid}/employees`)
      .on('value', snapshot => {
        dispatch(employeesFetchSuccess(snapshot.val()));
      })
  };
};