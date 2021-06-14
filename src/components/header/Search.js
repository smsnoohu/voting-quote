import React, { useContext } from "react";

import { VoteContext } from "../../context/voteProvider";

const Search = () => {
  const {
    quoteActions: { updateSearchTerm },
  } = useContext(VoteContext);
  return (
    <fieldset className="field">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Enter term to search..."
        autoComplete="off"
        onChange={updateSearchTerm}
      />
      <label htmlFor="search">Search quote</label>
    </fieldset>
  );
};

export default Search;
