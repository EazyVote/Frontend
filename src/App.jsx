import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { Route, Router, Routes } from "react-router-dom";
import History from "./pages/History";
import Elections from "./pages/Elections";
import NavigationBar from "./components/fixed/NavigationBar";
import Footer from "./components/fixed/Footer";
import CreateNewFeedback from "./components/popup/CreateNewFeedback";
import MustConnectWallet from "./components/popup/MustConnectWallet";
import ElectionDetail from "./pages/ElectionDetail";
import CandidateDetail from "./components/popup/CandidateDetail";
import SuccessfullyVote from "./components/popup/SuccessfullyVote";
import CreateNewElection from "./pages/CreateNewElection";
import SuccessfullyCreateElection from "./components/popup/SuccessfullyCreateElection";
import SuccessfullyGiveFeedback from "./components/popup/SuccessfullyGiveFeedback";
import SignOutConfirmation from "./components/popup/SignOutConfirmation";
import { NavProvider } from "./context/Context";
import {
  checkAndChangeElectionStatus,
  loadElections,
  loadFeedbacks,
  loadHistory,
  loadRecommendedElections,
} from "./services/Blockchain";
import { useGlobalState } from "./services/Helper";

const App = () => {
  const connectedAccount = localStorage.getItem("connectedAccount")
  const elections = useGlobalState("elections");
  const recommended = useGlobalState("recommended");
  const history = useGlobalState("history")
  const [feedbacks, setFeedbacks] = useState([]);
  // useEffect(() => {
  //   setInterval(() => {
  //     checkAndChangeElectionStatus();
  //   }, 1000);
  // }, []);
  useEffect(() => {
    const feedbacks = useGlobalState("feedbacks");
    if (elections) {
      loadElections();
    }
    if (recommended) {
      loadRecommendedElections();
    }
    if (feedbacks) {
      setFeedbacks(feedbacks)
      loadFeedbacks();
    }
    if (history && connectedAccount) {
      loadHistory(connectedAccount);
    }
  }, []);

  return (
    <NavProvider>
      <div className="w-full font-poppins overflow-hidden bg-primary sm:px-12 px-6">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} recommended={recommended} feedbacks={feedbacks}/>
          <Route path="/elections" element={<Elections />} elections={elections}/>
          <Route path="/elections/:id" element={<ElectionDetail />} />
          <Route path="/history" element={<History />} history={history} />
          <Route path="/create_election" element={<CreateNewElection />} />
        </Routes>
        <Footer />

        <CreateNewFeedback />
        <MustConnectWallet />
        <CandidateDetail />
        <SuccessfullyVote />
        <SuccessfullyCreateElection />
        <SuccessfullyGiveFeedback />
        <SignOutConfirmation />
      </div>
    </NavProvider>
  );
};

export default App;
