import React, { useState, useEffect, useRef } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Photos() {
  const [photos, setPhotos] = useState();
const navigate = useNavigate();
  const io = useRef(null);
  async function getAPI() {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const jsonData = await response.json();
    setPhotos(jsonData);
  }

  function handleClick(id) {
    navigate("/pic/",{ state: { id: id } });
  }

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <div>
      <ul>
        {photos ? (
          photos.slice(0, 10).map(photo =>
            <li key={photo.id}>
              <img src={photo.thumbnailUrl} />
              <button onClick={() => handleClick(photo.id)}>12312</button>
            </li>
          )
        ) : (
          <h1>loading</h1>
        )}
      </ul>
    </div>
  );
}
