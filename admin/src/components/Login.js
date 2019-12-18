import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { postLoginUser } from '../actions'

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.clickSignInButton = this.clickSignInButton.bind(this);
  }

  handleUsername(event) {
    this.setState({ username: event.target.value })
  }

  handlePassword(event) {
    this.setState({ password: event.target.value })
  }

  clickSignInButton(e) {
    e.preventDefault()
    this.props.postLoginUser(this.state.username, this.state.password);
    
    // this.props.history.push('/');
    // window.location.replace('/')
  }

  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
            <form className="login100-form validate-form" id="login_form">
              <span className="login100-form-title p-b-33">
                Jalan Sesama Admin
                  </span>

              <div className="wrap-input100 validate-input">
                <input className="input100" type="text" value={this.state.username} onChange={this.handleUsername} id="username" name="username" placeholder="Username" />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
              </div>

              <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                <input className="input100" type="password" value={this.state.password} onChange={this.handlePassword} id="password" name="password" placeholder="Password" />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
              </div>

              <div className="container-login100-form-btn m-t-20">
              
              <button className="login100-form-btn" onClick={this.clickSignInButton}>
                  Sign in
                    </button>
              </div>

              <div className="text-center">
                <span className="txt1">
                  Create an account?
                    </span>

                <Link className="txt2 hov1" to="/register">Register</Link>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  postLoginUser: (username, password) => (dispatch(postLoginUser(username, password)))
})

export default connect(
  null,
  mapDispatchToProps
)(Login)
