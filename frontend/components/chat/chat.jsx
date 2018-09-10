import React from "react";

class Chat extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let messages;
    if(this.props.messages){
      messages = this.props.messages.map((el,i)=> (
        <li key={i}>
          {el.body}
        </li>
      ));
    }
    return(
      <div>
        {messages}
        <input>

        </input>
      </div>
    );
  }
}


export default Chat;
