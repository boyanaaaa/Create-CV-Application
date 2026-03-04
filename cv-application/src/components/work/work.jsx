import "./work.css";

const WorkInfo = () => {
  return (
    <div className="generalInfoComponent3">
      <p className="exp">Experience</p>

      <input type="text" id="" className="workInp" placeholder="Company Name" />
      <input
        type="text"
        id=""
        className="workInp"
        placeholder="Position Title"
      />
      <input
        type="text"
        id=""
        className="workInp"
        placeholder="Key Responsibilities"
      />
      <div className="workYears">
        <input
          type="text"
          className="workYearsInp"
          placeholder="From (e.g., Jan 2016"
        />
        <input
          type="text"
          className="workYearsInp"
          placeholder="To (e.g., Present"
        />
      </div>
      <button className="addExperienceBtn">Add Experience</button>
    </div>
  );
};

export default WorkInfo;
