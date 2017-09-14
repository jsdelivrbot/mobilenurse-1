import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Modal, Button } from 'react-bootstrap';
import moment from 'moment';
import { formatPhoneNumberToInsert, convertAmtToPlainNumber } from '../helpers';

class ModalComponent extends Component {
      constructor(props) {
          super(props);
          this.state = {
              show: false,
              data: {}
          }
          this.handleClose = this.handleClose.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
      }
    componentWillReceiveProps(props){
      let data = props.formData;
      if(data.clientDOB) {
        data.clientAge = moment(new Date()).diff(moment(new Date(data.clientDOB)), 'year');
      }
      this.setState({
        show: props.openModal,
        data: data
      });
    }
    handleSubmit(){
      let data = this.state.data;
      data.clientDOB = moment(new Date(data.clientDOB)).format("YYYY-MM-DD");
      data.examDate = moment(new Date(data.examDate)).format("YYYY-MM-DD");
      data.examTime = moment(new Date(data.examTime)).format("HH:mm");
      data.clientPhone = data.clientPhone && formatPhoneNumberToInsert(data.clientPhone);
      data.policyAmount = parseInt(convertAmtToPlainNumber(data.policyAmount));
      this.props.onSubmit(data);
    }
    handleClose() {
      this.props.closeModal();
    }
    render() {
      let {data} = this.state;
      let clientDOB = moment(new Date(data.clientDOB)).format("MM/DD/YYYY");
      let examDate = moment(new Date(data.examDate)).format("MM/DD/YYYY");
      let examTime = moment(new Date(data.examTime)).format("hh:mm A");
        return (
          <Modal
             show={this.state.show}
             onHide={this.handleClose}
           >
             <Modal.Header closeButton>
               <Modal.Title id="contained-modal-title">MOBILENURSE</Modal.Title>
             </Modal.Header>
             <Modal.Body>
               <Row>
                <Col xs={12} style={{paddingBottom:'20px'}}>
                  <h6>Please review information entered</h6>
                </Col>
                <Col xs={12}>
                  <Col xs={12} sm={6} className="text-right">
                    <strong>FIRSTNAME : </strong>
                  </Col>
                  <Col xs={12} sm={6}>{data.firstname}</Col>
                </Col>
                <Col xs={12}>
                  <Col xs={12} sm={6} className="text-right">
                    <strong>LASTNAME : </strong>
                  </Col>
                  <Col xs={12} sm={6}>{data.lastname}</Col>
                </Col>
                <Col xs={12}>
                  <Col xs={12} sm={6} className="text-right">
                    <strong>DATE OF BIRTH : </strong>
                  </Col>
                  <Col xs={12} sm={6}>{clientDOB}</Col>
                </Col>
                <Col xs={12}>
                  <Col xs={12} sm={6} className="text-right">
                    <strong>AGE : </strong>
                  </Col>
                  <Col xs={12} sm={6}>{data.clientAge}</Col>
                </Col>
                <Col xs={12}>
                  <Col xs={12} sm={6} className="text-right">
                    <strong>PHONE : </strong>
                  </Col>
                  <Col xs={12} sm={6}>{data.clientPhone}</Col>
                </Col>
                <Col xs={12}>
                  <Col xs={12} sm={6} className="text-right">
                    <strong>LOCATION : </strong>
                  </Col>
                  <Col xs={12} sm={6}>{data.locationType}</Col>
                </Col>
                <Col xs={12}>
                  <Col xs={12} sm={6} className="text-right">
                    <strong>STREET ADDRESS : </strong>
                  </Col>
                  <Col xs={12} sm={6}>{data.examStreetAddress}</Col>
                </Col>
                <Col xs={12}>
                  <Col xs={12} sm={6} className="text-right">
                    <strong>APT/SUITE # : </strong>
                  </Col>
                  <Col xs={12} sm={6}>{data.examSuiteAptNumber}</Col>
                </Col>
                <Col xs={12}>
                  <Col xs={12} sm={6} className="text-right">
                    <strong>CITY : </strong>
                  </Col>
                  <Col xs={12} sm={6}>{data.examCity}</Col>
                </Col>
                <Col xs={12}>
                  <Col xs={12} sm={6} className="text-right">
                    <strong>STATE : </strong>
                  </Col>
                  <Col xs={12} sm={6}>{data.examState}</Col>
                </Col>
                <Col xs={12}>
                  <Col xs={12} sm={6} className="text-right">
                    <strong>ZIP : </strong>
                  </Col>
                  <Col xs={12} sm={6}>{data.examZipCode}</Col>
                </Col>
                <Col xs={12}>
                  <Col xs={12} sm={6} className="text-right">
                    <strong>POLICY AMOUNT : </strong>
                  </Col>
                  <Col xs={12} sm={6}>${data.policyAmount}</Col>
                </Col>
                <Col xs={12}>
                  <Col xs={12} sm={6} className="text-right">
                    <strong>EXAM DATE : </strong>
                  </Col>
                  <Col xs={12} sm={6}>{examDate}</Col>
                </Col>
                <Col xs={12}>
                  <Col xs={12} sm={6} className="text-right">
                    <strong>EXAM TIME  : </strong>
                  </Col>
                  <Col xs={12} sm={6}>{examTime}</Col>
                </Col>
                <Col xs={12}>
                  <Col xs={12} sm={6} className="text-right">
                    <strong>EXAM TYPE  : </strong>
                  </Col>
                  <Col xs={12} sm={6}>{data.examType}</Col>
                </Col>
                <Col xs={12}>
                  <Col xs={12} sm={6} className="text-right">
                    <strong>GENDER : </strong>
                  </Col>
                  <Col xs={12} sm={6}>{data.gender}</Col>
                </Col>
                <Col xs={12}>
                  <Col xs={12} sm={6} className="text-right">
                    <strong>COMMENTS : </strong>
                  </Col>
                  <Col xs={12} sm={6}>{data.examNotes}</Col>
                </Col>
               </Row>

             </Modal.Body>
             <Modal.Footer>
               <Button bsStyle="primary" onClick={this.handleSubmit}>CONFIRM & SUBMIT</Button>
               <Button onClick={this.handleClose}>BACK</Button>
             </Modal.Footer>
           </Modal>
        );
    }
}

export default ModalComponent;
