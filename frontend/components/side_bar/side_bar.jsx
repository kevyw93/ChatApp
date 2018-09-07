import React from "react";

class SideBar extends React.Component {
  constructor(props){
    super(props);
  }



  render() {
    return (
      <div className="sidebar-container">
        <h1>Create Channel</h1>
        <h1>Friends</h1>
        <h1>All Channels</h1>
      </div>
    );
  }
}

export default SideBar;
