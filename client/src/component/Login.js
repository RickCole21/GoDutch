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

  render() {
    return (
      <div className='container'>
        <PageHeader>登录界面</PageHeader>
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col xsOffset={1} xs={10}>
              <FormControl type="mobile" placeholder="请输入手机号"/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col xsOffset={1} xs={10}>
              <FormControl type="password" placeholder="请输入密码"/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col xsOffset={1} xs={10}>
              <Button type="submit" block>
                登录
              </Button>
            </Col>
          </FormGroup>
        </Form>

      </div>
    )
  }
}

export default Login;