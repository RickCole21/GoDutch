import React, {Component} from 'react';
import Client from '../../test/Client';

const MAX_ITEM_LIMIT = 10;

class SiteSearch extends Component {

  state = {
    sites: [],
    showCancelSpan: false,
    searchValue: ""
  }

  handleSearchChange = e => {
    const value = e.target.value;

    this.setState({
      searchValue: value
    });

    if (value === '') {
      this.setState({
        sites: [],
        showCancelSpan: false
      })
    } else {
      this.setState({
        showCancelSpan: true
      });

      Client.search(value, sites => {
        console.log(sites);
        this.setState({
          sites: sites.slice(0, MAX_ITEM_LIMIT)
        });
      });
    }

  }

  handleSearchCancel = () => {
    this.setState({
      sites: [],
      showCancelSpan: false,
      searchValue: ""
    })
  }

  render() {
    const {showCancelSpan, sites} = this.state;
    const removeSpanStyle = showCancelSpan ? {} : {visibility: "hidden"};

    const siterows = sites.map((site, index) => {
      <tr key={index}>
        <td>site.name</td>
        <td>site.url</td>
      </tr>
    });

    return (
      <div id="site-search">
        <table>
          <thead>
          <tr>
            <th colSpan="5">
              <input
                type="text"
                placeholder="Search Sites..."
                value={this.state.searchValue}
                onChange={this.handleSearchChange}
              />
              <span
                onClick={this.handleSearchCancel}
                style={removeSpanStyle}
              >清除</span>
            </th>
          </tr>
          <tr>
            <th>site</th>
            <th>url</th>
          </tr>
          </thead>
          <tbody>
          {siterows}
          </tbody>
        </table>
      </div>
    );

  }
}

export default SiteSearch;