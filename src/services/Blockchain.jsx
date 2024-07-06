import contractAbi from "../abi/DeployedContract.json";
import { ethers } from "ethers";
import { setGlobalState } from "./Helper";

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
const network = import.meta.env.VITE_NETWORK;
const apiKey = import.meta.env.VITE_SEPOLIA_RPC;

// done
const getEthereumContractWithSigner = async () => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contractWithSigner = new ethers.Contract(
    contractAddress,
    contractAbi,
    signer
  );
  return contractWithSigner;
};

// done
const getEthereumContractWithoutSigner = async () => {
  const contractProvider = new ethers.AlchemyProvider(network, apiKey);
  const contractToLoadOnly = new ethers.Contract(
    contractAddress,
    contractAbi,
    contractProvider
  );
  return contractToLoadOnly;
};

// done
const connectWallet = async () => {
  try {
    if (!ethereum) {
      return alert("Please install Web3 wallet first!");
    }
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    if (!accounts) {
      return alert("No accounts connected! Please connect a wallet!");
    }
    localStorage.setItem("connectedAccount", accounts[0]);
  } catch (error) {
    console.log(error.message);
  }
};

const disconnectWallet = async () => {
  localStorage.removeItem("connectedAccount");
};

const createNewElection = async ({
  electionTitle,
  electionPicture,
  electionCreator,
  electionStart,
  electionEnd,
  electionDescription,
  candidatesName,
  candidatesPhoto,
  candidatesVision,
  candidatesMission,
}) => {
  try {
    const contract = await getEthereumContractWithSigner();
    await contract.createNewElection(
      electionTitle,
      electionPicture,
      electionCreator,
      electionStart,
      electionEnd,
      electionDescription,
      candidatesName,
      candidatesPhoto,
      candidatesVision,
      candidatesMission
    );
  } catch (error) {
    console.log(error.message);
  }
};

// done
const giveFeedback = async (user, textFeedback) => {
  try {
    const contract = await getEthereumContractWithSigner();
    await contract.giveFeedback(user, textFeedback);
  } catch (error) {
    console.log(error.message);
  }
};

const voteCandidate = async (voter, electionId, candidateId) => {
  try {
    const contract = await getEthereumContractWithoutSigner();
    await contract.voteCandidate(voter, electionId, candidateId);
  } catch (error) {
    console.log(error.message);
  }
};

const getTotalVoterInOneElection = async (electionId) => {
  try {
    const contract = await getEthereumContractWithoutSigner()
    const totalVoter = await contract.getTotalVoterInOneElection(electionId)
    return parseInt(totalVoter);
  }
  catch (error) {
    return console.log(error.message)
  }
}

// done
const loadElections = async () => {
  try {
    const contract = await getEthereumContractWithoutSigner();
    const elections = await contract.getElections();
    structuredElections(elections, "elections");
  } catch (error) {
    console.log(error.message);
  }
};

const loadRecommendedElections = async () => {};

// done
const loadFeedbacks = async () => {
  try {
    const contract = await getEthereumContractWithoutSigner();
    const feedbacks = await contract.getFeedbacks();
    structuredFeedbacks(feedbacks);
  } catch (error) {
    console.log(error.message);
  }
};

const loadHistory = async (user) => {
  try {
    const contract = await getEthereumContractWithoutSigner();
    const elections = await contract.getElections();
    const historyId = await contract.getHistoryId(user);
    const userHistory = elections.filter((history) =>
      historyId.includes(history.id)
    );
    structuredElections(userHistory, "history");
  } catch (error) {
    console.log(error.message);
  }
};

const loadCandidates = async (electionId) => {
  try {
    const contract = await getEthereumContractWithoutSigner();
    const candidates = await contract.getCandidates();
    const candidatesId = await contract.getCandidatesIdInOneElection(
      electionId
    );
    const filteredCandidates = candidates.filter((candidate) =>
      candidatesId.includes(candidate.id)
    );
    structuredCandidates(filteredCandidates);
  } catch (error) {
    console.log(error.message);
  }
};

const structuredElections = (elections, message) => {
  const electionList = elections.map((election) => ({
    id: parseInt(election.id),
    electionTitle: election.electionTitle,
    electionPicture: election.electionPicture,
    electionCreator: election.electionCreator.toString(),
    electionStart: new Date(parseInt(election.electionStart)).getTime(),
    electionEnd: new Date(parseInt(election.electionEnd)).getTime(),
    electionDescription: election.electionDescription,
    electionStatus: election.electionStatus.toString(),
  }));
  setGlobalState(message, electionList);
};

const structuredCandidates = (candidates) => {
  const candidateList = candidates.map((candidate) => ({
    id: parseInt(candidate.id),
    totalVote: parseInt(candidate.totalVote),
    candidateName: candidate.candidateName,
    candidatePhoto: candidate.candidatePhoto,
    candidateVision: candidate.candidateVision,
    candidateMission: candidate.candidateMission,
  }));
  setGlobalState("candidates", candidateList);
};

// done
const structuredFeedbacks = (feedbacks) => {
  const feedbackList = feedbacks.map((feedback) => ({
    id: parseInt(feedback.id),
    user: feedback.user.toString(),
    textFeedback: feedback.textFeedback,
  }));
  setGlobalState("feedbacks", feedbackList);
};

export {
  connectWallet,
  disconnectWallet,
  createNewElection,
  voteCandidate,
  giveFeedback,
  getTotalVoterInOneElection,
  loadCandidates,
  loadFeedbacks,
  loadHistory,
  loadElections,
  loadRecommendedElections,
};
