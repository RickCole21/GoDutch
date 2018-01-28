import React, {Component} from 'react';

import '../../css/common/cell-group.css'

class CellGroup extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cell-group">
        {this.props.children}
      </div>
    )
  }
}

export default CellGroup;