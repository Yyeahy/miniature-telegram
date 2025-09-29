import React from "react";
import "./Fridge.css";
import FridgeBio from "./FridgeBio";
import SkillGrid from "./SkillGrid";

function Fridge({ animate }) {
  // const skill = ["Programming", "Art", "Cyber Tarot"];
  // const listSkill = skill.map((ability, i) => <li key={i}>{ability}</li>);
  //console.log("animate:", animate);
  //console.log("skill:", skill);

  return (
    <div className="fridge-container">
      {animate && (
        <div className="fridge-box animate">
          <div className={`fridge-inside ${animate ? "show" : ""}`}>
            <div className="fridge-grid-horizontal">
              <div className="bio-card-wild">
                <FridgeBio />
              </div>
              <div className="skill-row">
                <SkillGrid />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Fridge;
