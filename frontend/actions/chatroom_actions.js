import {getAllChatRooms, getChatRoom } from "../utils/chat_room_api";
export const GET_CHAT_ROOMS = 'GET_CHAT_ROOMS';
export const TOGGLE_MAIN = 'TOGGLE_MAIN';
export const SHOW_MESSAGES = 'SHOW_MESSAGES';

export const receiveChatRooms = (chatrooms) => {
  return {
    type: GET_CHAT_ROOMS,
    chatrooms
  };
};

export const getAllUserChatRooms = (userId) => {
  return dispatch => {
    return getAllChatRooms(userId).then(
      (chatrooms) => dispatch(receiveChatRooms(chatrooms))
    );
  };
};

// export const toggleMainPage = () => {
//   return {
//     type: TOGGLE_MAIN
//   };
// };

export const showRoomMessages = (messages) => {
  return {
    type: SHOW_MESSAGES,
    messages
  };
};


export const showChatRoom = (chatroomId) => {
  return dispatch => {
    return getChatRoom(chatroomId).then(
      (messages) => dispatch(showRoomMessages(messages))
    );
  };
};
