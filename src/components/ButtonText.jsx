import "../stylesheet/buttonText.css";

const ButtonText = ({ type, onClick, value }) => {
  return (
    <>
      <button className="buttonText" type={type} onClick={onClick}>
        {value}
        <i data-lucide="search"></i>
      </button>
    </>
  );
};

export default ButtonText;
