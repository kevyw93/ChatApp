export const getAllChatRooms = (userId) => {
  return $.ajax ({
    type: 'get',
    url: '/api/chat_rooms',
    data: userId
  });
};

export const getChatRoom = (chatroomId) => {
  return $.ajax({
    type: "get",
    url: `/api/chat_rooms/${chatroomId}`,
  });
};
