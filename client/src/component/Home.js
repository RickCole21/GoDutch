import React, {Component} from 'react';
import {
  Media,
  Panel
} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import Tabbar from './Tabbar';

import '../css/home.css'

import img1 from '../img/bojack.png';
import img2 from '../img/rp.jpeg';
import img3 from '../img/ljl.jpeg';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '未登录'
    }

    this.getUserInfo = this.getUserInfo.bind(this);
    this.logout = this.logout.bind(this);
  }

  getUserInfo() {
    var url = 'http://localhost:3001/api/user';
    fetch(url, {
      method: 'get',
      mode: 'cors',
      credentials: 'include'
      // headers: {
      //   "Content-Type": "application/json",
      //   "Accept": 'application/json'
      // }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        if (res.errorCode === 1) {
          alert('用户未登录或认证信息失效')
          this.props.history.push('/login');
        }
        this.setState({
          username: res.data.username
        })
      })
      .catch(e => console.log('oops error:', e));
  }

  logout() {
    var url = 'http://localhost:3001/api/logout';

    fetch(url, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        "Accept": 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.errorCode === 0) {
          this.props.history.push('/login');
        } else {
          console.log('提示信息：', res.msg);
        }
      })
      .catch(e => console.log('oops error:', e));
  }

  componentWillMount() {
    this.getUserInfo();
  }

  render() {
    const rooms = [{
      id: '1',
      avatar: img1,
      title: '锵锵三🐶行',
      history: '狗子在树上',
      time: '23:09'
    }, {
      id: '2',
      avatar: img2,
      title: '任口口',
      history: '[动画表情]',
      time: '星期五'
    }, {
      id: '3',
      avatar: img3,
      title: '中山老司机',
      history: '垃圾',
      time: '21:40'
    }, {
      id: '4',
      avatar: img3,
      title: '中山老司机',
      history: '垃圾',
      time: '21:40'
    }, {
      id: '5',
      avatar: img3,
      title: '中山老司机',
      history: '垃圾',
      time: '21:40'
    }, {
      id: '6',
      avatar: img3,
      title: '中山老司机',
      history: '垃圾',
      time: '21:40'
    }, {
      id: '7',
      avatar: img3,
      title: '中山老司机',
      history: '垃圾',
      time: '21:40'
    }, {
      id: '8',
      avatar: img3,
      title: '中山老司机',
      history: '垃圾',
      time: '21:40'
    }, {
      id: '9',
      avatar: img3,
      title: '中山老司机',
      history: '垃圾',
      time: '21:40'
    }, {
      id: '10',
      avatar: img3,
      title: '中山老司机',
      history: '垃圾',
      time: '21:40'
    }, {
      id: '11',
      avatar: img3,
      title: '中山老司机',
      history: '垃圾',
      time: '21:40'
    }, {
      id: '12',
      avatar: img3,
      title: '中山老司机',
      history: '垃圾',
      time: '21:40'
    }, {
      id: '13',
      avatar: img3,
      title: '中山老司机',
      history: '垃圾',
      time: '21:40'
    }, {
      id: '14',
      avatar: img3,
      title: '中山老司机',
      history: '垃圾',
      time: '21:40'
    }, {
      id: '15',
      avatar: img3,
      title: '中山老司机',
      history: '垃圾',
      time: '21:40'
    }, {
      id: '16',
      avatar: img3,
      title: '中山老司机',
      history: '垃圾',
      time: '21:40'
    }, {
      id: '17',
      avatar: img3,
      title: '中山老司机',
      history: '垃圾',
      time: '21:40'
    }, {
      id: '18',
      avatar: img3,
      title: '中山老司机',
      history: '垃圾',
      time: '21:40'
    }, {
      id: '19',
      avatar: img3,
      title: '中山老司机',
      history: '垃圾',
      time: '21:40'
    }, {
      id: '20',
      avatar: img3,
      title: '中山老司机',
      history: '垃圾',
      time: '21:40'
    }];

    // 房间列表
    const roomList = rooms.map((room, index) => {
      return (
        <LinkContainer
          key={index}
          to={{
            pathname: '/room/' + room.id,
          }}
        >
          <Media>
            <Media.Left>
              <img width={45} height={45} src={room.avatar} alt="thumbnail"/>
            </Media.Left>
            <Media.Body>
              <Media.Heading>
                {room.title}
                <small>{room.time}</small>
              </Media.Heading>
              <p>
                {room.history}
              </p>
            </Media.Body>
          </Media>
        </LinkContainer>
      )
    });

    return (
      <div>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h1">
              {this.state.username}
              <span className="logoutSpan" onClick={this.logout}>退出登录</span>
            </Panel.Title>
          </Panel.Heading>

          <Panel.Body>
            {roomList}
          </Panel.Body>

        </Panel>
        <Tabbar/>
      </div>
    )
  }
}

export default Home;