import React, { useEffect, useState } from "react";
import DescriptionSection from "../components/sections/DescriptionSection";
import ShowRecommendedElection from "../components/details/ShowRecommendedElection";
import HomeHeroSection from "../components/sections/HomeHeroSection";
import ShowFeedbacks from "../components/details/ShowFeedbacks";
import { getRecommendedElections } from "../services/Blockchain";

const Home = () => {
  const [recommendedElectionsData, setRecommendedElectionsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRecommendedElections();
        setRecommendedElectionsData(data);
      } catch (error) {
        console.log(error.message);
        setRecommendedElectionsData([]);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <HomeHeroSection />
      <DescriptionSection />
      {recommendedElectionsData.length == 0 ? (
        <div></div>
      ) : (
        <ShowRecommendedElection elections={recommendedElectionsData} />
      )}
      <ShowFeedbacks />
    </>
  );
};

export default Home;
