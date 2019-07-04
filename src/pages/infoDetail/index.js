import React, { Component } from 'react'; // 从react库引入 React 和 Component
import './index.css'; // 引入自定义css样式

class InfoDetail extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    componentDidMount() {
        console.log('资讯详情')
        console.log(window.location)
    }

    render(){
        return (
            <div className="info-detail-warp">
                info detail
            </div>
        )
    }
}

export default InfoDetail;