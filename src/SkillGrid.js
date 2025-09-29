import React from "react";
import "./SkillGrid.css";

const skills = [
  "Programming",
  "Cyber Tarot Reading",
  "Drawing",
  "Pixel Art",
  "UI & UX Design (30% - currently designing my first app)",
  "Game Design (learning)",
];

export default function SkillGrid() {
  return (
    <div className="skill-grid">
      {skills.map((skill, index) => (
        <div className="skill-block" key={index}>
          {skill}
        </div>
      ))}
    </div>
  );
}
