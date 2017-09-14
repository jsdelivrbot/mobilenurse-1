import React, { Component, PropTypes  } from 'react';
import { Link } from 'react-router';

const HeaderGuest = () => (
  <nav className="mobilenurse-navbar navbar services">
    <div className="container-fluidx">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link className="navbar-brand mobilenurse-brand" to="/">mobilenurse.io</Link>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav"></ul>
        <ul className="nav navbar-nav navbar-right mobilenurse-brand">
          <li>
            <Link to="/register">
              <span className="glyphicon glyphicon-user"></span> SIGN UP
            </Link>
          </li>
          <li>
            <Link to="/signin">
              <span className="glyphicon glyphicon-user"></span> LOGIN
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default HeaderGuest;
