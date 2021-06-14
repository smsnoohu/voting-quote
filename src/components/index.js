import React from "react";

import Header from "./header";
import QuoteHeader from "./quotes/QuoteHeader";
import Quote from "./quotes/Quote";

const Quotes = () => {
  return (
    <div id="wrapper">
      <Header />
      <div className="container">
        <QuoteHeader />
        <Quote />
      </div>
    </div>
  );
};

export default Quotes;
