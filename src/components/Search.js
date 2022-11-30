import React from "react";

function Search({ onSearchQuery, onChangeSearch }) {
  function handleChange(e) {
    onChangeSearch(e.target.value);
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          onChange={handleChange}
          value={onSearchQuery}
          className="prompt"
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
