import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Post extends Component {
  constructor(props){
    super(props)
    this.state = {
      post: this.props.location.state.type
    }
  }
  render(){
    let singlepost = this.state.post.posts.map((post, indexKey)=>{
      console.log(post);
      return(
        <div key={indexKey}>
          <p>{post.item_name}</p>
          <p>{post.description}</p>
          <p>{post.location}</p>
          <img src={post.image_url} alt="{post.item_name}"/>
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
