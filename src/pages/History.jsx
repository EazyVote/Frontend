import React from "react";
import ShowAllHistory from "../components/details/ShowAllHistory";
import SearchBar from "../components/small/SearchBar";

const History = () => {
  return (
    <div id="history">
      <SearchBar />
      <ShowAllHistory />
    </div>
  );
};

export default History;
