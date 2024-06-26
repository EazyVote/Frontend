import React from "react";
import Home from "./pages/Home";
import { Route, Router, Routes } from "react-router-dom";
import History from "./pages/History";
import Elections from "./pages/Elections";
import Vote from "./pages/Vote";
import NavigationBar from "./components/fixed/NavigationBar";
import Footer from "./components/fixed/Footer";
import CreateNewFeedback from "./components/popup/CreateNewFeedback";
import MustConnectWallet from "./components/popup/MustConnectWallet";

const App = () => {
  return (
    <div className="w-full overflow-hidden bg-primary sm:px-12 px-6">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/elections" element={<Elections />} />
        <Route path="/elections/:id" element={<Vote />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <Footer />
      {/* <CreateNewElection /> */}
      <CreateNewFeedback />
      <MustConnectWallet />
    </div>
  );
};

export default App;
