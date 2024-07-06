import React, { useEffect, useState } from "react";
import ShowAllElection from "../components/details/ShowAllElection";
import SearchBar from "../components/small/SearchBar";
import { loadElections } from "../services/Blockchain";

const Elections = () => {
  const [query, setQuery] = useState("");
  const [filteredElections, setFilteredElections] = useState([]);
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    loadElections();
    const intervalId = setInterval(() => {
      loadElections();
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const storedElections = JSON.parse(localStorage.getItem("elections"));
    if (storedElections) {
      const filtered = storedElections.filter((election) =>
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
