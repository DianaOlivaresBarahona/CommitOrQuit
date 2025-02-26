import "../stylesheet/buttonText.css";

const ButtonText = ({ type, onClick, value }) => {
  return (
    <>
      <button className="buttonText" type={type} onClick={onClick}>
        {value}
      </button>
    </>
  );
};

export default ButtonText;
