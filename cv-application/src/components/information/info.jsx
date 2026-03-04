import "./info.css";

const GeneralInfo = () => {
  return (
    <div className="generalInfoComponent1">
      <p className="persInfo">Personal Information</p>
      <form>
        <input
          type="text"
          id="name"
          className="personalInf"
          placeholder="Full Name"
        />
        <input
          type="email"
          id="email"
          className="personalInf"
          placeholder="Email Adress"
        />
        <input
          type="tel"
          id="phone"
          className="personalInf"
          placeholder="Phone number"
        />
      </form>
    </div>
  );
};

export default GeneralInfo;
