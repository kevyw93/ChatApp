import {RECEIVE_CURRENT_USER, CREATE_CABLE} from '../actions/session_action';

const sessionReducer = (state = {currentUser: null, cableApp: null}, action) => {
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {currentUser: action.currentUser});
    case CREATE_CABLE:
      return Object.assign({}, state, {cableApp: action.cable});
    default:
      return state;
  }
};

export default sessionReducer;
