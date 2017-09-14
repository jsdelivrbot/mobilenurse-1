import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { requestLogout } from '../actions/index';

class Logout extends Component {
  static contextTypes = {
      router: PropTypes.object
  };
  componentWillMount () {
    this.props.requestLogout();
  }
  componentWillReceiveProps (props) {
    props.auth.error == 0 ? this.context.router.push('/') : this.context.router.push('/profile');
  }
  render() {
    return (<div></div>);
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth.login
});

const mapDispatchToProps = (dispatch)  => ({
  requestLogout: (props) => { return dispatch(requestLogout(props)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
