import React, { Component } from 'react';
import {
  NavLink }
from "react-router-dom"
import './Post.css'

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
        <div key={indexKey} >
          <div className="post-box">
          <img className="post-img" src={item.image_url} alt={item.item_name}/>
          <NavLink exact to={{
            pathname: itemroute,
            state: {item: item}
          }}>{item.item_name}</NavLink>
        </div>

        </div>
      )
    })
    return(
      <div>
        <div className="container">{singlepost}</div>


      </div>
    )
  }
}

export default Post
