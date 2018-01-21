import React, {Component} from 'react';
import Tabbar from './Tabbar';

import {getUrlParamByKey} from '../js/util';


class Room extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    let id = getUrlParamByKey('id');
    return (
      <div>
        id:{id}
        <Tabbar></Tabbar>
      </div>
    )
  }
}

export default Room;