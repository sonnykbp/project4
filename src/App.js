import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import axios from "axios"
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Post from './Components/Post/Post'
import SinglePost from './Components/SinglePost/SinglePost'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    axios.get("http://localhost:3001/api/categories").then((response) => {
      this.setState({
        posts: response.data
      })
    })
  }
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar">
            <Link to="/home">Home</Link>
            <Link to="/categories">Swap</Link>
            <Link to="/about">About</Link>
          </nav>

          <main>
            <Route
              exact path="/home"
              render={ () => {
                return(
                  <Home />
                )
              }}
            />
            <Route
              exact path="/categories"
              render={ () => {
                return(
                  <Dashboard posts={this.state.posts}/>
                )
              }}
            />
            <Route
              exact path="/about"
              component={About}
            />
            <Route
              exact path="/categories/:type"
              component={Post}
            />
            <Route
              exact path="/categories/:type/:item_name"
              component={SinglePost}
            />
            <Route
              path="/*"
              render={() => {
                return <Redirect to="/home" />
              }}
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
