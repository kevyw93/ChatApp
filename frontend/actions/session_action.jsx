export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const CREATE_CABLE = "CREATE_CABLE";
import {login, logout, signup} from '../utils/session_api';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const signUp = (payload) => (
  dispatch => (
    signup(payload).then(
      (user) => dispatch(receiveCurrentUser(user))
    )
  )
);


export const logIn = (payload) => (
  dispatch => (
    login(payload).then(
      (user) =>  dispatch(receiveCurrentUser(user))
    )
  )
);

export const logOff = () => {
  return dispatch => (
    logout().then(
      () =>  dispatch(receiveCurrentUser(null))
    )
  );
};

export const createCable = (cable) => {
  return {
    type: CREATE_CABLE,
    cable
  };
};
