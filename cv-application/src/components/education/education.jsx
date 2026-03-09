import { useState } from "react";
import "./education.css";

const Education = ({ data, setData }) => {
  const [form, setForm] = useState({
    school: "",
    degree: "",
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleAddEducation = (e) => {
    e.preventDefault();

    setData([...data, form]);
    setForm({
      school: "",
      degree: "",
      year: "",
    });
  };

  return (
    <div className="educationComponent2">
      <p className="educationP">Education</p>
      <form>
        <input
          name="school"
          type="text"
          className="educationInp"
          placeholder="School Name"
          value={form.school}
          onChange={handleChange}
        />
        <input
          name="degree"
          type="text"
          className="educationInp"
          placeholder="Degree / Fild of Study"
          value={form.degree}
          onChange={handleChange}
        />
        <input
          name="year"
          type="text"
          className="educationInp"
          placeholder="Year ( e.g., 2016-2020)"
          value={form.year}
          onChange={handleChange}
        />
      </form>
      <button className="addEducationBtn" onClick={handleAddEducation}>
        Add Education
      </button>
    </div>
  );
};

export default Education;
