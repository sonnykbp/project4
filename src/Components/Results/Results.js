import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './Results.css'
// import Search from '../Search/Search'
class Results extends Component {
  componentDidMount() {
    console.log(this, "mounted");
    this.props.clearSearch()
  }
  render(){
    let results = this.props.posts.map((post, indexKey) => {

      return(
        // <Item key={indexKey} item={this.itemList(post)} />
        <div key={indexKey}>
          <p>{post}</p>
        </div>
      )
    })
    console.log(results);
    return (
      <div>
        <p><NavLink exact to="/search">Go back to Search</NavLink></p>
        {results}
      </div>
    );
  }
}

export default Results;
