import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  createNewFeedbackScale: "scale-0",
  mustConnectWalletScale: "scale-0",
  candidateDetailScale: "scale-0",
  successfullyVoteScale: "scale-0",
  successfullyGiveFeedbackScale: "scale-0",
  successfullyCreateElectionScale: "scale-0",
  signOutConfirmationScale: "scale-0",
  errorPopup: "scale-0",
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

const unixTimestampConverter = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const today = new Date();
  const tomorrow = new Date();

  tomorrow.setDate(today.getDate() + 1);
  today.setHours(0, 0, 0, 0);
  tomorrow.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);

  let dayLabel;
  if (date.getTime() === today.getTime()) {
    dayLabel = "Today";
  } else if (date.getTime() == tomorrow.getTime()) {
    dayLabel = "Tomorrow";
  } else {
    dayLabel = `${day} ${month} ${year}`;
  }

  const formatedDateTime = `${dayLabel} at ${hours}:${minutes}`;
  return formatedDateTime;
};

export {
  truncate,
  setGlobalState,
  useGlobalState,
  getGlobalState,
  unixTimestampConverter,
};
