import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import {postRegisterUser} from '../actions'

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {nama:'',alamat:'',username:'',password:''};
        this.handleNama = this.handleNama.bind(this);
        this.handleAlamat = this.handleAlamat.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.clickRegisterButton = this.clickRegisterButton.bind(this);
    }

    handleNama(event) {
        this.setState({nama:event.target.value});
    }

    handleAlamat(event) {
        this.setState({alamat:event.target.value});
    }

    handleUsername(event) {
        this.setState({username:event.target.value});
    }

    handlePassword(event) {
        this.setState({password:event.target.value});
    }

    clickRegisterButton() {
        this.props.postRegisterUser(this.state.nama,
                                    this.state.alamat,
                                    this.state.username,
                                    this.state.password);
        this.props.history.push('/login');
    }

    render() {
        return (
          <div className="limiter">
            <div className="container-login100">
              <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                <form className="login100-form validate-form" id="register_form">
                  <span className="login100-form-title p-b-33">
                    Jalan Sesama Admin
                  </span>

                  <div className="wrap-input100 validate-input">
                    <input className="input100" type="text" value={this.state.nama} onChange={this.handleNama} id="nama" name="nama" placeholder="Nama" />
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
                  </div>

                  <div className="wrap-input100 validate-input">
                    <input className="input100" type="text" value={this.state.alamat} onChange={this.handleAlamat} id="alamat" name="alamat" placeholder="Alamat" />
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
                  </div>

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
                    <button className="login100-form-btn" onClick={this.clickRegisterButton}>
                      Register
                    </button>
                  </div>

                  <div className="text-center">
                    <span className="txt1">
                      Already have account ?
                    </span>

                    <a className="txt2 hov1">
                      <Link to="/login">Login</Link>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
     postRegisterUser : (nama,alamat,username,password) => (dispatch(postRegisterUser(nama,alamat,username,password)))
})

export default connect(
    null,
    mapDispatchToProps
) (Register)
