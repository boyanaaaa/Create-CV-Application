import "./education.css";

const Education = () => {
  return (
    <div className="educationComponent2">
      <p className="educationP">Education</p>
      <form>
        <input type="text" className="educationInp" placeholder="School Name" />
        <input
          type="text"
          className="educationInp"
          placeholder="Degree / Fild of Study"
        />
        <input
          type="text"
          className="educationInp"
          placeholder="Year ( e.g., 2016-2020)"
        />
      </form>
      <button className="addEducationBtn">Add Education</button>
    </div>
  );
};

export default Education;
