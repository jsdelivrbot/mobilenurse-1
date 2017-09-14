import React, { Component, PropTypes  } from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import { convertAmtToPlainNumber } from '../../helpers';
import moment from 'moment';
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class TimePickerComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {
          time: 0
      }
      this.handleChange = this.handleChange.bind(this);
  }
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
      return {
          muiTheme: getMuiTheme()
      }
  }
  handleChange(e, val){
    const { type, input, meta, lable } = this.props;
    input.onChange(moment(val));
  }
  render() {
    const { lable, input, placeholder, type, meta, classname, inputFormat, inputclassname } = this.props;
    if(type === "DatePicker") {
      return (
        <div className={classname}>
          <div className={`'form-group ${meta.touched && meta.invalid ? 'has-danger' : ''}`}>
            <DatePicker
              hintText={lable}
              formatDate={(date)=>moment(date).format("MM/DD/YYYY")}
              className={inputclassname}
              textFieldStyle={{width:"100%"}}
              onChange={this.handleChange}
            />
            <div className='text-help'>
              {meta.touched ? meta.error: ''}
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className={classname}>
        <div className={`'form-group ${meta.touched && meta.invalid ? 'has-danger' : ''}`}>
          <TimePicker
            hintText={lable}
            format={inputFormat}
            minutesStep={30}
            onChange={this.handleChange}
          />
          <div className='text-help'>
            {meta.touched ? meta.error: ''}
          </div>
        </div>
      </div>
    )
  }
}
