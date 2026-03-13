import { useState } from "react";
import "./work.css";

const WorkInfo = ({ data, setData }) => {
  const [form, setForm] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    to: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleAddExperience = (e) => {
    e.preventDefault();

    setData([...data, form]);
    setForm({
      company: "",
      position: "",
      responsibilities: "",
      from: "",
      to: "",
    });
  };

  return (
    <div className="generalInfoComponent3">
      <p className="expP">Experience</p>

      <input
        name="company"
        type="text"
        id=""
        className="workInp"
        placeholder="Company Name"
        value={form.company}
        onChange={handleChange}
      />

      <input
        name="position"
        type="text"
        id=""
        className="workInp"
        placeholder="Position Title"
        value={form.position}
        onChange={handleChange}
      />
      <input
        name="responsibilities"
        type="text"
        id=""
        className="workInp"
        placeholder="Key Responsibilities"
        value={form.responsibilities}
        onChange={handleChange}
      />
      <div className="workYears">
        <input
          name="from"
          type="text"
          className="workYearsInp"
          placeholder="From (e.g., Jan 2016"
          value={form.from}
          onChange={handleChange}
        />
        <input
          name="to"
          type="text"
          className="workYearsInp"
          placeholder="To (e.g., Present"
          value={form.to}
          onChange={handleChange}
        />
      </div>
      <button className="addExperienceBtn" onClick={handleAddExperience}>
        Add Experience
      </button>
    </div>
  );
};

export default WorkInfo;
