import {connect} from "react-redux";
import Landing from "./landing";
import {logOff, createCable} from "../../actions/session_action";


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.entities.sessionReducer.currentUser)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    logOff: () => dispatch(logOff()),
    createCable: (cable) => dispatch(createCable(cable))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
