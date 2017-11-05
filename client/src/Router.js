import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
/* 引入组件 */
import Login from './component/Login'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Router = () => (
  <Router>
    <div>
      {/*<ul>*/}
      {/*<li><Link to="/">Home</Link></li>*/}
      {/*<li><Link to="/about">About</Link></li>*/}
      {/*<li><Link to="/topics">Topics</Link></li>*/}
      {/*<li><Link to="/login">Login</Link></li>*/}
      {/*</ul>*/}

      {/*<hr/>*/}

      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
    </div>
  </Router>
)
export default Router;