import {connect} from "react-redux";
import Main from "./main";
import {getAllUserChatRooms, showChatRoom} from "../../actions/chatroom_actions";

const mapStateToProps = (state) => {
  return {
    cableApp: state.entities.sessionReducer.cableApp,
    id: state.entities.sessionReducer.currentUser.id,
    chatRooms: state.entities.chatReducer.chatRooms,
    show: state.entities.chatReducer.showMain
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUserChatRooms: (userId) => dispatch(getAllUserChatRooms(userId)),
    showChatRoom: (chatroomId) => dispatch(showChatRoom(chatroomId))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Main);
