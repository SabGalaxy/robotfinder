import React, { Component } from 'react';
import { CardList } from '../components/cardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject({
            status: res.status,
            statusText: res.statusText
          });
        }
      })
      .then(res => this.setState({ robots: res }))
      .catch(err => console.log("Error, with message:", err.statusText));
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield);
    });
    return (
      <div className="App tc">
        <h1>RobotFriends</h1>
        <Searchbox searchchange={this.onSearchChange} className="search-box" />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
