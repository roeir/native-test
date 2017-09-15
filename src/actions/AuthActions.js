import firebase from 'firebase';
import { AsyncStorage } from 'react-native';

import {
  LOGIN_INPUT_CHANGED,
  LOGIN_ERROR,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  USER_LOGOUT,
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

export const setCurrentUser = user => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginUser = ({ email, password }) =>
  dispatch => {
    dispatch(loginPendeing());
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => dispatch(setCurrentUser(user)))
      .catch(() => firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => dispatch(setCurrentUser(user)))
        .catch(error => dispatch(loginError(error)))
      )
  };

export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const logout = () =>
  dispatch => {
    firebase.auth().signOut()
      .then(() => dispatch(userLogout()))
      .catch(err => console.log(err))
  };