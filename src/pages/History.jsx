import React, { useState } from "react";
import ShowAllHistory from "../components/details/ShowAllHistory";
import SearchBar from "../components/small/SearchBar";
import { history } from "../services/ContentList";

const History = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const filteredElections = history.filter((history) =>
    history.electionTitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div id="history">
      <SearchBar query={query} handleSearch={handleSearch} message={"Search history..."} />
      <ShowAllHistory history={filteredElections} />
    </div>
  );
};

export default History;
