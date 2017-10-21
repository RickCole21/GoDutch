import React, {Component} from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  Col,
  Button,
  Checkbox,
  ControlLabel,
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
            <Col componentClass={ControlLabel} xs={3}>
              用户名
            </Col>
            <Col xs={9}>
              <FormControl type="mobile" placeholder="请输入手机号"/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} xs={3}>
              密码
            </Col>
            <Col xs={9}>
              <FormControl type="password" placeholder="请输入密码"/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col xsOffset={3} xs={9}>
              <Checkbox>记住我</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col xsOffset={3} xs={9}>
              <Button type="submit">
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