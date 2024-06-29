import React from "react";
import cat404 from "../../assets/cat404.png";
import { motion } from "framer-motion";
import CandidateCard from "../cards/CandidateCard";

const ShowAllCandidates = ({ candidates }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div id="candidates" className="mb-16">
      <h1 className="text-white text-center font-semibold text-3xl mb-4">
        {" "}
        All Candidates{" "}
      </h1>
      {candidates.length === 0 ? (
        <div>
          <div className="flex justify-center items-center">
            <img src={cat404} className="h-60 w-60 my-10" />
          </div>
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-4xl text-center text-white">
              Don't have any candidates currently.
            </h1>
          </div>
        </div>
      ) : (
        <div className="place-items-center grid">
            <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {candidates.map((candidate, index) => (
            <CandidateCard
              key={index}
              id={index}
              candidate={candidate}
              variants={item}
            />
          ))}
        </motion.div>
        </div>
        
      )}
    </div>
  );
};

export default ShowAllCandidates;
