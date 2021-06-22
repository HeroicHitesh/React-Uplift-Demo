import React from "react";

export default function LearnList() {
  const learnThis = [
    "HTML/CSS/JS",
    "React (currently learning)",
    "Redux",
    "GraphQL",
    "Progressive Web Apps (PWAs)",
    "React Native (for app dev)",
  ];
  return (
    <ul>
      {learnThis.map((tech, index) => (
        <li key={index}>{tech}</li>
      ))}
    </ul>
  );
}
