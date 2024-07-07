import React, { useEffect, useState } from "react";
import ShowAllElection from "../components/details/ShowAllElection";
import SearchBar from "../components/small/SearchBar";
import { getElections } from "../services/Blockchain";

const Elections = () => {
  const [query, setQuery] = useState("");
  const [filteredElections, setFilteredElections] = useState([]);
  const [electionsData, setElectionsData] = useState([]);
  const [loading, setLoading] = useState(true);

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
      setLoading(true);
      try {
        const data = await getElections();
        setElectionsData(data || []);
      } catch (error) {
        console.log(error.message);
        setElectionsData([]);
      } finally {
        setLoading(false);
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

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

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
