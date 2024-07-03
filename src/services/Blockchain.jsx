import contractAbi from "../abi/DeployedContract.json";
import { AlchemyProvider, ethers } from "ethers";
import { setGlobalState } from "./Helper";

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
const network = import.meta.env.VITE_NETWORK;
const apiKey = import.meta.env.VITE_SEPOLIA_RPC_URL;
const { ethereum } = window;
let cachedSigner = null;

const getCachedEthereumContractWithSigner = async () => {
  if (!cachedSigner) {
    cachedSigner = getEthereumContractWithSigner();
  }
  return cachedSigner;
};

const getEthereumContractWithSigner = async () => {
  const browserProvider = new ethers.BrowserProvider(ethereum);
  const signer = await browserProvider.getSigner();
  const contractWithSigner = new ethers.Contract(
    contractAddress,
    contractAbi,
    signer
  );
  return contractWithSigner;
};

const getEthereumContractWithoutSigner = async () => {
  const contractProvider = new AlchemyProvider(network, apiKey);
  const contractToLoadOnly = new ethers.Contract(
    contractAddress,
    contractAbi,
    contractProvider
  );
  return contractToLoadOnly;
};

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
}) => {
  try {
    const contract = await getCachedEthereumContractWithSigner();
    await contract.createNewElection(
      electionTitle,
      electionPicture,
      electionCreator,
      electionStart,
      electionEnd,
      electionDescription
    );
  } catch (error) {
    console.log(error.message);
  }
};

const addNewCandidate = async ({
  electionId,
  candidateName,
  candidatePhoto,
  candidateVision,
  candidateMission,
}) => {
  try {
    const contract = await getCachedEthereumContractWithSigner();
    await contract.addNewCandidate(
      electionId,
      candidateName,
      candidatePhoto,
      candidateVision,
      candidateMission
    );
  } catch (error) {
    console.log(error.message);
  }
};

const checkAndChangeElectionStatus = async () => {
  try {
    const contract = await getEthereumContractWithoutSigner();
    await contract.checkAndChangeElectionStatus();
  } catch (error) {
    console.log(error.message);
  }
};

const voteCandidate = async ({ voter, electionId, candidateId }) => {
  try {
    const contract = await getEthereumContractWithoutSigner();
    await contract.voteCandidate(voter, electionId, candidateId);
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
    const historyId = await contract.getHistory(user);
    const history = elections.filter((election) =>
      historyId.includes(history.id)
    );
    structuredElections(history, "history");
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
  checkAndChangeElectionStatus,
  disconnectWallet,
  createNewElection,
  addNewCandidate,
  voteCandidate,
  loadCandidates,
  loadFeedbacks,
  loadHistory,
  loadElections,
  loadRecommendedElections,
};
