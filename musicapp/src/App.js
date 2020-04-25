import React from 'react';
import Header from './conponents/Header'
import NavLeft from './conponents/NavLeft'
import Footer from './conponents/Footer'
import {Row, Col} from 'antd'
import './App.less'

export default class App extends React.Component {

  render() {
    return (
     <div style={{height:'100vh'}}>
       <Header/>
        <div className="main">
        <Row>
          <Col span={4}>
            <NavLeft/>
          </Col>
          <Col span={20} className="main_right">
            {this.props.children}
          </Col>
        </Row>
        </div>
       <Footer/>
     </div>
    )
  }
}

