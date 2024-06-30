import React, { useState } from "react";
import AddCandidateForm from "../components/mini-form/AddCandidateForm";
import ElectionForm from "../components/mini-form/ElectionForm";
import { Link } from "react-router-dom";
import { setGlobalState } from "../services/Helper";

const CreateNewElection = () => {
  const [electionData, setElectionData] = useState({
    electionPicture: "",
    electionTitle: "",
    electionStart: "",
    electionEnd: "",
    electionDescription: "",
    electionTotalCandidates: 0,
  });

  const handleElectionChange = (field, value) => {
    setElectionData({ ...electionData, [field]: value });
  };

  const [candidates, setCandidates] = useState([]);

  const handleTotalCandidatesChange = (total) => {
    setElectionData({ ...electionData, electionTotalCandidates: total });

    const newCandidates = [];
    for (let i = 0; i < total; i++) {
      newCandidates.push({
        name: "",
        photo: "",
        vision: "",
        mission: "",
      });
    }

    setCandidates(newCandidates);
  };

  const handleCandidateChange = (index, field, value) => {
    const newCandidate = [...candidates];
    newCandidate[index] = { ...newCandidate[index], [field]: value };
    setCandidates(newCandidate);
  };

  return (
    <div className="font-poppins shadow-xl rounded-2xl pb-2 mb-16">
      <div className="rounded-xl w-full overflow-y-auto">
        <div className="flex flex-col custom-text-placeholder">
          <ElectionForm
            electionData={electionData}
            onElectionChange={handleElectionChange}
            onTotalCandidatesChange={handleTotalCandidatesChange}
          />
          {candidates.map((candidate, index) => (
            <AddCandidateForm
              key={index}
              index={index}
              candidate={candidate}
              handleCandidateChange={handleCandidateChange}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <button 
        onChange={() => setGlobalState("successfullyCreateElectionScale", "scale-100")}
        className={`${electionData.electionTotalCandidates == 0 ? "opacity-0 cursor-not-allowed" : "opacity-100 cursor-pointer"} hover:scale-105 duration-200 flex justify-end mt-6 text-white font-poppins font-normal rounded-lg btn-blue-gradient-2 rounded-lg`}>
          Create Election
        </button>
      </div>
    </div>
  );
};

export default CreateNewElection;
