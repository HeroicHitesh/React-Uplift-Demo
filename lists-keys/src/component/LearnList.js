import React from "react";

export default function LearnList(props) {
  // Use props to pass data between components
  const learnThis = props.learnThis;

  // const learnThis = [
  //   "HTML/CSS/JS",
  //   "React (currently learning)",
  //   "Redux",
  //   "GraphQL",
  //   "Progressive Web Apps (PWAs)",
  //   "React Native (for app dev)",
  // ];
  // const learnThis = [
  //   { id: 1, value: "HTML/CSS/JS" },
  //   { id: 2, value: "React (currently learning)" },
  //   { id: 3, value: "Redux" },
  //   { id: 4, value: "GraphQL" },
  //   { id: 5, value: "Progressive Web Apps (PWAs)" },
  //   { id: 6, value: "React Native (for app dev)" },
  // ];

  return (
    <ul>
      {/* Avoid using index as key to avoid any side effects */}
      {learnThis.map((tech) => (
        <li key={tech.id}>{tech.value}</li>
      ))}
    </ul>
  );
}
