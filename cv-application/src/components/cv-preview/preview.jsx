import "./preview.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

const Preview = ({ generalInfo, education, experience }) => {
  return (
    <div className="previewComponent">
      <p className="livePreview">Live Preview</p>

      {(generalInfo.name || generalInfo.email || generalInfo.phone) && (
        <div className="generalInfoPreview">
          {generalInfo.name && (
            <p>
              <FontAwesomeIcon icon={faAddressCard} /> {generalInfo.name}
            </p>
          )}
          {generalInfo.email && (
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> {generalInfo.email}
            </p>
          )}
          {generalInfo.phone && (
            <p>
              <FontAwesomeIcon icon={faPhone} /> {generalInfo.phone}
            </p>
          )}
        </div>
      )}

      {education.length > 0 && (
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
      )}

      {experience.length > 0 && (
        <div className="experiencePreview">
          <p className="experienceTitle">Experience</p>
          {experience.map((exp, index) => (
            <div className="educationDivs" key={index}>
              <p>{exp.company}</p>
              <p>{exp.position}</p>
              <p>{exp.responsibilities}</p>
              <p>
                {exp.from} - {exp.to}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Preview;
