import React, { useState } from "react";
import AddElectionDetail from "./AddElectionDetail";
import AddCandidateDetail from "./AddCandidateDetail";
import Review from "./Review";
import { Provider } from "./CreateNewElection";
import { Steps } from "antd";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";

const electionDetail = {
  electionTitle: "",
  electionPicture: "",
  electionCreator: "",
  electionStart: "",
  eletionEnd: "",
  electionDescription: "",
};

const candidateDetail = {
  candidateName: "",
  candidatePhoto: "",
  candidateVision: "",
  candidateMission: "",
};

const candidateDetailArray = [];

const steps = ["Election Detail", "Candidates Detail", "Complete"];

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <AddElectionDetail />;
    case 1:
      return <AddCandidateDetail />;
    case 2:
      return <Review />;
    default:
      null;
  }
};

const CreateNewElection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [addElectionDetail, setAddElectionDetail] = useState(electionDetail);
  const [addCandidateDetail, setAddCandidateDetail] =
    useState(candidateDetailArray);

  const next = () => {
    if (currentStep === 2) {
      setCurrentStep(0);
      setAddElectionDetail(electionDetail);
      setAddCandidateDetail(candidateDetailArray);
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      <div className="container horizontal mt-5">
        <Stepper 
         steps={steps}
         currentStep={currentStep}
        />
      </div>
      <StepperControl />
    </div>
  );
};

export default CreateNewElection;
