import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';


class Header extends Component {
    render() {
        return (
          <Row className="header">
            <Col xs={12} className="header-title">
              <h3 className="margin-y-20">{this.props.title}</h3>
              <hr className="margin-y-10 header-hr"/>
            </Col>
          </Row>
        );
    }
}

export default Header;
