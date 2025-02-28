import React, { createContext, useState, useContext } from "react";
import useProducts from "./UseProducts"; // Hämtar produkter från API

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchItem, setSearchItem] = useState(""); // Global sökterm
  const { data, error, isLoading } = useProducts(); // Hämtar produkter

  // 🔥 Flyttad filtrering hit
  const filteredProducts = data
    ? data.filter((product) =>
        product.title.toLowerCase().includes(searchItem.toLowerCase())
      )
    : [];

  return (
    <SearchContext.Provider
      value={{ searchItem, setSearchItem, filteredProducts, error, isLoading }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
