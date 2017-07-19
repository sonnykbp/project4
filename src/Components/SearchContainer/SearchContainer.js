import React, { Component } from 'react';
import Search from '../Search/Search.js'
import Results from '../Results/Results.js'


class SearchContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      hasSearched: false,
      posts: this.props.posts,
      query: ''
    }
    //preserve context(parent scope) of SearchContainer and handleSearchInput
    this.onSubmitQuery = this.onSubmitQuery.bind(this)
    this.handleSearchInput = this.handleSearchInput.bind(this)
  }
  //switch hasSearched to true
  onSubmitQuery(e){
    e.preventDefault()
    this.setState({hasSearched: true})
  }

  handleSearchInput(e){
    console.log(this.state.query)
    this.setState({query: e.target.value})

  }

  render(){
    const toRender = this.state.hasSearched ? <Results posts={this.state.posts} /> : <Search hasSearched={this.state.query} onSubmitQuery={this.onSubmitQuery}
    handleSearchInput={this.handleSearchInput}/>

    return (
      <div>
        {toRender}
      </div>
    )
  }
}

export default SearchContainer
