import {connect} from "react-redux";
import Landing from "./landing";
import {logOff, signUp, logIn} from "../../actions/session_action";


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.entities.session.currentUser),
      formType: ownProps.location.pathname.slice(1),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    logOff: () => dispatch(logOff())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
