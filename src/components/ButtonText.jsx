import "../stylesheet/buttonText.css";

const ButtonText = ({ type = "button", onClick, value, icon = "search" }) => {
  return (
    <>
      <button className="buttonText" type={type} onClick={onClick}>
        {value}
        <i data-lucide={icon}></i>
      </button>
    </>
  );
};

export default ButtonText;
