import React from 'react';
import { connect } from 'react-redux'; // 引入 redux
import { login } from '../../store/auth.redux';

//  两个reducer  state 状态不能共享， 
// 需要合并reducer
@connect(
  state => state
)
class Auth extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    return (
      <div className="auth-wrap">
        auth page
      </div>
    )
  }
}

export default Auth;