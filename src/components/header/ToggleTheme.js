import React, { useContext } from "react";

import { VoteContext } from "../../context/voteProvider";

const ToggleTheme = () => {
  const {
    quoteActions: { toggleTheme },
  } = useContext(VoteContext);
  return (
    <div className="theme-switch-wrapper">
      <em>Enable Dark Mode!</em>
      <label className="theme-switch" htmlFor="switch">
        <input
          type="checkbox"
          id="switch"
          className="switch"
          onChange={toggleTheme}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
};

export default ToggleTheme;
