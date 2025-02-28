import React, { createContext, useState, useContext } from "react";
import useProducts from "./UseProducts"; // Hämtar produkter från API

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchItem, setSearchItem] = useState(""); // Global sökterm
  const [category, setCategory] = useState("All"); // (+) Ny kategori-state
  const { data, error, isLoading } = useProducts(); // Hämtar produkter

  // 🔥 Flyttad filtrering hit
  const filteredProducts = data
    ? data.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchItem.toLowerCase());

        const matchesCategory =
          category === "All" || product.category === category.toLowerCase();
        
          return matchesSearch && matchesCategory;
        })
      : [];

  return (
    <SearchContext.Provider
      value={{
        searchItem,
        setSearchItem,
        filteredProducts,
        allProducts: data,
        error,
        isLoading,
      }}

    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);