import React, { useEffect, useState } from "react";
import ShowAllHistory from "../components/details/ShowAllHistory";
import SearchBar from "../components/small/SearchBar";

const History = ({ history }) => {
  const [query, setQuery] = useState("");
  const [filteredHistory, setFilteredHistory] = useState([]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  
  useEffect(() => {
    if (history) {
      const filtered = history.filter((history) =>
        history.electionTitle.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredHistory(filtered);
    }
  }, []);

  return (
    <div id="history">
      <SearchBar
        query={query}
        handleSearch={handleSearch}
        message={"Search history..."}
      />
      <ShowAllHistory history={filteredHistory} />
    </div>
  );
};

export default History;
