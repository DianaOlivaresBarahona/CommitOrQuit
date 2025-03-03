import "../stylesheet/addCartBtn.css";

const AddCartBtn = ({ onClick }) => {
  return (
    <button className="add-to-cart-button" onClick={onClick}>
      Add to Cart
    </button>
  );
};

export default AddCartBtn;
