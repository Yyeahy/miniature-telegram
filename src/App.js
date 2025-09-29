import "./App.css";
import React, { useState, useEffect } from "react";
import Fridge from "./Fridge";
import HeartCounter from "./HeartCounter";
import FridgeDoor from "./components/FridgeDoor/FridgeDoor";

function App() {
  const [entered, setEntered] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [doorOpen, setDoorOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showHeart, setShowHeart] = useState(false);

  const handleDoorOpen = () => {
    setDoorOpen(true);
    setTimeout(() => setShowHeart(true), 1000);
  };

  useEffect(() => {
    if (entered) {
      const timer = requestAnimationFrame(() => {
        setAnimate(true);
      });
      return () => cancelAnimationFrame(timer);
    }
  }, [entered]);

  return (
    <div className="App">
      {!entered ? (
        <>
          <h1 className="glow-title">
            Where code becomes a mirror, <br />
            and games become memories.
          </h1>
          <button className="enter-button" onClick={() => setEntered(true)}>
            ENTER THE MIRROR
          </button>
        </>
      ) : (
        <>
          <Fridge animate={animate} />
          {showHeart && <HeartCounter />}
          <div className="contact-section">
              📮 Contact me: <a href="mailto:yeyicyva@gmail.com">yeyicyva@gmail.com</a>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
