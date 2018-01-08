import React, {Component} from 'react';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: 'no-user'
    }

    this.getUserInfo = this.getUserInfo.bind(this);
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
          // alert('用户未登录或认证信息失效')
          // this.props.history.push('/login');
        }
        this.setState({
          username: res.data.username
        })
      })
      .catch(e => console.log('oops error:', e));
  }

  componentWillMount() {
    this.getUserInfo();
  }

  render() {
    return (
      <div>欢迎:{this.state.username}</div>
    )
  }
}

export default Home;