import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { Form, reduxForm, Field } from 'redux-form';
import { createExaminerInformation } from '../actions/index';
import { Link } from 'react-router';
import Header from './header';
import PhoneNumber from './form_components/phone_number.js';
import InputComponent from './form_components/input_components.js';
import AntdComponent from './form_components/antd_components';
import { isValidPhoneNumber, isValidState, isValidZip, isValidExamDate, formatPhoneNumberToInsert } from '../helpers';

class ExaminerInformationForm extends Component {
    static contextTypes = {
        router: PropTypes.object
    };
    onSubmit(data) {
      data.mobileNumber = formatPhoneNumberToInsert(data.mobileNumber);
        this.props.createExaminerInformation(data)
            .then(() => {
                // exams post has been created, navigate the user to the index
                // we navigate by calling this.context.router.push
                this.context.router.push('/repinfo/');
            });
    }
    render() {
        const {handleSubmit } = this.props;
        return (
            <div className="row">
              <Header title="EXAMINER INFORMATION" />
              <div className="col-xs-12">
              </div>
              <div className="col-xs-9 form-wrapper">
              <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                  name="firstname"
                  type="firstname"
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
                  name="examinerEmail"
                  type="examinerEmail"
                  lable="EMAIL"
                  classname="col-lg-6"
                  component={InputComponent}
                  placeholder="email"
                />
                <Field
                  name="mobileNumber"
                  type="TEL"
                  lable="MOBILE NUMBER"
                  classname="col-lg-6"
                  component={PhoneNumber}
                  placeholder="xxx-xxx-xxxx"
                />
                <Field
                  name="examinerTitle"
                  type="examinerTitle"
                  lable="TITLE"
                  component={AntdComponent}
                />
                <Field
                  name="gender"
                  type="gender"
                  lable="GENDER"
                  component={AntdComponent}
                />
                <div>
                    <br/><br/>
                        <h5>HOME ADDRESS</h5>
                    <hr/>
                    <br/>
                </div>
                <Field
                  name="homeAddress"
                  type="ADDRESS"
                  lable="ADDRESS"
                  classname="col-lg-6"
                  component={InputComponent}
                  placeholder="street address"
                />
                <Field
                  name="homeCity"
                  type="text"
                  lable="CITY"
                  classname="col-md-4"
                  component={InputComponent}
                  placeholder="city"
                />
                <Field
                  name="homeState"
                  type="text"
                  lable="STATE"
                  classname="col-md-4"
                  component={InputComponent}
                  placeholder="state"
                />
                <Field
                  name="homeZip"
                  type="number"
                  lable="ZIP"
                  classname="col-lg-6"
                  component={InputComponent}
                  placeholder="zip"
                />
                <br/><br/>
                <div>
                    <div className="col-xs-12" >
                        <button type="submit" className="btn btn-primary">SUBMIT</button>
                        <Link to="/repinfo/" className="btn btn-danger">CANCEL</Link>
                    </div>
                </div>
              </Form>
            </div>
            </div>
        );
    }
}


function validate(values) {
    const errors = {};
    let repStateErr = isValidState(values.repState)
    let zipErr = isValidZip(values.repZipCode);
    let examDateErr = isValidExamDate(values.examDate);

    if (!values.firstname) {
        errors.firstname = 'Enter firstname';
    }
    if (!values.lastName) {
        errors.lastName = 'Enter lastname';
    }
    if (!values.officeAddress) {
      errors.officeAddress = 'Home address empty';
    }
    if (!values.repCity) {
      errors.repCity = 'Enter City';
    }
    if (repStateErr) {
      errors.repState = repStateErr;
    }
    if (zipErr) {
      errors.repZipCode = zipErr;
    }
    if (!values.repAdminName) {
      errors.repAdminName = 'Invalid Name';
    }
    if (!values.repOfficePhone) {
      errors.repOfficePhone = 'Please enter office phone number';
    } else if (!isValidPhoneNumber(values.repOfficePhone)){
      errors.repOfficePhone = 'Invalid office phone number' ;
    }
    if (!values.repCellPhone) {
      errors.repCellPhone = 'Please enter mobile phone number';
    } else if (!isValidPhoneNumber(values.repCellPhone)){
      errors.repCellPhone = 'Invalid cellphone number' ;
    }
    if (!values.repEmail) {
      errors.repEmail = 'Invalid email';
    }
    if (!values.repAdminPhone) {
      errors.repAdminPhone = 'Empty cellphone number';
    } else if (!isValidPhoneNumber(values.repAdminPhone)){
      errors.repAdminPhone = 'Invalid cellphone number' ;
    }
    if (!values.repAssistantEmail) {
      errors.repAssistantEmail = 'Invalid email';
    }
    return errors;
}

//connect first argument is mapStatetoProps, 2nd is mapDipatchToProps
// reduxForm: 1st is form config, 2nd is mapDipatchToProps, 3rd is mapDispatchToProps
const mapStateToProps = (state) => ({
    // ...
});

const mapDispatchToProps = (dispatch)  => ({
    createExaminerInformation: (props) => { return dispatch(createExaminerInformation(props)) }
});

export default reduxForm({
    form: "PostsNewForm",
    validate
}) (connect(mapStateToProps, mapDispatchToProps)(ExaminerInformationForm));
