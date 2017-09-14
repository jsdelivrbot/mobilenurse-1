import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import { convertAmtToPlainNumber } from '../../helpers';

export default class InputComponent extends Component {
  handleBlur(e){
    const { input, meta, lable } = this.props;
    let val = e.target.value;
    if(!meta.invalid){
      if(lable === 'STATE') {
        val = e.target.value.toUpperCase();
      } else if (input.name === 'policyAmount') {
        val = parseInt(val);
        val = val.toLocaleString('en-us');
        val = val.toString();
      }
    }
    input.onBlur(val);
  }
  handleChange(e){
    const { input, meta, lable } = this.props;
    let val = e.target.value;
    if(lable === 'ZIP' && val.length > 5) {
      val = val.slice(0, 5);
    }
    input.onChange(val);
  }
  handleFocus(e) {
    let val = e.target.value;
    const { input, meta  } = this.props;
    if(input.name === 'policyAmount'){
      val = convertAmtToPlainNumber(val);
    }
    input.onChange(val);
  }
  render() {
    const { lable, input, placeholder, type, meta, classname } = this.props;
    if(type === 'textarea') {
      return (
        <div className='form-group col-xs-12'>
            <label className="text-xs-left">{lable}</label> <br/>
            <textarea placeholder={placeholder} className="form-control" {...input}/>
        </div>
      )
    }

    return (
      <div>
        <div className={`'form-group ${meta.touched && meta.invalid ? 'has-danger' : ''}`}>
          <label>{lable}</label>
          <input {...input} type={type} placeholder={placeholder} className={"form-control "+ classname}
            onBlur={(e)=>this.handleBlur(e)}
            onChange={(e)=>this.handleChange(e)}
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
