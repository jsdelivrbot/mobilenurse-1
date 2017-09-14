import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import HeaderGuest from './headerGuest';

const Index = () => (
  <div className="container-fluid">
    <HeaderGuest />
    <div className="row">
      <div className="jumbotron col-sm-12">
        <h1 className="display-header">mobilenurse</h1>
        <h1 className="display-3">mobile medical exams</h1>
        <p className="lead"></p>
        <hr className="my-4" />
        <p></p>
        <p className="lead">
          <Link id="bootstrap-btn-overrides" to="/register" role="button">SIGN UP</Link>
        </p>
      </div>
    </div>
    <div className="container">
      <div className="container-fluid text-center services-header">
        <h2>a modern solution for medical exams</h2>
        <br />
        <div className="row services m-y">
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-hand-up logo-small"></span>
            <h4>PROFESSIONAL</h4>
            <p>schedule an exam & rest assured a licensed healthcare professional will provide the highest quality of service</p>
          </div>
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-heart"></span>
            <h4>REALTIME</h4>
            <p>stay connected to your client's exam, we will notify you via automated SMS & email</p>
          </div>
          <div className="col-sm-4">
              <span className="glyphicon glyphicon-eye-open"></span>
              <h4>TRANSPARENCY</h4>
              <p>your user dashboard will offer the ability to order exams, make a schedling change, all with full transparency - it just makes sense</p>
          </div>
        </div>
        <hr />
      </div>
      <div className="container-fluid services-header text-center">
        <div className="row">
          <h2 className="m-y">interested in becoming a mobile nurse?</h2>
          <h3>bring hustle to healthcare</h3>
          <a className="m-y" id="bootstrap-btn-overrides" href="mailto:petertountas1@gmail.com" role="button">CONTACT US</a>
        </div>
      </div>
    </div>
    <hr />
    <footer>
      <div className="container">
        <div className="row m-y">
          <div className="col-md-4 col-sm-6 text-left">
            <div className="logofooter">mobilenurse.io</div>
            <p>mobilenurse is dedicated to providing the market with the finest services</p>
            <p><i className="fa fa-map-pin"></i>25 E Delaware Chicago IL</p>
            <p><i className="fa fa-phone"></i>847 338 2300</p>
            <p><i className="fa fa-envelope"></i>petertountas1@gmail.com</p>
          </div>
          <div className="col-md-2 col-sm-6 paddingtop-bottom">
            <h6 className="heading7">GENERAL LINKS</h6>
            <ul className="footer-ul">
              <li><a href="#">Career</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Index;
