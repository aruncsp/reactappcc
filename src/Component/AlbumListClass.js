import React, { Component } from "react";

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/albums`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("An error occurred");
        }
        return response.json();
      })
      .then((data) => this.setState({ albums: data, isLoading: false }))
      .catch((error) =>
        this.setState({ error: error.message, isLoading: false })
      );
  }

  render() {
    const { albums, isLoading, error } = this.state;
    if (isLoading) return <h2>Loading data...</h2>;
    if (error) return <h2>Error: {error}</h2>;
    return (
      <div>
        <h1>Albums</h1>
        <ul>
          {albums.map((album) => (
            <li key={album.id}>{album.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AlbumList;
