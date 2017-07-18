import React, { Component } from 'react'

class SinglePost extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: this.props.location.state.item
    }
  }
  render(){
    return(
      <div>
        <h2>{this.state.item.item_name}</h2>
        <p>{this.state.item.description}</p>
        <p>{this.state.item.location}</p>
        <img src={this.state.item.image_url} alt="{this.state.item.item_name}"/>
      </div>
    )
  }
}

export default SinglePost
