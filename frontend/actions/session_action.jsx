export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
import {signup} from '../utils/signup_api';
import {login, logout} from '../utils/session_api';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const signUp = (payload) => {
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
