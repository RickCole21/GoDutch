import React, {Component} from 'react';
// import Tabbar from './common/Tabbar';

// import {getUrlParamByKey} from '../js/util';


class Room extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var id = this.props.match.params.id;
    return (
      <div>
        id:{id}
        {/*<Tabbar></Tabbar>*/}
      </div>
    )
  }
}

export default Room;