import React, { useState } from "react";
import Input from "./input";
import ButtonText from "./ButtonText";
import "../stylesheet/searchField.css";
import { useSearch } from "../context/SearchContext";

const SearchField = () => {
  const { setSearchItem } = useSearch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchTerm.trim() !== "") {
      setSearchItem(searchTerm);
    }
  };
  return (
    <form className="searchField" onSubmit={handleSearch}>
      <Input
        type="text"
        placeholder="What are you looking for?"
        onChange={handleChange}
        value={searchTerm}
      />
      <ButtonText type="submit" value="" icon="search" />
    </form>
  );
};
export default SearchField;
