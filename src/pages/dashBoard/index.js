// 20190718 
import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

// 20190727 使用connect
import { connect } from 'react-redux';
// 抽离组件
import App from '../../App';
// 20190727 退出
import { logout } from '../../store/auth.redux'
import { Button } from 'antd';

function Child1 () {
  return <h1>Child1</h1>
}
function Child2 () {
  return <h1>Child2</h1>
}
// 
@connect(
  state => state.auth,
  {logout}
)

// 
class DashBoard extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    // match
    const match = this.props.match

    const redirectToLogin = <Redirect to="/login"></Redirect>
    const app = (
      <div className="auth-wrap">
       <h2> DashBoard page</h2>
       { this.props.isAuth ? <Button onClick={ this.props.logout }>注销账户</Button> : null}
        <ul>
          <li>
            {/* <Link to="/dashboard/">App</Link> */}

            {/* 20190727 使用 match.url 变量优化 */}
            <Link to={`${match.url}/`}>App</Link>
          </li>
          <li>
            {/* <Link to="/dashboard/child1">child1</Link> */}

            {/* 20190727 使用 match.url 变量优化 */}
            <Link to={`${match.url}/child1`}>child1</Link>
          </li>
          <li>
            {/* <Link to="/dashboard/child2">child2</Link> */}

            {/* 20190727 使用 match.url 变量优化 */}
            <Link to={`${match.url}/child2`}>child2</Link>
          </li>
        </ul>
        {/* 嵌套子路由 */}
        {/* <Route path="/dashboard/" exact component={App}></Route>
        <Route path="/dashboard/child1" component={Child1}></Route>
        <Route path="/dashboard/child2" component={Child2}></Route> */}

        {/* 20190727 match.url 优化 */}
        <Route path={`${match.url}/`} exact component={App}></Route>
        <Route path={`${match.url}/child1`} component={Child1}></Route>
        <Route path={`${match.url}/child2`} component={Child2}></Route>
      </div>
    )

    return this.props.isAuth ? app : redirectToLogin
  }
}

export default DashBoard;