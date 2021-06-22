import LearnList from "./component/LearnList.js";
import "./App.css";

function App() {
  // Hard-coded data in const array. In real-world scenarios mostly an API endpoint will be used to fetch data
  const learnThis = [
    { id: 1, value: "HTML/CSS/JS" },
    { id: 2, value: "React (currently learning)" },
    { id: 3, value: "Redux" },
    { id: 4, value: "GraphQL" },
    { id: 5, value: "Progressive Web Apps (PWAs)" },
    { id: 6, value: "React Native (for app dev)" },
  ];
  return (
    <header className="App-header">
      <LearnList learnThis={learnThis} />
    </header>
  );
}

export default App;
