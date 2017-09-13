import firebase from 'firebase';

import {
  LOGIN_INPUT_CHANGED,
  LOGIN_ERROR,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
} from '../constants/';

export const inputChanged = (input, text) => ({
  type: LOGIN_INPUT_CHANGED,
  input,
  text,
});

export const loginError = error => ({
  type: LOGIN_ERROR,
  payload: error,
});

export const loginPendeing = () => ({
  type: LOGIN_PENDING,
});

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginUser = ({ email, password }) =>
  dispatch => {
    dispatch(loginPendeing());
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => dispatch(loginSuccess(user)))
      .catch(() => firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => dispatch(loginSuccess(user)))
        .catch(error => dispatch(loginError(error)))
      )

  };