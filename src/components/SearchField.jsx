import Input from "./Input";
import React, { useState } from "react";

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
      <form onSubmit={handleSubmit}>
        <Input
          name="Search"
          label="Search"
          type="text"
          placeholder="What are you looking for? "
          onChange={handleChange}
        ></Input>
        <button type="submit"></button>
      </form>
    </>
  );
};

export default SearchField;
