import React, { Component } from 'react';
import { NavLink } from "react-router-dom"

class Dashboard extends Component {
  render(){
    let posts = this.props.posts.map((post, indexKey)=>{
      let showroute = `/categories/${post.type}`
      return(

        <div key={indexKey}>
          <p><NavLink exact to={{
            pathname: showroute,
            state: {type: post}
          }}>{post.type}</NavLink></p>
        </div>
      )
    })
    return(

      <div>{posts}</div>

    )
  }
}

export default Dashboard
