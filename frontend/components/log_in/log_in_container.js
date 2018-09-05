import {logIn, logOff} from "../../actions/session_action";
import {connect} from "react-redux";
import Login from "./log_in";


const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => dispatch(logIn()),
    logOff: () => dispatch(logOff())
  };
};

export default connect(null, mapDispatchToProps)(Login);
