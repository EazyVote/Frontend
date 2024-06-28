import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import ShowAllCandidates from '../components/details/ShowAllCandidates';
import { candidates } from '../services/ContentList';
import SearchBar from '../components/small/SearchBar';

const Vote = () => {
  const { id } = useParams();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const filteredCandidates = candidates.filter((candidate) =>
    candidate.candidateName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div id="elections">
      <SearchBar query={query} handleSearch={handleSearch} />
      <ShowAllCandidates candidates={filteredCandidates} />
    </div>
  );
}

export default Vote