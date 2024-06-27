import React from "react";
import ElectionCard from "../cards/ElectionCard";
import { elections, history } from "../../services/ContentList";
import cat404 from "../../assets/cat404.png";

const ShowAllHistory = () => {
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
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {history.map((history, index) => (
            <ElectionCard
              key={index}
              id={index}
              election={history}
              notes={"showAllElection"}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowAllHistory;
