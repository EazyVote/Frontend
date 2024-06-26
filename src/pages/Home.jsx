import React from "react";
import TopNavigationBar from "../components/fixed/NavigationBar";
import HeroSection from "../components/sections/HeroSection";
import DescriptionSection from "../components/sections/DescriptionSection";
import Feedbacks from "../components/details/ShowFeedbacks";
import ShowRecommendedElection from "../components/details/ShowRecommendedElection";
import Footer from "../components/fixed/Footer";
import CreateNewFeedback from "../components/popup/CreateNewFeedback";
import MustConnectWallet from "../components/popup/MustConnectWallet";
import CreateNewElection from "../components/popup/CreateNewElection";

const Home = () => {
  return (
    <div className="w-full overflow-hidden bg-primary">
      <div className="sm:px-12 px-6">
        <TopNavigationBar />
        <HeroSection />
        <DescriptionSection />
        <ShowRecommendedElection />
        <Feedbacks />
        <Footer />
      </div>
      {/* <CreateNewElection /> */}
      <CreateNewFeedback />
      <MustConnectWallet />
    </div>
  );
};

export default Home;
