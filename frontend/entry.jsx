import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root";
import {login, logout, signup} from "./utils/session_api";
import {logIn, logOff} from "./actions/session_action";

window.logOff = logOff;
window.signup = signup;
document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { entities:{sessionReducer: {currentUser: window.currentUser}}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  }else {
    store = configureStore();
  }
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
