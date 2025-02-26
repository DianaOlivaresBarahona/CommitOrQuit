import "../stylesheet/input.css";

const Input = ({ label, name, type, placeholder, onChange }) => {
  return (
    <>
      <div className="inputField">
        <label>{label}</label>
        <input
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
