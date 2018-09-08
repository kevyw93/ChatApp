import {connect} from "react-redux";
import Chat from "./chat";
const mapStateToProps = (state) => {
  return {
    cableApp: state.entities.session.cableApp
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Chat);
