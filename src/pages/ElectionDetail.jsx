import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import ShowAllCandidates from '../components/details/ShowAllCandidates';
import { candidates, elections } from '../services/ContentList';
import SearchBar from '../components/small/SearchBar';
import ElectionHeroSection from '../components/sections/ElectionHeroSection';

const ElectionDetail = () => {
  const { id } = useParams();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const filteredCandidates = candidates.filter((candidate) =>
    candidate.candidateName.toLowerCase().includes(query.toLowerCase())
  );

  const election = elections[id]

  return (
    <div id="elections">
      <ElectionHeroSection election={election}/>
      <SearchBar query={query} handleSearch={handleSearch} message={"Search candidate..."} />
      <ShowAllCandidates candidates={filteredCandidates} />
    </div>
  );
}

export default ElectionDetail