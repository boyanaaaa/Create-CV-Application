import { useState } from "react";
import "./App.css";
import GeneralInfo from "./components/information/info";
import Education from "./components/education/education";
import WorkInfo from "./components/work/work";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mainContainer">
        <GeneralInfo title="Boyana" text="Dimitrova" />
        <Education />
        <WorkInfo />
      </div>
    </>
  );
}

export default App;
