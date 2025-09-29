import React, { useState } from "react";
import "./HeartCounter.css";

function HeartCounter() {
  const [clickCount, setClickCount] = useState(0);
  const fullHearts = Math.floor(clickCount / 8);
  const totalHearts = fullHearts + 1;

  return (
    <div className="heart-counter">
      {Array.from({ length: totalHearts }).map((_, i) => {
        const isFull = i < fullHearts;
        return (
          <span
            key={i}
            className={`heart ${isFull ? "full" : "empty"}`}
            onClick={() => setClickCount(clickCount + 1)}
          >
            {isFull ? "♥" : "♡"}
          </span>
        );
      })}

      <p style={{ marginTop: "10px" }}>Clicks: {clickCount}</p>
    </div>
  );
}

export default HeartCounter;
