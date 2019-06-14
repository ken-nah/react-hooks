import React, { useState } from "react";

import Joke from "./Joke";
import Stories from "./Stories";
import Tasks from "./Task";
import Gallery from "./Gallery";
import Matrix from './Matrix'

function App() {
  const [userQuery, setUserQuery] = useState("");
  const [showGallery, setShowGallery] = useState(true);

  const updateSearchQuery = event => {
    setUserQuery(event.target.value);
  };

  const searchQuery = () => {
    window.open(`https://google.com/search?query=${userQuery}`, "_blank");
  };

  const handleKeyPress = event => {
    if (event.key === "Enter") searchQuery();
  };

  const toggleGallery = () => {
    setShowGallery(!showGallery);
  };

  return (
    <div className="App">
      <h1>Hello Kennah!</h1>
      <div className="form">
        <input
          type="text"
          onChange={updateSearchQuery}
          onKeyDown={handleKeyPress}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr />
      <div>
        {showGallery ? <Gallery /> : null}
        <button onClick={toggleGallery}>
          {showGallery ? "Hide" : "Show"} Gallery
        </button>
      </div>
      <Stories />
      <hr />
      <Matrix />
    </div>
  );
}

export default App;
