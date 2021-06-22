import React from "react";

// Mono-Repo Architecture
// Use relative path to access components between different projects
//
// import LearningReact from '../../../conditional-rendering/src/components/LearningReact'

export default function LearnList(props) {
  // Use props to pass data between components
  const learnThis = props.learnThis;

  return (
    <ul>
      {/* Avoid using index as key to avoid any side effects */}
      {learnThis.map((tech) => (
        <li key={tech.id}>{tech.value}</li>
      ))}
    </ul>
  );
}
