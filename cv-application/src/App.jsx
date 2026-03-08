import { useState } from "react";
import "./App.css";
import GeneralInfo from "./components/information/info";
import Education from "./components/education/education";
import WorkInfo from "./components/work/work";
import Preview from "./components/cv-preview/preview";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <>
      <div className="mainContainer">
        <div className="leftContainer">
          <GeneralInfo data={generalInfo} setData={setGeneralInfo} />
          <Education />
          <WorkInfo />
        </div>
        <div className="rightContainer">
          <Preview generalInfo={generalInfo} />
        </div>
      </div>
    </>
  );
}

export default App;
