import { useState } from "react";
import "./App.css";
import GeneralInfo from "./components/information/info";
import Education from "./components/education/education";
import WorkInfo from "./components/work/work";
import Preview from "./components/cv-preview/preview";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mainContainer">
        <div className="leftContainer">
          <GeneralInfo title="Boyana" text="Dimitrova" />
          <Education />
          <WorkInfo />
        </div>
        <div className="rightContainer">
          <Preview />
        </div>
      </div>
    </>
  );
}

export default App;
