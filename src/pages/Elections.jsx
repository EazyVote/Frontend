import React, { useEffect, useState } from "react";
import ShowAllElection from "../components/details/ShowAllElection";
import SearchBar from "../components/small/SearchBar";
import { useGlobalState } from "../services/Helper";
import { loadElections } from "../services/Blockchain";

const Elections = () => {
  const [query, setQuery] = useState("");
  const [elections, setElections] = useGlobalState("elections");
  const [filteredElections, setFilteredElections] = useState([]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      loadElections();
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (elections) {
      const filtered = elections.filter((election) =>
        election.electionTitle.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredElections(filtered);
    }
  }, [query]);

  return (
    <div id="elections">
      <SearchBar
        query={query}
        handleSearch={handleSearch}
        message={"Search election..."}
      />
      <ShowAllElection elections={filteredElections} />
    </div>
  );
};

export default Elections;
