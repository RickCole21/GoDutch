import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import Room from './component/Room';
import Mine from './component/Mine';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/room" component={Room}/>
      <Route path="/mine" component={Mine}/>
    </div>
  </Router>
)
export default Routes;