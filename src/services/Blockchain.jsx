import contractAbi from "../abi/DeployedContract.json";
import { AlchemyProvider, ethers } from "ethers";
import { setGlobalState } from "./Helper";

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
const network = import.meta.env.VITE_NETWORK;
const apiKey = import.meta.env.VITE_SEPOLIA_RPC_URL;

const { ethereum } = window;
const contractProvider = new AlchemyProvider(network, apiKey);
const contractToLoadOnly = new ethers.Contract(
  contractAddress,
  contractAbi,
  contractProvider
);

const browserProvider = new ethers.BrowserProvider(ethereum);
const signer = await browserProvider.getSigner();
const contractWithSigner = new ethers.Contract(
  contractAddress,
  contractAbi,
  signer
);

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
    const connectedAccount = accounts[0].toLowerCase();
    localStorage.setItem("connectedAccount", connectedAccount);
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
    await contractWithSigner.createNewElection(
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
    await contractWithSigner.addNewCandidate(
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

const voteCandidate = async ({ voter, electionId, candidateId }) => {
  try {
    await contractWithSigner.voteCandidate(voter, electionId, candidateId);
  } catch (error) {
    console.log(error.message);
  }
};

const getAllCandidates = async (electionId) => {
  try {
    const candidates = await contractToLoadOnly.getCandidates();
    const candidatesId = await contractToLoadOnly.getCandidatesIdInOneElection(
      electionId
    );
  } catch (error) {
    console.log(error.message);
  }
};

const getAllElections = async () => {
  try {
    const elections = await contractToLoadOnly.getElections();
    structuredElections(elections, "elections");
  } catch (error) {
    console.log(error.message);
  }
};

const getAllFeedbacks = async () => {
  try {
    const feedbacks = await contractToLoadOnly.getFeedbacks();
    structuredFeedbacks(feedbacks);
  } catch (error) {
    console.log(error.message);
  }
};

const getAllHistory = async (user) => {
  try {
    const historyId = await contractToLoadOnly.getHistory(user);
    // structuredElections(history, "history");
  } catch (error) {
    console.log(error.message);
  }
};

const structuredElections = async (elections, message) => {
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

const structuredCandidates = async (candidates) => {};

const structuredFeedbacks = async (feedbacks) => {
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
  addNewCandidate,
  voteCandidate,
  getAllCandidates,
  getAllFeedbacks,
  getAllHistory,
  getAllElections,
};
