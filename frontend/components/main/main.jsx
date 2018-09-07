import React from "react";
// import SideBarContainer from "../side_bar/side_bar_container";
import SideBar from "../side_bar/side_bar";

class Main extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <SideBar />
        Main bitches

      </div>
    );
  }
}

export default Main;
