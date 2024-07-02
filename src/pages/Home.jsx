import React from "react";
import DescriptionSection from "../components/sections/DescriptionSection";
import Feedbacks from "../components/details/ShowFeedbacks";
import ShowRecommendedElection from "../components/details/ShowRecommendedElection";
import { dummyFeedbacks, elections } from "../services/ContentList";
import HomeHeroSection from "../components/sections/HomeHeroSection";
import { loadElections, loadFeedbacks, loadRecommendedElections } from "../services/Blockchain";

const Home = () => {
  return (
    <>
      <HomeHeroSection />
      <DescriptionSection />
      {elections.length == 0 ? <div></div> : <ShowRecommendedElection />}
      {dummyFeedbacks.length == 0 ? <div></div> : <Feedbacks />}
    </>
  );
};

export default Home;
