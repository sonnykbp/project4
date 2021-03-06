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
import SearchContainer from './Components/SearchContainer/SearchContainer'
import Results from './Components/Results/Results'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      hasSearched: true,
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

  clearSearch() {
    this.setState({
      hasSearched: false
    })
    console.log("cleared~~~!", this.state.hasSearched);
  }

  render() {
    return (
      <Router>
        <div>
          <div className="navbar">
            <div className="logo-left">
              <div className="logo-nav">

              </div>
              <Link to="/home">SWAPT</Link>
            </div>
            <nav className="nav">
              <Link to={{
                pathname: "/home",
                state: { posts: this.state.posts }
              }}>Home</Link>
              <Link to="/categories">Swap</Link>
              <Link to="/about">About</Link>
              <Link to="/search">Search</Link>
            </nav>
          </div>

          <main className="wrapper">
            <Route
              exact path="/home"
              render={ () => {
                return(
                  <div>
                    <Home />
                  </div>
                )
              }}
            />
            <Route
              exact path="/categories"
              render={ () => {
                return(
                  <div>
                    <Dashboard posts={this.state.posts}/>
                  </div>
                )
              }}
            />
            <Route
              exact path="/about"
              component={About}
            />
            <Route
              exact path="/search"
              render={ () => {
                return(
                  <div>
                    <SearchContainer posts={this.state.posts}
                    clearSearch={() => this.clearSearch()}/>

                  </div>
                )
              }}
            />
            <Route
  path="/results"
  render={() => {
    return(
      <Results
        clearSearch={() => this.clearSearch()}
      />
    )
  }}
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
