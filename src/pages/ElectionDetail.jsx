import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowAllCandidates from "../components/details/ShowAllCandidates";
import { candidates } from "../services/ContentList";
import SearchBar from "../components/small/SearchBar";
import ElectionHeroSection from "../components/sections/ElectionHeroSection";
import { loadCandidates, loadElections } from "../services/Blockchain";

const ElectionDetail = () => {
  const { id } = useParams();
  const elections = JSON.parse(localStorage.getItem("elections"));

  useEffect(() => {
    loadElections();
  }, []);

  return (
    <div id="elections">
      <ElectionHeroSection election={elections[id]} />
      <ShowAllCandidates id={id} />
    </div>
  );
};

export default ElectionDetail;
