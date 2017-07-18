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
import Post from './Components/Post/Post'
import SinglePost from './Components/SinglePost/SinglePost'

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
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/categories">Swap</Link>
          </nav>

          <main>
            <Route
              path="/home"
              render={ () => {
                return(
                  <Dashboard posts={this.state.posts}/>
                )
              }}
            />
            <Route
              path="/categories/:type"
              component={Post}
            />
            <Route
              path="/categories/:type/:item_name"
              component={SinglePost}
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
