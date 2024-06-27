import React from "react";
import ShowAllElection from "../components/details/ShowAllElection";
import SearchBar from "../components/small/SearchBar";

const Elections = () => {
  return (
    <div id="elections">
      <SearchBar />
      <ShowAllElection />
    </div>
  );
};

export default Elections;
