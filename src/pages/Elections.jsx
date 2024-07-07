import React, { useEffect, useState } from "react";
import ShowAllElection from "../components/details/ShowAllElection";
import SearchBar from "../components/small/SearchBar";
import { getElections } from "../services/Blockchain";

const Elections = () => {
  const [query, setQuery] = useState("");
  const [filteredElections, setFilteredElections] = useState([]);
  const [electionsData, setElectionsData] = useState([]);
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
        setElectionsData(data || []);
      } catch (error) {
        console.log(error.message);
        setElectionsData([]);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (electionsData) {
      const filtered = electionsData.filter((election) =>
        election.electionTitle.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredElections(filtered);
    }
  }, [query, electionsData]);

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
