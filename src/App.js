import React, { Component } from 'react';
import './App.css';

import Layout from './components/layout';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {history} = this.props;
    console.log(this.props, 'app')
    return (
      // <div className="App">
        <Layout />
      // </div>
    );
  }
}

export default App;
