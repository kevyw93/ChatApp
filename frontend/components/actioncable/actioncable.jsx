import React from "react";
import {connect} from "react-redux";

class ActionCable extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.subscription = this.props.cableApp.cable.subscriptions.create({
      channel: 'ChatRoomsChannel',
      room: this.props.id},
      // room: window.location.href.match(/\d+$/)[0]},
      {received: (command,data) => {
        console.log("Hi");
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

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ActionCable);
