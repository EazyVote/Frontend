import React, { useEffect } from "react";
import { setGlobalState, useGlobalState } from "../../services/Helper";
import { FaTimes } from "react-icons/fa";
import verify from "../../assets/verify.mp4";
import { Confetti } from "../magicui/Confetti";

const SuccessfullyVote = () => {
  const [successfullyVoteScale] = useGlobalState("successfullyVoteScale");

  const onClose = () => {
    setGlobalState("successfullyVoteScale", "scale-0");
  };

  useEffect(() => {
    if (successfullyVoteScale == "scale-100") {
        Confetti()
    }
  }, [successfullyVoteScale])

  return (
    <div
      className={`fixed font-poppins flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform duration-300 ${successfullyVoteScale} popup-visible`}
    >
      <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <div className="flex justify-between items-center">
          <p></p>
          <button
            type="button"
            className="border-0 bg-transparent focus:outline-none"
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </div>
        <div className="flex justify-center items-center mt-5">
          <div className="rounded-full overflow-hidden w-48 h-48">
            <video src={verify} autoPlay loop muted></video>
          </div>
        </div>
        <div className="font-bold text-2xl flex justify-center items-center">
          <h1>Congratulation!</h1>
        </div>
        <div className="font-semibold text-lg flex justify-center items-center">
          <h1>Your vote has been successfully recorded</h1>
        </div>
        <div className="mt-4 flex justify-center items-center">
          <button
            onClick={onClose}
            type="button"
            className="duration-200 hover:scale-105 w-full font-bold shadow-sm rounded-full py-4 bg-primary text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
          >
            <span className="text-white">Close Popup</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessfullyVote;
