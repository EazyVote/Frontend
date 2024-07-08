import React from "react";
import { motion } from "framer-motion";
import { truncate, unixTimestampConverter } from "../../services/Helper";

const HistoryCard = ({ id, history, notes, variants }) => {
  
  return (
    <div>
      <motion.div
        variants={variants}
        className={`font-poppins rounded-lg hover:scale-105 duration-500 shadow-lg election-gradient mr-4 mb-4 mt-4 lg:w-78 lg:h-70`}
      >
          <img
            src={history.electionPicture}
            alt={history.electionTitle}
            className="rounded-xl h-48 w-full object-cover md:h-48 lg:h-48"
          />
          <div className="p-4">
            <h5 className="text-white font-semibold line-clamp-1">
              {history.electionTitle}
            </h5>
            <div>
              <div className="flex justify-between items-center">
                <img
                  src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${history.electionCreator}`}
                  className="w-6 h-6 bg-center md:w-16 md:-12 lg:w-12 lg:h-12"
                  alt="avatar"
                />
                <small className="text-dimWhite">
                  {" "}
                  {truncate(history.electionCreator, 4, 4, 11)}
                </small>
              </div>
              <small className="text-white my-2 block">
                Start : {unixTimestampConverter(history.electionStart)}
              </small>
              <small className="text-white mb-2 block">
                End : {unixTimestampConverter(history.electionEnd)}
              </small>
            </div>

            <div className="flex justify-between items-center flex-wrap mt-4 mb-2 text-gray-500 font-semibold">
              <small className="text-white">10 person has vote</small>
              <div>
                <small className="text-green-600">OPEN</small>
              </div>
            </div>
          </div>
      </motion.div>
    </div>
  );
};

export default HistoryCard;
