import {connect} from "react-redux";
import SideBar from "./side_bar";
import {getAllUserChatRooms, showChatRoom} from "../../actions/chatroom_actions";

const mapStateToProps = (state) => {
  return {
    chatRooms: state.entities.chatReducer.chatRooms,
    id: state.entities.sessionReducer.currentUser.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUserChatRooms: (userId) => dispatch(getAllUserChatRooms(userId)),
    showChatRoom: (chatroomId) => dispatch(showChatRoom(chatroomId))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
