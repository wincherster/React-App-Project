import React from 'react';
import logoImg from './logo.jpg';
import './index.css';
class Logo extends React.Component {

  render() {
    return (
      <div className="logo-warp">
        <img src={logoImg} alt=""/>
      </div>
    )
  }
}

export default Logo