import React, { useState } from "react";
import ShowAllElection from "../components/details/ShowAllElection";
import SearchBar from "../components/small/SearchBar";
import { elections } from "../services/ContentList";

const Elections = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const filteredElections = elections.filter((election) =>
    election.electionTitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div id="elections">
      <SearchBar query={query} handleSearch={handleSearch} />
      <ShowAllElection elections={filteredElections} />
    </div>
  );
};

export default Elections;
