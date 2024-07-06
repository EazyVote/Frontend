import React, { useEffect, useState } from "react";
import { setGlobalState, useGlobalState } from "../../services/Helper";
import { FaTimes } from "react-icons/fa";
import { loadCandidates } from "../../services/Blockchain";

const CandidateDetail = () => {
  const [candidateDetailScale] = useGlobalState("candidateDetailScale");
  const [candidateId] = useGlobalState("candidateId");
  const candidates = JSON.parse(localStorage.getItem("candidates"));

  const onClose = () => {
    setGlobalState("candidateDetailScale", "scale-0");
  };

  useEffect(() => {
    console.log(candidates);
    console.log(candidateId);
    loadCandidates(candidateId);
    const intervalId = setInterval(() => {
      loadCandidates(candidateId);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`fixed font-poppins flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform duration-300 ${candidateDetailScale} popup-visible`}
    >
      <div className="bg-white shadow-xl shadow-black rounded-xl max-w-[60%] max-h-[95%] p-6 overflow-auto">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <p className="font-bold">Candidate Detail</p>
            <button
              type="button"
              className="border-0 bg-transparent focus:outline-none"
              onClick={onClose}
            >
              <FaTimes />
            </button>
          </div>
          <div className="flex flex-grow justify-center my-5 space-x-8 overflow-auto">
            <div className="flex flex-col items-center w-1/2">
              <p className="font-bold mb-4">Vision</p>
              <p className="text-sm">
                {candidates[candidateId].candidateVision}
              </p>
            </div>
            <div className="flex flex-col items-center w-1/2">
              <p className="font-bold mb-4">Mission</p>
              <p className="text-sm">
                {candidates[candidateId].candidateMission}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setGlobalState("candidateDetailScale", "scale-0");
              setGlobalState("successfullyVoteScale", "scale-100");
            }}
            type="submit"
            className="duration-200 hover:scale-105 inline-block px-6 py-2.5 mt-2 text-white font-medium rounded-full shadow-md bg-primary"
          >
            Vote {candidates[candidateId].candidateName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetail;
