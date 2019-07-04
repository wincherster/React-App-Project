import React, { Component } from 'react'; // 从react库引入 React 和 Component
import './index.css'; // 引入自定义css样式

class Tabbar extends React.Component {
    constructor(){
        super();
    }

    componentDidMount(){
        console.log('tabbar 渲染了');
    }

    render(){
        const {history} = this.props;
        console.log(this.props)
        return (
            <div className="bottom-bar">
                <div className="bar-item" onClick={e => { history.push({pathname: "/index"}) }}>
                    <i className="item-icon"></i>
                    <div className="item-text">首页</div>
                </div>
                <div className="bar-item" onClick={e => { history.push("/orderList") }}>
                    <i className="item-icon"></i>
                    <div className="item-text">订单</div>
                </div>
                <div className="bar-item" onClick={e => {  history.push("/my") }}>
                    <i className="item-icon"></i>
                    <div className="item-text">我的</div>
                </div>
            </div>
        )
    }
}

export default Tabbar;