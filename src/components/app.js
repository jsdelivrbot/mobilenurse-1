import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import { Row, Col } from 'react-bootstrap';
import SideBar from './side_bar';

export default class App extends Component {
  render() {
    const {pathname} = this.props.location;
    let children = <Row className="app-root-element"><Col xs={4} md={3} className="height-100"><SideBar /></Col><Col xs={8} md={9}>{this.props.children}</Col></Row>;
    if(pathname == "/" || pathname == "/signin" || pathname == "/register"){
      children = this.props.children;
    }
    return (
      <LocaleProvider locale={enUS}>
        {children}
      </LocaleProvider>
    );
  }
}
