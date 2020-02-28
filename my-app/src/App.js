import React from 'react';
import axios from 'axios';
import Usercard from './components/Usercard';
import FollowerCard from './components/FollowerCard.js';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
    }
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/stahlgazer')
      .then(res => {
        this.setState({
          user: res.data
        });
        console.log(res.data, 'this is user response');
      })
      .catch(err => console.log(err));

    axios
      .get('https://api.github.com/users/stahlgazer/followers')
      .then(res => {
        this.setState({
          followers: res.data
        });
        console.log(res.data, 'this is follower response');
        console.log(this.state, 'my state')
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-header">Github User</h1>
        <Usercard user={this.state.user}/>
        <h2 className="App-header">Github Followers</h2>
        <FollowerCard followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
