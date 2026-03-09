import "./preview.css";

const Preview = ({ generalInfo, education }) => {
  return (
    <div className="previewComponent">
      <p className="livePreview">Live Preview</p>
      <div className="previewContainer">
        <p>{generalInfo.name}</p>
        <p>{generalInfo.email}</p>
        <p>{generalInfo.phone}</p>
      </div>

      <div className="educationPreview">
        <p className="educationTitle">Education</p>
        {education.map((edu, index) => (
          <div className="educationDivs" key={index}>
            <p>{edu.school}</p>
            <p>{edu.degree}</p>
            <p>{edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preview;
