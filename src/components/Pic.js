import React, { useState, useEffect, useRef } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';

export default function Pic(props) {
  const [pic, setPic] = useState();
  // const io = useRef(null);
  // async function getAPI() {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  //   const jsonData = await response.json();
  //   setPhotos(jsonData);
  // }
  async function getAPI() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${state.id}`);
    const jsonData = await response.json();
    setPic(jsonData);
    console.log('jigar jsonData', jsonData)
  }
  const {state} = useLocation();
  const { id, color } = state;
  useEffect(() => {
    getAPI();
  }, []);

  return (
    <div>
      {pic ? (
        <>
          <p>PIC : {pic.title}</p>
          <img src={pic.url} />
        </>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
}
