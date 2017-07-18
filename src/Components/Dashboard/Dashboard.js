import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Dashboard extends Component {
  render(){
    let posts = this.props.posts.map((post, indexKey)=>{
      let showroute = `/categories/${post.type}`
      return(

        <div key={indexKey}>
          <p><Link to={{
            pathname: showroute,
            state: {type: post}
          }}>{post.type}</Link></p>
        </div>
      )
    })
    return(
      <div>{posts}</div>
    )
  }
}

export default Dashboard
