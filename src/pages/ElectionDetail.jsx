import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowAllCandidates from "../components/details/ShowAllCandidates";
import ElectionHeroSection from "../components/sections/ElectionHeroSection";
import { getElections } from "../services/Blockchain";

const ElectionDetail = () => {
  const { id } = useParams();
  const [electionData, setElectionData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getElections();
        const indexedData = data.find(
          (election) => election.id === parseInt(id)
        );
        console.log(indexedData);
        sessionStorage.setItem("electionId", id);
        setElectionData(indexedData || {});
      } catch (error) {
        console.log(error.message);
        setElectionData({});
      }
      console.log(electionData);
    };
    fetchData();
  }, [id]);

  if (!electionData) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div id="elections">
      <ElectionHeroSection election={electionData} />
      <ShowAllCandidates id={id} />
    </div>
  );
};

export default ElectionDetail;
