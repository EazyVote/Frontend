import React, { useState } from "react";
import { setGlobalState, useGlobalState } from "../../services/Helper";
import { FaTimes } from "react-icons/fa";

const CandidateDetail = () => {
  const [candidateDetailScale] = useGlobalState("candidateDetailScale");
  const [candidateId] = useGlobalState("candidateId");

  const onClose = () => {
    setGlobalState("candidateDetailScale", "scale-0");
    reset();
  };

  return (
    <div
      className={`fixed font-poppins flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform duration-300 ${candidateDetailScale} popup-visible`}
    >
      <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <form className="flex flex-col" onSubmit={onClose} method="POST">
          <div className="flex justify-between items-center">
            <p className="font-bold">Give Feedback</p>
            <button
              type="button"
              className="border-0 bg-transparent focus:outline-none"
              onClick={onClose}
            >
              <FaTimes />
            </button>
          </div>
          <div className="flex justify-between items-center mt-5 rounded-xl bg-gray-200"></div>
          <button
            type="submit"
            className="inline-block px-6 py-2.5 mt-5 text-white font-medium rounded-full shadow-md bg-primary"
          >
            {" "}
            Vote Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default CandidateDetail;
