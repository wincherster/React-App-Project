import React from 'react';
import Logo from '../../components/logo'
import './index.css'
import { List, InputItem, Button, WhiteSpace, Radio, WingBlank} from 'antd-mobile';
class Register extends React.Component {
  constructor(props){
    super();
    this.state = {
      user: '',
      pwd: '',
      repeatpwd: '',
      type: 'genius'
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

  register() {
    console.log('register Click', this.state)
    // 请求api
    
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
            <InputItem
              onChange={
                v=> this.handleChange('user', v)
              }
            placeholder="请输入用户名" clear>用户名</InputItem>
            <InputItem 
              onChange={
                v=> this.handleChange('pwd', v)
              }
            placeholder="请输入密码" clear>密码</InputItem>
            <InputItem 
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
          
        </div>
      </div>
    )
  }
}


export default Register