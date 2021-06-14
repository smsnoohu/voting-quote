import React, { createContext } from "react";

export const VoteContext = createContext();

const VoteContextProvider = (props) => {
  return (
    <VoteContext.Provider value={{ ...props }}>
      {props.children}
    </VoteContext.Provider>
  );
};

export default VoteContextProvider;
