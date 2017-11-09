import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Login from '../component/Login'
import Register from '../component/Register'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const BasicExample = () => (
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
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
    </div>
  </Router>
)
export default BasicExample