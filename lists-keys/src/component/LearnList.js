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
      {learnThis.map((tech) => (
        <li>{tech}</li>
      ))}
    </ul>
  );
}
