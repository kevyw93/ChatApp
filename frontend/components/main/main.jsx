import React from "react";
// import SideBarContainer from "../side_bar/side_bar_container";
import SideBarContainer from "../side_bar/side_bar_container";
import ChatContainer from "../chat/chat_container";
import {Route, Switch} from 'react-router-dom';
import ActionCable from '../actioncable/actioncable';

class Main extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    let show;

    if(this.props.show){
      show = <ChatContainer />;
    }
    return (
      <div className="main-container">
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
