import React, { useContext } from "react";

import { VoteContext } from "../../context/voteProvider";
import Message from "../message/Message";
import Loader from "../loader";
import { VOTE } from "../../constant/constant";

import "./quote.scss";

const Quote = () => {
  const {
    quoteState: { isLoading, quotes },
    quoteActions: { castVote },
  } = useContext(VoteContext);

  return (
    <>
      {quotes && quotes.length > 0 && (
        <ul className="quotes">
          {quotes.map((item) => (
            <li key={`vote_${item.id}`}>
              <button
                onClick={() => castVote(item.id, VOTE.UP)}
                aria-label="Up Vote"
              >
                <em aria-hidden="true" className="fa fa-thumbs-up"></em>
              </button>
              <span>{item.vote}</span>
              <button
                onClick={() => castVote(item.id, VOTE.DOWN)}
                aria-label="Down Vote"
              >
                <em aria-hidden="true" className="fa fa-thumbs-down"></em>
              </button>
              <span className="quote">{item.quote}</span>
            </li>
          ))}
        </ul>
      )}
      {quotes && quotes.length === 0 && <Message />}
      {isLoading && <Loader />}
    </>
  );
};

export default Quote;
