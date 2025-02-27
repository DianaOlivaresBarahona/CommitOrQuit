import React from "react";
import ProductCardSmall from "../components/ProductCardSmall";
import { SearchProvider } from "./context/Search"; // ✅ Lägg till SearchProvider

const Home = () => {
  return (
    <div>
      <SearchProvider>
        <ProductCardSmall />
      </SearchProvider>
    </div>
  );
};

export default Home;
