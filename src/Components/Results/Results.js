import React, { Component } from 'react';
// import Item from '../Item/Item'
class Results extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: this.props.posts
    }
    console.log(props);
  }
  itemList(post){
    return post.posts.map((item, index)=>{
      console.log(item);
      return (
        <div>
          {item.item_name}
        </div>
      )
    })
  }
 render(){
   let results = this.props.posts.map((post, indexKey) => {

       return(
        // <Item key={indexKey} item={this.itemList(post)} />
        <div key={indexKey}>
        <p>{this.itemList(post)}</p>
        </div>
       )
   })
   console.log(results);
   return (
     <div>
       <p><a href="/">Go back to Search</a></p>
       {results}
     </div>
   );
 }
}

export default Results;
