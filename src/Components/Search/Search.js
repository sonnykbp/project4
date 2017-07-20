import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
  render(){
    return(
      <div className="search">
        <h3>Search Items</h3>
        <form onSubmit={this.props.onSubmitQuery}>
          <input type="text" placeholder="search items" onChange={this.props.handleSearchInput}></input>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default Search
