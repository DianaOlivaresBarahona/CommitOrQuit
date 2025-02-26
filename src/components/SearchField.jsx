import Input from "./Input";
import React, { useState } from "react";
import "../stylesheet/searchField.css";
import ButtonText from "./ButtonText";

const SearchField = () => {
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
      <form className="searchField" onSubmit={handleSubmit}>
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

export default SearchField;
