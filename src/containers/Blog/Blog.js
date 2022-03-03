import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import NewPost from "../NewPost/NewPost";
import Posts from "../Posts/Post";
import "./Blog.css";
// import { post } from "got";

class Blog extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="Navi">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/new-posts",
                    search: "?isWorking=true",
                    hash: "#search",
                  }}
                >
                  New Post
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Posts /> */}

        <Route path="/" exact component={Posts} />
        <Route path="/new-posts" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
