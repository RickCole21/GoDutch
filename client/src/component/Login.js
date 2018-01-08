import React, {Component} from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  Col,
  Button,
  PageHeader
} from 'react-bootstrap';

import '../css/login.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });

    // var inputId = e.target.id;
    // var state = {};
    // state[inputId] = e.target.value;
    // console.log(state)
    // this.setState(state);
  }

  login(e) {
    e.preventDefault();

    var url = 'http://localhost:3001/api/login';
    // var url = 'http://192.168.199.173:3001'
    var data = {
      username: this.state.username,
      password: this.state.password
    }
    console.log('请求的参数：', data);
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        "Accept": 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        if (res.errorCode === 0) {
          this.props.history.push('/');
        } else {
          console.log('登录失败：', res);
        }
      })
      .catch(e => console.log('oops error:', e));
  }

  render() {
    return (
      <div className='container'>
        <PageHeader>登录界面</PageHeader>
        <Form horizontal onSubmit={this.login}>
          <FormGroup controlId="username">
            <Col xsOffset={1} xs={10}>
              <FormControl type="text" placeholder="请输入手机号"
                           value={this.state.username}
                           onChange={this.handleChange}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="password">
            <Col xsOffset={1} xs={10}>
              <FormControl type="password" placeholder="请输入密码"
                           value={this.state.password}
                           onChange={this.handleChange}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col xsOffset={1} xs={10}>
              <Button type="submit" block>登录</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Login;