import React, { useEffect, useState } from "react";
import ShowAllHistory from "../components/details/ShowAllHistory";
import SearchBar from "../components/small/SearchBar";
import { useGlobalState } from "../services/Helper";
import { loadHistory } from "../services/Blockchain";

const History = () => {
  const [query, setQuery] = useState("");
  const [history] = useGlobalState("history");
  const [filteredHistory, setFilteredHistory] = useState([]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const connectedAccount = localStorage.getItem("connectedAccount")
    if (connectedAccount) {
      loadHistory(connectedAccount)
      const intervalId = setInterval(() => {
        loadHistory(connectedAccount);
      }, 10000);
      return () => clearInterval(intervalId);
    }
  }, [])
  
  useEffect(() => {
    if (history) {
      const filtered = history.filter((history) =>
        history.electionTitle.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredHistory(filtered);
    }
  }, [query]);

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
