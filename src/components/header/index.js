import React from "react";

import ResultCount from "./ResultCount";
import Search from "./Search";
import ToggleTheme from "./ToggleTheme";

import "./filter.scss";

const Header = () => (
  <fieldset
    className="filter-wrapper"
    role="search"
    aria-label="Search Quote from Ron Swanson Quote API"
  >
    <Search />
    <ResultCount />
    <ToggleTheme />
  </fieldset>
);

export default Header;
