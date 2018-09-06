import React from "react";
import SignUpContainer from "../sign_up/sign_up_container";
import LoginContainer from "../log_in/log_in_container";
import {Switch, Route} from 'react-router-dom';
import SideBar from "../side_bar/side_bar";

class Landing extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let landing;
    if(this.props.loggedIn){
      landing =
      <div>
        <SideBar />
        <button onClick={this.props.logOff}>Log Off</button>
    </div>;

    }else{
      landing =
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route exact path="/signup" component={SignUpContainer} />
      </Switch>;
    }
    return(
      <div className="landing_container">
        {landing}
      </div>
    );
  }
}

export default Landing;
