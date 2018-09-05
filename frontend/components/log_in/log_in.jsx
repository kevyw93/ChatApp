import React from "react";
import {Link} from 'react-router-dom';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: "", password: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(field){
    return (e) => this.setState({[field]: e.target.value});
  }

  handleLogin(e){
    e.preventDefault();
    const user = {user: {email: this.state.email, password: this.state.password }};
    this.props.logIn(user);
  }

  render(){
    return (
      <div className="signup-container">
        <form className="signup-form" onSubmit={this.handleLogin}>
          <input className="email" placeholder='Enter Email' onChange={this.handleChange("email")} />
        <input className="password" placeholder='Enter Password' onChange={this.handleChange("password")} />
        <button id="signup-button">Login</button>
        </form>
          <Link to="/signup">SignUp</Link>
      </div>
    );
  }

}

export default Login;
