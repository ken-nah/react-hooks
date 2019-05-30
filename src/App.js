import React, { useState } from "react";

import Joke from './Joke'

function App() {
  const [userQuery, setUserQuery] = useState("");

  const updateSearchQuery = event => {
    setUserQuery(event.target.value);
  };

  const searchQuery = () => {
    window.open(
      `https://google.com/search?query=${userQuery}`,
      "_blank"
    );
  };

  const handleKeyPress = event => {
    if (event.key === "Enter") searchQuery();
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
      <hr/>
      <Joke />
    </div>
  );
}

export default App;
