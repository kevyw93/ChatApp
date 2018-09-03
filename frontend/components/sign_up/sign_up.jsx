import React from "react";

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: '', password: ''};
  }

  handleChange(field){
    return (e)=> this.setState({[field]: e.target.value});
  }

  handleLogin(e){
    e.preventDefault();
    const user = {email: this.state.email, password: this.state.password};
    this.props.signup(user);
  }

  render(){
    return (
      <div className="signup_container">
        <form onSubmit={this.handleSubmit}>
          <input placeholder='Enter Username' />
          <input placeholder='Enter Password' />
          <button>Sign Up</button>
        </form>
      </div>
    );
  }


}

export default SignUp;
