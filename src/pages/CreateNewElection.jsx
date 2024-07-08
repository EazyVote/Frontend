import React, { useState } from "react";
import AddCandidateForm from "../components/mini-form/AddCandidateForm";
import ElectionForm from "../components/mini-form/ElectionForm";
import { setGlobalState } from "../services/Helper";
import { createNewElection } from "../services/Blockchain";
import { useNavigate } from "react-router-dom";

const CreateNewElection = () => {
  const navigate = useNavigate();
  const [electionData, setElectionData] = useState({
    electionPicture: "",
    electionTitle: "",
    electionStart: "",
    electionEnd: "",
    electionDescription: "",
    electionTotalCandidates: "",
  });

  const handleElectionChange = (field, value) => {
    setElectionData({ ...electionData, [field]: value });
  };

  const [candidates, setCandidates] = useState([]);

  const handleTotalCandidatesChange = (total) => {
    console.log(total);
    setElectionData({
      ...electionData,
      electionTotalCandidates: parseInt(total),
    });

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

  const handleSubmit = async (e) => {
    const connectedAccount = localStorage.getItem("connectedAccount");

    e.preventDefault();

    if (
      !electionData.electionPicture ||
      !electionData.electionTitle ||
      !electionData.electionStart ||
      !electionData.electionEnd ||
      !electionData.electionDescription ||
      electionData.electionTotalCandidates <= 1
    ) {
      return setGlobalState("errorPopup", "scale-100");
    }

    let isValid = true;
    for (let i = 0; i < candidates.length; i++) {
      const candidate = candidates[i];
      if (
        !candidate.name ||
        !candidate.photo ||
        !candidate.vision ||
        !candidate.mission
      ) {
        isValid = false;
      }
    }
    if (!isValid) {
      return setGlobalState("errorPopup", "scale-100");
    }

    const electionParam = {
      electionTitle: electionData.electionTitle,
      electionPicture: electionData.electionPicture,
      electionCreator: connectedAccount,
      electionStart: Math.floor(new Date(electionData.electionStart).getTime() / 1000),
      electionEnd: Math.floor(new Date(electionData.electionEnd).getTime() / 1000),
      electionDescription: electionData.electionDescription,
      candidatesName: candidates.map((candidate) => candidate.name),
      candidatesPhoto: candidates.map((candidate) => candidate.photo),
      candidatesVision: candidates.map((candidate) => candidate.vision),
      candidatesMission: candidates.map((candidate) => candidate.mission),
    };
    console.log(electionParam);
    await createNewElection(electionParam);
    reset();
    navigate("/");
  };

  const reset = () => {
    setElectionData({
      electionPicture: "",
      electionTitle: "",
      electionStart: "",
      electionEnd: "",
      electionDescription: "",
      electionTotalCandidates: 0,
    });
    setCandidates([]);
    setGlobalState("successfullyCreateElectionScale", "scale-100");
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
          onClick={handleSubmit}
          className={`${
            electionData.electionTotalCandidates == 0
              ? "opacity-0 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          } hover:scale-105 duration-200 flex justify-end mt-6 text-white font-poppins font-normal rounded-lg btn-blue-gradient-2 rounded-lg`}
        >
          Create Election
        </button>
      </div>
    </div>
  );
};

export default CreateNewElection;
