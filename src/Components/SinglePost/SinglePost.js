import React, { Component } from 'react'
import './SinglePost.css'

class SinglePost extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: this.props.location.state.item
    }
  }
  render(){
    return(
      <div className="item">
        <div>
          <div>
          <h3>{this.state.item.item_name}</h3>
          <ul>
            <li><em>DESCRIPTION:</em> {this.state.item.description}</li>
            <li><em>LOCATION:</em> {this.state.item.location}</li>
          </ul>
          <a href="mailto:inquery@swapt.com">Swap This!</a>
        </div>

          <div>
          <img className="item-img" src={this.state.item.image_url} alt="{this.state.item.item_name}"/>
        </div>
        </div>
      </div>
    )
  }
}

export default SinglePost
