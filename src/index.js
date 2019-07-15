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
// 添加 applyMiddleware 中间件
import { createStore, applyMiddleware } from 'redux';
// 引入thunk 支持异步
import thunk from 'redux-thunk' ;

// 20190715 使用react-redux
import { Provider } from 'react-redux';
// 20150715 使用react-router4
import { BrowserRouter, Route, Link } from 'react-router-dom';

import App from './App';

// import { counter, addGun, removeGun, addGunAsync } from './store/index.redux';
// 简化后
import { counter } from './store/index.redux';

const store = createStore( counter , applyMiddleware(thunk));

// 使用 react-redux 前
// function render(){
//     ReactDom.render(<App store={store} addGunAsync={addGunAsync} addGun={addGun} removeGun={removeGun}/>, document.getElementById('root'));
// }
// render();
// // 观察者模式 订阅render函数 store 更新的时候 触发渲染
// store.subscribe( render );

// 0 准备渲染组件
function Child1 () {
    return <h1>Child1</h1>
}
function Child2 () {
    return <h1>Child2</h1>
}

//  20190715 使用 react-redux 后
ReactDom.render(
    (
        <Provider store={store}>
            {/* 1 包裹所有组件 */}
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            {/* 2. 使用Link 完成跳转 */}
                            <Link to="/">App</Link>
                        </li>
                        <li>
                            <Link to="/child1">child1</Link>
                        </li>
                        <li>
                            <Link to="/child2">child2</Link>
                        </li>

                    </ul>
                    {/* 3 Route 匹配路由组件， exact 完全匹配路由， 因为路由采用正则匹配的方式 */}
                    <Route path="/" exact component={App}></Route>
                    <Route path="/child1" component={Child1}></Route>
                    <Route path="/child2" component={Child2}></Route>
                </div>
                {/* <App/> */}
            </BrowserRouter>
        </Provider>
    ),
    document.getElementById('root')
);
