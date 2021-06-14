import React from "react";

import VoteContextProvider from "./context/voteProvider";
import useQuote from "./hooks/useQuote";

import Quotes from "./components";

function App() {
  const { quoteState, quoteActions } = useQuote();
  return (
    <VoteContextProvider quoteState={quoteState} quoteActions={quoteActions}>
      <Quotes />
    </VoteContextProvider>
  );
}

export default App;
