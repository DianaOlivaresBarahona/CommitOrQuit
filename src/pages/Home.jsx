import React from "react";
import ProductCardSmall from "../components/ProductCardSmall";
import FilterButtons from "../components/FilterButtons";
/* import { SearchProvider } from "./context/Search"; // ✅ Lägg till SearchProvider */

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
