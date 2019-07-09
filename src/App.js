// import React, { Component } from 'react';
// import './App.css';

// // 引入Button 组件
// import { Button, List } from 'antd-mobile'; 
// // 必须手动引入css样式, 但是 在package.json中配置了 plugins 后 就不需要了
// // import 'antd-mobile/dist/antd-mobile.css'; 

// import Layout from './components/layout';
// // 1. 使用class 类 定义组件，适合复杂组件
// class Child extends Component {
//   constructor(props){ // 设置初始化
//     // 需要调用 super(props)
//     super(props);
//     this.state = {
//       solders: ['和尚', '住持','方丈']
//     }
//     // 1. 绑定 this 指向
//     // this.addSolder = this.addSolder.bind(this);
//   }

//   // 添加方法
//   // 3. 使用箭头函数，定义事件 解决this指向
//   // addSolder = () => {
//   addSolder() {
//     console.log('hello add');
//     // 更新 state
//     this.setState({
//       solders: [...this.state.solders, '新兵蛋子' + Math.random()]
//     })
//   }

//   render(){
//     // 解构赋值，取 state 对象中某个属性，减少写 this.state.
//     const {solders} = this.state;
//     return (
//       <div>
//         <h2> 一营营长 {this.props.name}</h2>
//         {/* 2. 使用箭头函数 解决this 指向 */}
//         {/* <button onClick={ () => this.addSolder() }>新兵入伍</button> */}

//         <Button type="primary" onClick={ () => this.addSolder() }>新兵入伍</Button>
//         <ul>
//           { solders.map( v => {
//             return <li key={v}>{v}</li>
//           }) }
//         </ul>

//         <List
//           renderHeader={ () => '士兵列表'}
//         >
//           {
//             solders.map( v => {
//               return (
//                 <List.Item key={v}>
//                   {v}
//                 </List.Item>
//               )
//             })
//           }
//         </List>


//       </div>
//     )
//   }
// }
// // 2. 使用 function 函数定义组件, 适合简单的组件
// function Child2(props){
//   return <h2>骑兵连连长{props.name}</h2>
// }

// // 父组件
// class App extends Component {
//   constructor(props){
//     super(props);
//   }

//   render() {
//     const boss = '李云龙'
//     return (
//       // <Layout />
//       <div className="App">
        
//         <h1>独立团 团长{boss}</h1>
//         <Child name="张大彪"></Child>
//         <Child2 name="孙德胜"></Child2>
//       </div>
//     );
//   }
// }

//  ------------------------

import React from 'react';

// 1 引入 action 
import { addGUN } from './store/index.redux'

class App extends React.Component {

  render() {
    const store = this.props.store;
    const num = store.getState();
    return (
      <div>
        <h2>现在有机枪 {num} 把</h2>
        <button onClick={ () => store.dispatch(addGUN) }>申请武器</button>
      </div>
      
    )
  }
}



export default App;
