import React from "react";
import cat404 from "../../assets/cat404.png";
import HistoryCard from "../cards/HistoryCard";

const ShowAllHistory = ({ history }) => {
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
    <div id="elections" className="mb-16">
      <h1 className="text-white font-medium text-3xl mb-3"> All History </h1>
      {history.length === 0 ? (
        <div>
          <div className="flex justify-center items-center">
            <img src={cat404} className="h-60 w-60 my-10" />
          </div>
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-4xl text-white text-center">
              Don't have any history currently.
            </h1>
          </div>
        </div>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {history.map((history, index) => (
            <HistoryCard
              key={index}
              id={index}
              election={history}
              notes={"showAllElection"}
              variants={item}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ShowAllHistory;
