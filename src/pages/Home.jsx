import React from "react";
import NavigationBar from "../components/fixed/NavigationBar";
import HeroSection from "../components/sections/HeroSection";
import DescriptionSection from "../components/sections/DescriptionSection";
import Feedbacks from "../components/details/ShowFeedbacks";
import ShowRecommendedElection from "../components/details/ShowRecommendedElection";
import Footer from "../components/fixed/Footer";
import CreateNewFeedback from "../components/popup/CreateNewFeedback";
import MustConnectWallet from "../components/popup/MustConnectWallet";
import CreateNewElection from "./CreateNewElection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <DescriptionSection />
      <ShowRecommendedElection />
      <Feedbacks />
    </>
  );
};

export default Home;
