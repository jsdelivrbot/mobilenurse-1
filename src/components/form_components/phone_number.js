import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import { isValidedPhoneNumber } from '../../helpers';

class PhoneNumber extends Component {
  constructor(props) {
      super(props);
      this.phoneNumber = this.phoneNumber.bind(this);
      this.handleBlur = this.handleBlur.bind(this);
      this.onChangeHandler = this.onChangeHandler.bind(this);
      this.handleFocus = this.handleFocus.bind(this);
  }
  handleBlur(e) {
    const { input, meta } = this.props;
      let seprator = '-';
      let val = e.target.value;
      if(!meta.invalid && !isValidedPhoneNumber(val) && val != '') {
        val = '(' +val.slice(0, 3)+') '+val.slice(4, val.length);
      }
      input.onBlur(val);
  }
  handleFocus(e) {
    let val = e.target.value;
    const { input, meta  } = this.props;
    if(isValidedPhoneNumber(val)){
      val = val.slice(1, 4)+'-'+val.slice(6, val.length);
    }
    input.onChange(val);
  }
  phoneNumber(val) {
    let seprator = '-';
    if(!isValidedPhoneNumber(val)){
      if(val.length > 3 && val[3] !== seprator ) {
        val = val.slice(0, 3)+seprator+val.slice(3, val.length);
      }
      if(val.length > 7 && val[7] !== seprator ) {
        val = val.slice(0, 7)+seprator+val.slice(7, val.length);
      }
      if(val.length > 12) {
        val = val.slice(0, 12);
      }
    }
    return val;
  }
  onChangeHandler(e) {
    const { input } = this.props;
    input.onChange(this.phoneNumber(e.target.value));
  }
  render() {
    const { lable, input, placeholder, type, meta } = this.props;
    return (
      <div>
        <div className={`'form-group ${meta.touched && meta.invalid ? 'has-danger' : ''}`}>
          <label>{lable}</label>
          <input {...input} type={type} placeholder={placeholder} className="form-control"
            onChange={(e)=>this.onChangeHandler(e)}
            onBlur={(e)=>this.handleBlur(e)}
            onFocus={(e)=>this.handleFocus(e)}
          />
          <div className='text-help'>
            {meta.touched ? meta.error: ''}
          </div>
        </div>
      </div>
    )
  }
}

export default PhoneNumber;
