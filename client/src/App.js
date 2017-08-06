import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>欢迎来到Rick's World</h2>
        </div>
        <p className="App-intro">
          想要开始, 编辑 <code>src/App.js</code> 然后保存后重载.
        </p>
      </div>
    );
  }
}

export default App;
