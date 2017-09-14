import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import { Select, Button, DatePicker, TimePicker } from 'antd';

export default class AntdComponent extends Component {
  render() {
    const { lable, input, placeholder, type, meta, classname, inputclassname, dateFormat } = this.props;
    if (type === 'DatePicker') {
      return (
        <div className={`'form-group ${classname} ${meta.touched && meta.invalid ? 'has-danger' : ''}`}>
          <label>{lable}</label> <br/>
          <DatePicker
            {...input}
            className={inputclassname}
            format={dateFormat}
            placeholder={placeholder}
          />
          <div className='text-help'>
            {meta.touched ? meta.error: ''}
          </div>
        </div>
      )
    } else if (type === 'TimePicker') {
      return (
        <div className={`'form-group ${classname} ${meta.touched && meta.invalid ? 'has-danger' : ''}`}>
            <label>{lable}</label> <br/>
            <TimePicker
                placeholder='SELECT'
                format='hh:mm a'
                {...input}
            />
            <div className='text-help'>
              {meta.touched ? meta.error: ''}
            </div>
        </div>
      )
    } else if (type === 'examType') {
      return (
        <div className={classname}>
            <div className={`'form-group ${meta.touched && meta.invalid ? 'has-danger' : ''}`}>
                <label>{lable}</label> <br/>
                <Select style={{ width: 240 }} {...input}>
                    <Option className="form-control" value="">SELECT</Option>
                    <Option className="form-control" value="PBU">PBU</Option>
                    <Option className="form-control" value="PBU + EKG">PBU + EKG</Option>
                    <Option className="form-control" value="EKG">EKG</Option>
                    <Option className="form-control" value="BLOOD">BLOOD ONLY</Option>
                    <Option className="form-control" value="URINE">URINE ONLY</Option>
                    <Option className="form-control" value="PHYSICAL MEASUREMENTS">PHYSICAL MEASUREMENTS</Option>
                    <Option className="form-control" value="BLOOD PRESSURE">BLOOD PRESSURE</Option>
                    <Option className="form-control" value="SPECIAL">SPECIAL ORDER</Option>
                </Select>
                <div className='text-help'>
                  {meta.touched ? meta.error: ''}
                </div>
                <br/>
            </div>
        </div>
      )
    } else if (type === 'gender') {
      return (
        <div className={classname}>
            <div className={`'form-group ${meta.touched && meta.invalid ? 'has-danger' : ''}`}>
                <label>{lable}</label> <br/>
                <Select style={{width: 180 }} {...input}>
                    <Option className="form-control" value="">SELECT</Option>
                    <Option className="form-control" value="MALE">MALE</Option>
                    <Option className="form-control" value="FEMALE">FEMALE</Option>
                </Select>
                <div className='text-help'>
                  {meta.touched ? meta.error: ''}
                </div>
                <br/>
            </div>
        </div>
      )
    } else if (type === 'firm') {
      return (
        <div className={classname}>
        <div className={`'form-group ${meta.touched && meta.invalid ? 'has-danger' : ''}`}>
            <label>{lable}</label> <br/>
            <Select style={{width: 240 }} {...input}>
                <Option className="form-control" value="">SELECT</Option>
                <Option className="form-control" value="Northwestern Mutual">NORTHWESTERN MUTUAL</Option>
                <Option className="form-control" value="Prudential">PRUDENTIAL</Option>
                <Option className="form-control" value="Banner">BANNER</Option>             
            </Select>
            <div className='text-help'>
              {meta.touched ? meta.error: ''}
            </div>
            <br/>
        </div>
    </div>     
      )
    } else if (type === 'locationType') {
      return (
        <div className={classname}>
        <div className={`'form-group ${meta.touched && meta.invalid ? 'has-danger' : ''}`}>
            <label>{lable}</label> <br/>
            <Select style={{width: 180 }} {...input}>
                <Option className="form-control" value="">SELECT</Option>
                <Option className="form-control" value="Home">HOME</Option>
                <Option className="form-control" value="Office">OFFICE</Option>       
            </Select>
            <div className='text-help'>
              {meta.touched ? meta.error: ''}
            </div>
            <br/>
        </div>
    </div>  
      )
    } else if ( type === 'examinerTitle') {
      return (
        <div className={classname}>
        <div className={`'form-group ${meta.touched && meta.invalid ? 'has-danger' : ''}`}>
            <label>{lable}</label> <br/>
            <Select style={{width: 180 }} {...input}>
                <Option className="form-control" value="">SELECT</Option>
                <Option className="form-control" value="Nurse RN">NURSE RN</Option>
                <Option className="form-control" value="Nurse Tech">NURSE TECH</Option>                
                <Option className="form-control" value="Firefighter">FIREFIGHTER</Option> 
                <Option className="form-control" value="Paramedic">PARAMEDIC</Option>        
            </Select>
            <div className='text-help'>
              {meta.touched ? meta.error: ''}
            </div>
            <br/>
        </div>
    </div>  
      )
    }
  }
}
