import React from "react";
import TopNavigationBar from "../components/fixed/NavigationBar";
import HeroSection from "../components/sections/HeroSection";
import DescriptionSection from "../components/sections/DescriptionSection";
import Feedbacks from "../components/details/ShowFeedbacks";
import ShowRecommendedElection from "../components/details/ShowRecommendedElection";
import Footer from "../components/fixed/Footer";

const Home = () => {
  return (
    <div className="w-full overflow-hidden bg-primary sm:px-12 px-6">
      <TopNavigationBar />
      <HeroSection />
      <DescriptionSection />
      <ShowRecommendedElection />
      <Feedbacks />
      <Footer />
    </div>
  );
};

export default Home;
