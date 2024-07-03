import React, { useState } from "react";
import AddCandidateForm from "../components/mini-form/AddCandidateForm";
import ElectionForm from "../components/mini-form/ElectionForm";
import { Link } from "react-router-dom";
import { setGlobalState, useGlobalState } from "../services/Helper";
import { addNewCandidate, createNewElection } from "../services/Blockchain";

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

  const handleSubmit = async (e) => {
    action(e);
    reset();
  };

  const action = async (e) => {
    const connectedAccount = localStorage.getItem("connectedAccount");

    e.preventDefault();

    if (
      !electionData.electionPicture ||
      !electionData.electionTitle ||
      !electionData.electionStart ||
      !electionData.electionEnd ||
      !electionData.electionDescription ||
      electionData.electionTotalCandidates == 0
    )
      return;

    const electionParam = {
      electionTitle: electionData.electionTitle,
      electionPicture: electionData.electionPicture,
      electionCreator: connectedAccount,
      electionStart: electionData.electionStart,
      electionEnd: electionData.electionEnd,
      electionDescription: electionData.electionDescription,
    };
    console.log(electionParam);

    const validCandidate = true;
    candidates.forEach((candidate, index) => {
      if (
        !candidate.name ||
        !candidate.photo ||
        !candidate.vision ||
        !candidate.mission
      ) {
        validCandidate = false;
      }
    });

    if (validCandidate) {
      await createNewElection(electionParam);
      const elections = useGlobalState("elections");
      const electionId = elections.length - 1;

      for (const candidate of candidates) {
        const candidateParam = {
          electionId: electionId,
          candidateName: candidate.name,
          candidatePhoto: candidate.photo,
          candidateVision: candidate.vision,
          candidateMission: candidate.mission,
        };
        await addNewCandidate(candidateParam);
      }
    }
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
          onChange={() => {
            handleSubmit
          }}
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
