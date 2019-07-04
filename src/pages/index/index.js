import React, { Component } from 'react'; // 从react库引入 React 和 Component
import './index.css'; // 引入自定义css样式

class Index extends React.Component {
    constructor(props){ // 生命周期 初始化
        super(props);
        // 需要绑定 事件处理方法到 props 中的state 的this----
        this.state = {

        };
    }

    toInfoList() {
        const { history } = this.props;
        history.push('/infoList')

    }
    render () {
        
        return (
            <div className="index-warpper">
                index page
                <button onClick={ e => this.toInfoList() }>去列表页</button>
            </div>
        )
    }
}

export default Index;