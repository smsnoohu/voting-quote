import React, { useContext } from "react";

import { VoteContext } from "../../context/voteProvider";

const ResultCount = () => {
  const {
    quoteState: {
      searchTerms: { search },
    },
    quoteActions: { updateSearchTerm },
  } = useContext(VoteContext);
  return (
    <>
      <select
        name="resultCount"
        id="resultCount"
        onChange={updateSearchTerm}
        disabled={search}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
      </select>
    </>
  );
};

export default ResultCount;
