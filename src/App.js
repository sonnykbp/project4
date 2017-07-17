import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <h1>Hello World</h1>
      </div>
      </Router>
    );
  }
}

export default App;
