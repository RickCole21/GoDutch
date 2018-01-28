import React, {Component} from 'react';

import '../../css/common/cell.css'

class Cell extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cell">
        <div className="cell-icon">
          <i className={this.props.icon}></i>
        </div>
        <div className="cell-body">
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default Cell;