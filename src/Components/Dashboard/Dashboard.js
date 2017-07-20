import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import './Dashboard.css'

class Dashboard extends Component {
  render(){
    let posts = this.props.posts.map((post, indexKey)=>{
      let showroute = `/categories/${post.type}`
      return(

        <div  key={indexKey}>
          <div  className="category-img">

            <p><NavLink exact to={{
              pathname: showroute,
              state: {type: post}}}>{post.type}</NavLink></p>

          </div>
        </div>
      )
    })
    return(
      <div className="dashboard">
        <h3>Swapt Categories</h3>
      <div className="container">{posts}</div>
    </div>

    )
  }
}

export default Dashboard
