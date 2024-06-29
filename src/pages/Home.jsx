import React from "react";
import NavigationBar from "../components/fixed/NavigationBar";
import DescriptionSection from "../components/sections/DescriptionSection";
import Feedbacks from "../components/details/ShowFeedbacks";
import ShowRecommendedElection from "../components/details/ShowRecommendedElection";
import Footer from "../components/fixed/Footer";
import CreateNewFeedback from "../components/popup/CreateNewFeedback";
import MustConnectWallet from "../components/popup/MustConnectWallet";
import CreateNewElection from "./CreateNewElection";
import { dummyFeedbacks, elections } from "../services/ContentList";
import HomeHeroSection from "../components/sections/HomeHeroSection";

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
