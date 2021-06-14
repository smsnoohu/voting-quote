import React, { useContext } from "react";

import { VoteContext } from "../../context/voteProvider";
import { STATUS } from "../../constant/constant";

import "./message.scss";

const Message = () => {
  const {
    quoteState: { status },
  } = useContext(VoteContext);
  return (
    <h3
      className={`message ${status}`}
      aria-live="assertive"
      role="alert"
      aria-atomic="true"
    >
      {status === STATUS.ERROR && (
        <>
          <span aria-hidden="true">&#x26A0;</span>Something went wrong. Please
          try again.
        </>
      )}
      {status === STATUS.EMPTY && (
        <>
          <span aria-hidden="true">&#x0021;</span>No result found. Please try
          again.
        </>
      )}
    </h3>
  );
};

export default Message;
