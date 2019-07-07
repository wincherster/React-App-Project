import React, { Component } from 'react';
import './App.css';

import Layout from './components/layout';
// 1. 使用class 类 定义组件，适合复杂组件
class Child extends Component {
  constructor(props){
    super(props);
    this.state = {
      solders: ['和尚', '住持','方丈']
    }
    // 1. 绑定 this 指向
    // this.addSolder = this.addSolder.bind(this);
  }

  // 添加方法
  // 3. 使用箭头函数，定义事件 解决this指向
  // addSolder = () => {
  addSolder() {
    console.log('hello add');
    // 更新 state
    this.setState({
      solders: [...this.state.solders, '新兵蛋子' + Math.random()]
    })
  }

  render(){
    // 结构赋值，取 state 对象中某个属性，减少写 this.state.
    const {solders} = this.state;
    return (
      <div>
        <h2> 一营营长 {this.props.name}</h2>
        {/* 2. 使用箭头函数 解决this 指向 */}
        <button onClick={ () => this.addSolder() }>新兵入伍</button>
        <ul>
          { solders.map( v => {
            return <li key={v}>{v}</li>
          }) }
        </ul>


      </div>
    )
  }
}
// 2. 使用 function 函数定义组件, 适合简单的组件
function Child2(props){
  return <h2>骑兵连连长{props.name}</h2>
}

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const boss = '李云龙'
    return (
      // <Layout />
      <div className="App">
        
        <h1>独立团 团长{boss}</h1>
        <Child name="张大彪"></Child>
        <Child2 name="孙德胜"></Child2>
      </div>
    );
  }
}

export default App;
