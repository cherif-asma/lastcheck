import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Friends from './pages/Friends';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ backgroundColor: 'lightpink', display: 'flex', justifyContent: 'space-around', padding: 30 }}>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/friends">My Friends</Link>
        </div>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/friends" component={Friends} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;

