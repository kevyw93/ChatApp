import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root";
import {login, logout} from "./utils/session_api";
import {signup} from "./utils/signup_api";

window.signup = signup;
document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { entities:{session: {currentUser: window.currentUser}}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  }else {
    store = configureStore();
  }
  debugger
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
