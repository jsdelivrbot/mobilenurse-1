import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';


class SideBar extends Component {
    render() {
        return (
          <Row className="menu">
            <Col xs={12} className="menu-item">
              <Link to="/repinfo/">
                <h4>Exams</h4>
              </Link>
            </Col>
            <Col xs={12} className="menu-item">
              <Link to="/profile/">
                <h4>Profile</h4>
              </Link>
            </Col>
            <Col xs={12} className="menu-item">
              <Link to="/posts/new/">
                <h4>Schedule Exam</h4>
              </Link>
            </Col>
            <Col xs={12} className="menu-item">
              <Link to="/payment/">
                <h4>Payment</h4>
              </Link>
            </Col>
            <Col xs={12} className="menu-item">
              <Link to="/logout">
                <h4>Sign Out</h4>
              </Link>
            </Col>
          </Row>
        );
    }
}

function mapStateToProps(state) {
    return { post: state.posts.post };
}



export default connect(mapStateToProps) (SideBar);
