import React, { useEffect, useState } from "react";
import ShowAllHistory from "../components/details/ShowAllHistory";
import SearchBar from "../components/small/SearchBar";
import { useGlobalState } from "../services/Helper";
import { loadHistory } from "../services/Blockchain";

const History = () => {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useGlobalState("history");
  const [filteredHistory, setFilteredHistory] = useState([]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const connectedAccount = localStorage.getItem("connectedAccount")
    if (connectedAccount) {
      loadHistory(connectedAccount)
    }
  }, [history, setHistory])
  
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
