import React from "react";

class Chat extends React.Component {
  constructor(props){
    super(props);
    this.state = {body: ""};
    this.sendMessage = this.sendMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  sendMessage(e){
    e.preventDefault();
    this.props.sendMessage({message: {body: this.state.body, user_id: this.props.currentUserId, chat_room_id: this.props.currentChatId }}).then((success) => this.setState({body: ""}));
  }

  handleChange(field){
    debugger
    return (e) => this.setState({[field]: e.target.value});
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
      <div className="chat-container">
        <div>
          {messages}
        </div>
        <div>

          <form className="new-message" onSubmit={this.sendMessage}>
            <input className="body"
              type="text"
              value={this.state.body}
              placeholder="New Message"
              onChange={this.handleChange("body")}/>
          <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}


export default Chat;
