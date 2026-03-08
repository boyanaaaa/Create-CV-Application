import "./preview.css";

const Preview = ({ generalInfo }) => {
  return (
    <div className="previewComponent">
      <p className="livePreview">Live Preview</p>
      <div className="previewContainer">
        <p>{generalInfo.name}</p>
        <p>{generalInfo.email}</p>
        <p>{generalInfo.phone}</p>
      </div>
    </div>
  );
};

export default Preview;
