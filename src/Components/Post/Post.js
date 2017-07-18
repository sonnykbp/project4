import React, { Component } from 'react';
import {
  Link,
  Route }
from "react-router-dom"
import SinglePost from '../SinglePost/SinglePost'

class Post extends Component {
  constructor(props){
    super(props)
    this.state = {
      post: this.props.location.state.type
    }
  }
  render(){
    let singlepost = this.state.post.posts.map((item, indexKey)=>{
      let itemroute = `/categories/${this.state.post.type}/${item.item_name}`
      return(
        <div key={indexKey}>
          <Link to={{
            pathname: itemroute,
            state: {item: item}
          }}>{item.item_name}</Link>

        </div>
      )
    })
    return(
      <div>
        {singlepost}

      </div>
    )
  }
}

export default Post
