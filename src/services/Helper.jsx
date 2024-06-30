import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  createNewFeedbackScale: "scale-0",
  mustConnectWalletScale: "scale-0",
  candidateDetailScale: "scale-0",
  successfullyVoteScale: "scale-0",
  successfullyGiveFeedbackScale: "scale-0",
  successfullyCreateElectionScale: "scale-0",
  candidateId: 0,
  connectedAccount: "",
  elections: [],
  candidates: [],
  feedbacks: [],
});

const truncate = (text, startChar, endChar, maxLength) => {
  if (text.length > maxLength) {
    let start = text.substring(0, startChar);
    let end = text.substring(text.length - endChar, text.length);
    while (start.length + end.length < maxLength) {
      start = start + ".";
    }
    return start + end;
  }
  return text;
};

const getRandomId = (min, max) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const remainingTime = () => {};

export {
  truncate,
  remainingTime,
  setGlobalState,
  useGlobalState,
  getGlobalState,
  getRandomId,
};
