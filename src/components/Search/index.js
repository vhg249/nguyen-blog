import React, { useState } from "react";
import { SearchWrapper } from "./style";

const Search = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <SearchWrapper show={show}>
        <img
          className="search-icon"
          src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
          onClick={() => setShow(true)}
        />
        {show && (
          <>
            <input type="text" placeholder="Search" />
            <img
              src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png"
              onClick={() => setShow(false)}
            />
          </>
        )}
      </SearchWrapper>
    </>
  );
};

export default Search;
