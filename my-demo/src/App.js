import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import './style/common.less'

export default class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Header />
        <div className="section">
          {this.props.children}
        </div>
        <Footer />
      </div>

    )
  }
}

