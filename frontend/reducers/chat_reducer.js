import {GET_CHAT_ROOMS} from "../actions/chatroom_actions";

const preloadedState = {
  chatRooms: null
};

const ChatReducer = (state = preloadedState,action) => {

  switch(action.type){
    case GET_CHAT_ROOMS:
      return Object.assign({}, state, {chatRooms: action.chatrooms});
    default:
      return state;
  }
};

export default ChatReducer;
