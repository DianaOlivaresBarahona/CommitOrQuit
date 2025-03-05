import React, { createContext, useState, useContext } from "react";
import useProducts from "./UseProducts";
import useLocalStorage from "../../hook/useLocalStorage";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchItem, setSearchItem] = useState("");
  const [category, setCategory] = useState("All");
  const { data, error, isLoading } = useProducts();

  const [favorites, setFavorites] = useLocalStorage("favorites", []);

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

  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) =>
      prevFavorites.some((fav) => fav.id === product.id)
        ? prevFavorites.filter((fav) => fav.id !== product.id)
        : [...prevFavorites, product]
    );
  };

  return (
    <SearchContext.Provider
      value={{
        searchItem,
        setSearchItem,
        category,
        setCategory,
        filteredProducts,
        allProducts: data,
        favorites,
        toggleFavorite,
        error,
        isLoading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
