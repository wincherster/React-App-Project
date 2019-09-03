import React from 'react';
import logoImg from './logo.jpg';

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