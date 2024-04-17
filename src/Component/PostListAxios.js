import React, { useState, useEffect } from "react";
import axios from "axios";

function PostListAxios() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`
        );
        const data = await response.data;
        setLoading(false);
        setPosts(data);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError("An error occurred");
      }
    };
    getData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <h1>Post List Axios</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostListAxios;
