import {SHOW_MESSAGES} from "../actions/chatroom_actions";

const preloadedState = {
  messages: null
};

const messageReducer = (state = preloadedState, action) => {
  switch(action.type) {
    case SHOW_MESSAGES:
      return Object.assign({}, state, {messages: action.messages});
    default:
      return state;
  }
};

export default messageReducer;
