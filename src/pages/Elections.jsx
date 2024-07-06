import React, { useEffect, useState } from "react";
import ShowAllElection from "../components/details/ShowAllElection";
import SearchBar from "../components/small/SearchBar";
import { getElections } from "../services/Blockchain";

const Elections = () => {
  const [query, setQuery] = useState("");
  const [filteredElections, setFilteredElections] = useState([]);
  const [electionData, setElectionData] = useState([]);
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  // useEffect(() => {
  //   loadElections();
  //   const intervalId = setInterval(() => {
  //     loadElections();
  //   }, 1000);
  //   return () => clearInterval(intervalId);
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getElections();
        setElectionData(data || []);
      } catch (error) {
        console.log(error.message);
        setElectionData([]);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (electionData) {
      const filtered = electionData.filter((election) =>
        election.electionTitle.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredElections(filtered);
    }
  }, [query, electionData]);

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
