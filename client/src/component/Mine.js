import React, {Component} from 'react';
import Tabbar from './common/Tabbar';
import CellGroup from './common/CellGroup';
import Cell from './common/Cell';

import '../css/mine.css'

import avatar from '../img/rp.jpeg';


class Mine extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="avatar-wrapper">
          <div className="avatar">
            <img src={avatar} alt="..."/>
          </div>
          <div className="avatar-info">
            <h4>RickCole</h4>
            <p>已消费：345.5$</p>
          </div>
        </div>

        <CellGroup>
          <Cell icon="fa fa-cog" text="Settings"></Cell>
        </CellGroup>

        <CellGroup>
          <Cell icon="fa fa-moon-o" text="Night Mode"></Cell>
          <Cell icon="fa fa-star-o" text="Favourites"></Cell>
          <Cell icon="fa fa-qrcode" text="Scanning QR Code"></Cell>
          <Cell icon="fa fa-moon-o" text="Drafts"></Cell>
          <Cell icon="fa fa-hashtag" text="My Topics"></Cell>
          <Cell icon="fa fa-headphones" text="Help & Support"></Cell>
        </CellGroup>
        <Tabbar></Tabbar>
      </div>
    )
  }
}

export default Mine;