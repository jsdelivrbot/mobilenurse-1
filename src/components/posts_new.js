import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { Form, reduxForm, formValueSelector, Field } from 'redux-form';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import { Select, Button, DatePicker, TimePicker } from 'antd';
import moment from 'moment';
import Header from './header';
import { isValidDOB, isValidPhoneNumber, isValidState, isValidZip, isValidExamDate } from '../helpers';
import PhoneNumber from './form_components/phone_number';
import InputComponent from './form_components/input_components';
import AntdComponent from './form_components/antd_components';
import DateTimePickerComponent from './form_components/date_time_picker';
import ModalComponent from './modal';

class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    };
    constructor(props) {
        super(props);
        this.state = {
          confirmSubmit: false,
          formData: {}
        }
        this.closeModal = this.closeModal.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }
    onSubmit(props) {
        let socket = io('http://localhost:8000');
        socket.on('connection', function(){ });
        socket.emit('create_exam', props);
        this.context.router.push('/repinfo/');
        socket.on('disconnect', function(){ });
    }
    onConfirm(props){
      this.setState({
        confirmSubmit: true,
        formData: props
      })
    }
    closeModal(){
      this.setState({
        confirmSubmit:false,
        formData: {}
      })
    }
    render() {
      const {handleSubmit} = this.props;
        return (
            <div className="row">
              <Header title="SCHEDULE AN EXAM" />
              <div className="col-xs-12">
              </div>
            <div className="col-xs-9 form-wrapper">
              <Form onSubmit={handleSubmit(this.onConfirm.bind(this))}>
                <Field
                  name="firstname"
                  type="text"
                  lable="FIRSTNAME"
                  component={InputComponent}
                  placeholder="firstname"
                />
                <Field
                  name="lastname"
                  type="text"
                  lable="LASTNAME"
                  component={InputComponent}
                  placeholder="lastname"
                />
                <Field
                  name="clientDOB"
                  type="DatePicker"
                  lable="DATE OF BIRTH"
                  inputFormat="DD/MM/YYYY"
                  inputclassname="client-dob "
                  component={DateTimePickerComponent}
                  placeholder="DOB"
                />
                <Field
                  name="clientPhone"
                  type="TEL"
                  lable="PHONE NUMBER"
                  classname="col-lg-6"
                  component={PhoneNumber}
                  placeholder="XXX-XXX-XXXX"
                />
                <Field
                  name='locationType'
                  type='locationType'
                  lable='LOCATION'
                  classname="col-lg-12"
                  component={AntdComponent}
                />
                <Field
                  name="examStreetAddress"
                  type="ADDRESS"
                  lable="STREET ADDRESS"
                  classname="col-lg-6"
                  component={InputComponent}
                  placeholder="street address"
                />
                <Field
                  name="examSuiteAptNumber"
                  type="text"
                  lable="APT/SUITE #"
                  classname="col-lg-6"
                  component={InputComponent}
                  placeholder="apt/suite #"
                />
                <Field
                  name="examCity"
                  type="text"
                  lable="CITY"
                  classname="col-md-4"
                  component={InputComponent}
                  placeholder="city"
                />
                <Field
                  name="examState"
                  type="text"
                  lable="STATE"
                  classname="col-md-4"
                  component={InputComponent}
                  placeholder="state"
                />
                <Field
                  name="examZipCode"
                  type="number"
                  lable="ZIP"
                  classname="col-lg-6"
                  component={InputComponent}
                  placeholder="zip"
                />
                <Field
                  name="policyAmount"
                  type="text"
                  lable="POLICY AMOUNT"
                  classname="col-lg-6"
                  component={InputComponent}
                  placeholder="policy amount"
                />
              <Col xs={12}>
                <Field
                  name="examDate"
                  type="DatePicker"
                  lable="EXAM DATE"
                  classname="col-sm-6"
                  component={DateTimePickerComponent}
                  placeholder="Select Date"
                  />
                <Field
                  name="examTime"
                  type="TimePicker"
                  lable="EXAM TIME"
                  inputFormat="ampm"
                  classname="col-sm-6"
                  component={DateTimePickerComponent}
                  placeholder="SELECT"
                  />
              </Col>
              <Col xs={12}>
                <Field
                  name="examType"
                  type="examType"
                  lable="EXAM TYPE"
                  classname="col-sm-6"
                  component={AntdComponent}
                />
                <Field
                  name="gender"
                  type="gender"
                  lable="GENDER"
                  classname="col-sm-6"
                  component={AntdComponent}
                />
              </Col>
                <Field
                  name="examNotes"
                  type="textarea"
                  lable="COMMENTS"
                  component={InputComponent}
                  placeholder="special instructions"
                />
                <div className="col-xs-12 form-buttons" >
                  <button type="submit" className="btn btn-primary">CONFIRM</button>
                  <Link to="/repinfo/" className="btn btn-danger">CANCEL</Link>
                </div>
              </Form>
              <ModalComponent
                formData={this.state.formData}
                openModal={this.state.confirmSubmit}
                closeModal={this.closeModal}
                onSubmit={this.onSubmit}
              />
            </div>
          </div>
        );
    }
}


function validate(values) {
    const errors = {};

    let examStateErr = isValidState(values.examState);
    let zipErr = isValidZip(values.examZipCode);
    let examDateErr = isValidExamDate(values.examDate);

    if (!values.firstname) {
      errors.firstname = 'Invalid firstname';
    }
    if (!values.lastname) {
      errors.lastName = 'Invalid lastname';
    }
    if (!values.clientDOB || values.clientDOB === null) {
      errors.clientDOB = 'Client date of birth';
    }
    if (!values.locationType) {
      errors.locationType = 'Enter location';
    }
    if (!values.examStreetAddress) {
      errors.examStreetAddress = 'Street address of exam';
    }
    if (examStateErr) {
      errors.examState = examStateErr;
    }
    if (!values.examCity) {
      errors.examCity = 'City of exam';
    }
    if (zipErr) {
      errors.examZipCode = zipErr;
    }
    if (examDateErr) {
      errors.examDate = examDateErr;
    }
    if (!values.examTime) {
      errors.examTime = 'Select exam time';
    }
    if (!values.examType) {
      errors.examType = 'Select exam type';
    }
    if (!values.gender) {
      errors.gender = 'Select​ client​ ​gender';
    }

    if (!values.policyAmount) {
      errors.policyAmount = 'Policy amount';
    }
    if (!values.clientPhone) {
      errors.clientPhone = 'Enter client mobile number';
    } else if (!isValidPhoneNumber(values.clientPhone)){
      errors.clientPhone = 'Invalid client phone number' ;
    }
    return errors;
}

export default reduxForm({ form: "PostsNewForm", validate })(PostsNew);
