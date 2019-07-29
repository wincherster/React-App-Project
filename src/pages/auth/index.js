import React from 'react';
import { connect } from 'react-redux'; // 引入 redux
import { login } from '../../store/auth.redux';

// 20190727 重定向
import { Redirect } from 'react-router-dom';

//  两个reducer  state 状态不能共享， 
// 需要合并reducer
@connect(
  state => state.auth,
  { login }
)
class Auth extends React.Component {

  // constructor(props){
  //   super(props);
  // }

  render(){

    return (
      <div>
        { this.props.isAuth ?  <Redirect to="/dashboard" /> : null }
        <h2>你没有权限，需要登录才能看</h2>

        <button onClick={ this.props.login }>登录</button>

      </div>
      // <div className="auth-wrap">
      //   auth page
      // </div>
    )
  }
}

export default Auth;