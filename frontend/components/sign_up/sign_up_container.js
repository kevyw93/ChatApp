import {connect} from "react-redux";
import {signUp, logIn} from "../../actions/session_action";
import SignUp from "./sign_up";



const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signUp: (user) => dispatch(signUp(user))
  };
};


export default connect(null, mapDispatchToProps)(SignUp);
