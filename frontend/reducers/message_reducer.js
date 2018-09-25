import {SHOW_MESSAGES} from "../actions/chatroom_actions";
import {RECEIVE_MESSAGE, RECEIVE_ACTIONCABLE_MESSAGE} from "../actions/message_actions";

const preloadedState = {
  messages: null
};

const messageReducer = (state = preloadedState, action) => {
  switch(action.type) {
    case SHOW_MESSAGES:
      return Object.assign({}, state, {messages: action.messages});
    case RECEIVE_MESSAGE:

      const newMessages = Object.assign([], state.messages);
      debugger
      newMessages.messages.push(action.message);
      return Object.assign({}, state, {messages: newMessages});

    default:
      return state;
  }
};

export default messageReducer;
