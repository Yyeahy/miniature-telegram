import React from "react";
import "./FridgeDoor.css";

function FridgeDoor({ isOpen, onOpen }) {
  const doorClass = `fridge-door ${isOpen ? "open hidden" : "closed"}`;

  return (
    <div className="fridge-door-wrapper">
      <div className={doorClass} onClick={onOpen}>
        <span className="handle" />
      </div>
    </div>
  );
}

export default FridgeDoor;
