import sessionReducer from "./session_reducer";
import {combineReducers} from "redux";
import chatReducer from "./chat_reducer";

const entitiesReducer = combineReducers({
  sessionReducer: sessionReducer,
  chatReducer: chatReducer
});

export default entitiesReducer;
