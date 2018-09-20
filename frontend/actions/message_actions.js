export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
// export const RECEIVE_ACTIONCABLE_MESSAGE = 'RECEIVE_ACTIONCABLE_MESSAGE';
import * as MessageAPI from "../utils/message_api";

export const receiveMessage = (message) => {

  return {
    type: RECEIVE_MESSAGE,
    message
  };
};

// export const receiveActionCableMessage = (actionCableMessage) => {
//   return {
//     type: RECEIVE_ACTIONCABLE_MESSAGE,
//     actionCableMessage
//   };
// };

export const sendMessage = (message) => {
  return dispatch => {
    return MessageAPI.postMessage(message).then(
      (newMessage) => dispatch(receiveMessage(newMessage))
    );
  };
};
