import React, { Component } from 'react'
import axios from 'axios';

class GetCall extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts : [],
         errMsg : ""
      }
    }
    
    componentDidMount = () => {
      axios.get(`https://jsonplaceholder.typicode.com/posts1`)
      .then( response => {
                this.setState({posts: response.data})
            }
        )
      .catch(error => {
        console.log(error)
        this.setState({errMsg: error.message})
      })
    }
    

  render() {
    const {posts,errMsg} = this.state
    return (
        <>
        List of posts
        <div>
            {
                posts.length ? 
                posts.map(post => <h2 key={post.id}>{post.title}</h2>) :
                errMsg
            }
        </div>
        </>
    )
  }
}

export default GetCall
