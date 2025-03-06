import "../stylesheet/inputField.css";

const Input = ({
  label,
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  icon,
}) => {
  return (
    <>
      <div>
        <label>{label}</label>
        <input
          className={className}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          icon={icon}
        />
      </div>
    </>
  );
};

export default Input;
