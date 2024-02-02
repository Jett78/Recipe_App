import React from "react";


const Search = ({handleSearch}) => {
  return (
    <main>
      <div className="search-container">
        <div className="search-bar">
          <input onChange={handleSearch}  type="text" placeholder="search" />
         

        </div>
      </div>
    </main>
  );
};

export default Search;





