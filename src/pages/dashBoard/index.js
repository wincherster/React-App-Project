// 20190718 
import React from 'react';
import { Route, Link, Redirect, Switch} from 'react-router-dom';
// 抽离组件
import App from '../../App';

function Child1 () {
  return <h1>Child1</h1>
}
function Child2 () {
  return <h1>Child2</h1>
}

class DashBoard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="auth-wrap">
       <h2> DashBoard page</h2>
        <ul>
          <li>
            <Link to="/dashboard/">App</Link>
          </li>
          <li>
            <Link to="/dashboard/child1">child1</Link>
          </li>
          <li>
            <Link to="/dashboard/child2">child2</Link>
          </li>
        </ul>
        {/* 嵌套子路由 */}
        <Route path="/dashboard/" exact component={App}></Route>
        <Route path="/dashboard/child1" component={Child1}></Route>
        <Route path="/dashboard/child2" component={Child2}></Route>
      </div>
    )
  }
}

export default DashBoard;