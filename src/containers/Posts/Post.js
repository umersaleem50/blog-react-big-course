import React, { Component } from "react";
import axios from "./../../axios";
import Post from "../../components/Post/Post";
import "./Post.css";
class Posts extends Component {
  state = {
    posts: [],
    selectedPost: null,
    error: false,
  };

  posts = (<p style={{ textAlign: "center" }}>Something went wrong!</p>);

  componentDidMount() {
    console.log(this.props);

    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPost = posts.map((post) => {
          return {
            ...post,
            author: "Max",
          };
        });
        this.setState({ posts: updatedPost });
      })
      .catch((error) => this.setState({ error: true }));
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPost: id });
  };

  render() {
    if (!this.state.error) {
      this.posts = this.state.posts.map((post) => (
        <Post
          title={post.title}
          key={post.id}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}
        />
      ));
    }

    return <section className="Posts">{this.posts}</section>;
  }
}

export default Posts;
