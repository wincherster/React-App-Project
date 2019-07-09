/*
    2018-09-27 周四
    index.js文件是项目的入口js文件，类vue中的 main.js
    首先要引入 react 和 reactDOM，类 vue中 引入vue实例对象一样（vue实例实际包括了虚拟DOM对象【猜测】）
    然后引入 App，类vue中的app文件，是默认的入口页面（也可以自定义入口页面）
    最后可引入 ui 组件或其他react插件，应用到项目中
*/ 
// import React from 'react'; // 引入react实例，必写
// import ReactDOM from 'react-dom'; // 引入虚拟DOM实例 必写
// import App from './App'; // 初始化入口组件
// import './assets/reset.css'; // 引入全局样式文件
// import 'antd/dist/antd.css'; // 引入antd ui 样式

// // import registerServiceWorker from './registerServiceWorker'; // 引入本地服务模块

// ReactDOM.render(<App />, document.getElementById('root')); // 渲染组件
// // registerServiceWorker(); // 启动本地服务，具体配置见registerServiceWorker.js文件

import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';

import App from './App';

import { counter } from './store/index.redux';

const store = createStore( counter );
console.log( store , 'store')

function render(){
    ReactDom.render(<App store={store}/>, document.getElementById('root'));
}

render();

store.subscribe( render );
