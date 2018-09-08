import React from "react";

class Chat extends React.Component {
  constructor(props){
    super(props);
  }

  createSubscription(){
    this.props.cableApp.cable.subscriptions.create({
      channel: "ChatRoomsChannel",
      room: window.location.href.match(/\d+$/)[0]
    });
  }
  
  componentDidMount(){
    this.createSubscription();
  }

  render(){

    return(
      <div>
        Hi Bitch
      </div>
    );
  }
}


export default Chat;
