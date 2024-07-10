import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { truncate, unixTimestampConverter } from "../../services/Helper";
import {
  getNewEvent,
  getTotalVoterInOneElection,
} from "../../services/Blockchain";

const ElectionCard = ({ id, election, notes, variants }) => {
  const [totalElectionVoter, setTotalElectionVoter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTotalVoterInOneElection(id);
        setTotalElectionVoter(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [totalElectionVoter, election]);

  if (!election) {
    return <div>Loading..</div>;
  }

  return (
    <div>
      <motion.div
        variants={variants}
        className={`font-poppins rounded-lg hover:scale-105 duration-500 shadow-lg election-gradient mr-4 mb-4 mt-4 lg:w-78 lg:h-70`}
      >
        <Link to={"/elections/" + election.id}>
          <img
            src={election.electionPicture}
            alt={election.electionTitle}
            className="rounded-xl h-48 w-full object-cover md:h-48 lg:h-48"
          />
          <div className="p-4">
            <h5 className="text-white font-semibold line-clamp-1">
              {election.electionTitle}
            </h5>
            <div>
              <div className="flex justify-between items-center">
                <img
                  src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${election.electionCreator}`}
                  className="w-6 h-6 bg-center md:w-16 md:-12 lg:w-12 lg:h-12"
                  alt="avatar"
                />
                <small className="text-dimWhite">
                  {" "}
                  {truncate(election.electionCreator, 4, 4, 11)}
                </small>
              </div>
              <small className="text-white my-2 block">
                Start : {unixTimestampConverter(election.electionStart)}
              </small>
              <small className="text-white mb-2 block">
                End : {unixTimestampConverter(election.electionEnd)}
              </small>
            </div>

            {notes == "showHistory" ? (
              <div></div>
            ) : (
              <div className="flex justify-between items-center flex-wrap mt-4 mb-2 text-gray-500 font-semibold">
                <small className="text-white">
                  {totalElectionVoter} voters have voted
                </small>
                <div>
                  <small
                    className={`${
                      election.electionStatus == 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {election.electionStatus == 0 ? "OPEN" : "CLOSED"}
                  </small>
                </div>
              </div>
            )}
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default ElectionCard;
