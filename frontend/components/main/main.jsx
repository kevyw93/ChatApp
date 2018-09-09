import React from "react";
// import SideBarContainer from "../side_bar/side_bar_container";
import SideBar from "../side_bar/side_bar";
import ChatContainer from "../chat/chat_container";
import {Route} from 'react-router-dom';
import ActionCable from '../actioncable/actioncable';

class Main extends React.Component {
  constructor(props){
    super(props);
    // this.createSubscription = this.createSubscription.bind(this);
    this.enterChatRoom = this.enterChatRoom.bind(this);
  }

  // createSubscription(){
  //   this.props.cableApp.cable.subscriptions.create({
  //     channel: "ChatRoomsChannel",
  //     room: window.location.href.match(/\d+$/)[0]
  //   });
  // }
  componentDidMount() {
    // put this in side bar
    this.props.getAllUserChatRooms({user_id: this.props.id});
  }

  enterChatRoom(chatroomId){
    return () => this.props.showChatRoom(chatroomId);
  }

  render(){
    let chatRooms;
    let show;
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
    if(this.props.show){
      show = <ChatContainer />;
    }
    return (
      <div>
        <ActionCable />
        <div>
          <SideBar />
          {chatRooms}
        </div>
        <div>
          {show}
        </div>

      </div>
    );
  }
}

export default Main;
