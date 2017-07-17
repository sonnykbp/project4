import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Dashboard extends Component {
  render(){
    return(
      <p>{this.props.posts}</p>
    )
  }
}

export default Dashboard
