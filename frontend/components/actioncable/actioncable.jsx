import React from "react";
import {connect} from "react-redux";
import {receiveMessage} from "../../actions/message_actions";

class ActionCable extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.subscription = this.props.cableApp.cable.subscriptions.create({
      channel: 'ChatRoomsChannel',
      room: this.props.roomId},
      // room: window.location.href.match(/\d+$/)[0]},
      {received: (data,command) => {
        console.log("Hi");
        if(data.user.id !== this.props.id){
          this.props.receiveMessage(data);
        }
      }
    });

  }



  componentWillUnmount(){
    this.subscription.unsubscribe();
  }

  render(){
    return(
      <div />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cableApp: state.entities.sessionReducer.cableApp,
    id: state.entities.sessionReducer.currentUser.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveMessage: (msg) => dispatch(receiveMessage(msg))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ActionCable);
