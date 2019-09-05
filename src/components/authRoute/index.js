import React from 'react';

import axios from 'axios';
class AuthRoute extends React.Component {
  componentDidMount(){
    /**
     *  获取用户信息 
     * 0. 判断是否需要登录，然后跳转登录
     * 1. 判断用户身份，牛人 or Boss
     * 2. 用户是否完善个人信息
     * */ 
    axios.get('/user/info')
    .then( res => {
      console.log(res, 'userInfo')

    })
    .catch( err => console.log(err));


  }
  render(){
    return (
      <div>
        授权
      </div>
    )
  }
}

export default AuthRoute;