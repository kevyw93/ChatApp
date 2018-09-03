import {connect} from "react-redux";
import {signup} from "../../utils/session_api";
import SignUp from "./sign_up";


const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user))
  };
};


export default connect(null, mapDispatchToProps)(SignUp);
