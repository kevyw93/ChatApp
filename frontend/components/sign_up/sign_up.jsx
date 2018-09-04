import React from "react";

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: '', password: ''};
  }

  handleChange(field){
    debugger
    return (e)=> this.setState({[field]: e.target.value});
  }

  handleLogin(e){
    e.preventDefault();
    const user = {email: this.state.email, password: this.state.password};
    this.props.signup(user);
  }

  render(){
    return (
      <div className="signup-container">
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <input className="username-input" placeholder='Enter Username' />
          <input className="password-input" placeholder='Enter Password' />
          <button id="signup-button">Sign Up</button>
        </form>
      </div>
    );
  }


}

export default SignUp;
