import React, {Component} from 'react';
import {
  ButtonGroup,
  Button,
} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class Tabbar extends Component {

  constructor(props) {
    super(props);
    this.nav = this.nav.bind(this);
  }

  nav(flag) {
    console.log('this.props:', this.props)
    // if (flag === 1) {
    //   this.props.history.push('/');
    // } else {
    //   this.props.history.push('/mine');
    // }
    // console.log('tabbar is selected');
  }

  render() {
    var tabberStyle = {
      position: 'fixed',
      bottom: 0,
      height: '45px'
    }
    return (
      <div>
        <ButtonGroup style={tabberStyle} justified>
          <LinkContainer to="/">
            <Button to="/">主页</Button>
          </LinkContainer>
          <LinkContainer to="/mine">
            <Button to="/mine">我的</Button>
          </LinkContainer>
        </ButtonGroup>
      </div>
    )
  }
}

export default Tabbar;