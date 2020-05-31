import React from 'react';
import Logo from '../../components/logo'
import './index.css'
import { List, InputItem, Button, WhiteSpace, Radio, WingBlank} from 'antd-mobile';

import {connect} from 'react-redux'
import {register} from '../../store/user.redux'

@connect(
  state => state.user,
  {register}
)
class Register extends React.Component {
  constructor(props){
    super();
    this.state = {
      user: '',
      pwd: '',
      repeatpwd: '',
      type: 'genius'

      // 2020-05-29 使用bind 性能会好一些
      // this.handleRegister = this.handleRegister.bind(this)
    }
  }
  check(type) {
    const {stateType} = this.state;
    if(type === stateType){
      return false;
    }

    this.setState({
      type: type
    })
  }

  // handleRegister() {
  register() {
    console.log('register Click', this.state)
    // 请求api
    this.props.register(this.state)
  }

  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }

  render() {
    // 2019-09-05 使用方式
    const RadioItem = Radio.RadioItem;

    return (
      <div className="register-wrap">
        <Logo></Logo>
        <div className="register-form">
        <List>
          {
            this.props.msg ? <p className="error-msg">{this.props.msg}</p> : <p></p>
          }
            <InputItem
              onChange={
                v=> this.handleChange('user', v)
              }
            placeholder="请输入用户名" clear>用户名</InputItem>
            <InputItem 
              type="password"
              onChange={
                v=> this.handleChange('pwd', v)
              }
            placeholder="请输入密码" clear>密码</InputItem>
            <InputItem 
              type="password"
              onChange={
                v=> this.handleChange('repeatpwd', v)
              }
            placeholder="请再次输入密码" clear>确认密码</InputItem>
            <RadioItem 
              onChange={
                ()=> this.handleChange('type', 'genius')
              }
            checked={ this.state.type === 'genius'} onClick={() => this.check('genius')}>牛人</RadioItem>
            <RadioItem 
              onChange={
                ()=> this.handleChange('type', 'boss')
              }
            checked={ this.state.type === 'boss'} onClick={() => this.check('boss')}>BOSS</RadioItem>
          </List>
          <WhiteSpace></WhiteSpace>
          <Button type="primary" onClick={() => this.register()}>注册</Button>

          <div onClick={ () => this.toRegister()}>已有账号，去登录</div>
          
        </div>
      </div>
    )
  }
}


export default Register