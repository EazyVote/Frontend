import React, { useEffect, useState } from "react";
import ShowAllElection from "../components/details/ShowAllElection";
import SearchBar from "../components/small/SearchBar";
import { getElections, getNewEvent } from "../services/Blockchain";

const Elections = () => {
  const [query, setQuery] = useState("");
  const [filteredElections, setFilteredElections] = useState([]);
  const [electionsData, setElectionsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getElections();
        setElectionsData(data);
      } catch (error) {
        console.log(error.message);
        setElectionsData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [getNewEvent, electionsData]);

  useEffect(() => {
    if (electionsData) {
      const filtered = electionsData.filter((election) =>
        election.electionTitle.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredElections(filtered);
    }
  }, [query, electionsData]);

  if (!filteredElections) {
    return <div>Loading...</div>;
  }

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
