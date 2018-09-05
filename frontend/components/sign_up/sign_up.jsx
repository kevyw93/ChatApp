import React from "react";
import {Link} from 'react-router-dom';

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: '', password: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);

  }

  handleChange(field){
    return (e) => this.setState({[field]: e.target.value});
  }

  handleSignup(e){
    e.preventDefault();
    const user = {user: {email: this.state.email, password: this.state.password }};
    this.props.signUp(user);
  }

  render(){
    return (
      <div className="signup-container">
        <form className="signup-form" onSubmit={this.handleSignup}>
          <input className="email" placeholder='Enter Email' onChange={this.handleChange("email")} />
        <input className="password" placeholder='Enter Password' onChange={this.handleChange("password")} />
          <button id="signup-button">Sign Up</button>
        </form>
        <Link to="/">LogIn</Link>
      </div>
    );
  }

}

export default SignUp;
