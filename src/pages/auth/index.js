import React from 'react';
import { connect } from 'react-redux'; // 引入 redux
import { login, getUserData } from '../../store/auth.redux';

// 20190727 重定向
import { Redirect } from 'react-router-dom';
import axios from 'axios';

//  两个reducer  state 状态不能共享， 
// 需要合并reducer
@connect(
  state => state.auth,
  { login , getUserData}
)
class Auth extends React.Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     data: {}
  //   }
  // }

  componentDidMount() {
    this.props.getUserData();
  // 抽离到 auth.reducer
  //   axios.get('/data')
  //     .then( res => {
  //       if(res.status === 200){
  //         this.setState({
  //           data: res.data
  //         })
  //       }
  //        console.log(res, 'data')
  //     })

  }

  render(){

    return (
      <div>
        { this.props.user } { this.props.age}
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