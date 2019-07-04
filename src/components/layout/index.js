import React, { Component } from 'react'; // 从react库引入 React 和 Component
import './index.css'; // 引入自定义css样式
import routes from '../../routes';

import Search from '../search';
import Tabbar from '../tabbar';

import { DatePicker } from 'antd';


// 将state 抽离出来，类vue 的 date 存储在这里
// 组件中的 私有 变量都存储在这里，
// Redux 中的 公共变量 可以类 vuex 的覆盖 组件的私有变量
var data = { 
    count: 0,
    total: 100, 
};

class ClickCounter extends Component { // 创建一个组件类 父类是 Component
    constructor(){ // 生命周期 初始化
        super();
        // 需要绑定 事件处理方法到 props 中的state 的this----
        this.onClickButton = this.onClickButton.bind(this); 
        this.state = data;
    }

    getInitialState(){// 装载生命周期 返回值 用来初始化组件的 this.state, 需要用 React.createClass方法创造的组件类才 发生作用， 使用ES6语法这函数不会产生作用
    }

    getDefaultProps(){// 装载生命周期 返回值作为props的初始值 需要用 React.createClass方法创造的组件类才 发生作用， 使用ES6语法这函数不会产生作用
    }

    componentWillMount(){// 装载生命周期 装载，在调用render之前执行 -- 可在服务器和浏览器中调用

    }

    onClickButton(){ // 点击事件处理函数
        // 设置 state中的 count数据，需要配合state中的 绑定 ----
        this.setState({});
    }

    render(){// 生命周期 返回JSX描述的结构 最终由React操作渲染过程
        return (
            <div className="layout-warpper">
                <Search/>
                <div className="content" >{routes}</div>
                <Tabbar/>
            </div>
        )
    }

    componentDidMount(){// 装载生命周期 在调用render之后执行 当组件能有多个组件时，当所有组件都渲染完成，该函数会一次性调用 多次  -- 只能在浏览器调用
        // 可以获取渲染出来的任何DOM
        // document.body.style.background = "#cecece"
    }
}
export default ClickCounter; // 不导出组件的话，页面会报错-找不到该组件





