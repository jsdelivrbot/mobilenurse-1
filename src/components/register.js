import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import HeaderGuest from './headerGuest';
import { requestRegister } from '../actions/index';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      loading: false,
      errorText: null,
      successText: null
    }
    this.handleRegister = this.handleRegister.bind(this);
  }
  componentWillReceiveProps(props){
    this.setState({loading: false, username: null, password: null});
    props.auth.error == 0 ? this.setState({successText: props.auth.message}) : this.setState({successText: null});
    props.auth.error == 1 ? this.setState({errorText: props.auth.message}) : this.setState({errorText: null});
  }
  handleRegister(e){
    e.preventDefault();
    let data ={
      username: this.state.username,
      password: this.state.password
    }
    this.setState({loading: true, errorText: null, successText: null});
    this.props.requestRegister(data);
  }
  render() {
    let errorRegister = this.state.errorText ? <h5 className="text-danger m-y">{this.state.errorText}</h5> : null;
    let successRegister = this.state.successText ? <h5 className="text-success m-y">{this.state.successText}</h5> : null;
    return (
      <div className="wrapper">
        <HeaderGuest />
        <div className="jumbotron col-xs-12">
          <form className="form-signin" method='post' action='/register'>
            <h1 className="form-signin-heading"><strong>mobilenurse.io</strong></h1>
            <h3 className="form-signin-heading"> mobile medical exams</h3>
            <h3 className="form-signin-heading">NEW USER REGISTRATION</h3>
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
            {errorRegister}
            {successRegister}
            <button id="bootstrap-btn-overrides" onClick={(e)=>this.handleRegister(e)}>Register</button>
            <br />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth.register
});

const mapDispatchToProps = (dispatch)  => ({
  requestRegister: (props) => { return dispatch(requestRegister(props)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
