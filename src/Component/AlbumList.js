import React, { useState, useEffect } from "react";

function AlbumList() {
  let [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums`
        );
        const jsonData = await response.json();
        setAlbums(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <h2>Loading albums...</h2>
      ) : (
        <ul>
          {albums.map((album) => (
            <li key={album.id}>{album.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default AlbumList;
