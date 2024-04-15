import React, { Component } from "react";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    function fetchData() {
      try {
        this.setState({ isLoading: true });
        const response = fetch(`https://jsonplaceholder.org/posts`);
        this.setState({ posts: response, isLoading: false });
      } catch (error) {
        this.setState((this.error = error));
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }

  render() {
    const [posts, isLoading, error] = this.state;
    return (
      <>
        {isLoading ? (
          "Loading posts..."
        ) : error ? (
          error
        ) : (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default PostList;
