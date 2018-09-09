import {GET_CHAT_ROOMS, SHOW_MESSAGES} from "../actions/chatroom_actions";

const preloadedState = {
  chatRooms: null,
  showMain: false,
};

const ChatReducer = (state = preloadedState,action) => {

  switch(action.type){
    case GET_CHAT_ROOMS:
      return Object.assign({}, state, {chatRooms: action.chatrooms});
    case SHOW_MESSAGES:
      return Object.assign({}, state, {showMain: !state.showMain});
    default:
      return state;
  }
};

export default ChatReducer;
