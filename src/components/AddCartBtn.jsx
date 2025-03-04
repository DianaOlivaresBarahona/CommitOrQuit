import React, { useState } from "react";
import "../stylesheet/addCartBtn.css";

const AddCartBtn = ({ onClick }) => {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    onClick();
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button className={`add-to-cart-button ${added ? "added" : ""}`} onClick={handleClick}>
      {added ? "Added!" : "Add to Cart"}
    </button>
  );
};

export default AddCartBtn;
