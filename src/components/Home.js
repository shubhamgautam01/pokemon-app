import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Field from './Field.jsx';

class Home extends Component{

  state = {
    posts: [ ]
  }

  componentDidMount(){
    axios.get(`https://jsonplaceholder.typicode.com/posts/`)
    .then( res=> {
      console.log(res);
      this.setState({
        posts: res.data.slice(0, 10)
      })
    })
  }
  

  render() {
    const {posts} = this.state;
    const postLists = posts.length ? ( 
      posts.map( post =>{
        return(
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={'/' + post.id} >
                <span className="card-title"> {post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )  
      })
    ) : ( 
        <div className="center"> No Posts yet.</div>
    )
    return(
      <div className="container">
        <h4 className="center">Home</h4>
        {postLists}
      <Field/>
      </div>
    )
  }
}

export default Home;
