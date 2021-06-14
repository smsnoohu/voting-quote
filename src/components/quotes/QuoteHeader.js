import React, { useContext } from "react";

import { VoteContext } from "../../context/voteProvider";

import "./quote.scss";

const QuoteHeader = () => {
  const { quoteState } = useContext(VoteContext);

  const { totalCount } = quoteState;
  return (
    <div className="quote-header">
      <h1>
        Ron Swanson Quote Voter <em>"Vote for your favorite group"</em>
      </h1>
      <p>Total Voutes: {totalCount}</p>
    </div>
  );
};

export default QuoteHeader;
