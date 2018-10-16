import React from "react";
import {Link} from "react-router-dom";

class SideBar extends React.Component {
  constructor(props){
    super(props);
    this.enterChatRoom = this.enterChatRoom.bind(this);
  }

  enterChatRoom(chatroomId){
    return () => this.props.showChatRoom(chatroomId);
  }


  componentDidMount() {
    this.props.getAllUserChatRooms({user_id: this.props.id});
  }

  render() {
    let chatRooms;
    if(this.props.chatRooms){
      // goes into sidebar
      chatRooms = this.props.chatRooms.map((el,i) => (
        <li key={i}>
          <button onClick={this.enterChatRoom(el.id)}>
            {el.title}
          </button>
        </li>
      ));
    }
    return (
      <div className="sidebar-container">
        <h1>Create Channel</h1>
        <h1>Friends</h1>
        <h1>All Channels</h1>
        {chatRooms}
      </div>
    );
  }
}

export default SideBar;
