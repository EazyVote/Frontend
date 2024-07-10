import React, { useEffect, useState } from "react";
import ShowAllHistory from "../components/details/ShowAllHistory";
import SearchBar from "../components/small/SearchBar";
import { useGlobalState } from "../services/Helper";
import { getHistory } from "../services/Blockchain";

const History = () => {
  const [query, setQuery] = useState("");
  const [historyData, setHistoryData] = useState([]);
  const [filteredHistory, setFilteredHistory] = useState([]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const connectedAccount = sessionStorage.getItem("connectedAccount");
        if (connectedAccount) {
          const data = await getHistory();
          setHistoryData(data);
        }
      } catch (error) {
        console.log(error.message);
        setHistoryData([]);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (historyData) {
      const filtered = historyData.filter((history) =>
        history.electionTitle.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredHistory(filtered);
    }
  }, [query, historyData]);

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
