import React from "react";
import ProductCardSmall from "../components/ProductCardSmall";
import FilterButtons from "../components/FilterButtons";

const Home = () => {
  return (
    <>
      <FilterButtons />
      <div>
        <ProductCardSmall />
      </div>
    </>
  );
};

export default Home;
