import React, {Component} from 'react';
// import {
//   ButtonGroup,
//   Button,
// } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import '../../css/common/tabber.css'

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
    return (
      <div className="tab-bar">
        {/*<ButtonGroup style={tabberStyle} justified>*/}
        {/*<LinkContainer to="/">*/}
        {/*<Button to="/">主页</Button>*/}
        {/*</LinkContainer>*/}
        {/*<LinkContainer to="/mine">*/}
        {/*<Button to="/mine">我的</Button>*/}
        {/*</LinkContainer>*/}
        {/*</ButtonGroup>*/}
        <LinkContainer to="/">
          <div className="tab">
            <i className="fa fa-home"></i>
          </div>
        </LinkContainer>
        <LinkContainer to="/mine">
          <div className="tab">
            <i className="fa fa-user"></i>
          </div>
        </LinkContainer>
      </div>
    )
  }
}

export default Tabbar;