import React from "react";
import SignUpContainer from "../sign_up/sign_up_container";
import LoginContainer from "../log_in/log_in_container";
import {Switch, Route} from 'react-router-dom';
import MainContainer from "../main/main_container";

class Landing extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let landing;
    let landingBackground;
    let landingBackgroundStyles;
    if(this.props.loggedIn){
      landingBackground = "landing-logged";
      landing =
      <div>
        <MainContainer />
        <button onClick={this.props.logOff}>Log Off</button>
      </div>;

    }else{
      landingBackgroundStyles = "https://wallpapertag.com/wallpaper/full/0/1/a/138936-download-free-my-neighbor-totoro-wallpaper-1920x1080.jpg";
      landingBackground = "landing-container";
      landing =
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route exact path="/signup" component={SignUpContainer} />
      </Switch>;
    }
    return(
      <div className={landingBackground} style={{background: `url(${landingBackgroundStyles})`}}>
        {landing}
      </div>
    );
  }
}

export default Landing;
