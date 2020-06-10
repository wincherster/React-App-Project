import React from 'react';
import Logo from '../../components/logo'
import './index.css'

import { List, InputItem, Button, WhiteSpace, WingBlank} from 'antd-mobile';
class Login extends React.Component {
  toRegister () {
    this.props.history.push('/register')
  }
  render() {
    return (
      <div className="login-warp">
        <Logo></Logo>
        <div className="login-form">
          <List>
            <InputItem placeholder="请输入用户名" clear>用户名</InputItem>
            <InputItem placeholder="请输入密码" clear>密码</InputItem>
          </List>
          <WhiteSpace></WhiteSpace>
          <Button type="primary">登录</Button>
          <WhiteSpace></WhiteSpace>
          <div className="to_register" onClick={ () => this.toRegister()}>还没有账号，去注册</div>
        </div>
      </div>
    )
  }
}

export default Login