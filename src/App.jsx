import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
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
import ErrorPopup from "./components/popup/ErrorPopup";
import { connectWallet } from "./services/Blockchain";
import { setGlobalState } from "./services/Helper";

const App = () => {
  const [connectedAccount, setConnectedAccount] = useState(sessionStorage.getItem("connectedAccount") || "");

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedAccount = sessionStorage.getItem("connectedAccount");
      if (updatedAccount !== connectedAccount) {
        setConnectedAccount(updatedAccount || "");
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [connectedAccount]);

  const handleClick = async () => {
    await connectWallet();
    setGlobalState("mustConnectWalletScale", "scale-0");
  };

  return (
    <NavProvider>
      <div className="w-full font-poppins overflow-hidden bg-primary sm:px-12 px-6">
        <NavigationBar handleClick={handleClick} connectedAccount={connectedAccount}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/elections" element={<Elections />} />
          <Route path="/elections/:id" element={<ElectionDetail />} />
          <Route path="/history" element={<History />} />
          <Route path="/create_election" element={<CreateNewElection />} />
        </Routes>
        <Footer />

        <CreateNewFeedback />
        <MustConnectWallet />
        <CandidateDetail />
        <SuccessfullyVote />
        <SuccessfullyCreateElection />
        <SuccessfullyGiveFeedback />
        <ErrorPopup />
        <SignOutConfirmation />
      </div>
    </NavProvider>
  );
};

export default App;