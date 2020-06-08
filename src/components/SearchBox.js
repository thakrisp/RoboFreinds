import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search for a robo friend"
        onChange={searchChange}
        aria-label="Search robots"
      />
    </div>
  );
};

export default SearchBox;
