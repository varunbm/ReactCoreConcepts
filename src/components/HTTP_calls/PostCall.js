import axios from "axios";
import React, { Component } from "react";

class PostCall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
      post: [],
      errMsg: ""
    };
  }

  componentDidMount = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
            console.log(res.data)
            this.setState({post: res.data})
        })
        .catch(err => {
            console.log(err)
        })
  }
  
  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  submitHandler = (e) => {
    e.preventDefault();
    const {userId, title, body, post} = this.state;
    const payload = {userId: userId, title: title, body: body};
    axios.post(`https://jsonplaceholder.typicode.com/posts`,payload)
        .then(res => {
            console.log(res)
            this.setState({post : [res.data, ...this.state.post]})
        })
        .catch(err => {
            console.log(err)
        })
  }

  render() {
    const { userId, title, body, post } = this.state;
    return (
    <>
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <label htmlFor="userId">UserID</label>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            />
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
            <label htmlFor="body">Body</label>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        {
            post.map(x => {
                return <h1 key={x.id}>{x.title}</h1>
            })
        }
      </div>
    </>
    );
  }
}

export default PostCall;
