import React from 'react';

import axios from 'axios';

// 引入router
import { withRouter } from 'react-router-dom';
@withRouter
class AuthRoute extends React.Component {
  componentDidMount(){
    const publicList = ['/login', '/register'];
    console.log(this.props.location, 'props.location')
    const pathname = this.props.location.pathname;
    if(publicList.indexOf(pathname) > -1){
      return null;
    }
    /**
     *  获取用户信息 
     * 0. 判断是否需要登录，然后跳转登录
     * 1. 判断用户身份，牛人 or Boss
     * 2. 用户是否完善个人信息
     * */ 
    axios.get('/user/info')
    .then( res => {
      if(res.data.code == 200){
        // 判断登录信息
        if(res.data.code == 0) {

        }else {
          console.log(this.props.history);

          this.props.history.push('/login')
        }
      }
      

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