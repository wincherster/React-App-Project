import React, { Component } from 'react'; // 从react库引入 React 和 Component
import './index.css'; // 引入自定义css样式

class Search extends React.Component {

    render() {
        return (
            <div className="search-warp">
                <div className="search-item logo">
                    <i className="logo-icon"></i>
                </div>
                <div className="search-item search">
                    <input className="input-text" type="text"/>
                </div>
                <div className="search-item other">
                    <i className="other-icon"></i>
                </div>
            </div>
        )
    }
}

export default Search;