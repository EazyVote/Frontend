import React from "react";
import ElectionCard from "../cards/ElectionCard";
import { elections } from "../../services/ContentList";

const ShowAllElection = () => {
  return (
    <div id="elections" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {elections.map((election, index) => (
          <ElectionCard key={index} id={index} election={election} />
        ))}
      </div>
    </div>
  );
};

export default ShowAllElection;
