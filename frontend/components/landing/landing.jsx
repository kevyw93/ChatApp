import React from "react";
import SignUpContainer from "../sign_up/sign_up_container";
import {Switch, Route} from 'react-router-dom';


class Landing extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let landing;
    // if(this.props.loggedIn){
    //
    // }else{
      landing =
      <Switch>
        <Route path="/" component={SignUpContainer} />
      </Switch>;
    // }
    return(
      <div className="landing_container">
        {landing}
      </div>
    );
  }
}

export default Landing;
