import sessionReducer from "./session_reducer";
import {combineReducers} from "redux";
import chatReducer from "./chat_reducer";
import messageReducer from "./message_reducer";

const entitiesReducer = combineReducers({
  sessionReducer: sessionReducer,
  chatReducer: chatReducer,
  messageReducer: messageReducer
});

export default entitiesReducer;
