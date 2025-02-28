import React from "react";
import Input from "./Input";
import ButtonText from "./ButtonText";
import "../stylesheet/searchField.css";
import { useSearch } from "../context/SearchContext"; // Hämtar SearchContext

const SearchField = () => {
  const { setSearchItem } = useSearch(); // Hämta globalt setSearchItem

  const handleChange = (event) => {
    setSearchItem(event.target.value); // Uppdaterar global sökterm
  };

  return (
    <form className="searchField">
      <Input
        type="text"
        placeholder="What are you looking for?"
        onChange={handleChange}
      />
      <ButtonText type="submit" value="" />
    </form>
  );
};

export default SearchField;
