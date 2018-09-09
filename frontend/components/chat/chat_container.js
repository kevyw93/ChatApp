import {connect} from "react-redux";
import Chat from "./chat";
const mapStateToProps = (state) => {
  let messages;
  if(state.entities.messageReducer.messages){
    messages = state.entities.messageReducer.messages.messages;
  }
  debugger
  return {
    cableApp: state.entities.sessionReducer.cableApp,
    messages
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Chat);
