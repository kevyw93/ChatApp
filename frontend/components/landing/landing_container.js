import {connect} from "react-redux";
import Landing from "./landing";

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.entities.session.currentUser)
  };
};

const mapDispatchToProps = () => {
  return {

  };
};

export default connect(mapStateToProps, null)(Landing);
