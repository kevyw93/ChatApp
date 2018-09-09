import {connect} from "react-redux";
import Main from "./main";
import {getChatRooms} from "../../actions/chatroom_actions";

const mapStateToProps = (state) => {
  return {
    cableApp: state.entities.sessionReducer.cableApp,
    id: state.entities.sessionReducer.currentUser.id,
    chatRooms: state.entities.chatReducer.chatRooms
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getChatRooms: (userId) => dispatch(getChatRooms(userId))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Main);
