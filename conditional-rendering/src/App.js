import { useState } from "react";
import "./App.css";
import LearningReact from "./components/LearningReact.js";
import LearningRedux from "./components/LearningRedux.js";
import NoLearning from "./components/NoLearning.js";

function App() {
  const [isLearningReact, setLearningReact] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        {isLearningReact !== null ? (
          isLearningReact ? (
            <LearningReact />
          ) : (
            <LearningRedux />
          )
        ) : (
          <NoLearning />
        )}
        <button
          className="btn"
          onClick={() => setLearningReact(!isLearningReact)}
        >
          Learn{" "}
          {isLearningReact !== null
            ? isLearningReact
              ? "Redux"
              : "React"
            : "Something"}
        </button>
        <br />
        {isLearningReact && (
          <button
            className="btn"
            onClick={() => {
              if (isLearningReact !== null) {
                setLearningReact(null);
              } else {
                setLearningReact(true);
              }
            }}
          >
            Stop Learning
          </button>
        )}
      </header>
    </div>
  );
}

export default App;
