import React, { Component } from 'react';

class Results extends Component {
 render() {
   const results = this.props.posts.map((post, indexKey) => {
     return (
       <div key={indexKey}>
         <img src= {post.image} alt={post.name} />
         <p>{post.name}</p>
       </div>
     )
   })
   return (
     <div>
       <p><a href="/">Go back to Search</a></p>
       {results}
     </div>
   );
 }
}

export default Results;
