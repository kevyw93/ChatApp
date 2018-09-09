import React from "react";

class Chat extends React.Component {
  constructor(props){
    super(props);
  }

  // createSubscription(){
  //   this.props.cableApp.cable.subscriptions.create({
  //     channel: "ChatRoomsChannel",
  //     room: window.location.href.match(/\d+$/)[0]
  //   });
  // }
  //
  // componentDidMount(){
  //   this.createSubscription();
  // }

  render(){
    let messages;
    if(this.props.messages){
      debugger
      messages = this.props.messages.map((el,i)=> (
        <li key={i}>
          {el.body}
        </li>
      ));
    }
    return(
      <div>
        {messages}
      </div>
    );
  }
}


export default Chat;
