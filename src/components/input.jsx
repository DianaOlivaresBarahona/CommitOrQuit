import "../stylesheet/input.css";

const Input = ({ label, name, type, placeholder, onChange }) => {
  return (
    <>
      <div>
        <label>{label}</label>
        <input
          className="inputField"
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Input;
