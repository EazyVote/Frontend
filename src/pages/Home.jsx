import React, { useEffect } from "react";
import DescriptionSection from "../components/sections/DescriptionSection";
import ShowRecommendedElection from "../components/details/ShowRecommendedElection";
import { elections } from "../services/ContentList";
import HomeHeroSection from "../components/sections/HomeHeroSection";
import { useGlobalState } from "../services/Helper";
import ShowFeedbacks from "../components/details/ShowFeedbacks";

const Home = ({ recommended, feedbacks }) => {
  return (
    <>
      <HomeHeroSection />
      <DescriptionSection />
      {elections.length == 0 ? (
        <div></div>
      ) : (
        <ShowRecommendedElection recommended={recommended} />
      )}
      <ShowFeedbacks feedbacks={feedbacks} />
    </>
  );
};

export default Home;
