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
  }

  // createSubscription(){
  //   this.props.cableApp.cable.subscriptions.create({
  //     channel: "ChatRoomsChannel",
  //     room: window.location.href.match(/\d+$/)[0]
  //   });
  // }
  componentDidMount() {
    this.props.getChatRooms({user_id: this.props.id});
  }

  enterChatRoom(){

  }
  
  render(){
    let chatRooms;
    if(this.props.chatRooms){
      chatRooms = this.props.chatRooms.map((el,i) => (
        <li key={i} onClick={}>
          {el.title}
        </li>
      ));
    }
    return (
      <div>
        <SideBar />
        <ActionCable />
        <div>
          {chatRooms}
        </div>

      </div>
    );
  }
}

export default Main;
