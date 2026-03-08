import "./info.css";

const GeneralInfo = ({ data, setData }) => {
  return (
    <div className="generalInfoComponent1">
      <p className="persInfo">Personal Information</p>
      <form>
        <input
          type="text"
          id="name"
          className="personalInf"
          placeholder="Full Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          type="email"
          id="email"
          className="personalInf"
          placeholder="Email Adress"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          type="tel"
          id="phone"
          className="personalInf"
          placeholder="Phone number"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />
      </form>
    </div>
  );
};

export default GeneralInfo;
