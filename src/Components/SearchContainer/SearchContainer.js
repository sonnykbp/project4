import React, { Component } from 'react';
import Search from '../Search/Search.js'
import Results from '../Results/Results.js'


class SearchContainer extends Component {

  constructor(props){
    super(props)

    this.state = {
      hasSearched: false,
      posts: this.props.posts,
      filteredPosts: [],
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
    const posts = this.state.posts
      .map( board => {
        return board.posts.map( post => post.item_name)
      })
      .reduce((a,c)=> [...a, ...c])

    console.log(posts);

    let filteredPosts = posts.filter( post => post.includes(this.state.query.toLowerCase() ))

    this.setState({filteredPosts: filteredPosts})


  }



  handleSearchInput(e){
    this.setState({query: e.target.value})

  }

  render(){
    const toRender = this.state.hasSearched ? <Results posts={this.state.filteredPosts} /> : <Search hasSearched={this.state.query} onSubmitQuery={this.onSubmitQuery}
    handleSearchInput={this.handleSearchInput}/>

    return (
      <div>
        {toRender}
      </div>
    )
  }
}

export default SearchContainer
