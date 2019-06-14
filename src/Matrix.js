import React, { useState, useEffect } from "react";
import MATRIX_PICTURES from "./data/matrix";

const MIN_DELAY = 10;
const MIN_INCREMENT = 1;

function Matrix() {
  const [index, setIndex] = useState(0);
  const [increment, setIncrement] = useState(MIN_INCREMENT);
  const [delay, setDelay] = useState(MIN_DELAY);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(
        storedIndex => (storedIndex + increment) % MATRIX_PICTURES.length
      );
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [delay, increment]);

  const updateDelay = event => {
    const delay = Number(event.target.value);
    setDelay(delay < MIN_DELAY ? MIN_DELAY : delay);
  };
  const updateIncrement = event => {
    const increment = Number(event.target.value);
    setIncrement(increment < MIN_INCREMENT ? MIN_INCREMENT : increment);
  };

  return (
    <div className="Matrix">
      <img src={MATRIX_PICTURES[index]} alt="matrix pictures" />

      <div className="multiform">
        <div>
          Frames Delay (seconds) :
          <input type="number" min="1" onChange={updateDelay} />
        </div>
        <div>
          Frame Increment
          <input type="number" min="1" onChange={updateIncrement} />
        </div>
      </div>
    </div>
  );
}

export default Matrix;
