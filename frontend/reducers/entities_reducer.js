import session from "./session_reducer";
import {combineReducers} from "redux";

const entitiesReducer = combineReducers({
  session: session
});

export default entitiesReducer;
