import React from "react";
import { motion } from "framer-motion";
import { setGlobalState } from "../../services/Helper";

const CandidateCard = ({ candidate, variants }) => {

  const handleClick = () => {
    sessionStorage.setItem("candidateId", candidate.id);
    setGlobalState("candidateDetailScale", "scale-100");
  };

  return (
    <div>
      <motion.div
        variants={variants}
        className={`font-poppins rounded-lg hover:scale-105 duration-500 shadow-lg election-gradient mr-4 mb-4 mt-4 lg:w-80 lg:78`}
      >
        <img
          src={candidate.candidatePhoto}
          alt={candidate.candidateName}
          className="rounded-xl h-60 w-full object-cover"
        />
        <div className="p-4 flex flex-col items-center justify-center">
          <h5 className="text-white text-xl text-center font-semibold line-clamp-1">
            {candidate.candidateName}
          </h5>
          <button
            onClick={handleClick}
            className="my-3 text-white font-normal rounded-lg btn-blue-gradient-2 rounded-lg"
          >
            <small>Show Candidate Detail</small>
          </button>

          <div className="flex justify-between items-center flex-wrap text-sm font-semibold w-full">
            <h1 className="text-white text-center w-full">
              {candidate.totalVote <= 1
                ? `${candidate.totalVote} vote`
                : `${candidate.totalVote} votes`}
            </h1>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default CandidateCard;
