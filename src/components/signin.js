import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { requestLogin } from '../actions/index';
import HeaderGuest from './headerGuest';

class SignIn extends Component {
  static contextTypes = {
      router: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      remember: null,
      loading: false,
      errorText: null,
      successText: null
    }
    this.handleLogin = this.handleLogin.bind(this);
  }
  componentWillReceiveProps(props){
    this.setState({loading: false, username: null, password: null});
    props.auth.error == 0 ? this.setState({successText: props.auth.message}) : this.setState({successText: null});
    props.auth.error == 1 ? this.setState({errorText: props.auth.message}) : this.setState({errorText: null});
  }
  handleLogin(e){
    e.preventDefault();
    let data ={
      username: this.state.username,
      password: this.state.password
    }
    this.setState({loading: true, errorText: null});
    this.props.requestLogin(data).then(() => {
      if(this.props.auth.error == 0){
        this.context.router.push('/profile');
      }
    });
  }
  render() {
    let errorLogin = this.state.errorText ? <h5 className="text-danger m-y">{this.state.errorText}</h5> : null;
    let successLogin = this.state.successText ? <h5 className="text-success m-y">{this.state.successText}</h5> : null;
    return (
      <div className="wrapper">
        <HeaderGuest />
        <div className="jumbotron col-xs-12">
          <form className="form-signin">
            <h1 className="form-signin-heading"><strong>mobilenurse.io</strong></h1>
            <h3 className="form-signin-heading"> mobile medical exams</h3>
            <input
              autofocus
              className="form-control"
              onChange={(e)=>this.setState({username: e.target.value})}
              placeholder="Email"
              required
              type="text"
              value={this.state.username}
            />
            <input
              className="form-control"
              onChange={(e)=>this.setState({password: e.target.value})}
              placeholder="Password"
              required
              type="password"
              value={this.state.password}
            />
            <label className="checkbox">
              <input type="checkbox" value={this.state.remember} onChange={(e)=>this.setState({remember: e.target.checked})} /> Remember me
            </label>
            {errorLogin}
            {successLogin}
            <button id="bootstrap-btn-overrides" onClick={(e)=>this.handleLogin(e)}>LOGIN</button>
            <br />
            <Link className="form-signin" to="/register">create account</Link>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth.login
});

const mapDispatchToProps = (dispatch)  => ({
  requestLogin: (props) => { return dispatch(requestLogin(props)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
