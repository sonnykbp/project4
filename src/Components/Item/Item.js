import React, { Component } from 'react';

export default class Item extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: this.props.item
    }
    console.log(this.state.item)
  }
  render(){
    return(
      <div>
        <p>{this.state.item}</p>
      </div>

    )
  }
}
