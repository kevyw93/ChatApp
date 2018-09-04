export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
import {login, logout, signup} from '../utils/session_api';

export const receiveCurrentUser = (currentUser) => {
  debugger
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const signUp = (payload) => {
  debugger
  return dispatch => {
    return signup(payload).then(
      (user) => receiveCurrentUser(user)
    );
  };
};


export const logIn = (payload) => (
  dispatch => (
    login(payload).then(
      (user) =>  receiveCurrentUser(user)
    )
  )
);