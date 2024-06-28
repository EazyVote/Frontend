import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CandidateCard = ({ id, candidate, notes, variants }) => {
  return (
    <div>
      <motion.div
        variants={variants}
        className={`font-poppins rounded-lg hover:scale-105 duration-500 shadow-lg election-gradient mr-4 mb-4 mt-4 lg:w-80 lg:78`}
      >
        {/* <Link to={"/elections/" + election.electionId}> */}
        <img
          src={candidate.candidatePhoto}
          alt={candidate.candidateName}
          className="rounded-xl h-60 w-full object-cover"
        />
        <div className="p-4 flex flex-col items-center justify-center">
          <h5 className="text-white text-xl text-center font-semibold line-clamp-1">
            {candidate.candidateName}
          </h5>
          <button className="hover:scale-105 duration-200 my-3 text-white font-normal rounded-lg btn-blue-gradient-2 rounded-lg">
            <small>Show Candidate Detail</small>
          </button>

          <div className="flex justify-between items-center flex-wrap  font-semibold w-full">
            <small className="text-white text-center w-full">
              {candidate.totalVote <= 1
                ? `${candidate.totalVote} vote`
                : `${candidate.totalVote} votes`}
            </small>
          </div>
        </div>

        {/* </Link> */}
      </motion.div>
    </div>
  );
};

export default CandidateCard;
