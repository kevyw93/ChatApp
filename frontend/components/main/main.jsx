import React from "react";
// import SideBarContainer from "../side_bar/side_bar_container";
import SideBar from "../side_bar/side_bar";
import ChatContainer from "../chat/chat_container";
import {Route} from 'react-router-dom';

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

  render(){
    return (
      <div>
        <SideBar />
        
        <Route path="chat-room/:id" component={ChatContainer}/>
        Main bitches

      </div>
    );
  }
}

export default Main;
