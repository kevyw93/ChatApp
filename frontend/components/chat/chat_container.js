import {connect} from "react-redux";
import Chat from "./chat";
import {sendMessage} from "../../actions/message_actions";
// import {withRouter} from "react-router-dom";


const mapStateToProps = (state, ownProps) => {
  let messages;
  if(state.entities.messageReducer.messages){
    messages = state.entities.messageReducer.messages;
  }
  return {
    cableApp: state.entities.sessionReducer.cableApp,
    currentUserId: state.entities.sessionReducer.currentUser.id,
    currentChatId: state.entities.chatReducer.currentChatId,
    messages
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (msg) => dispatch(sendMessage(msg))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Chat);
