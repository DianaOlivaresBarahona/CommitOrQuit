/* import Input from "./Input";
import React, { useState } from "react";
import "../stylesheet/searchField.css";
import ButtonText from "./ButtonText";
import useProducts from "../context/UseProducts"; */

/* const SearchField = () => {
  const [searchItem, setSearchItem] = useState("");

  const handleChange = (event) => {
    setSearchItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching for ${searchItem}...`);
  };

  return (
    <>
      <form classInputName="searchField" onSubmit={handleSubmit}>
        <Input
          name="Search"
          type="text"
          placeholder="What are you looking for? "
          onChange={handleChange}
        ></Input>
        <ButtonText type="submit" value="Search" />
      </form>
    </>
  );
};

export default SearchField; */

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
      <ButtonText type="submit" value="Search" />
    </form>
  );
};

export default SearchField;
