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
import { useSearch } from "../context/SearchContext";

const SearchField = () => {
  const { setSearchItem } = useSearch(); //Nu hämtas setSearchItem från Context

  const handleChange = (event) => {
    setSearchItem(event.target.value); // Uppdaterar Context direkt
  };

  return (
    <form className="searchField">
      <Input
        name="Search"
        type="text"
        placeholder="What are you looking for?"
        onChange={handleChange}
      />
      <ButtonText type="submit" value="Search" />
    </form>
  );
};

export default SearchField;
