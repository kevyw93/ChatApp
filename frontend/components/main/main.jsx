import React from "react";
// import SideBarContainer from "../side_bar/side_bar_container";
import SideBarContainer from "../side_bar/side_bar_container";
import ChatContainer from "../chat/chat_container";
import {Route} from 'react-router-dom';
import ActionCable from '../actioncable/actioncable';

class Main extends React.Component {
  constructor(props){
    super(props);
    // this.createSubscription = this.createSubscription.bind(this);
  }

  // createSubscription(){
  //   this.props.cableApp.cable.subscriptions.create({
  //     channel: "ChatRoomsChannel",
  //     room: window.location.href.match(/\d+$/)[0]
  //   });
  // }

  // enterChatRoom(chatroomId){
  //   return () => this.props.showChatRoom(chatroomId);
  // }

  render(){
    let show;

    if(this.props.show){
      show = <ChatContainer />;
    }
    return (
      <div className="main-container">
        <ActionCable />
        <div className="sidebar-container">
          <SideBarContainer />
        </div>
        <div className="message-main-container">
          {show}
        </div>

      </div>
    );
  }
}

export default Main;
