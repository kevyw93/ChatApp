import {getAllChatRooms} from "../utils/chat_room_api";
export const GET_CHAT_ROOMS = 'GET_CHAT_ROOMS';

export const receiveChatRooms = (chatrooms) => {
  return {
    type: GET_CHAT_ROOMS,
    chatrooms
  };
};

export const getChatRooms = (userId) => {
  return dispatch => {
    return getAllChatRooms(userId).then(
      (chatrooms) => dispatch(receiveChatRooms(chatrooms))
    );
  };
};
