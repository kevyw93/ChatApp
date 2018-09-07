import {connect} from "react-redux";
import Main from "./main";

const mapStateToProps = (state) => {
  return {
    cableApp: state.entities.session.cableApp
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Main);
